const jsonDB = require ('../model/jsonDatabase');
const userModel = jsonDB ('users');


let userController = {

    login: (req, res) => {
            res.render('users/login')
        },

    register: (req, res) => {
        res.render('users/register')
    }
}



module.exports = userController;