`use strict`
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../models/user')
require('dotenv').config()


module.exports = function (passport) {

  passport.serializeUser(function(user, callback){
    callback(null, user)
  })

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user)
    })
  })

//------------------------Facebook Strategy----------------------------------------------
passport.use(new FacebookStrategy({
  clientID: process.env.facebookClientID,
  clientSecret: process.env.facebookClientSecret,
  callbackURL: process.env.facebookCallbackURL,
  profileFields: ['id', 'emails', 'name']
},
function (token, refreshToken, profile, done) {
  process.nextTick(function () {
    User.findOne({ 'facebook.id': profile.id, 'local.email': profile.emails[0].value }, function (err, user) {
      if (err) return done(err)
      if (user) { return done(null, user) } else {
        User.create({
          'facebook.id' : profile.id,
          'facebook.token' : token,
          'facebook.name' : profile.displayName,
          'facebook.email' : profile.emails[0].value
        }, function(err,data){
          if(err) throw err;
          return done(null, data)
        })
      }
    })
  })
}
))

}
