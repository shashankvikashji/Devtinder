const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect(
     "mongodb+srv://Shashank:tuCdRo1RlxKtIuWj@namastenode.lozwvht.mongodb.net/?appName=NamasteNode/devTinder"
    );
};

module.exports = connectDB;

