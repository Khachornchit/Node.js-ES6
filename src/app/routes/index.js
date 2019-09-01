var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Node.js Web Application Development' });
});

router.get('/customers', (request, response, next) => {
  response.end("GET requested => list customers");
});

router.post('/customers', (request, response, next) => {
  response.end("POST requested => create customers");
});

router.put('/customers', (request, response, next) => {
  response.end("PUT requested => update customers");
});

router.delete('/customers', (request, response, next) => {
  response.end("DELETE requested => delete customers");
});

module.exports = router;