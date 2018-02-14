const index = function(req, res) {
  res.render('index', { title: 'Guitars For Beginners' });
};
module.exports = {
  index
};
