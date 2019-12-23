const express = require('express');
const routes = express.Router();
const Twit = require('twit');
const tweetsController = require('./controllers/TweetsController');

var client = new Twit({
    consumer_key:         'Zup2QGOa2r10ynKDfbeVEaMae',
    consumer_secret:      'Ei9wz4rfuu07C1c3oHkD3SvOmUIRDSnLewaM5KPSj8ovwnhrd4',
    access_token:         '1063553634523389958-rbDdowgNseGht4d34vg1rcETza4xUN',
    access_token_secret:  'tV2LESDAfqCZLmkuFLdx3nf1GcWABWuo5tFYPP1MZUVk9',
});

//route to save a hashtag
routes.post('/saveHashtag', (req, resp) => {
    hasgtag.create({ hashtag: '#2020' });
});

routes.get('/getHashtags', tweetsController.index);

//route to find tweets by hastags.
routes.get('/getTweets', (req, resp) => {

    let hashTagsList = ['#lucas', '#brasil'];

    client.get('search/tweets', {q: hashTagsList, count: 3}, function(err, data, response){
        resp.send(data);
    })
});

module.exports = routes;