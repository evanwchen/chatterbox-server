var utils = require("./utils");
var fs = require('fs');
var path = require('path');

var requestHandler = function(request, response, pathname) {
  var actions = {
    'GET': function (request, response) {
      var fileContents = fs.readFileSync('../client' + pathname);
      var ext = path.extname(pathname);
      var contentType;
      if (ext === '.js') {
        contentType = 'application/javascript';
      } else if (ext === '.css') {
        contentType = 'text/css';
      } 

      utils.sendResponse(response, fileContents, 200, contentType);
    }, 
    'POST': function(request, response) {
      utils.sendResponse(response, null, 403);
    },
    'OPTIONS': function(request, response) {
      utils.sendResponse(response, null);
    }  
  };
};