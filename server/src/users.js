// let dummyData = require('./dummyData');
let express = require('express');
let prettyjson = require('prettyjson');

import { dummyData } from './dummyData';

class User{
  constructor(express, dummyData){
    this.users = dummyData.users;

  }

  all(req, res , next){  
    console.log(prettyjson.render(this.users));
    res.status(200).json(this.users);
    next();
  }; 

  get(req, res , next){ 

  	let id = Number(req.params.user_id);
  	let user = this.users[id-1];

  	if (user){
	  	// console.log(prettyjson.render(book));
	    res.status(200).json(user);
	    next(); 

  	}else{
  		// console.log(prettyjson.render(book));
  		res.status(404).json('Not Found');
  	}

  };
}

let app = express();
let user = new User(app, dummyData);

module.exports = user;

// export default { user };