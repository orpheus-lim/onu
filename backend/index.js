const express =require('express');
const path =require('path');
const bodyParser =require('body-parser');

const users =require('./routes/users');

let app = express();

app.use('/api/users', users);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './../public/index.html'));
});

app.use('/', express.static(path.join(__dirname, './../public')));

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const port = 8080;
app.listen(port, () => {
    console.log('Express is listening on port', port);
});
