const express = require('express');
const cors = require('cors');
const { config } = require('./condig');
const app = express();
const { mysqConn } = require("./database");
const PORT = parseInt(config.appPort);

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    mysqConn.query("SELECT * FROM people", (err, result) => {
        if (err) {
            res.status(500).json(err);
        }
        res.status(200).json(result)
    })
})

app.post("/", (req, res) => {
    const { person } = req.body;
    mysqConn.query("INSERT INTO people(name) values (?)", [person], (err, result) => {
        if (err) {
            res.status(500).json(err);
        }
        res.status(200).json(result)
    })
})

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}🙀`)
})
