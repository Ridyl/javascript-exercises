const sumAll = function(startNum, endNum) {
    let sum = 0;

    if (startNum < 0 || endNum < 0) {
        return `ERROR`;
    } else if (Number.isInteger(startNum) == false || Number.isInteger(endNum) == false) {
        return `ERROR`;
    }

    if (startNum < endNum) {
        for(i = startNum; i <= endNum; i++) {
            sum += i;
        }
    } else if (startNum > endNum) {
        for(i = startNum; i >= endNum; i--) {
            sum += i;
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
