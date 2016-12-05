var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var path = require("path");
var morgan = require("morgan");
var config = require("./config");
var expressJwt = require("express-jwt");

var port = process.env.PORT || 9000;

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "..", "public")));

mongoose.connect(config.database, function (err) {
    if (err) throw (err);
    console.log("Successfully connected to the database.");
});

app.use("/auth", require("./routes/auth-routes"));
app.use("/blog", require("./routes/blog-routes"));

app.use("/api", expressJwt({secret: config.secret}));
//app.use("/api/workouts", require("./routes/workout-routes"));
//app.use("/api/meals", require("./routes/meal-routes"));

app.listen(port, function () {
    console.log("Server is listening on port " + port);
});