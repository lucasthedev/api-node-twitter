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
routes.post('/saveHashtag', tweetsController.store);

//route to get the hashtags
routes.get('/getHashtags', tweetsController.index);

//route to delete a hashtag
routes.delete('/delete/:id', tweetsController.destroy);

//route to find tweets by hastags.
routes.post('/getTweets', (req, resp) => {
    var returnHashtags = req.body;

    let listHashtags = [];
    
    for(let i = 0; i < returnHashtags.length; i++){
        listHashtags.push(returnHashtags[i].hashtag);
    }

    client.get('search/tweets', {q: listHashtags, count: 200}, function(err, data, response){
        resp.send(data);
    })
});

module.exports = routes;