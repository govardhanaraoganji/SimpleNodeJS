
/*
 * GET data page.
 */
var url = require("url");

exports.addStudent = function(req, res){
  	res.json({message:'Student added successfully.', requestMethod: req.method});
};

exports.addQuestion = function(req, res){
  	res.json({message:'Question added successfully.', requestMethod: req.method});
};


