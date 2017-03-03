var rp = require('request-promise');
var parseXML = require('xml2js').parseString;

var PYRequest = function(config) {
  return {
    post: function(mname, parameters) {
      var credentials = {
        p1: config.username,
        p2: config.apiPassword,
        p3: config.partnerId
      };

      var qs = Object.assign(credentials, { mname: mname }, parameters);

      var options = {
        uri: config.uri,
        method: 'POST',
        port: 443,
        qs: qs
      };

      var response = rp(options);

      return new Promise(function(success, reject) {
        response.then(function(data) {
          parseXML(data, function(error, result) {
            if (error) {
              reject(new Error(error));
            }
            success(result);
          });
        })
        .catch(function(error) {
          reject(error);
        });
      });
    }
  };
};

module.exports = PYRequest;
