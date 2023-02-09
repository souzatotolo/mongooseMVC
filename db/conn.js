const mongoose = require('mongoose');
require('dotenv').config();

async function main() {
  try {
    mongoose.set('strictQuery', true);

    await mongoose.connect(
      `mongodb+srv://richard:${process.env.MONGOOSE_PASS}@cluster0.bndakp9.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log('connected to the database');
  } catch (error) {
    console.log(error);
  }
}

module.exports = main;
