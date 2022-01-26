if (process.env.Node_ENV !== 'production') {
    const dotenv = require("dotenv");
    //import .env file
    dotenv.config();
} 

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // mongodb connection
    const con = await mongoose.connect(process.env.MONGODB_URL || MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected successfully: ${con.connection.host}`);
  } catch (err) {
    console.log(`Connection failed: ${err}`);
    process.exit(1);
  }
};

// export db connection
module.exports = connectDB;