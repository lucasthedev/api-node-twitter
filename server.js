const express = require('express');
var Twit = require('twit');

var client = new Twit({
    consumer_key:         'Zup2QGOa2r10ynKDfbeVEaMae',
    consumer_secret:      'Ei9wz4rfuu07C1c3oHkD3SvOmUIRDSnLewaM5KPSj8ovwnhrd4',
    access_token:         '1063553634523389958-rbDdowgNseGht4d34vg1rcETza4xUN',
    access_token_secret:  'tV2LESDAfqCZLmkuFLdx3nf1GcWABWuo5tFYPP1MZUVk9',
});

const app = express();

app.get('/getTwe', (req, resp) => {
    client.get('search/tweets', {q: '#bolsonaro', count: 100}, function(err, data, response){
        console.log(data);
    })
})

app.listen(3001);

