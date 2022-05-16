const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const stationSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    describe: {
        type: String,
        required: false,
    },
    price: {
        type: Number,
    },
    unit_price_td: {
        type: Number,
    },
    unit_price_bt: {
        type: Number,
    },
    unit_price_cd: {
        type: Number,
    },
    discount: {
        type: Number,
    },
    vat: {
        type: Number,
    },
    kwh_init: {
        type: Number,
    },
    kwh_sum: {
        type: Number,
    },
    price_init: {
        type: Number,
    },
    price_sum: {
        type: Number,
    },
    currency: {
        type: String,
        //required: false,
    },
    is_active: {
        type: Number,
    },
    status: {
        type: String,
        //required: false,
    },
    devices: [{type: mongoose.Schema.Types.ObjectId, ref: 'Device'}],
    users: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],    
})

const Station = mongoose.model('Station', stationSchema)

module.exports = Station
