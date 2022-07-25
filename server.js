const path = require("path");
const express = require("express");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.post("/contact", (req, res) => {
    console.log("contact", req.body);
    const name = req.body.name;
    const message = req.body.message;
    res.json({
        name,
    });
});

app.listen(3000, () => console.log("I am all ears 🎧"));
