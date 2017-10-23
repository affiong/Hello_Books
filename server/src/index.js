
const express = require('express');
const app = express();

import users from './routes/users'
import book from './routes/books'


	/* curl -H "Content-Type: application/json" -X POST localhost:3000/api/books/add
	
	The command above is used to post a request from the terminal using curl.
*/

	
	app.use('/api/users/', users)

	app.use('/api/books', book)

app._router.stack.forEach(function(r){
  if (r.route && r.route.path){
    console.log(r.route.path)
  }
})

console.log(express)

app.listen(3000, function () {
  console.log('Example app listening on port 3000');
}); 