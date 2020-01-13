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
routes.get('/getTweets', (req, resp) => {
    var returnHashtags = req.get('hashtags').split('#');
    var url =  '';

    for(let i = 1; i < returnHashtags.length; i++){
            url += "#" + returnHashtags[i] + ' OR ';
    }

    url = url.substring(0, url.length-4);

    client.get('search/tweets', {q: url}, function(err, data, response){
        return resp.send(data);
    })
});

module.exports = routes;