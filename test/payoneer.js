const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const nock = require('nock');
chai.use(chaiAsPromised);
const should = chai.should();
const config = require('./config');

describe('Payoneer Module', function() {

  before(function() {
    nock.disableNetConnect();
  });

  afterEach(function() {
    if (!nock.isDone()) {
      console.error('pending mocks: %j', nock.pendingMocks());
    }
    nock.cleanAll();
  });

  describe('Initialization', function() {
    it('should load the PYRequest module');
  });

  describe('echo method', function() {
    it('should provide echo method');
    it('should use mname = Echo');
  });

  describe('getVersion method', function() {
    it('should provide getVersion method');
    it('should use mname = GetVersion');
  });

  describe('sendPayment method', function() {
    it('should provide sendPayment method');
    it('should use mname = PerformPayoutPayment');
  });

  describe('getPaymentStatus method', function() {
    it('should provide getPaymentStatus method');
    it('should use mname = GetPaymentStatus');
  });

  describe('queryAccountBalance method', function() {
    it('should provide queryAccountBalance method');
    it('should use mname = GetAccountDetails');
  });

  describe('getPayeeDetails method', function() {
    it('should provide getPayeeDetails method');
    it('should use mname = GetPayeeDetails');
  });

  describe('changePayeeId method', function() {
    it('should provide changePayeeId method');
    it('should use mname = ChangePayeeID');
  });

  describe('getPayeesReport method', function() {
    it('should provide getPayeesReport method');
    it('should use mname = GetPayeesReport');
  });

  describe('getSinglePayeeReport method', function() {
    it('should provide getSinglePayeeReport method');
    it('should use mname = GetSinglePayeeReport');
  });

  describe('getUnclaimedPaymentsXML method', function() {
    it('should provide getUnclaimedPaymentsXML method');
    it('should use mname = GetUnclaimedPaymentsXML');
  });

  describe('getUnclaimedPaymentsCSV method', function() {
    it('should provide getUnclaimedPaymentsCSV method');
    it('should use mname = GetUnclaimedPaymentsCSV');
  });

  describe('cancelPayment method', function() {
    it('should provide cancelPayment method');
    it('should use mname = CancelPayment');
  });

  describe('movePayeeProgram method', function() {
    it('should provide movePayeeProgram method');
    it('should use mname = MovePayeeProgram');
  });
});
