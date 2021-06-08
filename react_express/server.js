const express = require("express");
const app = express();

// Creating route for the app to use on server
app.use("/users/", require("./routes/userRoute"))

// Sending the response to /users in the local app localhost:3001
app.get("/", function(req, res) {
   res.send("Express Server is running here..");
});

app.listen(3001, function() {
    console.log("This server is running no port 3001")
});