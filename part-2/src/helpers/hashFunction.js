/*
 ********** NOTE: **********
 * Do not edit this code unless you see a bug!
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
const hashFunction = function(str, max) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash &= hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

module.exports = hashFunction;
