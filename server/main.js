import express from 'express';
import path from 'path';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import session from 'express-session';

import mysql from 'mysql';
const conn=mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'coding79513',
  database: 'schedule'
});
conn.connect();

app.get(['mon_1'], function(req, res){
  var sql = 'SELECT * FROM mon_1';
  conn.query(sql, function(err, rows){
    res.send(rows);
  });
})

app.use(bodyParser.urlencoded({ extended: false }));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './../public/index.html'));
});
const app = express();
const port = 3000;

app.use('/', express.static(path.join(__dirname, './../public')));

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log('Express is listening on port', port);
});
