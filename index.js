module.exports = function(model) {
  model.enum = function(values) {
    return model.validator(function(value) {
      return values.indexOf(value) !== -1;
    }, 'enum');
  };
};