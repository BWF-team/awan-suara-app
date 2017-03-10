const express = require('express');
const router = express.Router();
const Auth = require('../controllers/authController');


router.get('/home',Auth.verify, function (req, res, next) {
    // Store.find({}, function (err, result) {
    //     if (err) res.status(500)
    //         .send(err);
    //     res.send(result)
    // })
    res.send
})











module.exports = router
