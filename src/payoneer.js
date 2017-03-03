function Payoneer(config){
  var pyrequest = require('./pyrequest.js')(config)

  return {
    getVersion: function() {
      return new Promise(function(success, reject){
        pyrequest.post('GetVersion').then(function(data){
          success(data)
        }).catch(function(error){
          reject(error)
        })
      })
    },

    getPaymentStatus: function(p4, p5) {
      return new Promise(function(success, reject){
        pyrequest.post('GetPaymentStatus', { p4: p4, p5: p5 }).then(function(data){
          success(data)
        }).catch(function(error){
          reject(error)
        })
      })
    },

    getPayeeDetails: function(p4) {
      return new Promise(function(success, reject){
        pyrequest.post('GetPayeeDetails', { p4: p4 }).then(function(data){
          success(data)
        }).catch(function(error){
          reject(error)
        })
      })
    },

    sendPayment: function(p4, p5, p6, p7, p8) {
      return new Promise(function(success, reject){
        pyrequest.post('PerformPayoutPayment', { p4: p4, p5: p5, p6: p6, p7: p7, p8: p8 }).then(function(data){
          success(data)
        }).catch(function(error){
          reject(error)
        })
      })
    },

    getPaymentStatus: function(p4, p5) {
      return new Promise(function(success, reject){
        pyrequest.post('GetPaymentStatus', { p4: p4, p5: p5 }).then(function(data){
          success(data)
        }).catch(function(error){
          reject(error)
        })
      })
    }
  }
}

module.exports = Payoneer
