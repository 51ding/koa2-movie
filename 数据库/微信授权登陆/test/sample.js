var WXBizMsgCrypt = require("../src/WXBizMsgCrypt");


var wxcpt = new WXBizMsgCrypt({
	sToken: "QDG6eK",
	sCorpID: "wx5823bf96d3bd56c7",
	sEncodingAESKey: "jWmYm7qr5nMoAUwZRjGtBxmz3KA1tkAj3ykkR6q2B2C"
});

var sVerifyMsgSig = "5c45ff5e21c57e6ad56bac8758b79b1d9ac89fd3";
var sVerifyTimeStamp = "1409659589";
var sVerifyNonce = "263014780";
var sVerifyEchoStr = "P9nAzCzyDtyTWESHep1vC5X9xho/qYX3Zpb4yKa9SKld1DsH3Iyt3tP3zNdtp+4RPcs8TgAE7OaBO+FZXvnaqQ==";
            
console.log(wxcpt.VerifyURL(sVerifyMsgSig,sVerifyTimeStamp,sVerifyNonce,sVerifyEchoStr));
