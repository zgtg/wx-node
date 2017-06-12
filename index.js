var express = require('express');
var common = require('./common.js');
var config = require('./config/config.js');
var app = express();

/**
* 微信接入接口
*/
app.get('/weixin/api/callback', function(request, response) {
	var signature = request.query.signature;
	var timestamp = request.query.timestamp;
	var nonce = request.query.nonce;
	var echostr = request.query.echostr;

	var reqVal = [nonce, timestamp, config.token].sort().join('');

	var sign = common.sha1(reqVal);

	response.setHeader('Content-Type', 'text/plain');

	response.end(signature == sign ? echostr : 'sign error');

});

app.listen('8888');