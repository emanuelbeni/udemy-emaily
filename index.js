const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
require("./models/User");
require("./models/Survey");
require("./services/passport");

// Connecting mongoose with mongoDB
mongoose.connect(keys.mongoURI, () => {
	console.log("Database connected");
});

// Initialize app
const app = express();

// Using middlewares
app.use(bodyParser.json());
app.use(
	cookieSession({
		name: "session",
		//Cookie last 30 days in milliSecond
		maxAge: 30 * 24 * 60 * 60 * 1000,
		//Secret key
		keys: [keys.cookieKey],
	})
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);

// Production route handling!
if (process.env.NODE_ENV === "production") {
	// Express will serve up production assets
	// Like our main.js or main.css file
	app.use(express.static("client/build"));

	// Express will serve up the index.html file
	// If it doesnt recognize the route
	const path = require("path");
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log("Listening on port " + PORT);
});
