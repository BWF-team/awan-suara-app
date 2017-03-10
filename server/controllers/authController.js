var User = require('../models/user')
var jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = {

  loginFacebook: function(req, res, next) {
    console.log(res.req.user.facebook.email);
    var token = jwt.sign({ email: res.req.user.facebook.email }, process.env.SECRET, { expiresIn: '1d' });
    res.send({ token: token })
  },

  verify: function(req, res, next){
    if (req.headers.token == 'null') {
      res.json("you don't have access")
    }else{
      if (jwt.verify(req.headers.token, process.env.SECRET)) {
        next()
      }else {
        res.json("token was expried")
      }
    }
  }
}
