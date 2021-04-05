var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
require('../DB/conn');
const User = require('../model/usersSchema');
/* GET home page. */

router.get('/', async function (req, res, next) {
  try {
    const data = await User.find();
    res.render('index', { title: 'Mongoapp', data: data });

  } catch (error) {
    res.send("error");
  }

});

router.post("/mayur", async (req, res) => {
  const mayur = new User({
    name: req.body.name,
    email: req.body.email,
    status: req.body.status
  });
  console.log(mayur);

  try {
    const user = await mayur.save();


  } catch (error) {
    res.status(422).send("failed to save data")

  }
});

module.exports = router;
