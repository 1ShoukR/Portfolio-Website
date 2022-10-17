const express = require('express');
const router = express.Router();
const {UserAccountInfo} = require("../../../Sequelize/models")


router.get("./testUrl", async (req, res) => {
    const userAccountInfoToGet = await UserAccountInfo.findAll()
    if (userAccountInfoToGet) {
        res.status(200)
        res.send("Account info")
    } else {
        res.status(400).send(error)
    }
})

module.exports = router;