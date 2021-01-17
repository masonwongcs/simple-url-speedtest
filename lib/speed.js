"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(urlArr, callback) {
  var list = [];
  urlArr.forEach(function (item, index) {
    var image = new Image();
    var startTime, endTime;
    startTime = Date.now();
    image.src = item + "/" + Math.random();

    image.onerror = function () {
      endTime = Date.now();
      var ping = endTime - startTime;
      list[index] = {
        url: item,
        ping: ping
      };
    };
  });
  var callbackInterval = setInterval(function () {
    var notEmptyList = list.filter(function (item) {
      return item;
    });

    if (notEmptyList.length === urlArr.length) {
      clearInterval(callbackInterval);
      callback(list);
    }
  }, 0);
};

exports["default"] = _default;