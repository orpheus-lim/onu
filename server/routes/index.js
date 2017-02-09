const express = require('express');
const app = express();
const path = require('path');
import account from './account';

const router = express.Router();
router.use('/account', account);

export default router;

app.use('/', express.static(path.resolve(__dirname, '../build')));
app.get('*', (req, res, next) => {
    if(req.path.split('/')[1] === 'static') return next();
    res.sendFile(path.resolve(__dirname, '../build/index.html'));
});

app.listen(9000, function () {
  console.log('Example app listening on port 9000!');
});
