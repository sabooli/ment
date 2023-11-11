var test = require('tape');
var callasync = require('.');

test('callasync(func) should call `func` asynchronously', function (t) {
  t.plan(4);

  var i = 0;
  var callback = function (n, msg) {
    return function () {
      t.equal(++i, n, msg);
    }
  };

  callback(1, 'should execute first')();
  callasync(callback(3, 'should execute third'));
  callasync(callback(4, 'should execute fourth'));
  callback(2, 'should execute second')();
});
