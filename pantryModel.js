// pantryModel.js
var mongoose = require('mongoose');
// Setup schema
var pantrySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    baskets:{
        type: Object,
        required: false
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export pantry model
var pantry = module.exports = mongoose.model('pantry', pantrySchema);
module.exports.get = function (callback, limit) {
    pantry.find(callback).limit(limit);
}