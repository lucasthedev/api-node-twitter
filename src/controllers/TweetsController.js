const mongoose = require('mongoose');

const Hashtag = mongoose.model('Hashtag');

module.exports = {
    async index(req, res){
        const hashtags = await Hashtag.find();

        return res.json(hashtags);
    },
};