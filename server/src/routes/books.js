const express = require('express');
const router = express.Router();
const booksRoute = express();

import books from './../books'


// booksRoute.get('?sort=upVotes&order=desc', (req, res, next) => {
// 	books.getBookByQuery(req, res, next);
// });

booksRoute.route('/:id?')
	.get((req, res, next) => {

		if (req.params.id){
			books.getBook(req, res, next);
			next()
		}else{
			
			books.allBook(req, res, next);
			next()
		}
	})

	.post((req, res, next ) => {
			let data = {
				id: 5,
				name: 'Sleaking Js',
				description: 'The Most Sleakest Js Book',
				quantity: 15,
				upVote: 0,
				downVote: 0
			};

			books.addBook(req, res, next, data);
			next()
	})

	.put ((req, res, next ) => {

			let data = {
				name: 'Run Js',
				description: 'Run Js Book',
				// quantity: 33,
				upVote: 0,
				downVote: 0
			};

			books.updateBook(req, res, next, req.params.id, data);
			next()
	});


// export { bookRoute };
module.exports  = booksRoute;