# Payoneer NodeJS API
A wrapper library for Payoneer using NodeJS

## Getting started
Install the package via npm

```bash
$ npm install payoneer-node-api
```
Create a new instance of Payoneer passing the partner username, partner password and the partner ID.

```javascript
var Payoneer = require('payoneer-node-api');

var payoneer = new Payoneer({
  uri: PAYONEER_URI, // https://api.sandbox.payoneer.com/payouts/HttpApi/Api.aspx
  username: YOUR_PARTNER_USERNAME, // someusername
  apiPassword: YOUR_PARTNER_API_PASSWORD, // 75zUt8k4X
  partnerId: YOUR_PARTNER_ID // 100033470
});
```
