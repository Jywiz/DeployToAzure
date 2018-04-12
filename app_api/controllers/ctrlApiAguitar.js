//accessing database connection
const mongoose = require('mongoose');

//accessing acoustic guitars model
const aguitarModel = mongoose.model('aguitar');

const guitarslist = function (req, res) {

    aguitarModel.find({}, function(err, guitars) {
      if (err) {
        res.status(404).json(err);
      }
      else {
        res.status(200).json(guitars);
      }
    });
};

const addGuitar = function (req, res) {
  aguitarModel.create(req.body, function(err, newAguitar) {
    if (err) {
      res.status(400).json(err);
    }
    else {
      res.status(201).json(newAguitar);
    }
  })
};

module.exports = {
  guitarslist,
  addGuitar
};
