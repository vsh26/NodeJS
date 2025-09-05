const _ = require('lodash');

function sumEvenNums(nums){
    const evenNums = _.filter(nums, num => num %2 === 0);
    const result = _.sumBy(evenNums);
    return result;
}

const nums = [1, 2, 3, 4, 5];
console.log(sumEvenNums(nums));