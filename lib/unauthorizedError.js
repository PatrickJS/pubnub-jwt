var util = require('util');

function UnauthorizedError (code, error) {
  Error.call(this, error.message);
  this.message = error.message;
  this.code = code;
  this.inner = error;
}

util.inherits(UnauthorizedError, Error);

module.exports = UnauthorizedError;
