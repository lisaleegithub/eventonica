var express = require('express');
var router = express.Router();

let mockUsers = [
  { id: 1, name: 'Marlin', email: 'marlin@gmail.com' },
  { id: 2, name: 'Nemo', email: 'nemo@gmail.com' },
  { id: 3, name: 'Dory', email: 'dory@gmail.com' }
];

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// server/routes/users.js`
router.get('/', function (req, res, next) {
  console.log(req.body, 'the body');
  res.json({ users: mockUsers });
});

router.post('/', function (req, res, next) {
    // save request data to a variable in routes/users.js
    // console.log(req.body);
    res.send(req.body);
    // res.send('some message about your data being saved, and a copy of that data');
  });


module.exports = router;
