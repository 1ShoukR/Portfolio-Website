const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const multiparty = require('multiparty');
require('dotenv').config()

const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com', //replace with your email provider
	port: 587,
	auth: {
		user: process.env.EMAIL,
		pass: process.env.PASS,
	},
});

transporter.verify(function (error, success) {
	if (error) {
		console.log("this is error",error);
	} else {
		console.log('Server is ready to take our messages');
	}
});


router.post("/send_mail_confirm", async (req, res) => {
 try {
    console.log("This is frontend contact me message " , req.body)
    res.status(200).send(JSON.stringify("message received!"))
 } catch (error) {
    console.log(error)
 }
})



module.exports = router;