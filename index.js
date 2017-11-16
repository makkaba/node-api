const express = require('express');
const app = express();
const root = require('./root');
const users = require('./users');
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
    console.log('server is running...');
});