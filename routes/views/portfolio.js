var keystone = require('keystone');

exports = module.exports = function(req, res){

  var view = new keystone.View(req, res);
  var locals = res.locals;

  locals.data = {
    portfolioItems: [],
  };

  view.on('init', function(next){

    var q = keystone.list('PortfolioItem').model.find().populate('tags', 'name');

    q.exec(function(err, results){
      locals.data.portfolioItems = results;
      next(err);
    });
  });

  view.render('portfolio');
};
