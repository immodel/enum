module.exports = function() {
  this.enum = function(values) {
    return this.validator(function() {
      return values.indexOf(this.value) !== -1;
    }, 'enum');
  };
};