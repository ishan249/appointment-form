require('dotenv').config();
const mongoose = require('mongoose');

// Connecting mongodb database


function connectDB() {
  mongoose.connect("mongodb://127.0.0.1:27017/appointmentDb", { useNewUrlParser: true, useUnifiedTopology: true });
  const connection = mongoose.connection;

  return new Promise((resolve, reject) => {
    connection.once('open', () => {
      console.log('Database connected');
      resolve();
    });
  }).catch(err => {
    console.log('Connection failed ');
    reject(err);
  });
  
}
module.exports = connectDB;
