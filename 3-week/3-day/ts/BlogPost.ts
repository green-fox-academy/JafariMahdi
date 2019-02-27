'use strict';

// BlogPost
// *Create a BlogPost class that has
//   -an authorName
//   -a title
//   -a text
//   -a publicationDate

// *Create a few blog post objects:
//   -"Lorem Ipsum" titled by John Doe posted at "2000.05.04."
//      .Lorem ipsum dolor sit amet.
//   -"Wait but why" titled by Tim Urban posted at "2010.10.10."
//      . A popular long-form, stick-figure-illustrated blog about almost everything.
//   -"One Engineer Is Trying to Get IBM to Reckon With Trump" titled by William Turton at "2017.03.28."
//      . Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. 
//           When I asked to take his picture outside one of IBM’s New York City offices, he told me that
//                  he wasn’t really into the whole organizer profile thing.


class BlogPost {

    autherName: string;
    title: string;
    text: string;
    publicationDate: string;

    constructor(authername: string, title: string, publici: string, text: string) {
        this.autherName = authername;
        this.title = title;
        this.publicationDate = publici;
        this.text = text;
    }
}
let Lorem = new BlogPost('Lorem ipsum', 'John Doe', '2000.05.04', 'Lorem ipsum dolor sit amet');
console.log(Lorem);

let wait = new BlogPost('Wait but why', 'Tim Urban', '2010.10.10', 'A popular long-form, stick-figure-illustrated blog about almost everything');
console.log(wait);

let one_engineer = new BlogPost('One Engineer Is Trying to Get IBM to Reckon With Trump', 'Wiliam Turton', '2017.03.28', 'Daniel Hanley,a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s');
console.log(one_engineer);

