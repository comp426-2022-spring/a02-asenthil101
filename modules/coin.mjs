/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */

export function coinFlip() {
  var randomNum = Math.random()
  if (randomNum > 0.5) {
    return "heads"
  }
  else {
    return "tails"
  }
}

/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */

export function coinFlips(flips) { 
  let flipList = []; 
  let i = 0; 
  for (let i=0; i < flips; i++) {
    flipList.push(coinFlip());
  }
  return flipList;
}


/** Count multiple flips
 * 
 * Write a function that accepts an array consisting of "heads" or "tails" 
 * (e.g. the results of your `coinFlips()` function) and counts each, returning 
 * an object containing the number of each.
 * 
 * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
 * { tails: 5, heads: 5 }
 * 
 * @param {string[]} array 
 * @returns {{ heads: number, tails: number }}
 */

 export function countFlips(array) {
  var count;
  var heads = 0;
  var tails = 0;
  var i = 0;
  for (let i=0; i < array.length; i++) {
    if (array[i] === "tails") {
      tails += 1;
    } else {
      heads += 1;
    }
  }

  if (heads == 0) {
    count = { tails };
  } else if (tails == 0) {
    count = { heads };
  } else {
    count = { tails, heads }; 
  }
  return count;
}

/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

export function flipACoin(call) {
  var statement = {
    call,
    flip: coinFlip(),
    result: " ",
  }; 

  if (statement.call == statement.flip) {
    statement.result = "win";
  } 
  else {
    statement.result = "lose";
  } 
  return statement;
  
}


/** Export 
 * 
 * Export all of your named functions
*/
