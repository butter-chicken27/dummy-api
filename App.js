const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

app.get('/', (req, res) => {
    res.send('Hello fuck world');
});


//Connect to DB
mongoose.connect(process.env.DB_Connection,{ useNewUrlParser: true, useUnifiedTopology: true}, () => console.log('connection made'));

app.listen(3000);