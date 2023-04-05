"use strict";
const { BadRequestError } = require("./expressError");


/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {
  // if the conversion isn't successful, throw a BadRequestError and will
  // be handled in your route

  //what if they pass something that is not an array... ie map fails?

    const nums = strNums.map(num => +num);
    if (nums.includes(NaN)){
      throw new BadRequestError();
    }

  return nums;
}


module.exports = { convertStrNums };