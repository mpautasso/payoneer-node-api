require('dotenv').config();
const util = require('util')

Payoneer = require('./src/payoneer');

payoneer = new Payoneer({
  uri: process.env.URI,
  username: process.env.PARTNER_USERNAME,
  apiPassword: process.env.PARTNER_API_PASSWORD,
  partnerId: process.env.PARTNER_ID
});

// Return the status of the API
// payoneer.echo().then(function(data){
//   console.log('Response:');
//   console.log(util.inspect(data, { depth: null, colors: true }));
// }).catch(function(error){
//   console.log(error.message)
// });

// Return the API version
// payoneer.getVersion().then(function(data){
//   console.log('Response:');
//   console.log(util.inspect(data, { depth: null, colors: true }));
// }).catch(function(error){
//   console.log(error.message)
// });

// Submit a payment request to Payoneer's system
// payoneer.sendPayment('AGILITYFEAT100069280-PAY', 9, 10, 20, 'Created from the wrapper', null, null, 'USD').then(function(data){
//   console.log('Response:');
//   console.log(util.inspect(data, { depth: null, colors: true }));
// }).catch(function(error){
//   console.log(error.message)
// });

// Report the status of a payment that was previously sent to Payoneer system
// payoneer.getPaymentStatus(10, 7).then(function(data){
//   console.log('Response:');
//   console.log(util.inspect(data, { depth: null, colors: true }));
// }).catch(function(error){
//   console.log(error.message)
// });

// Return the client's account balance
// payoneer.getAccountDetails().then(function(data){
//   console.log('Response:');
//   console.log(util.inspect(data, { depth: null, colors: true }));
// }).catch(function(error){
//   console.log(error.message)
// });

// Return details about the requested payee and its status at Payoneer
// payoneer.getPayeeDetails(10).then(function(data){
//   console.log('Response:');
//   console.log(util.inspect(data, { depth: null, colors: true }));
// }).catch(function(error){
//   console.log(error.message)
// });

// Change the ID of an existing payee (old) to a new one
// payoneer.changePayeeId(10, 13).then(function(data){
//   console.log('Response:');
//   console.log(util.inspect(data, { depth: null, colors: true }));
// }).catch(function(error){
//   console.log(error.message)
// });

// Return all payments made to payees, grouped by a payment method
payoneer.getPayeesReport(0, '02/01/2016', '02/28/2016').then(function(data){
  console.log('Response:');
  console.log(util.inspect(data, { depth: null, colors: true }));
}).catch(function(error){
  console.log(error.message)
});

// Return all payments made to a specified payee
// payoneer.getSinglePayeeReport(10).then(function(data){
//   console.log('Response:');
//   console.log(util.inspect(data, { depth: null, colors: true }));
// }).catch(function(error){
//   console.log(error.message)
// });

// Return a list of all payments that are unclaimed in XML format
// payoneer.getUnclaimedPaymentsXml().then(function(data){
//   console.log('Response:');
//   console.log(util.inspect(data, { depth: null, colors: true }));
// }).catch(function(error){
//   console.log(error.message)
// });

// Cancel a payment that has not been processed and loaded to an account
// payoneer.cancelPayment(8).then(function(data){
//   console.log('Response:');
//   console.log(util.inspect(data, { depth: null, colors: true }));
// }).catch(function(error){
//   console.log(error.message)
// });
