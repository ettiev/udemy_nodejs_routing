const path = require("path");

const express = require("express");

const router = express.Router();

router.get("/info", (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', "views", "info.html"));
});

module.exports = router;
