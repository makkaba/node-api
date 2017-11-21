import users from './routes/users';

const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser')
const config = require('./config/secret');
const app = express();
const root = require('./routes/root');

// const users = require('./routes/users');

const port = process.env.PORT || 5000; 
app.use(morgan('dev'));
// parse JSON and url-encoded query
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('jwt-secret', config.jwt.secret);

app.use('/', root);
app.use('/users', users);

// app.get('/', (req, res) => {
//     console.log('/');
//     res.send('Root');
// });
// 
// app.get('/users', (req, res) => {
//     console.log('/users');
//     res.send('users');
//     /*TODO: token을 받아서 jwt로 해석해서 돌려주기.*/
// });

app.listen(5000, () => {
    console.log(`server is running on port ${port}`);
});