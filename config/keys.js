// keys.js - Logic to return appropriate credentials
if (process.env.NODE_ENV === "production") {
	// We are in production - return prod keys
	module.exports = require("./prod");
} else {
	// Return dev keys
	module.exports = require("./dev");
}
