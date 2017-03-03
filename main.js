require('dotenv').config();
const util = require('util')

Payoneer = require('./src/payoneer');

payoneer = new Payoneer({
  uri: process.env.URI,
  username: process.env.PARTNER_USERNAME,
  apiPassword: process.env.PARTNER_API_PASSWORD,
  partnerId: process.env.PARTNER_ID
});

// Return the API version
// payoneer.getVersion().then(function(data){
//   console.log(util.inspect(data, { depth: null, colors: true }));
// }).catch(function(error){
//   console.log(error.message)
// });

// Report the status of a payment that was previously sent to Payoneer system
// payoneer.getPaymentStatus(10, 7).then(function(data){
//   console.log(util.inspect(data, { depth: null, colors: true }));
// }).catch(function(error){
//   console.log(error.message)
// });

// Return details about the requested payee and its status at Payoneer
// payoneer.getPayeeDetails(10).then(function(data){
//   console.log(util.inspect(data, { depth: null, colors: true }));
// }).catch(function(error){
//   console.log(error.message)
// });

// Submit a payment request to Payoneer's system
// payoneer.sendPayment('AGILITYFEAT100069280-PAY', 8, 10, 20, 'Created from the wrapper').then(function(data){
//   console.log(util.inspect(data, { depth: null, colors: true }));
// }).catch(function(error){
//   console.log(error.message)
// });

// Report the status of a payment that was previously sent to the Payoneer system
payoneer.getPaymentStatus(10, 8).then(function(data){
  console.log(util.inspect(data, { depth: null, colors: true }));
}).catch(function(error){
  console.log(error.message)
});
