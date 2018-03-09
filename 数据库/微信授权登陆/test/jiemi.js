var Cryptography=require("../src/Cryptography");


var input="P9nAzCzyDtyTWESHep1vC5X9xho/qYX3Zpb4yKa9SKld1DsH3Iyt3tP3zNdtp+4RPcs8TgAE7OaBO+FZXvnaqQ==";


var EncodingAESKey="jWmYm7qr5nMoAUwZRjGtBxmz3KA1tkAj3ykkR6q2B2C";


console.log(Cryptography.AES_decrypt(input,EncodingAESKey));