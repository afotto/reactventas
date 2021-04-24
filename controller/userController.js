let userController = {

    showLogin: (req, res) => {
            res.render('users/login')
        },

    showRegister: (req, res) => {
        res.render('users/register')
    }
}



module.exports = userController;