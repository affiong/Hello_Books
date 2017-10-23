// let dummyData = require('./dummyData');

import { dummyData } from './dummyData';
import users from './users'

let express = require('express');
let prettyjson = require('prettyjson');


class Book{
  constructor(express, dummyData){
    this.books = dummyData.books;

  }

  allBook(req, res , next){ 
    
    let query = req.query.sort;
    if (query){
      let query = req.query.sort.toLowerCase();
      
      let books =this.books;
      books.sort((a, b) => {
        return b[query] - a[query];
      });

      res.status(200).json(books);
    }else{
      res.status(200).json(this.books);
      next();
    }
  };

  getBook(req, res , next, book_id){ 

      // There is a book id if this method is called by anothher method in this class to get a book

      if (book_id){
        console.log('true');
        let book = this.books[book_id - 1]
        return book;

      }else{
        console.log('false');

        let id = Number(req.params.id);
        let book = this.books[id-1];

        if(book){
    	  	
    	    res.status(200).json(book);
    	    next(); 

      	}else{
      		
      		res.status(404).json('Not Found');
          next();
      	}
      }

  };

    reviewBook(req, res , next){ 

      let user_id = req.params.user_id
      let user = dummyData.users[user_id - 1]

      if (user){
        let book_id = Number(req.params.book_id);
        let book = this.books[book_id-1];

        if(book){          
          res.status(200).json(book);
          next(); 
        }else{
          res.status(404).json("Not Found");
        }
  
      }else{
          
        res.set({'Message': 'You Not Allowed To Modified This Resource'}).status(401).json('UnAuthorized');
        next();
      }

  };

  addBook(req, res, next, book){
  	this.books.push(book);
    // console.log(this.books);
  	res.status(201).json('Book Created');
    next();
  }

  updateBook(req, res, next, id, data){

    let book = this.books[id-1];

    if (book){
    
    Object.assign(book, data);
    // console.log(this.books);
    res.status(200).json('Book Updated');
    next();
  }else{
    res.status(404).json("Not Found");
  }
  }

  FavBook(req, res, next){

    let user_id = req.params.user_id;
    let user = dummyData.users[user_id-1]

    if (user){
      let favBooksId = dummyData.users[user_id-1].favbooks

      if (req.method === 'POST'){

        favBooksId.push(req.params.book_id);
        let favBooks = [];
        favBooksId.forEach((element)=>{
          favBooks.push(this.getBook(req, res, next, element));
        });
        res.set({"Message": "Fovourite Updated"}).status(200).json(favBooks);
        next();

      }else{

        let favBooks = [];
        favBooksId.forEach((element)=>{
          favBooks.push(this.getBook(req, res, next, element));
        });
        res.status(200).json(favBooks);
        next();
      }

    }else{
      res.status(401).json('Not Authorized');
      next();
    }
    
  }

  borrowBook(req, res, next){
    let user = dummyData.users[req.params.user_id-1]
    // console.log(user);
    if (user){
      let booksBorrowed = []
      if(user.booksBorrowed === 'undefine'){
        let booksBorrowed = []
      }else{
        let booksBorrowed = user.booksBorrowed
        console.log(booksBorrowed);
      }

      let book = this.getBook(req, res, next, req.params.book_id)
      let book_id = book.id;
      booksBorrowed.push(book_id)
         
      res.status(200).json(book);
      next();
    }else{
      res.status(401).json('Not Authorized');
      next();
    }
  }

  returnBook(req, res, next){
    let user = dummyData.users[req.params.user_id-1];
    console.log(user);

    if (user){
      let booksBorrowedId = [];

      if(user.booksBorrowed === 'undefine'){
        let booksBorrowedId = [];
      }else{
        let booksBorrowedId = user.booksBorrowed;
        booksBorrowedId.splice(req.params.book_id-1, 1);
        console.log(booksBorrowedId);
        let booksBorrowed = [];

        for (let i = 0; i < booksBorrowedId.length; i++){
          console.log(booksBorrowedId[i]);
          booksBorrowed.push(this.getBook(req, res, next, booksBorrowedId[i]));
        }
        
         res.set({'Message': 'Books Left To Return'}).status(200).json(booksBorrowed);
         next();

      }
      
     
    }else{
      res.status(401).json('Not Authorized');
      next();
    }
  }   
  
}

let app = express();
let books = new Book(app, dummyData);

module.exports = books;
// export default { book };
