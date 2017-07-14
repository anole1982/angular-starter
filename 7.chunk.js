webpackJsonp([7],{

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CryptoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crypto_service__ = __webpack_require__(387);



console.log('`Web rtc` component loaded asynchronously');
var CryptoComponent = (function () {
    function CryptoComponent(cryptoService) {
        this.cryptoService = cryptoService;
        this.source = '你好呀你好嘛你好吗你好哦';
        this.key = '12345678';
    }
    CryptoComponent.prototype.ngOnInit = function () {
    };
    CryptoComponent.prototype.onDecryptClick = function () {
        var buffer = this.hex2bytes(this.result);
        console.log(buffer);
        var encryptedKey;
        var alg;
        var format;
        if (this.cryptoAlgorithm == 'AES-GCM') {
            encryptedKey = this.hex2bytes(this.key);
            console.log(encryptedKey.length);
            alg = { name: 'AES-GCM', iv: crypto.getRandomValues(new Uint8Array(12)) };
            format = 'raw';
            this.aesDecrypt(encryptedKey, buffer, alg, format);
        }
        else if (this.cryptoAlgorithm == 'AES-CBC') {
            encryptedKey = this.hex2bytes('31323334353637383930313233343536');
            console.log(encryptedKey);
            console.log(encryptedKey.length);
            alg = { name: 'AES-CBC', iv: this.hex2bytes('31323334353637383930313233343536') };
            format = 'raw';
            this.aesDecrypt(encryptedKey, buffer, alg, format);
        }
        else if (this.cryptoAlgorithm == 'AES-CTR') {
            encryptedKey = this.hex2bytes(this.key);
            console.log(encryptedKey.length);
            alg = { name: 'AES-CTR', counter: crypto.getRandomValues(new Uint8Array(16)), length: 2 };
            format = 'raw';
            this.aesDecrypt(encryptedKey, buffer, alg, format);
        }
        else if (this.cryptoAlgorithm == 'RSA-OAEP') {
            encryptedKey = { "alg": "RSA-OAEP-256", "d": "io5o-I0dxjVnVhAGZUOVVZe271W0_r7wonGxAY5-9qoLq9ujt5k992V14WRnluXHZ6wMCOXCQENzpx1yEzMt81VJ2lKEo9u66uniUh8Ma9fptwp0h93C5twmCR9n9ja1BUW_XENCo1BJC234jmzE8iOKNoXMNaRdVBqlFYZzwV5r37-_MO2apeGACW6yKIDf4Arr5GOWWtbtTea3UbNfj4dIbHfrSWq1IAqTPY30f60NFMlaAi2tqhhCQu-sePMU0GfMgWilS3-KwFoyTrQKxNz-P5WJxEBlsBvP9TixiUTJOJm8Z-sVvs2dtKSeil4rftP7-_FwOPPFNwNAj5OMQQ", "dp": "vsDS2wSKa-Y19hx93nEiJjXvQl5R8dpxWwMHbffJ-eNeoyjkikjnw7tKUsZ0W3ziVGqLR4KZL_JCYE_pgePifx3XGm5Y8TZKg1tbuOIOAEdDZiwcblJrTbfyl_D9gwRItOL7rV3TWFOHbgYKqqRtDQtDSJoNdFyO5TNPwHOHYGc", "dq": "HKoT-QnX3yWfsO4VukX1dzIAY4vaaAyO0Z9v9aEbEwAva1cgoCkwnfXBBDS5fiWq2EA7UO2aI1zmw3SkojmXD-V_blVbHiEib79akToLZGXCGmvbQ2yX4gMi3bsj1q0I83VpNfPkyqNkmvK3QtoQB3TL8EW_lUEf7zEWkt4AfYE", "e": "AQAB", "ext": true, "key_ops": ["decrypt"], "kty": "RSA", "n": "y4lDq1cm-xhN1CJcx_kVUW4GiTaeAdX4dOMcd9rR7fz18j9ehnX8CGuV3IF1Fn1hIa33YBPlFqEgKNyUagZFyjHziNsk10AEz-5DzTDwDZzauxA2o97fYG3g4kAcxMlbehDCR-zOMk45VWOOXWDMXLsKmrjxhnhbTrcZMPdjgmC49M91EO6DHvjHNK79SazSFgS7dmcgLAJv5ZE82tG4NfbiMTE6bq6UdDrr-diNuRHMXSVtT5Z0yY0uT1jkU5pj6xy9CHnkc6gzk_bgDcylNYmjNgE8b5aY7LoDjPXAZuQ5JTPjjq9R4tt33IkbXnhLhKvppziNh8BciJJvfq_Rdw", "p": "6vvzhtUbxZYKWONphBGJnQ6rRxM8HcwiE1YSwwFBchVH6r-K6XQRrCluWj8yIqRuxvB9We4ELewoOI-Y1zdEWUq-ss8czB5o_q0UvtSxJfojM5E0A6u4zZ7Ffbg0Btdyzdf6HKNlzBy8WMcaJYTmRJwyd4ttHNt1mQtzwnsPSYc", "q": "3b1MuZahRNHLBArWbpXejeJA9AqTGCR32MksZByL2S3C8ms1pOt5z1yN9Yl6pc55ShCLwmJ61PETl248KI7n3wUOYNbyz0wqFscFGBJFFv_0Zusj_0U8okwNkEHMznhfvjKqCwhNT8dpGw3YhfZq5NRZHNFXHcFOFzzZruoadJE", "qi": "n-kbNlX6ROgKG_rNndy7IuojhlZBCqmL_di_x92wVFs4qrOJ-okK76dxd6ekqxdUO76UIjUzlsUsCTJsDfMcMSnbu37FlZf7vDEGb2F6FY7gVMyRDS4uOmarHrdMZIt8eymc_Y6jOwmXsEn33f_Uxxmk6YxexVUdGV3R5JEkJw4" };
            alg = { name: "rsa-oaep", hash: { name: "sha-256" } };
            format = 'jwk';
        }
    };
    CryptoComponent.prototype.rasDecrypt = function (encryptedKey, data, alg, format) {
        var _this = this;
        console.log('encryptedKey:' + encryptedKey);
        this.cryptoService.importKey(format, encryptedKey, alg, true, ['encrypt']).then(function (key) {
            return _this.cryptoService.encrypt(alg, key, data);
        }).then(function (result) {
            _this.result = _this.hex(result);
        });
    };
    CryptoComponent.prototype.aesDecrypt = function (encryptedKey, data, alg, format) {
        var _this = this;
        console.log("encryptedKey::", encryptedKey);
        this.cryptoService.digest('SHA-256', encryptedKey).then(function (keyData) {
            return _this.cryptoService.importKey(format, encryptedKey, alg, true, ['decrypt']);
        }).then(function (key) {
            console.log(key);
            return _this.cryptoService.decrypt(alg, key, data);
        }).then(function (result) {
            _this.decryptHex = _this.hex(result);
            _this.decryptText = _this.string(_this.decryptHex);
        });
    };
    CryptoComponent.prototype.rasEncrypt = function (encryptedKey, data, alg, format) {
        var _this = this;
        console.log('encryptedKey:' + encryptedKey);
        this.cryptoService.importKey(format, encryptedKey, alg, true, ['encrypt']).then(function (key) {
            return _this.cryptoService.encrypt(alg, key, data);
        }).then(function (result) {
            _this.result = _this.hex(result);
        });
    };
    CryptoComponent.prototype.aesEncrypt = function (encryptedKey, data, alg, format) {
        var _this = this;
        this.cryptoService.digest('SHA-1', encryptedKey).then(function (keyData) {
            return _this.cryptoService.importKey(format, encryptedKey, alg, true, ['encrypt']);
        }).then(function (key) {
            console.log(key);
            console.log(data);
            return _this.cryptoService.encrypt(alg, key, data);
        }).then(function (result) {
            console.log(result);
            _this.result = _this.hex(result);
        });
    };
    CryptoComponent.prototype.onCreateUserKeyClick = function () {
        var _this = this;
        var algorithmKeyGen = {
            name: "RSA-OAEP",
            hash: { name: "sha-256" },
            modulusLength: 2048,
            publicExponent: new Uint8Array([0x01, 0x00, 0x01])
        };
        var nonExtractable = false;
        var publicKey = "";
        var privateKey = "";
        var keyPairs;
        this.cryptoService.generateKey(algorithmKeyGen, true, ['encrypt', 'decrypt']).then(function (result) {
            keyPairs = result;
            return Promise.all([
                _this.cryptoService.exportKey("jwk", keyPairs.publicKey),
                _this.cryptoService.exportKey("jwk", keyPairs.privateKey)
            ]);
        }).then(function (keyPairs) {
            console.log(keyPairs);
            _this.publicKey = keyPairs[0];
            _this.privateKey = keyPairs[1];
        });
    };
    CryptoComponent.prototype.onCryptoAlgorithmChange = function () {
        var buffer = this.bytes(this.source);
        console.log(buffer);
        var encryptedKey;
        var alg;
        var format;
        if (this.cryptoAlgorithm == 'AES-GCM') {
            encryptedKey = this.bytes(this.key);
            console.log(encryptedKey.length);
            alg = { name: 'AES-GCM', iv: crypto.getRandomValues(new Uint8Array(12)) };
            format = 'raw';
            this.aesEncrypt(encryptedKey, buffer, alg, format);
        }
        else if (this.cryptoAlgorithm == 'AES-CBC') {
            encryptedKey = this.hex2bytes('31323334353637383930313233343536');
            console.log(encryptedKey);
            console.log(encryptedKey.length);
            alg = { name: 'AES-CBC', iv: this.hex2bytes('31323334353637383930313233343536') };
            format = 'raw';
            this.aesEncrypt(encryptedKey, buffer, alg, format);
        }
        else if (this.cryptoAlgorithm == 'AES-CTR') {
            encryptedKey = this.bytes(this.key);
            console.log(encryptedKey.length);
            alg = { name: 'AES-CTR', counter: crypto.getRandomValues(new Uint8Array(16)), length: 2 };
            format = 'raw';
            this.aesEncrypt(encryptedKey, buffer, alg, format);
        }
        else if (this.cryptoAlgorithm == 'RSA-OAEP') {
            encryptedKey = { "alg": "RSA-OAEP-256", "e": "AQAB", "ext": true, "key_ops": ["encrypt"], "kty": "RSA", "n": "y4lDq1cm-xhN1CJcx_kVUW4GiTaeAdX4dOMcd9rR7fz18j9ehnX8CGuV3IF1Fn1hIa33YBPlFqEgKNyUagZFyjHziNsk10AEz-5DzTDwDZzauxA2o97fYG3g4kAcxMlbehDCR-zOMk45VWOOXWDMXLsKmrjxhnhbTrcZMPdjgmC49M91EO6DHvjHNK79SazSFgS7dmcgLAJv5ZE82tG4NfbiMTE6bq6UdDrr-diNuRHMXSVtT5Z0yY0uT1jkU5pj6xy9CHnkc6gzk_bgDcylNYmjNgE8b5aY7LoDjPXAZuQ5JTPjjq9R4tt33IkbXnhLhKvppziNh8BciJJvfq_Rdw" };
            alg = { name: "rsa-oaep", hash: { name: "sha-256" } };
            format = 'jwk';
        }
    };
    CryptoComponent.prototype.onDigestAlgorithmChange = function () {
        var _this = this;
        var buffer = this.bytes(this.source);
        this.cryptoService.digest(this.digestAlgorithm, buffer).then(function (result) {
            _this.result = _this.hex(result);
        });
    };
    CryptoComponent.prototype.hex2bytes = function (arr) {
        return new Uint8Array(arr.split(/(.{2})/g).filter(function (v) { return v.length > 0; }).map(function (v) { return parseInt(v, 16); }));
    };
    CryptoComponent.prototype.bytes = function (string) {
        return new Uint8Array(encodeURIComponent(string).split('%').filter(function (v, i, arr) { return v.length > 0; }).map(function (v) { return parseInt(v, 16); }));
    };
    CryptoComponent.prototype.string = function (bytes) {
        return decodeURIComponent(bytes.replace(/(.{2})/g, '%$1'));
    };
    CryptoComponent.prototype.hex = function (buffer) {
        var hexCodes = [];
        var view = new DataView(buffer);
        for (var i = 0; i < view.byteLength; i++) {
            var value = view.getUint8(i);
            var stringValue = value < 15 ? '0' + value.toString(16) : value.toString(16);
            hexCodes.push(stringValue);
        }
        return hexCodes.join("");
    };
    CryptoComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* Component */])({
            selector: 'webrtc',
            template: "\n    <article>\n      <header>\n        \u6458\u8981\n      </header>\n      <input type=\"text\" [(ngModel)]=\"source\">\n      <textarea [(ngModel)]=\"result\"></textarea>\n      <textarea [(ngModel)]=\"decryptHex\"></textarea>\n      <div>{{decryptText}}</div>\n    <div class=\"select\">\n      <label for=\"digest\">\u7B97\u6CD5</label>\n      <select id=\"digest\" [(ngModel)]=\"digestAlgorithm\" (change)=\"onDigestAlgorithmChange()\">\n        <option>\u8BF7\u9009\u62E9</option>\n        <option value=\"SHA-1\">SHA-1</option>\n        <option value=\"SHA-256\">SHA-256</option>\n        <option value=\"SHA-384\">SHA-384</option>\n        <option value=\"SHA-512\">SHA-512</option>\n      </select>\n      \n    </div>\n    </article>\n    <hr/>\n    <article>\n      <header>\n        \u52A0\u89E3\u5BC6\n      </header>\n      <button (click)=\"onCreateUserKeyClick()\">\u521B\u5EFA\u79D8\u94A5</button>\n      <input type=\"text\" [(ngModel)]=\"key\"/>\n      <div>publicKey:{{publicKey|json}}</div>\n      <div>privateKey:{{privateKey|json}}</div>\n    <div class=\"select\">\n      <label for=\"crypto\">\u7B97\u6CD5</label>\n      <select id=\"crypto\" [(ngModel)]=\"cryptoAlgorithm\" (change)=\"onCryptoAlgorithmChange()\">\n        <optgroup label=\"\u5BF9\u79F0\">\n          <option value=\"AES-CTR\">AES-CTR</option>\n          <option value=\"AES-CBC\">AES/CBC/PKCS7Padding,Java\u9700\u8981BouncyCastleProvider(bcprov-jdk16)</option>\n          <option value=\"AES-GCM\">AES-GCM</option>\n        </optgroup>\n        <optgroup label=\"\u975E\u5BF9\u79F0\">\n          <option value=\"RSA-OAEP\">AES-OAEP</option>\n        </optgroup>\n      </select>\n      <button (click)=\"onDecryptClick()\">\u89E3\u5BC6</button>\n    </div>\n    </article>\n  "
        }),
        __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__crypto_service__["a" /* CryptoService */]])
    ], CryptoComponent);
    return CryptoComponent;
}());



/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CryptoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(9);


/**
 * https://www.w3.org/TR/WebCryptoAPI/
 *
 *Algorithm name	encrypt	decrypt	sign	verify	digest	generateKey	deriveKey	deriveBits	importKey	exportKey	wrapKey	unwrapKey
 *RSASSA-PKCS1-v1_5	({ kty: "RSA",  alg: "RS1" },{ name: "RSASSA-PKCS1-v1_5",  hash: { name: "SHA-1" } })		✔	✔		✔			✔	✔
 *RSA-PSS			✔	✔		✔			✔	✔
 *RSA-OAEP	✔	✔				✔			✔	✔	✔	✔
 *ECDSA			✔	✔		✔			✔	✔
 *ECDH						✔	✔	✔	✔	✔
 *AES-CTR	✔	✔				✔			✔	✔	✔	✔
 *AES-CBC	✔	✔				✔			✔	✔	✔	✔
 *AES-GCM	✔	✔				✔			✔	✔	✔	✔
 *AES-KW						✔			✔	✔	✔	✔
 *HMAC			✔	✔		✔			✔	✔
 *SHA-1					✔
 *SHA-256					✔
 *SHA-384					✔
 *SHA-512					✔
 *HKDF							✔	✔	✔
 *PBKDF2							✔	✔	✔
 *"encrypt", "decrypt", "sign", "verify", "deriveKey", "deriveBits", "wrapKey" and "unwrapKey".
 * { kty: "RSA",  alg: "RS1" }
 { name: "RSASSA-PKCS1-v1_5",  hash: { name: "SHA-1" }}

 { kty: "RSA",  alg: "RS256" }
 { name: "RSASSA-PKCS1-v1_5",  hash: { name: "SHA-256" }}

 { kty: "RSA",  alg: "RS384" }
 { name: "RSASSA-PKCS1-v1_5",  hash: { name: "SHA-384" }}

 { kty: "RSA",  alg: "RS512" }
 { name: "RSASSA-PKCS1-v1_5",  hash: { name: "SHA-512" }}

 { kty: "RSA",  alg: "PS256" }
 { name: "RSA-PSS",  hash: { name: "SHA-256" }}

 { kty: "RSA",  alg: "PS384" }
 { name: "RSA-PSS",  hash: { name: "SHA-384" }}

 { kty: "RSA",  alg: "PS512" }
 { name: "RSA-PSS",  hash: { name: "SHA-512" }}

 { kty: "RSA",  alg: "RSA-OAEP" }
 { name: "RSA-OAEP",  hash: { name: "SHA-1" }}

 { kty: "RSA",  alg: "RSA-OAEP-256" }
 { name: "RSA-OAEP",  hash: { name: "SHA-256" }}

 { kty: "RSA",  alg: "RSA-OAEP-384" }
 { name: "RSA-OAEP",  hash: { name: "SHA-384" }}

 { kty: "RSA",  alg: "RSA-OAEP-512" }
 { name: "RSA-OAEP",  hash: { name: "SHA-512" }}

 { kty: "EC",  alg: "ES256" }
 { name: "ECDSA",  namedCurve: "P-256"  hash: { name: "SHA-256" }}

 { kty: "EC",  alg: "ES384" }
 { name: "ECDSA",  namedCurve: "P-384"  hash: { name: "SHA-384" }}

 { kty: "EC",  alg: "ES512" }

 { name: "ECDSA",  namedCurve: "P-521"  hash: { name: "SHA-512" }}

 { kty: "oct",  alg: "A128CTR" }
 { name: "AES-CTR",  length: 128 }

 { kty: "oct",  alg: "A192CTR" }
 { name: "AES-CTR",  length: 192 }


 { kty: "oct",  alg: "A256CTR" }
 { name: "AES-CTR",  length: 256 }

 { kty: "oct",  alg: "A128CBC" }
 { name: "AES-CBC",  length: 128 }

 { kty: "oct",  alg: "A192CBC" }
 { name: "AES-CBC",  length: 192 }

 { kty: "oct",  alg: "A256CBC" }
 { name: "AES-CBC",  length: 256 }

 { kty: "oct",  alg: "A128KW" }

 { name: "AES-KW",  length: 128 }

 { kty: "oct",  alg: "A192KW" }
 { name: "AES-KW",  length: 192 }

 { kty: "oct",  alg: "A256KW" }
 { name: "AES-KW",  length: 256 }

 { kty: "oct",  alg: "A128GCM" }
 { name: "AES-GCM",  length: 128 }

 { kty: "oct",  alg: "A192GCM" }
 { name: "AES-GCM",  length: 192 }

 { kty: "oct",  alg: "A256GCM" }
 { name: "AES-GCM",  length: 256 }

 { kty: "oct",  alg: "A128GCMKW" }
 { name: "AES-GCM",  length: 128 }

 { kty: "oct",  alg: "A192GCMKW" }
 { name: "AES-GCM",  length: 192 }

 { kty: "oct",  alg: "A256GCMKW" }
 { name: "AES-GCM",  length: 256 }

 { kty: "oct",  alg: "HS1" }
 { name: "HMAC",  hash: { name: "SHA-1" }}

 { kty: "oct",  alg: "HS256" }
 { name: "HMAC",  hash: { name: "SHA-256" }}

 { kty: "oct",  alg: "HS384" }
 { name: "HMAC",  hash: { name: "SHA-384" }}

 { kty: "oct",  alg: "HS512" }
 { name: "HMAC",  hash: "SHA-512" }
 AES加密模式和填充方式

 算法/模式/填充                16字节加密后数据长度        不满16字节加密后长度
 AES/CBC/NoPadding             16                          不支持
 AES/CBC/PKCS5Padding          32                          16
 AES/CBC/PKCS7Padding  (bcprov-jdk16 支持)        32                          16
 AES/CBC/ISO10126Padding       32                          16
 AES/CFB/NoPadding             16                          原始数据长度
 AES/CFB/PKCS5Padding          32                          16
 AES/CFB/ISO10126Padding       32                          16
 AES/ECB/NoPadding             16                          不支持
 AES/ECB/PKCS5Padding          32                          16
 AES/ECB/ISO10126Padding       32                          16
 AES/OFB/NoPadding             16                          原始数据长度
 AES/OFB/PKCS5Padding          32                          16
 AES/OFB/ISO10126Padding       32                          16
 AES/PCBC/NoPadding            16                          不支持
 AES/PCBC/PKCS5Padding         32                          16
 AES/PCBC/ISO10126Padding      32                          16
 */
var CryptoService = (function () {
    function CryptoService() {
        this.crypto = window.crypto;
    }
    CryptoService.prototype.genRandomNumbers = function (array) {
        return this.crypto.getRandomValues(array);
    };
    /**
     * Parameters
  
     algorithm is an object specifying the encryption function to be used and its parameters;  if there are no parameters, algorithm can be a DOMString with the algorithm name. Supported values¹ are:
     {"name": "AES-CBC", iv} where iv is a 16-byte BufferSource initialization vector (generated by RandomSource.getRandomValues()).
     {"name": "AES-CTR", counter, length} where counter is an initialised 16-byte BufferSource counter block, and length is the length (in bits) of the part of the counter block that is incremented.
     {"name": "AES-GCM", iv[, additionalData, tagLength]} where iv is a BufferSource initialization vector up to 2⁶⁴−1 bytes long; additionalData is a BufferSource authentication data and tagLength is the length of the authentication tag.
     {"name": "RSA-OAEP"[, label]} where label is an optional label to associate with the message.
     key is a CryptoKey containing the key to be used for signing.
     data is a BufferSource containing the data to be encrypted, the plaintext.
     Return value
  
     result is a Promise that returns the ciphertext generated by the encryption of the plaintext as an ArrayBuffer.
     Exceptions
  
     The promise is rejected when the following exceptions are encountered:
  
     InvalidAccessError
     when the requested operation is not valid for the provided key (e.g. invalid encryption algorithm, or invalid key for specified encryption algorithm).
     OperationError
     when the operation failed for an operation-specific reason (e.g. algorithm parameters of invalid sizes, or AES-GCM plaintext longer than 2³⁹−256 bytes).
     Example
     const ptUtf8 = new TextEncoder().encode('my plaintext');
  
     const pwUtf8 = new TextEncoder().encode('my password');
     const pwHash = await crypto.subtle.digest('SHA-256', pwUtf8);
  
     const iv = crypto.getRandomValues(new Uint8Array(12));
     const alg = { name: 'AES-GCM', iv: iv };
     const key = await crypto.subtle.importKey('raw', pwHash, alg, false, ['encrypt']);
  
     const ctBuffer = await crypto.subtle.encrypt(alg, key, ptUtf8);
     The password and the iv will be required for the SubtleCrypto.decrypt() operation.
  
     * @param algorithm
     * @param key
     * @param data
     * @returns {PromiseLike<ArrayBuffer>}
     */
    CryptoService.prototype.encrypt = function (algorithm, key, data) {
        return this.crypto.subtle.encrypt(algorithm, key, data);
    };
    /**
     * Parameters
  
     algorithm is an object specifying the encryption function to be used and its parameters; if there are no parameters, algorithm can be a DOMString with the algorithm name. Supported values¹ are:
     {"name": "AES-CBC", iv} where iv is as supplied to SubtleCrypto.encrypt().
     {"name": "AES-CTR", counter, length} where counter and length are as supplied to SubtleCrypto.encrypt().
     {"name": "AES-GCM", iv[, additionalData, tagLength]} where iv, additionalData, tagLength are as supplied to SubtleCrypto.encrypt().
     {"name": "RSA-OAEP"[, label]} where label is as supplied to SubtleCrypto.encrypt().
     key is a CryptoKey containing the key to be used for decryption.
     data is a BufferSource containing the data to be decrypted, the ciphertext.
     Return value
  
     result is a Promise that returns the plaintext generated by the decryption of the ciphertext.
     Exceptions
  
     The promise is rejected when the following exceptions are encountered:
  
     InvalidAccessError
     when the requested operation is not valid for the provided key (e.g. invalid encryption algorithm, or invalid key for specified encryption algorithm).
     OperationError
     when the operation failed for an operation-specific reason (e.g. algorithm parameters of invalid sizes, or the result of the decryption is a fail).
     Example
     const pwUtf8 = new TextEncoder().encode('my password');
     const pwHash = await crypto.subtle.digest('SHA-256', pwUtf8);
  
     const alg = { name: 'AES-GCM', iv: iv };
     const key = await crypto.subtle.importKey('raw', pwHash, alg, false, ['decrypt']);
  
     const ptBuffer = await crypto.subtle.decrypt(alg, key, ctBuffer);
  
     const plaintext = new TextDecoder().decode(ptBuffer);
     The iv is as supplied to SubtleCrypto.encrypt(); the ctBuffer is the ciphertext returned from SubtleCrypto.encrypt().
  
  
     */
    CryptoService.prototype.decrypt = function (algorithm, key, data) {
        return this.crypto.subtle.decrypt(algorithm, key, data);
    };
    /**
     * SyntaxEDIT
     var hash = crypto.subtle.digest(algo, buffer);
     Parameters
  
     algo is a DOMString defining the hash function to use. Supported values are: SHA-1, SHA-256, SHA-384, and SHA-512.
     buffer is an ArrayBuffer or an ArrayBufferView containing the data to be hashed using the hashing algorithm.
     Return value
  
     hash is a Promise that returns the hash on success.
     ExampleEDIT
     Here's an example that computes the sha256 of a string and display its hex digest.
  
     function sha256(str) {
    // We transform the string into an arraybuffer.
    var buffer = new TextEncoder("utf-8").encode(str);
    return crypto.subtle.digest("SHA-256", buffer).then(function (hash) {
      return hex(hash);
    });
  }
  
     function hex(buffer) {
    var hexCodes = [];
    var view = new DataView(buffer);
    for (var i = 0; i < view.byteLength; i += 4) {
      // Using getUint32 reduces the number of iterations needed (we process 4 bytes each time)
      var value = view.getUint32(i)
      // toString(16) will give the hex representation of the number without padding
      var stringValue = value.toString(16)
      // We use concatenation and slice for padding
      var padding = '00000000'
      var paddedValue = (padding + stringValue).slice(-padding.length)
      hexCodes.push(paddedValue);
    }
  
    // Join all the hex strings into one
    return hexCodes.join("");
  }
  
     sha256("foobar").then(function(digest) {
    console.log(digest);
  }); // outputs "c3ab8ff13720e8ad9047dd39466b3c8974e592c2fa383d4a3960714caef0c4f2"
     * @returns {PromiseLike<ArrayBuffer>}
     */
    CryptoService.prototype.digest = function (algo, buffer) {
        return this.crypto.subtle.digest(algo, buffer);
    };
    /**
     * SyntaxEDIT
     var result = crypto.deriveKey(algo, masterKey, derivedKeyAlgo, extractable, keyUsages);
     Parameters
  
     algo is an object defining the derivation algorithm to use. Supported values are:
     {"name": "ECDH", "public": publicKey}
     {"name": "DH", "public": publicKey}
     {"name": "PBKDF2", salt, iterations, hash} where salt is an ArrayBuffer or an ArrayBufferView, iterations is the number of iterations and hash is a DOMString identifying the hashing algorithm to use.
     {"name": "HKDF-CTR", hash, label, context}
     masterKey is a CryptoKey representing the master key to be used by the key derivation algorithm.
     derivedKeyAlgo is an object defining the algorithm the derived key will be used for or a DOMString as a shortcut for {"name": derivedKeyAlgo}. For AES a length property is also required, possible values are 128, 192 or 256 bits.
     extractable is a Boolean indicating if the key can be extracted from the CryptoKey object at a later stage.
     keyUsages  is an Array indicating what can be done with the derivated key. Possible values of the array are:
     "encrypt", allowing the key to be used for encrypting messages.
     "decrypt", allowing the key to be used for decrypting messages.
     "sign", allowing the key to be used for signing messages.
     "verify", allowing the key to be used for verifying the signature of messages.
     "deriveKey", allowing the key to be used as a base key when deriving a new key.
     "deriveBits", allowing the key to be used as a base key when deriving bits of data for use in cryptographic primitives.
     "wrapKey", allowing the key to wrap a symmetric key for usage (transfer, storage) in unsecure environments.
     "unwrapKey", allowing the key to unwrap a symmetric key for usage (transfer, storage) in unsecure environments.
     Return value
  
     result is a Promise that returns the derivated key as a CryptoKey or a CryptoKeyPair.
     Exceptions
  
     The promise is rejected when one of the following exceptions are encountered:
  
     InvalidAccessError when the master key is not a key for the requested derivation algorithm or if the CryptoKey.usages value of that key doesn't contain "deriveKey".
     NotSupported when trying to use an algorithm that is either unknown or isn't suitable for derivation, or if the algorithm requested for the derived key doesn't define a key length.
     SyntaxError when keyUsages is empty but the unwrapped key is of type "secret" or "private".
     ExampleEDIT
     Here's an example showing how to use deriveKey() to create a Secure Remote Password (also known as Proof of Secret) from a user's password.
  
     // salt should be Uint8Array or ArrayBuffer
     var saltBuffer = Unibabel.hexToBuffer('e85c53e7f119d41fd7895cdc9d7bb9dd');
  
     // don't use naïve approaches for converting text, otherwise international
     // characters won't have the correct byte sequences. Use TextEncoder when
     // available or otherwise use relevant polyfills
     var passphraseKey = Unibabel.utf8ToBuffer("I hëart årt and £$¢!");
  
     // You should firstly import your passphrase Uint8array into a CryptoKey
     window.crypto.subtle.importKey(
     'raw',
     passphraseKey,
     {name: 'PBKDF2'},
     false,
     ['deriveBits', 'deriveKey']
     ).then(function(key) {
  
    return window.crypto.subtle.deriveKey(
      { "name": 'PBKDF2',
        "salt": saltBuffer,
        // don't get too ambitious, or at least remember
        // that low-power phones will access your app
        "iterations": 100,
        "hash": 'SHA-256'
      },
      key,
  
      // Note: for this demo we don't actually need a cipher suite,
      // but the api requires that it must be specified.
  
      // For AES the length required to be 128 or 256 bits (not bytes)
      { "name": 'AES-CBC', "length": 256 },
  
      // Whether or not the key is extractable (less secure) or not (more secure)
      // when false, the key can only be passed as a web crypto object, not inspected
      true,
  
      // this web crypto object will only be allowed for these functions
      [ "encrypt", "decrypt" ]
    )
  }).then(function (webKey) {
  
    return crypto.subtle.exportKey("raw", webKey);
  
  }).then(function (buffer) {
  
      var proofOfSecret = Unibabel.bufferToHex(buffer);
      // this proof-of-secret / secure-remote password
      // can now be sent in place of the user's password
  });
     * @param algo
     * @param masterKey
     * @param derivedKeyAlgo
     * @param extractable
     * @param keyUsages
     */
    CryptoService.prototype.deriveKey = function (algo, masterKey, derivedKeyAlgo, extractable, keyUsages) {
        return this.crypto.subtle.deriveKey(algo, masterKey, derivedKeyAlgo, extractable, keyUsages);
    };
    /**
     * Parameters
  
     format is an enumerated value describing the data format in which the key has to be exported. It can be one of the following:
     "raw", the key as an array of bytes, usually a secret key.
     "pkcs8" a private key, in the IETF Public Key-Cryptographic Standard Encryption #8.
     "spki", usually a public key, in the Simple public key infrastructure standard
     "jwk", the key in the JSON Web Key format.
     key is the CryptoKey to export.
     Return value
  
     result is a Promise that returns the key in the requested format.
     Exceptions
  
     The promise is rejected when one of the following exceptions is encountered:
  
     InvalidAccessError when trying to export an non-extractable key.
     NotSupported when trying to export in an unknown format.
     TypeError when trying to use an invalid format.
     * @param format
     * @param key
     */
    CryptoService.prototype.exportKey = function (format, key) {
        return this.crypto.subtle.exportKey(format, key);
    };
    /**
     * Parameters
  
     format is an enumerated value describing the data format of the key to imported. It can be one of the following:
     "raw", the key as an array of bytes, usually a secret key.
     "pkcs8" a private key, in the IETF Public Key-Cryptographic Standard Encryption #8.
     "spki", usually a public key, in the Simple public key infrastructure standard
     "jwk", the key in the JSON Web Key format.
     keyData is an ArrayBuffer or a JSONWebKey containing the key in the given format.
     algo is a DOMString defining the signature function to use. Supported values are: AES-CTR, AES-CBC, AES-GCM, RSA-OAEP, AES-KW, HMAC, RSASSA-PKCS1-v1_5, ECDSA, ECDH, DH.
     extractable is a Boolean indicating if the key can be extracted from the CryptoKey object at a later stage.
     usages is an Array indicating what can be done with the key. Possible values of the array are:
     "encrypt", allowing the key to be used for encrypting messages.
     "decrypt", allowing the key to be used for decrypting messages.
     "sign", allowing the key to be used for signing messages.
     "verify", allowing the key to be used for verifying the signature of messages.
     "deriveKey", allowing the key to be used as a base key when deriving a new key.
     "deriveBits", allowing the key to be used as a base key when deriving bits of data for use in cryptographic primitives.
     "wrapKey", allowing the key to wrap a symmetric key for usage (transfer, storage) in unsecure environments.
     "unwrapKey", allowing the key to unwrap a symmetric key for usage (transfer, storage) in unsecure environments.
     Return value
  
     result is a Promise that returns the generated CryptoKey.
     Exceptions
  
     The promise is rejected when one of the following exceptions is encountered:
  
     SyntaxError when keyUsages is empty but the unwrapped key is of type "secret" or "private".
     TypeError when trying to use an invalid format or if the keyData is not suited for that format.
     */
    CryptoService.prototype.importKey = function (format, keyData, algo, extractable, usages) {
        return this.crypto.subtle.importKey(format, keyData, algo, extractable, usages);
    };
    /**
     * Parameters
  
     algo is a dictionary object defining the key generation function to use. Supported algo are: AES-CBC, AES-CTR, AES-GCM, RSA-OAEP, AES-KW, HMAC, RSASSA-PKCS1-v1_5, ECDSA, ECDH, and DH.
     extractable is a Boolean indicating if the key can be extracted from the CryptoKey object at a later stage.
     keyUsages  is an Array indicating what can be done with the newly generated key. Possible values of the array are:
     "encrypt", allowing the key to be used for encrypting messages.
     "decrypt", allowing the key to be used for decrypting messages.
     "sign", allowing the key to be used for signing messages.
     "verify", allowing the key to be used for verifying the signature of messages.
     "deriveKey", allowing the key to be used as a base key when deriving a new key.
     "deriveBits", allowing the key to be used as a base key when deriving bits of data for use in cryptographic primitives.
     "wrapKey", allowing the key to wrap a symmetric key for usage (transfer, storage) in unsecure environments.
     "unwrapKey", allowing the key to unwrap a symmetric key for usage (transfer, storage) in unsecure environments.
     Return value
  
     result is a Promise that returns the generated key as a CryptoKey or a CryptoKeyPair.
     Exceptions
  
     The promise is rejected when the following exception is encountered:
  
     InvalidAccessError when the signing key is not a key for the request signing algorithm or when trying to use an algorithm that is either unknown or isn't suitable for signing.
  
     * @param algo
     * @param extractable
     * @param keyUsages
     * @returns {PromiseLike<CryptoKeyPair|CryptoKey>}
     */
    CryptoService.prototype.generateKey = function (algo, extractable, keyUsages) {
        return this.crypto.subtle.generateKey(algo, extractable, keyUsages);
    };
    /**
     * Parameters
  
     algo is a DOMString defining the signature function to use. Supported values are: HMAC, RSASSA-PKCS1-v1_5, and ECDSA.
     key is a CryptoKey containing the private key to be used for signing.
     text2sign is a ArrayBuffer or an ArrayBufferView containing the data to be signed.
     Return value
  
     signature is a Promise that returns the signature on success.
     Exceptions
  
     The promise is rejected when the following exception is encountered:
  
     InvalidAccessError when the signing key is not a key for the request signing algorithm or when trying to use an algorithm that is either unknown or isn't suitable for signing.
     * @param algo
     * @param key
     * @param text2sign
     */
    CryptoService.prototype.sign = function (algo, key, text2sign) {
        return this.crypto.subtle.sign(algo, key, text2sign);
    };
    /**
     * Parameters
  
     signature is a ArrayBuffer or an ArrayBufferView containing the signature to verify.
     text2verify is a ArrayBuffer or an ArrayBufferView containing the data whose signature as to be verified.
     key is a CryptoKey containing the key to be used to verify the signature. It is the secret key for a symmetric algorithm and the public key for an asymmetric algorithm.
     algo is a DOMString defining the signature function to use. Supported values are: HMAC, RSASSA-PKCS1-v1_5, and ECDSA.
     Return value
  
     result is a Promise that returns a Boolean indicating if the signature has been a success on success.
     Exceptions
  
     The promise is rejected when the following exception is encountered:
  
     InvalidAccessError when the encryption key is not a key for the requested verifying algorithm or when trying to use an algorithm that is either unknown or isn't suitable for a verify operation.
     * @param algo
     * @param key
     * @param signature
     * @param text2verify
     */
    CryptoService.prototype.verify = function (algo, key, signature, text2verify) {
        return this.crypto.subtle.verify(algo, key, signature, text2verify);
    };
    /**
     * Parameters
  
     format is an enumerated value describing the data format of the key to unwrapped. It can be one of the following:
     "raw", the key as an array of bytes, usually a secret key.
     "pkcs8" a private key, in the IETF Public Key-Cryptographic Standard Encryption #8.
     "spki", usually a public key, in the Simple public key infrastructure standard
     "jwk", the key in the JSON Web Key format.
     wrappedKey is a ArrayBuffer or a ... containing the wrapped key in the given format.
     unwrappingKey is the CryptoKey to use to unwrap.
     unwrapAlgo is the DOMString} representing the algorithm used to perform the unwrapping. It is one of the following: AES-CBC, AES-CTR, AES-GCM, RSA-OAEP, and AES-KW.
     unwrappedKeyAlgo is the DOMString} representing the algorithm of the wrapped key.
     extractable is a Boolean indicating if the key can be extracted from the CryptoKey object at a later stage.
     keyUsages  is an Array indicating what can be done with the unwrapped key. Possible values of the array are:
     "encrypt", allowing the key to be used for encrypting messages.
     "decrypt", allowing the key to be used for decrypting messages.
     "sign", allowing the key to be used for signing messages.
     "verify", allowing the key to be used for verifying the signature of messages.
     "deriveKey", allowing the key to be used as a base key when deriving a new key.
     "deriveBits", allowing the key to be used as a base key when deriving bits of data for use in cryptographic primitives.
     "wrapKey", allowing the key to wrap a symmetric key for usage (transfer, storage) in unsecure environments.
     "unwrapKey", allowing the key to unwrap a symmetric key for usage (transfer, storage) in unsecure environments.
     Return value
  
     result is a Promise that returns the unwrapped key as a CryptoKey
     Exceptions
  
     The promise is rejected when one of the following exceptions is encountered:
  
     InvalidAccessError when the unwrapping key is not a key for the requested unwrap algorithm or if the CryptoKey.usages value of that key doesn't contain "unwrap".
     NotSupported when trying to use an algorithm that is either unknown or isn't suitable for encryption or wrapping.
     SyntaxError when keyUsages is empty but the unwrapped key is of type "secret" or "private".
     TypeError when trying to use an invalid format.
     */
    CryptoService.prototype.unwrapKey = function (format, wrappedKey, unwrappingKey, unwrapAlgo, unwrappedKeyAlgo, extractable, keyUsages) {
        return this.crypto.subtle.unwrapKey(format, wrappedKey, unwrappingKey, unwrapAlgo, unwrappedKeyAlgo, extractable, keyUsages);
    };
    /**
     * Parameters
  
     format is an enumerated value describing the data format in which the key must be wrapped. It can be one of the following:
     "raw", the key as an array of bytes, usually a secret key.
     "pkcs8" a private key, in the IETF Public Key-Cryptographic Standard Encryption #8.
     "spki", usually a public key, in the Simple public key infrastructure standard
     "jwk", the key in the JSON Web Key format.
     key is the CryptoKey to wrap.
     wrappingkey is the CryptoKey used to perform the wrapping.
     wrapAlgo is the DOMString} representing the algorithm used to perform the wrapping. It is one of the following: AES-CBC, AES-CTR, AES-GCM, RSA-OAEP, and AES-KW.
     Return value
  
     result is a Promise that returns the wrapped key in the requested format.
     Exceptions
  
     The promise is rejected when one of the following exceptions is encountered:
  
     InvalidAccessError when the wrapping key is not a key for the requested wrap algorithm.
     NotSupported when trying to use an algorithm that is either unknown or isn't suitable for encryption or wrapping.
     TypeError when trying to use an invalid format.
     */
    CryptoService.prototype.wrapKey = function (format, key, wrappingKey, wrapAlgo) {
        return this.crypto.subtle.wrapKey(format, key, wrappingKey, wrapAlgo);
    };
    CryptoService.prototype.getRandomValues = function (arr) {
        return this.crypto.getRandomValues(arr);
    };
    CryptoService = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])()
    ], CryptoService);
    return CryptoService;
}());



/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CryptoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__crypto_routes__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__crypto_component__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__crypto_service__ = __webpack_require__(387);








console.log('`Person CURD` bundle loaded asynchronously');
var CryptoModule = (function () {
    function CryptoModule() {
    }
    CryptoModule.routes = __WEBPACK_IMPORTED_MODULE_5__crypto_routes__["a" /* routes */];
    CryptoModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["y" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__crypto_component__["a" /* CryptoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__crypto_routes__["a" /* routes */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__crypto_service__["a" /* CryptoService */]
            ]
        })
    ], CryptoModule);
    return CryptoModule;
}());



/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__crypto_component__ = __webpack_require__(386);

var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__crypto_component__["a" /* CryptoComponent */], pathMatch: 'full' },
];


/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__crypto_module__ = __webpack_require__(402);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CryptoModule", function() { return __WEBPACK_IMPORTED_MODULE_0__crypto_module__["a"]; });



/***/ })

});
//# sourceMappingURL=7.chunk.js.map