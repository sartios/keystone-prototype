var keystone = require('keystone');

var PortfolioTag = new keystone.List('PortfolioTag', {
  autokey: {from: 'name', path: 'key', unique: true}
});

PortfolioTag.add({
  name: {type: String, required: true}
});

PortfolioTag.register();
