import express from 'express';
import path from 'path';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import users from './routes/users';

let app = express();

app.use('/api/users', users);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './../public/index.html'));
});

app.use('/', express.static(path.join(__dirname, './../public')));

app.use(morgan('dev'));

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const port = 3000;
app.listen(port, () => {
    console.log('Express is listening on port', port);
});
