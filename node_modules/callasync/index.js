
/**
 * Expose `callasync`.
 */

module.exports = callasync;

/**
 * A queue holding functions to execute on timeout.
 * @type {Array}
 */

var waiting = [];

/**
 * Waiting queue timeout handle.
 * @type {number}
 */

var waitingID = 0;

/**
 * Waiting queue handler function.
 * @type {Function}
 */

var process = function () {
  var index = -1;
  var length = waiting.length;
  var funcs = waiting; // local scope copy of waiting queue

  waiting = []; // drop waiting queue
  waitingID = 0; // reset waiting handle

  while (++index < length) {
    funcs[index]();
  }
};

/**
 * Add `func` to the waiting queue to execute it on the next timeout.
 * @param {Function} func The function to delay.
 */

function callasync(func) {
  waiting.push(func);
  if (waitingID === 0) {
    waitingID = setTimeout(process, 0);
  }
}
