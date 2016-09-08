var keystone = require('keystone');
var Types = keystone.Field.Types;

var PortfolioItem = new keystone.List('PortfolioItem',{
  autokey: {path: 'key', from: 'name', unique: true},
});

PortfolioItem.add({
  name: {type: String, required: true},
  image: {type: Types.CloudinaryImage},
  url: {type: Types.Url},
  tags: {type: Types.Relationship, ref: 'PortfolioTag', many: true}
});

PortfolioItem.register();
