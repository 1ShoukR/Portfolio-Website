const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const emailValidator = require('email-validator');
const { UserAccountInfo } = require('../../Sequelize/models');


//logout route

router.post("/logout_confirm", async (req, res) => {
    req.session.user = null;
    res.status(200).send('I have logged out');
})





// delete account route

router.post("/delete_account", async (req, res) => {
        const deleteUser = await UserAccountInfo.findOne({
            where: {
                id: req.session.user.id
            }
        })
        if (deleteUser) {
            await deleteUser.destroy()
            res.status(200).send("User account deleted")
        } else {
            res.status(400).send("This user does not exist")
        }
})





// login route
router.post("/user_login_confirm", async (req, res) => {
    const {username, password } = req.body
    console.log("This is req.body", req.body)
    if (!username || !password) {
        res.status(400).send("Invalid Credentials")
    }
    try {
        const getUser = await UserAccountInfo.findOne({
            where: {
                username: req.body.username,
            }
        })
        console.log("this is getUser variable", getUser)
        const userWeFound = getUser.dataValues
        const validatePassword = await bcrypt.compare(password, userWeFound.password);
        console.log("This is validated Password", validatePassword)
        if (validatePassword) {
            console.log("User we found", userWeFound)
            req.session.user = userWeFound
            console.log('This is session', req.session);
            res.send(
                JSON.stringify({
                    username: getUser.username,
                    firstName: getUser.firstName,
                    lastName: getUser.lastName,
                    email: getUser.email,
                })
                )
                console.log("USER LOGGED IN")
            } else {
				res.status(400).send("That user does not exist")
		}
    } catch (error) {
        res.status(400).send(error)
    }
})





//create a user 


router.post("/create_account", async (req, res) => {
    const { firstName, lastName, email, username, password } = req.body
    try {
        if (!username) {
            return res.status(400).send("Please enter a username")
        } else if (!firstName) {
            return res.status(400).send("Please enter your first name")
        } else if (!lastName) {
            return res.status(400).send('Please enter your last name');
        } else if (!email) {
            return res.status(400).send('Please enter your email');
        } else if (!password) {
            return res.status(400).send('Please enter your password');
        } else if (emailValidator.validate(email)) {
            const salt = await bcrypt.genSalt(5)
            const hashedPassword = await bcrypt.hash(password, salt);
            const encryptedUser = {
                username: username,
                password: hashedPassword,
                firstName: firstName,
                lastName: lastName,
                email: email,
                createdAt: new Date(),
                updatedAt: new Date()
            }
            console.log("This is encryptedUser",encryptedUser)
            const createUser = await UserAccountInfo.create(encryptedUser);
            res.status(200).send(JSON.stringify("Account Created!"))
        }
    } catch (error) {
        res.status(400).send(JSON.stringify({message:'There was an error creating your account'}));
        console.log(error)
    }
})






// guest login

router.post ("/guest_login", async (req, res) => {
    res.status(200).send("Hit the guest login route")
})

module.exports = router;