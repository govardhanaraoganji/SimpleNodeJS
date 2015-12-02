
/*
 * GET home page.
 */
var url = require("url");
var i18n = require("i18n");

exports.index = function(req, res){
  //Getting privious URL
  var refererHeader = req.header('Referer') != undefined ? req.header('Referer') : '/' ;
  var refererURL = url.parse(refererHeader, true);
  res.json({message: 'I am getting response from NodeJS.', referer: refererURL.path, requestMethod: req.method});
};
