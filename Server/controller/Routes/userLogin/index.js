const express = require('express');
const router = express.Router();
const { UserAccountInfo } = require('../../../Sequelize/models');


//logout route
router.get("/logout", (req, res) => {
res.status(200).send("you are on the logout route")
});

router.post("/logout_confirm", async (req, res) => {
    // req.session.user = null;
    // res.render("loginPage.html");
    // res.redirect("http://127.0.0.1:3005/basic_homepage");
    res.status(200).send('I have logged out');
})



// login route
router.get("/user_login", (req, res) => {
res.status(200).send("I have hit the user login page")
})

//create a user 
router.post("/create_account", (req, res) => {
    res.status(200).send("I have hit the create account button")
})


module.exports = router;