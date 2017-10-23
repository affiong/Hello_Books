let dummyData = {
  books: [
    {
      "id": "1",
      "name": "Jump Start Js",
      "description": 'This book get you started with JavaScript',
      "quantity": 10,
      "upvote": 10,
      "downvote": 0
    },
    {
      "id": "2",
      "name": "Modern JavaScript",
      "description": "Using the cutting edge tool for modern web apps",
      "quantity": 12,
      "upvote": 9,
      "downvote": 0
    },
    {
      "id": "3",
      "name": "The road to react",
      "description": "Get you started with react quickly",
      "quantity": 13,
      "upvote": 1,
      "downvote": 0
    },
    {
      "id": "4",
      "name": "Cracking The Bone",
      "description": "This help you get faster on developing wuth backboe.js",
      "quantity": 9,
      "upvote": 11,
      "downvote": 0
    }
  ],

 users: [
  {
    "pk":1,
    "name": "Adam Fortuna",
    "title": "Course Director",
    "email": "adam@switch.ng",
    "slug":"Adam-Fortuna",
    "image": "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/21192484_1469560569803045_4692177961833149142_n.jpg?oh=ca20dcc8dcd5891ad05b253fff7789c4&oe=5A5CAA85",
    "favbooks": [1,2,3],
    "booksBorrowed": [1,2,3],
    
  },

  {
      "pk":2,
      "name": "John Smith",
      "title": "Course Mentor",
      "email": "john@switch.ng",
      "slug":"John-Smith",
      "image": "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/21192484_1469560569803045_4692177961833149142_n.jpg?oh=ca20dcc8dcd5891ad05b253fff7789c4&oe=5A5CAA85",
      "favbooks": [1],
       "booksBorrowed": [1],
  },

  {
      "pk":3,
      "name": "Ben Ford",
      "title": "Ford Director",
      "email": "ben@switch.ng",
      "slug":"Ben-Ford",
      "image": "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/21192484_1469560569803045_4692177961833149142_n.jpg?oh=ca20dcc8dcd5891ad05b253fff7789c4&oe=5A5CAA85",
      "favbooks": [1,2],
       "booksBorrowed": [1,2],
  },

  {
    "pk":4,
    "name": "Ford Ben",
    "title": "Course Lead",
    "email": "ford@switch.ng",
    "slug":"Ford-Ben",
    "image": "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/21192484_1469560569803045_4692177961833149142_n.jpg?oh=ca20dcc8dcd5891ad05b253fff7789c4&oe=5A5CAA85",
    "favbooks": [1,2],
    "booksBorrowed": [1,2],
  },

  {
    "pk":5,
    "name": "Kent Clark",
    "title": "Course Head",
    "email": "clark@switch.ng",
    "slug":"Kent-Clark",
    "image": "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/21192484_1469560569803045_4692177961833149142_n.jpg?oh=ca20dcc8dcd5891ad05b253fff7789c4&oe=5A5CAA85",
    "favbooks": [1,2,3],
    "booksBorrowed": [1,2,3],
  },

  {
      "pk":6,
      "name": "Phillip Will",
      "title": "Content Director",
      "email": "philip@switch.ng",
      "slug":"Phillip-Will",
      "image": "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/21192484_1469560569803045_4692177961833149142_n.jpg?oh=ca20dcc8dcd5891ad05b253fff7789c4&oe=5A5CAA85",
      "favbooks": [1],
      "booksBorrowed": [1],
  },

  {
      "pk":7,
      "name": "Max Well",
      "title": "Course Analyst",
      "email": "max@switch.ng",
      "slug":"Max-Well",
      "image": "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/21192484_1469560569803045_4692177961833149142_n.jpg?oh=ca20dcc8dcd5891ad05b253fff7789c4&oe=5A5CAA85",
      "favbooks": [1,3],
       "booksBorrowedo": [1,3],
  },

  {
      "pk":8,
      "name": "Alex Nabe",
      "title": "Course Manager",
      "email": "alex@switch.ng",
      "slug":"Alex-Nabe",
      "image": "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/21192484_1469560569803045_4692177961833149142_n.jpg?oh=ca20dcc8dcd5891ad05b253fff7789c4&oe=5A5CAA85",
      "favbooks": [3],
      "booksBorrowed": [3],
  },

  {
      "pk":9,
      "name": "Mark Dean",
      "title": "Course Marketer",
      "email": "mark@switch.ng",
      "slug":"Mark-Dean",
      "image": "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/21192484_1469560569803045_4692177961833149142_n.jpg?oh=ca20dcc8dcd5891ad05b253fff7789c4&oe=5A5CAA85",
      "favbooks": [2,3],
       "booksBorrowed": [2,3],
  },

  {
     "pk":10,
      "name": "Bran James",
      "title": "Content Manager",
      "email": "bran@switch.ng",
      "slug":"Bran-James",
      "image": "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/21192484_1469560569803045_4692177961833149142_n.jpg?oh=ca20dcc8dcd5891ad05b253fff7789c4&oe=5A5CAA85",
      "favbooks": [1,2],
      "booksBorrowed": [1,2], 
  }

],

};

// module.exports = dummyData;

export { dummyData };

