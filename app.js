const path = require("path")

const express = require("express");

const infoRoutes = require("./routes/info");
const contactRoutes = require("./routes/contact");
const homeRoutes = require("./routes/home");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(infoRoutes);
app.use(contactRoutes);
app.use(homeRoutes);

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "views", "error.html"));
});

app.listen(3000);