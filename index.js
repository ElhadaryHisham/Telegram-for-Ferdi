"use strict";
module.exports = Franz =>
  class Facebook extends Franz {
    overrideUserAgent() {
      return "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0 Safari/605.1.15";
    }
  };
