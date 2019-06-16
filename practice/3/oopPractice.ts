'use strcit';

class Book {
    title: string;
    author: string;
    year: number;
    pageNumber: number;
    weight: number;

    constructor(title: string, author: string, year: number, pageNumber: number) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.pageNumber = pageNumber;
    }
    getinfo(): string {
        return `the auther of this book is ${this.author} and the book is ${this.title} from year ${this.year}`
    }
}

//------------------------------------------------SoftCover Class------------------------

class Softcover extends Book {
    constructor(title: string, author: string, year: number, pageNumber: number) {
        super(title, author, year, pageNumber);
        this.weight = 20 + pageNumber * 10;
    }
}
// Test class 
let mySoftCover = new Softcover('asdasd', 'jhgf', 1999, 646);
console.log(mySoftCover.author);
console.log(mySoftCover.getinfo);

let mysecoundSoftCover = new Softcover('hmmm', 'qwert', 456, 987);
console.log(mysecoundSoftCover);
console.log(mysecoundSoftCover.pageNumber);





//------------------------------- HardCover Class --------------------------------------

class hardcover extends Book {
    constructor(title: string, author: string, year: number, pageNumber: number) {
        super(title, author, year, pageNumber);
        this.weight = 100 + pageNumber * 10;
    }


}


//---------------------------------BookShelf Class -------------------------

class Bookshelf {

    listOfMyBook: Book[] = [];

    //Method
    addThisBook(book: Book): void {
        this.listOfMyBook.push(book);
    }

    autherOfTheLightBooks(): string {
        let lightsAuther: string = this.listOfMyBook.sort((a, b) => a.weight - b.weight)[0].author;
        return lightsAuther
    }



    authorWhoWroteTheMostPages(): string {
        let pagesByAuthor: object = {};
        this.listOfMyBook.forEach(book => {
            if (pagesByAuthor[book.author]) {
                pagesByAuthor[book.author] += book.pageNumber;

            } else {
                pagesByAuthor[book.author] = book.pageNumber;
            }
        }
        );
        console.log(pagesByAuthor);   // for test

        // sort object but first make to array for it 

        let sortedNumberOfPages: any[] = Object.keys(pagesByAuthor)
            .map(author => {
                return {
                    author,
                    pages: pagesByAuthor[author]
                };
            })
            .sort((a, b) => b.pages - a.pages);
        return sortedNumberOfPages[0].auther
    }
}


let bookshelf = new Bookshelf();
bookshelf.addThisBook(new Softcover('jeeeee', 'heeeey', 1999, 999));
bookshelf.addThisBook(new Softcover('pooiuu', 'llkjjhh', 1969, 689));
bookshelf.addThisBook(new Softcover('errty', 'qqqqqqq', 1769, 779));


console.log(bookshelf.authorWhoWroteTheMostPages());


