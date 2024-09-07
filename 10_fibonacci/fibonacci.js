//N = N-1 + N-2 where N > 1

const fibonacci = function(sequenceNum) {
    let finArray = [1, 1];

    if (sequenceNum < 0) {
        return "OOPS";
    } else if (sequenceNum == 0) {
        return 0;
    } else if (typeof sequenceNum === 'string') {
        sequenceNum = Number(sequenceNum);
    }

    for (let i = 1; i < sequenceNum; i++) {
        let finNum = finArray[finArray.length - 1] + finArray[finArray.length - 2];
        finArray.push(finNum)
    }

    return finArray[sequenceNum - 1];
};

// Do not edit below this line
module.exports = fibonacci;
