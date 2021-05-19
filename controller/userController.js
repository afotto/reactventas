const bcryptjs = require('bcryptjs');
const jsonDB = require ('../model/jsonDatabase');
const userModel = jsonDB ('users');

const {
	validationResult
} = require('express-validator');
//const { delete } = require('../routes/userRouter');


let userController = {

    login: (req, res) => {
            res.render('users/login')
        },
    loginProcess: (req, res) => {
        let userToLogin = userModel.findByField("email", req.body.email)
        if (userToLogin) {

            //let isPasswordOk = bcryptjs.compareSync(req.body.contraseña, userToLogin.contraseña)
            if (req.body.contraseña == userToLogin.contraseña) {
                
                req.session.userLogged = userToLogin
                //console.log(req.session);
                return res.send("puedes ingresar")
            }
            return res.render( "users/login", {
                errors: {
                    email: {
                        msg: "Las credenciales son inválidas"
                    }
                }
            })
        }


         return res.render( "users/login", {
            errors: {
                email: {
                    msg: "No esta registrado este email"
                }
            }
        })
    },        

    register: (req, res) => {
        res.render('users/register')
    },
    processRegister(req, res){
        let userInDB = userModel.findByField('email', req.body.email);

        if (userInDB) {
            console.log(userInDB);
			return res.render('users/register', {
				errors: {
					email: {
						msg: 'Este email ya está registrado'
					}
				},
				oldData: req.body
			});
		}

		let userToCreate = {
			...req.body,
			password: bcryptjs.hashSync(req.body.password, 10),
			avatar: req.file.filename
		}

		let userCreated = userModel.create(userToCreate);

		return res.redirect('/user/login');        
    }
}



module.exports = userController;