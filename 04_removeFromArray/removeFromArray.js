const removeFromArray = function(array, ...num) {

    num.forEach((element) => {
        for (let i = array.length; i >= 0; i--) {    //reversed loop to iterate from last index to first.
            if(array[i] === element) {
                array.splice(i, 1);
            }
        }
    })

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
