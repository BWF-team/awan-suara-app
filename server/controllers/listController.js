let express = require('express')
let router = express.Router()
let List = require('../models/list-antrian')

let lists = {}


  lists.addList = function(req, res, next) {
    List.create({
      id : req.body.id,
      name : req.body.name,
      date_assign: req.body.date_assign
    }).then(function(){
      res.send("Create successfully")
    })
  }

  lists.getList = function(req, res) {
    List.find().then(function(listData) {
      res.send(listData)
    })
  }

  lists.getListById = function (req, res, next) {
    List.find({
      _id: req.params.id
    })
      .then(function (list) {
        res.send(list)
      })
  }

  //
  lists.updateList = function(req, res) {
    List.findById(req.params._id, function (err, list) {
        // Handle any possible database errors
        if (err) {
            res.status(500).send(err);
        } else {
            // Update each attribute with any possible attribute that may have been submitted in the body of the request
              // If that attribute isn't in the request body, default back to whatever it was before.
              list.id = req.body.id,
              list.name = req.body.name,
              list.date_assign = new Date(req.body.date_assign)
            // Save the updated document back to the database
            list.save(function (err, list) {
                if (err) {
                    res.status(500).send(err)
                }
                res.send("update successfully");
            });
        }
     });
  }
  //
  lists.deleteList = function(req, res) {
    List.findByIdAndRemove(req.params._id, function (err, listData) {
      // We'll create a simple object to send back with a message and the id of the document that was removed
      // You can really do this however you want, though.
      var response = {
          message: "successfully deleted",
          id : listData._id
      };
      res.send(response);
    });
  }

module.exports = lists
