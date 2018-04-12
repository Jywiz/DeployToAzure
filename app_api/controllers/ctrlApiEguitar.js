//accessing database connection
const mongoose = require('mongoose');

//accessing acoustic guitars model
const eguitarModel = mongoose.model('eguitar');

const guitarslist = function (req, res) {

  eguitarModel.find({}, function(err, eguitars) {
    if (err) {
      res.status(404).json(err);
    }
    else {
      res.status(200).json(eguitars);
    }
  });

};

const addGuitar = function (req, res) {
  eguitarModel.create(req.body, function(err, newEguitar) {
    if (err) {
      res.status(400).json(err);
    }
    else {
      res.status(201).json(newEguitar);
    }
  })
};

module.exports = {
  guitarslist,
  addGuitar
};
