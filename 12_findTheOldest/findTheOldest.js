const findTheOldest = function(people) {
    let oldest = [];
    let largest = 0;
    let index = 0;

    people.forEach(element => {
        if('yearOfDeath' in element && 'yearOfBirth' in element) {
            oldest.push(element.yearOfDeath - element.yearOfBirth);
        } else {
            element.yearOfDeath = new Date().getFullYear();
            oldest.push(element.yearOfDeath - element.yearOfBirth);
        }
    });

    for(let i = 0; i < oldest.length; i++) {
        if (oldest[i] > largest) {
            largest = oldest[i];
            index = i;
        }
    }

    return people[index];
};



// Do not edit below this line
module.exports = findTheOldest;
