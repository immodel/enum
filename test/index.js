var assert = require('assert');
var model = require('immodel')
  .use(require('immodel-base'), {enum: require('..')});

describe('enum', function() {
  it('should work', function(done) {
    var User = model
      .attr('username', {type: 'string', enum: ['admin', 'guest']});
    
    var user = new User({username: 'test'});
    
    user.validate(function(err) {
      assert(! err);
      assert(err[0].key === 'enum');
      done();
    });
  });
});