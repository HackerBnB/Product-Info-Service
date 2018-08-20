// const mongoose = require('mongoose');
// const dBIP = 'database:27017';
// const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/info';
// // const dbURI = process.env.MONGODB_URI || `mongodb://${dBIP}/info`;
// // const dbURI = `mongodb://${process.env.MONGODB_URI || 'localhost'}:27017/info`;

// mongoose.connect(dbURI);

// mongoose.connection.on('connected', function() {
//   console.log('Mongoose default connection open to ' + dbURI);
// });

// mongoose.connection.once('open', function() {
//   console.log(" we're connected to mongoose!");
// });

// // If the connection throws an error
// mongoose.connection.on('error', function(err) {
//   console.log('Mongoose default connection error: ' + err);
// });

// // When the connection is disconnected
// mongoose.connection.on('disconnected', function() {
//   console.log('Mongoose default connection disconnected');
// });

// // If the Node process ends, close the Mongoose connection
// process.on('SIGINT', function() {
//   //node.js key when you kill the service
//   mongoose.connection.close(function() {
//     console.log(
//       'Mongoose default connection disconnected through app termination'
//     );
//     process.exit(0);
//   });
// });

// module.exports = {
//   Room: require('./Room.js'),
//   Amenity: require('./Amenity.js')
// };
