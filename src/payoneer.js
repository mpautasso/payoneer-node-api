/**
 * Payoneer API Client.
 *
 * @module Payoneer
 *
 * @todo Complete the documentation.
 */
const util = require('./utils/DateFormater');
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
   * @param {string} mname - The method name (eg.: 'GetVersion').
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
   * Return the status of the API and payout services.
   *
   * @return {Object} Representing API status.
   */
  echo() {
    return this.pyPost('Echo');
  }

  /**
   * Return the API version.
   *
   * @return {Object} Representing API version.
   */
  getVersion() {
    return this.pyPost('GetVersion');
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
   * @param {string} p4 - Program ID.
   * @param {string} p5 - Internal Payment ID.
   * @param {string} p6 - Internal Payee ID.
   * @param {number} p7 - Amount (eg.: 10.00).
   * @param {string} p8 - Description.
   * @param {number} [p9] - Payment Date (eg.: 04/02/2017 12:06:00).
   * @param {string} [p10] - Group ID.
   * @param {string} [currency] - Description, 3 letters (eg.: 'USD').
   *
   * @return {Object} Representing performed payment status.
   */
  sendPayment(p4, p5, p6, p7, p8, ...[p9, p10, currency]) {
    return this.pyPost(
      'PerformPayoutPayment',
      { p4: p4, p5: p5, p6: p6, p7: p7, p8: p8, p9: p9, p10: p10, currency: currency }
    );
  }

  /**
   * Report the status of a payment that was previously sent to the Payoneer
   * system.
   *
   * @param {string} p4 - Internal Payee ID.
   * @param {string} p5 - Internal Payment ID.
   *
   * @return {Object} Representing payment status.
   */
  getPaymentStatus(p4, p5) {
    return this.pyPost('GetPaymentStatus', { p4: p4, p5: p5 });
  }

  /**
   * Return the client's available account balance.
   *
   * @return {Object} Representing the client's account status.
   */
  getAccountDetails() {
    return this.pyPost('GetAccountDetails');
  }

  /**
   * Return details about the requested payee and its status at Payoneer.
   *
   * @param {string} p4 - Payee ID.
   *
   * @return {Object} Representing the payee account details.
   */
  getPayeeDetails(p4) {
    return this.pyPost('GetPayeeDetails', { p4: p4 });
  }

  /**
   * Change the ID of an existing payee (old) to a new one.
   *
   * @param {string} p4 - Old Payee ID.
   * @param {string} p5 - New Payee ID.
   *
   * @return {Object} Representing the new Payee ID.
   */
  changePayeeId(p4, p5) {
    return this.pyPost('ChangePayeeID', { p4: p4, p5: p5 });
  }

  /**
   * Return all payments made to payees, grouped by a payment method.
   * API call limit is for a 1-month period.
   *
   * @param {integer} [p4=0] - Report Type. Presently only XML is supported (eg.: XML=0 ).
   * @param {Date} p5 - Start Date.
   * @param {Date} p6 - End Date.
   *
   * @return {Object} Representing the report.
   */
  getPayeesReport(p4, p5, p6) {
    let starDate = util.formatDate(p5);
    let endDate = util.formatDate(p6);

    return this.pyPost('GetPayeesReport', { p4: p4, p5: starDate, p6: endDate });
  }

  /**
   * Return all payments made to a specified payee.
   *
   * @param {string} p4 - Payee ID.
   *
   * @return {Object} Representing the report.
   */
  getSinglePayeeReport(p4) {
    return this.pyPost('GetSinglePayeeReport', { p4: p4 });
  }

  /**
   * Return a list of all payments that are unclaimed in XML format.
   *
   * @return {Object} Representing the list of unclaimed payments.
   */
  getUnclaimedPaymentsXml() {
    return this.pyPost('GetUnclaimedPaymentsXML');
  }

  /**
   * Cancel a payment that has not been processed and loaded to an account.
   *
   * @param {string} p4 - Internal Payeement ID.
   *
   * @return {Object} Representing status of the transaction.
   */
  cancelPayment(p4) {
    return this.pyPost('CancelPayment', { p4: p4 });
  }
}

module.exports = Payoneer;
