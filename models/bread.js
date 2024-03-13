const mongoose = require('mongoose')

const breadSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    hasGluten: {
        type: Boolean
    },
    image: {
        type: String,
        default: 'https://houseofnasheats.com/wp-content/uploads/2022/02/French-Bread-1.jpg'
    }
})

module.exports = mongoose.model('Bread', breadSchema)