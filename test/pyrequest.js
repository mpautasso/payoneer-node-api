const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const nock = require('nock');
chai.use(chaiAsPromised);
const should = chai.should();
const config = require('./config');
const PYRequest = require('./../src/pyrequest');

const pyRequest = new PYRequest(config);

describe('PYRequest Module', function() {

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
    it('should load the basic configuration', function() {
      pyRequest.config.should.equal(config);
    });

    it('should load the credentials', function() {
      pyRequest.credentials.p1.should.equal(config.username);
      pyRequest.credentials.p2.should.equal(config.apiPassword);
      pyRequest.credentials.p3.should.equal(config.partnerId);
    });
  });

  describe('POST requests', function() {
    it('should return a rejected Promise if mname is invalid', function() {
      let getResponse = require('./api-mocked-responses/error-A00B556F');
      let qs = '';

      qs += `/?p1=${config.username}&p2=${config.apiPassword}`;
      qs += `&p3=${config.partnerId}&mname=invalidMethodName`;

      nock(config.uri)
        .post(qs)
        .reply(201, getResponse());

      pyRequest.post('invalidMethodName').should.be.rejectedWith(
        'A00B556F - Unauthorized Access or invalid parameters, please check your IP address and parameters.'
      );
    });

    it('should return a rejected Promise if API response contains invalid XML', function() {
      let qs = '';

      qs += `/?p1=${config.username}&p2=${config.apiPassword}`;
      qs += `&p3=${config.partnerId}&mname=nonExistentMethod`;

      nock(config.uri)
        .post(qs)
        .reply(201, '<invalid<<><xml<<');

      pyRequest.post('nonExistentMethod').should.be.rejectedWith(
        'Error: Invalid character in tag name\nLine: 0\nColumn: 9\nChar: <'
      );
    });

    it('should return a resolved Promise with an JS Object if API call is successful', function() {
      let getResponse = require('./api-mocked-responses/getVersion');
      let qs = '';

      qs += `/?p1=${config.username}&p2=${config.apiPassword}`;
      qs += `&p3=${config.partnerId}&mname=GetVersion`;

      nock(config.uri)
        .post(qs)
        .reply(201, getResponse());

      let promise = pyRequest.post('GetVersion');

      promise.should.be.fulfilled;
    });
  });

});
