var express = require('express');
var router = express.Router();

// mock events
let mockEvents = [
  {
    id: 1,
    name: "Birthday",
    date: "2021-09-01",
    description: "A birthday party for my best friend",
    category: "Celebration",
  },
  {
    id: 2,
    name: "Graduation",
    date: "2021-08-01",
    description: "The class of 2021 graduates from East High",
    category: "Education",
  },
  {
    id: 3,
    name: "JS Study Session",
    date: "2021-10-01",
    description: "A chance to practice Javascript interview questions",
    category: "Education",
  }
];

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'This is my events route.' });
// });

// GET events
router.get('/', function (req, res, next) {
  console.log(req.body, 'the body');
  res.json({ events: mockEvents });
});

module.exports = router;
