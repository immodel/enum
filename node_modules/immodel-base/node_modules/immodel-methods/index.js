module.exports = function(model) {  
  model.method = function(name, fn) {
    return this.use(function(model) {
      model.prototype[name] = fn;
    });
  };

  model.static = function(name, fn) {
    return this.use(function(model) {
      model[name] = fn;
    });
  };
};