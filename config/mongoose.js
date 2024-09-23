// mongoose.connect(url)
//   .then(() => {
//     console.log('Connected to Database :: MongoDB');
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//   });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://varsha:varshaxyz@cluster0.iuvsi7y.mongodb.net/IssueTracker?retryWrites=true&w=majority');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', () => {
  console.log('-->Connected to Database :: MongoDB<--');
});

module.export = db;