const reverseString = function(string) {
    let nameArray = [];

    for(let i = 0; i < string.length; i++) {
        nameArray.push(string[i]);
    }

    let reverseName = nameArray.reverse().join('');
    return reverseName;
    
};

// Do not edit below this line
module.exports = reverseString;
