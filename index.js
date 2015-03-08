module.exports = function() {
  this.enum = function(values) {
    return this.validator(function(value) {
      return values.indexOf(value) !== -1;
    }, 'enum');
  };
};