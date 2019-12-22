const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

var Twit = require('twit');

var client = new Twit({
    consumer_key:         'Zup2QGOa2r10ynKDfbeVEaMae',
    consumer_secret:      'Ei9wz4rfuu07C1c3oHkD3SvOmUIRDSnLewaM5KPSj8ovwnhrd4',
    access_token:         '1063553634523389958-rbDdowgNseGht4d34vg1rcETza4xUN',
    access_token_secret:  'tV2LESDAfqCZLmkuFLdx3nf1GcWABWuo5tFYPP1MZUVk9',
});

//initializing the app.
const app = express();

//DB conect
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost:27017/nodeapi');

requireDir('./src/models');

const hasgtag = mongoose.model('Hashtag');

//route to save a hashtag
app.post('/saveHashtag', (req, resp) => {
    req.get('body')
    hasgtag.create({ hashtag: '#flamengo' });
});

//route to find tweets by hastags.
app.get('/getTweets', (req, resp) => {

    let hashTagsList = ['#bolsonaro', '#brasil'];

    client.get('search/tweets', {q: hashTagsList, count: 3}, function(err, data, response){
        resp.send(data);
    })
});

//port to runing API.
app.listen(3001);

