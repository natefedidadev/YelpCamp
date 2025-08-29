const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampgroundSchema = new Schema({
    location: String,
    title: String,
    image: String,
    description: String,
    price: Number,
});

module.exports = mongoose.model('Campground', CampgroundSchema);