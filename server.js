const express = require("express");
const path = require("path");

// create new express app and save it as "app"
const app = express();
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", express.static("views"));







app.get("/", function(req, res){
    res.sendFile(path.join(__dirname + "/views/index.html"));
});


// server configuration
const PORT = 8080;

// make the server listen to requests
app.listen(PORT, () => {
    console.log(`Being Servered on PORT : http://localhost:${PORT}/`);
});

module.exports = app;