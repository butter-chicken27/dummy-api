const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

app.get('/', (req, res) => {
    res.send('Hello world');
});


//Connect to DB
mongoose.connect("mongodb+srv://dummy1:mdbpi123@dummyrest.z3mdm.mongodb.net/DummyRest?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true}, () => console.log('connection made'));

app.listen(3000);
