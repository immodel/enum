var assert = require('assert');
var model = require('immodel')
  .use(require('immodel-base'), {enum: require('..')});

describe('enum', function() {
  it('should work', function(done) {
    var User = model
      .attr('username', {type: 'string', enum: ['admin', 'guest']});

    var user = new User({username: 'test'});

    user.validate(function(err, user) {
      assert(err);
      assert(err.key === 'enum');
      user
        .set('username', 'admin')
        .validate(function(err, user) {
        assert(! err);
        done();
      });
    });
  });
});