const mongoose = require("mongoose");

let mongoURL = `mongodb+srv://leminhhai220705:abcd@cluster0.kd8sh.mongodb.net/dev-hotel`

mongoose.connect(mongoURL, {useUnifiedTopology : true, useNewUrlParser:true})

let connect = mongoose.connection

connect.on(`error`, () =>{
    console.log('Mongo DB Connection failed');
})

connect.on('connected', () =>{
    console.log('Mongo DB connection Successful')
    
})

module.exports = mongoose