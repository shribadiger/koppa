var express = require('express');
var router = express.Router();
var db=require('./database');

router.get('/catalog', function(req, res, next) {
    var sql='SELECT * FROM itemTable';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    console.log(data);
    res.render('catalog', { title: 'Catalog', userData: data});
  });
});
module.exports = router;