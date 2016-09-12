(function () {
    'use strict';
    var identicon = require('identicon');
    var fs = require('fs');
    var toIco = require('to-ico');

    identicon.generate({id: __dirname, size: 16}, (err, buffer) => {
      if (err) throw err;

      toIco([buffer]).then(buf => {
        fs.writeFileSync('favicon.ico', buf);
      });
    });
}());

