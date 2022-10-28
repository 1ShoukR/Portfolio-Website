const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const multiparty = require('multiparty');
require('dotenv').config()

let transport = nodemailer.createTransport({
	service: 'gmail',
	port: 587,
	secure: true,
	auth: {
		user: process.env.EMAIL,
		pass: process.env.PASS,
	},
});

transport.verify(function (error, success) {
	if (error) {
		console.log(error);
	} else {
		console.log('Server is ready to take our messages');
	}
});


router.post("/send_mail_confirm", async (req, res) => {
 try {
    console.log(req.body)
        let mail = {
            from: req.body.email,
            to: "rahminshoukoohi@gmail.com",
            subject: "Contact Me Form",
            text: req.body.message
        }
        console.log("This is mail variable",mail)
        transport.sendMail(mail, function(err, data) {
            if (err) {
                console.log('error happened', err)
            } else {
                console.log('email sent')
            }
        })
    res.status(200).send(JSON.stringify("message received!"))
 } catch (error) {
    console.log(error)
 }
})




module.exports = router;