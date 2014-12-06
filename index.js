var escape = require('escape-html');

module.exports = function (content) {
  this.cacheable();
  var callback = this.async();
  return callback(null, escape(content));
};