class LibraryCollection {
    constructor(capacity, books = []) {
        this.capacity = capacity;
        this.books = books;
    };

    addBook(bookName, bookAuthor) {
        if (this.books.length === this.capacity) throw new Error('Not enough space in the collection.');

        this.books.push({
            bookName: bookName,
            bookAuthor: bookAuthor,
            payed: false
        });

        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    };

    payBook(bookName) {
        const foundIndex = this.books.findIndex(book => book.bookName === bookName);

        if (foundIndex === -1) throw new Error(`${bookName} is not in the collection.`);
        if (this.books[foundIndex].payed) throw new Error(`${bookName} has already been paid.`);

        this.books[foundIndex].payed = true;
        return `${bookName} has been successfully paid.`;
    };

    removeBook(bookName) {
        const foundIndex = this.books.findIndex(book => book.bookName === bookName);

        if (foundIndex === -1) throw new Error('The book, you\'re looking for, is not found.');
        if (!this.books[foundIndex].payed) throw new Error(`${bookName} need to be paid before removing from the collection.`);

        this.books.splice(foundIndex, 1);
        return `${bookName} remove from the collection.`;
    };

    getStatistics(bookAuthor) {
        let output = [];

        if (bookAuthor === '' || bookAuthor === undefined) {
            let emptySlots = Number(this.capacity) - Number(this.books.length);
            output.push(`The book collection has ${emptySlots} empty spots left.`);
            const sorted = this.books.sort((a, b) => a['bookName'].localeCompare(b['bookName']));
            sorted.forEach(book => {
                const isPaid = book.payed ? 'Has Paid' : 'Not Paid';
                output.push(`${book.bookName} == ${book.bookAuthor} - ${isPaid}.`);
            });
        } else {
            const foundIndex = this.books.findIndex(book => book.bookAuthor === bookAuthor);

            if (foundIndex === -1) throw new Error(`${bookAuthor} is not in the collection.`);

            const bookName = this.books[foundIndex].bookName;
            const bookAuthorOutput = this.books[foundIndex].bookAuthor;
            const isPaid = this.books[foundIndex].payed ? 'Has Paid' : 'Not Paid';
            output.push(`${bookName} == ${bookAuthorOutput} - ${isPaid}.`);
        };

        return output.join('\n');
    };
};

const library = new LibraryCollection(2);
console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library.addBook('Ulysses', 'James Joyce'));

const libraryTwo = new LibraryCollection(2);
libraryTwo.addBook('In Search of Lost Time', 'Marcel Proust');
console.log(libraryTwo.payBook('In Search of Lost Time'));
console.log(libraryTwo.payBook('Don Quixote'));

const libraryThree = new LibraryCollection(2);
libraryThree.addBook('In Search of Lost Time', 'Marcel Proust');
libraryThree.addBook('Don Quixote', 'Miguel de Cervantes');
libraryThree.payBook('Don Quixote');
console.log(libraryThree.removeBook('Don Quixote'));
console.log(libraryThree.removeBook('In Search of Lost Time'));

const libraryFour = new LibraryCollection(2);
console.log(libraryFour.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(libraryFour.getStatistics('Miguel de Cervantes'));

const libraryFive = new LibraryCollection(5);
libraryFive.addBook('Don Quixote', 'Miguel de Cervantes');
libraryFive.payBook('Don Quixote');
libraryFive.addBook('In Search of Lost Time', 'Marcel Proust');
libraryFive.addBook('Ulysses', 'James Joyce');
console.log(libraryFive.getStatistics());