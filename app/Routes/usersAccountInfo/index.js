const express = require('express');
const router = express.Router();
const { UserAccountInfo } = require("../../Sequelize/models")


router.get("/testUrl", async (req, res) => {
    console.log("I am hitting")
    const userAccountInfoToGet = await UserAccountInfo.findAll()
    if (userAccountInfoToGet) {
        console.log(userAccountInfoToGet);
        res.status(200)
        res.send(userAccountInfoToGet)
    } else {
        res.status(400).send(error)
    }
})

module.exports = router;