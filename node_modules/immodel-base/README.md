# base

The basic set of plugins needed to bootstrap immodel into being a usable model. Works with browserify.

## Usage

```javascript
var model = require('immodel')
  .use(require('base'));
```

### With custom plugins

```javascript
var model = require('immodel')
  .use(require('base'), {validation: require('my-validations')});
```

The base validation package will be replaced with the 'my-validation' package.  The things you can replace are

* `getter-setter`
* `cast`
* `methods`
* `attrs` 
* `validation`
* `required` - Basic 'required validator' implementation
* `defaults` - Default values
* `discriminators`