var express = require('express');
var router = express.Router();
var db = require('../db/db-connection.js'); 

// // commenting out before adding GET and ADD users listing
// let mockUsers = [
//   { id: 1, name: 'Marlin', email: 'marlin@gmail.com' },
//   { id: 2, name: 'Nemo', email: 'nemo@gmail.com' },
//   { id: 3, name: 'Dory', email: 'dory@gmail.com' }
// ];

/* GET users listing. */
router.get('/', async function (req, res, next) {
  try {
    const users = await db.any('SELECT * FROM users', [true]);
    res.send(users);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

/* Add users listing. */
router.post('/', async (req, res) => {
  const user = {
    name: req.body.name,
    email: req.body.email
  };
  console.log(user);
  try {
    const createdUser = await db.one(
      'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *',
      [user.name, user.email]
    );
    console.log(createdUser);
    res.send(createdUser);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// // commenting out before adding GET and ADD users listing
// router.get('/', function (req, res, next) {
//   console.log(req.body, 'the body');
//   res.json({ users: mockUsers });
// });

// // commenting out before adding GET and ADD users listing
// router.post('/', function (req, res, next) {
//     // save request data to a variable in routes/users.js
//     // console.log(req.body);
//     res.send(req.body);
//     // res.send('some message about your data being saved, and a copy of that data');
//   });


module.exports = router;
