const jsonDB = require ('../model/jsonDatabase');
const userModel = jsonDB ('users');
const bcryptjs = require('bcryptjs');
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
       
    }
}



module.exports = userController;