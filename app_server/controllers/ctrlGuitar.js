const guitarslist = function(req, res) {
  res.render('guitar', {
    guitars:
    [
        {model: 'Yamaha C40', price:'148€'},
        {model: 'Ibanez GA6CE-AM', price:'239€'},
        {model: 'Takamine EF341SC', price:'1 111€'},
        {model: 'Harley Benton D-120CE BK', price:'75€'},
        {model: 'Epiphone EJ-200CE BK', price:'429€'},
    ]});
};
module.exports = {
  guitarslist
};
