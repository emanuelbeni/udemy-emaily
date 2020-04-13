const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");
require("./models/User");
require("./services/passport");

// Connecting mongoose with mongoDB
mongoose.connect(keys.mongoURI, () => {
	console.log("Database connected");
});

// Initialize app
const app = express();

// Using middlewares
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log("Listening on port " + PORT);
});
