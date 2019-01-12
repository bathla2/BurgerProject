var express = require("express");

var router = express.Router();


var burger = require("../models/burger.js");


router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create(["name"], [req.body.name],function(result) {
    
    res.json({ id: result.insertId });
  });
});

router.put("/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update(
    
      req.body.eat
    ,
    condition,
    function(result) {
      if (result.changedRows === 0) {
        
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});


module.exports = router;
