const mongoose = require( 'mongoose');

const HashtagSchema = new mongoose.Schema({
    hashtag:{
        type: String,
        required: true
    }
});

mongoose.model('Hashtag', HashtagSchema);