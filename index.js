module.exports = function() {};
module.exports.pitch = function(remainingRequest) {
  this.cacheable && this.cacheable();
  var content = [
    'var css = require(' + JSON.stringify('!' + remainingRequest) + ');',
    'var CSSMixin = { ',
    '  componentWillMount: function() {',
    '    css.use();',
    '  },',
    '  componentWillUnmount: function() {',
    '    css.unuse();',
    '  }',
    '};',
    'module.exports = CSSMixin;'
  ].join('\n');

  return content;

};
