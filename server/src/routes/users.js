const express = require('express');
const app = express();
const usersRoute = express.Router();

import books from './../books'



usersRoute.get('/:user_id/favbooks', (req, res, next) => {
	books.FavBook(req, res, next, req.user_id);
	next();
});

usersRoute.post('/:user_id/favbooks/:book_id', (req, res, next) => {
	books.FavBook(req, res, next, req.user_id);
	next();
});

usersRoute.post('/:user_id/borrow/:book_id', (req, res, next) => {
	books.borrowBook(req, res, next);
	next();
});

// usersRoute.put('/:user_id/borrow/:book_id', (req, res, next) => {
// 	books.borrowBook(req, res, next);
// 	next();
// });

usersRoute.post('/:user_id/return/:book_id', (req, res, next) => {
	books.returnBook(req, res, next);
	next();
})

// usersRoute.put('/:user_id/return/:book_id', (req, res, next) => {
// 	books.returnBook(req, res, next);
// 	next();
// })

usersRoute.post('/:user_id/review/:book_id', (req, res, next) => {
	books.reviewBook(req, res, next);
	next();
})


module.exports  = usersRoute;