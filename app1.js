var http = require('http');
var https = require('https');

var mongoose = require('mongoose');



var getLegislators = function() {
return https.get(
  {
    host: 'api.iga.in.gov',
    port: 443,
    path: '/2016/legislators'
  }
  , function(response) {
    var body = '';
    response.on('data', function(d){
      body+= d;
    });

    response.on('end', function(){
      console.log('This is the body' + body);
    });

    response.on('error', function(err){
      console.log(err);
    });
  }
)

}


getLegislators();
