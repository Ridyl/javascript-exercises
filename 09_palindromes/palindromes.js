const palindromes = function (paliString) {
    //set any string to all lowercase
    let filter = paliString.toLowerCase();
    //removes all punctuation but not letters or nums then joins them into string
    let removePunc = filter.match(/[a-z0-9]/g).join('');
    
    //could not seem to get reverse() to work when removePunc was an array. So turned
    //it into a string and use this loop to iterate in reverse and set reverse string
    let reverse ='';
    for (let i = removePunc.length - 1; i >= 0; i--) {
        reverse += removePunc[i];
    }

    //compares reverse and removePunc -- 0 means they are exactly 
    //the same but can return 1 / -1
    if(reverse.localeCompare(removePunc) == 0) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
