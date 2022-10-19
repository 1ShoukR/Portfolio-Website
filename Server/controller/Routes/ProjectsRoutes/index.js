const express = require('express');
const router = express.Router();
const {Projects} = require("../../../Sequelize/models")



router.get("/get_all_projects", async (req, res) => {
    console.log("I am hitting")
    const findProjects = await Projects.findAll()
    if (findProjects) {
        console.log("These are the projects", findProjects)
        res.status(200).send(findProjects)
    } else {
        res.status(400).send(error)
    }
})

module.exports = router;