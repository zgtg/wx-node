var crypto = require('crypto');
module.exports = {
	/**
	* 字符串SHA1加密
	* @param str 待加密的字符串
	*/
	sha1 : function(str) {
		var encry = crypto.createHash('sha1');
		encry.update(str);
		return encry.digest('hex');
	},
	/**
	* 对象的key排序进行字符串拼接
	* @param 待排序的对象
	*/
	sortObjKeys : function(obj) {
		var sortKeys = Object.keys(obj).sort();

		var reqSortedStr = '';

		for(var i in sortKeys) {
			var key = sortKeys[i];
			reqSortedStr += key + '=' + obj[key] + (i != sortKeys.length -1 ? '&' : '');
		}
		return reqSortedStr;
	}
}