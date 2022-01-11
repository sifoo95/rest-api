const mongoose = require('mongoose')

const connectDB = async () => {try {
   await mongoose.connect('mongodb://localhost:27017/mern_app')
    console.log("DB connected")
} catch (error) {
    console.error("can not connect to DB")
   }
}

module.exports = connectDB