'use strict';
/*
Reuse your BlogPost class
Create a Blog class which can
    .store a list of BlogPosts
    .add BlogPosts to the list
    .delete(int) one item at given index
    .update(int, BlogPost) one item at the given index and update it with another BlogPost */

import { BlogPost } from './BlogPost'


class Blog {
  list: BlogPost[];
  constructor() {
    this.list = [];
  }

  add(item: BlogPost) {
    this.list.push(item)
  }
  del(ind) {
    this.list.splice(ind, 1);
  }

  update(ind, newpost) {
    this.list.splice(ind, 1, newpost)
  }

}

let first = new BlogPost('my Journey', 'jeffry jakson', '2019,01,14', 'learn new knowleg ');
let secound = new BlogPost('hey body', 'jef bozz', '2019.05.06', 'try to leran it');
let third = new BlogPost('hello', 'what you wanna become', '2020.04.14', 'new blogpost');
let forth = new BlogPost('Lorem Ipsum', 'Jhon Doe', '2000.05.04', 'Loram ipsom dolor sit amet');

let myBlog = new Blog();

myBlog.add(first);
myBlog.add(secound);
myBlog.add(third);
myBlog.add(forth);


myBlog.del(2)

myBlog.update(0, third)
let fifth = new BlogPost('just oneMore', 'jeff jefry', '2019.06.09', 'do it');

myBlog.add(fifth);
console.log(myBlog);



//  kheyli mohem hast ke constroctur ro estefadeh konid  makhsosn age list dashte bashid 