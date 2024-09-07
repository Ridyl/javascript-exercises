const getTheTitles = function(books) {
    //new array for just the object title values
    let bookTitle = [];

    //forEach to iterate over the objects within the books array
    books.forEach(element => {
        bookTitle.push(element.title);
    });

    return bookTitle;
};

// Do not edit below this line
module.exports = getTheTitles;
