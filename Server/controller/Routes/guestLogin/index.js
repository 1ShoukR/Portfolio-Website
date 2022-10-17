const express = require('express');
const router = express.Router();
const { UserAccountInfo } = require('../../../Sequelize/models');



router.post("/guest_login_confirm", async (req, res) => {
    console.log("I am hitting")
    const guestUser = await UserAccountInfo.findOne({
        where: {
        firstName: 'Guest',
        lastName: 'Guest',
        username: 'guest',
        password: 'guest',
        email: 'guest@guest.com',
        },
    });
    console.log("I am guest user",guestUser)
    if (guestUser) {
    req.session.user = guestUser;
    res.status(200);
    res.send(JSON.stringify(guestUser));
    } else {
    res.json({
        message: "Login Failed",
    });
    }
})

module.exports = router;