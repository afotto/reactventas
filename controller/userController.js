const bcryptjs = require('bcryptjs');
const jsonDB = require ('../model/jsonDatabase');
const userModel = jsonDB ('users');


let userController = {

    login: (req, res) => {
            res.render('users/login')
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