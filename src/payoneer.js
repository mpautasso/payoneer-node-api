/**
 * Payoneer API Client.
 *
 * @module Payoneer
 *
 * @todo Complete the documentation.
 */

const PYRequest = require('./pyrequest');

/**
 * Payoneer API client.
 */
class Payoneer {
  /**
   * @constructor
   */
  constructor(config) {
    this.pyrequest = new PYRequest(config);
  }

  /**
   * Common Payoneer post.
   *
   * @param {string} mname - The method name (eg 'GetVersion').
   * @param {Object} parameters - The method parameters.
   *
   * @returns {Promise} A new Promise. If there is no errors, the result
   *                    will be a JavaScript object.
   */
  pyPost(mname, parameters) {
    return new Promise((success, reject) => {
      this.pyrequest.post(mname, parameters).then(function(data) {
        success(data);
      }).catch(function(error) {
        reject(error);
      });
    });
  }

  /**
   * Return the API version.
   *
   * @example
   * const payoneer = new Payoneer({
   *   uri: process.env.URI,
   *   username: process.env.PARTNER_USERNAME,
   *   apiPassword: process.env.PARTNER_API_PASSWORD,
   * });
   *
   * let response = payoneer.getVersion();
   *
   * alert(`Payoneer API Version: ${response.PayoneerResponse.Version}`);
   *
   * @returns {Object} Representing API version.
   */
  getVersion() {
    return this.pyPost('GetVersion');
  }

  /**
   * Report the status of a payment that was previously sent to the Payoneer
   * system.
   *
   * @todo Complete the documentation.
   */
  getPaymentStatus(p4, p5) {
    return this.pyPost('GetPaymentStatus', { p4: p4, p5: p5 });
  }

  /**
   * Return details about the requested payee and its status at Payoneer.
   *
   * @todo Complete the documentation.
   */
  getPayeeDetails(p4) {
    return this.pyPost('GetPayeeDetails', { p4: p4 });
  }

  /**
   * Submit a payment request to Payoneer's system.
   *
   * Prior to issuing payment instructions, the client's account balance in
   * Payoneer's system must be credited to cover the instructions requested.
   * Payout instruction submission will fail if the client's account balance
   * does not have sufficient funds to perform the payment instructions. In
   * addition, the payee ID must be active.
   *
   * @todo Complete the documentation.
   */
  sendPayment(p4, p5, p6, p7, p8) {
    return this.pyPost(
      'PerformPayoutPayment',
      { p4: p4, p5: p5, p6: p6, p7: p7, p8: p8 }
    );
  }
}

module.exports = Payoneer;
