'use strict';

var formatDate = function(stringDate) {
  var date = new Date(stringDate);

  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  var fullDate = month + '/' + day + '/' + year;
  var fullTime = hour + ':' + minute + ':' + second;

  return fullDate + ' ' + fullTime;
};

module.exports = {
  formatDate: formatDate
};
