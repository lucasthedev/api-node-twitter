const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//initializing the app.
const app = express();

app.use(express.json());
app.use(cors());
//DB conect
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost:27017/nodeapi');

requireDir('./src/models');

//receive all requests.
app.use('/api', require('./src/routes'));

//port to runing API.
app.listen(3001);