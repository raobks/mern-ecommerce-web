const mongoose = require("mongoose");

const connectDatabase = () => {
  const uri =
    process.env.DB_URI ||
    "mongodb://127.0.0.1:27017/ecommerce";

  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      dbName: "ecommerce",
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.error(`MongoDB connection error: ${err.message}`);
      process.exit(1);
    });
};

module.exports = connectDatabase;
