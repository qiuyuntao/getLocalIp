/**
 * @authors 却痕 - 邱韵涛
 * @email yuntao.qyt@alibaba-inc.com
 * @date    2015-10-15 15:51:15
 */

function getIPAdress() {
  var interfaces = require('os').networkInterfaces();
  for (var devName in interfaces) {
    var iface = interfaces[devName];
    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address;
      }
    }
  }
}

console.log(getIPAdress());
