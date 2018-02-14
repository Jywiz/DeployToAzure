const guitarslist = function(req, res) {
  res.render('eguitar', {
    guitars:
    [
        {model: 'Fender Jimi Hendrix Strat', price:'799€'},
        {model: 'Fender Squier Bullet Strat', price:'125€'},
        {model: 'Gibson Les Paul Pete Townshend Deluxe', price:'2 222€'},
        {model: 'Epiphone Les Paul Standard', price:'599€'},
        {model: 'ESP LTD EC-1000VB/Duncan', price:'835€'},
    ]});
};
module.exports = {
  guitarslist
};
