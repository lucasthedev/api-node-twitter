const mongoose = require('mongoose');

const Hashtag = mongoose.model('Hashtag');

module.exports = {
    async index(req, res){
        const hashtags = await Hashtag.find();

        return res.json(hashtags);
    },

    async store(req, res){
        const hashtag = await Hashtag.create(req.body);

        return res.json(hashtag);
    },

    async destroy(req, res){
        await Hashtag.findByIdAndRemove(req.params.id);

        return res.send();
    }
};