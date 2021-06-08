const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("Express Server here..");
});

app.listen(3001, function() {
    console.log("This server is running no port 3001")
});