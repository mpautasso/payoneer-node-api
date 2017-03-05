# Payoneer NodeJS API
A wrapper library for Payoneer using NodeJS.

## Getting started
Install the package via npm:

```bash
$ npm install payoneer-node-api
```
Create a new instance of Payoneer passing the `partner username`, `partner password` and `the partner ID`:

```javascript
var Payoneer = require('payoneer-node-api');

var payoneer = new Payoneer({
  uri: PAYONEER_URI, // https://api.sandbox.payoneer.com/payouts/HttpApi/Api.aspx
  username: YOUR_PARTNER_USERNAME, // someusername
  apiPassword: YOUR_PARTNER_API_PASSWORD, // 75zUt8k4X
  partnerId: YOUR_PARTNER_ID // 100033470
});
```

## Available methods

This wrapper was built using the Payonner API version `4.13`.

For more information about the Payoneer API see the [Implmentation Guide for Payonner Payout Services](https://partners.sandbox.payoneer.com/Files/APIGuide.pdf).

| Method name                    | Payoneer API method name           |
| -------------------------------| -----------------------------------|
| echo()                         | Echo()                             |
| getVersion()                   | GetVersion()                       |
| sendPayment()                  | PerformPayoutPayment()             |
| getPaymentStatus()             | GetPaymentStatus()                 |
| getAccountDetails()            | GetAccountDetails()                |
| getPayeeDetails()              | GetPayeeDetails()                  |
| changePayeeId()                | ChangePayeeID()                    |
| getPayeesReport()              | GetPayeesReport()                  |
| getSinglePayeeReport()         | GetSinglePayeeReport()             |
| getUnclaimedPaymentsXml()      | GetUnclaimedPaymentsXML()          |
| cancelPayment()                | CancelPayment()                    |


## Example

``` javascript
const util = require('util');

// Return the status of the API
payoneer.echo().then(function(data) {
  console.log('Response:');
  console.log(util.inspect(data, { depth: null, colors: true }));
}).catch(function(error) {
  console.log(error.message);
});

// Return the API version
payoneer.getVersion().then(function(data) {
  console.log('Response:');
  console.log(util.inspect(data, { depth: null, colors: true }));
}).catch(function(error) {
  console.log(error.message);
});

// Submit a payment request to Payoneer's system
payoneer.sendPayment('AGILITYFEAT100069280-PAY', 9, 10, 20, 'Created from the wrapper', null, null, 'USD').then(function(data) {
  console.log('Response:');
  console.log(util.inspect(data, { depth: null, colors: true }));
}).catch(function(error) {
  console.log(error.message);
});

// Report the status of a payment that was previously sent to Payoneer system
payoneer.getPaymentStatus(10, 7).then(function(data) {
  console.log('Response:');
  console.log(util.inspect(data, { depth: null, colors: true }));
}).catch(function(error) {
  console.log(error.message);
});

// Return the client's account balance
payoneer.getAccountDetails().then(function(data) {
  console.log('Response:');
  console.log(util.inspect(data, { depth: null, colors: true }));
}).catch(function(error) {
  console.log(error.message);
});

// Return details about the requested payee and its status at Payoneer
payoneer.getPayeeDetails(10).then(function(data) {
  console.log('Response:');
  console.log(util.inspect(data, { depth: null, colors: true }));
}).catch(function(error) {
  console.log(error.message);
});

// Change the ID of an existing payee (old) to a new one
payoneer.changePayeeId(10, 13).then(function(data) {
  console.log('Response:');
  console.log(util.inspect(data, { depth: null, colors: true }));
}).catch(function(error) {
  console.log(error.message);
});

// Return all payments made to payees, grouped by a payment method
payoneer.getPayeesReport(0, '02/01/2016', '02/28/2016').then(function(data) {
  console.log('Response:');
  console.log(util.inspect(data, { depth: null, colors: true }));
}).catch(function(error) {
  console.log(error.message);
});

// Return all payments made to a specified payee
payoneer.getSinglePayeeReport(10).then(function(data) {
  console.log('Response:');
  console.log(util.inspect(data, { depth: null, colors: true }));
}).catch(function(error) {
  console.log(error.message);
});

// Return a list of all payments that are unclaimed in XML format
payoneer.getUnclaimedPaymentsXml().then(function(data) {
  console.log('Response:');
  console.log(util.inspect(data, { depth: null, colors: true }));
}).catch(function(error) {
  console.log(error.message);
});

// Cancel a payment that has not been processed and loaded to an account
payoneer.cancelPayment(8).then(function(data) {
  console.log('Response:');
  console.log(util.inspect(data, { depth: null, colors: true }));
}).catch(function(error) {
  console.log(error.message);
});
```

## Developers notes

To generate the documentation related to this wrapper:

```bash
$ npm run make-doc
```

all the documentation will be created inside the directory `doc`.

## LICENSE

MIT license. See the LICENSE file for details.
