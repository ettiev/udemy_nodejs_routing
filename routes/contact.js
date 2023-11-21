const path = require("path");
const express = require("express");

const router = express.Router();

router.get("/contact", (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', "views", "contact.html"));
});

module.exports = router;
