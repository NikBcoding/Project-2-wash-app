var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var Client = require('../models/client');

passport.use(new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK
    },
    function(accessToken, refreshToken, profile, cb) {
    // a client has logged in with OAuth
    Client.findOne({googleId: profile.Id}, function(err, client){
        if (err) return cb(err);
        if(client) {
            return cb(null, client);
        } else {
            //we have a new client via OAuth!
            var newClient = new Client({
                name: profile.displayName,
                email: profile.emails[0].value,
                googleId: profile.id
            });
            newClient.save(function(err) {
                if (err) return cb(err);
                return cb(null, newClient);
            })
        }
    });
    }
));

passport.serializeUser(function(client,done) {
    done(null,client.id);
});

passport.deserializeUser(function(id,done) {
    Client.findById(id, function(err, client) {
        done(err,client);
    });
});