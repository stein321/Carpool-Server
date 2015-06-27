
var express = require('express');
var app = express();
var pg = require('pg');
var Sequelize = requite('sequelize');
var sequelize = new Sequelize(process.env.DATABASE_URL, {});

var User = sequelize.define('User', {
  username: Sequelize.STRING,

app.set('port', (process.env.PORT || 5000));

app.get('/db', function (request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM carpool_user', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.send(result.rows); }
    });
  });
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
