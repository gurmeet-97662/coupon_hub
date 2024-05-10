const mongoose = require("mongoose");
const mongoURI =
  "mongodb://localhost:27017/newcoupon";
  mongoose.set("strictQuery", false);
const connectDB = () => {
  mongoose.connect(mongoURI, () => {

    console.log("connected to mongo Sucessfully");
  });
};

module.exports = connectDB;