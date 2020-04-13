const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

// Setting strategy
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: "/auth/google/callback",
			proxy: true,
		},
		(accessToken, refreshToken, profile, done) => {
			// Check if user exists in our DB
			User.findOne({ googleId: profile.id }).then((existingUser) => {
				if (!existingUser) {
					//User doesnt exist in our MongoDB
					new User({ googleId: profile.id }).save().then((user) => {
						done(null, user);
					});
				}
				//User exists in our DB, return user and end the auth process
				done(null, existingUser);
			});
		}
	)
);

// Serializing and deserializing user from cookie
// Serialize user 'encrypt' cookie from server
passport.serializeUser((user, done) => {
	//user.id here is id generated by mongoDB, not googleId
	done(null, user.id);
});

// Deserialize decrypt cookie sent to the server and identify
// the corresponding user
passport.deserializeUser((id, done) => {
	User.findById(id).then((user) => {
		done(null, user);
	});
});