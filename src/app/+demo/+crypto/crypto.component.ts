import {
  Component,
  OnInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import { CryptoService } from './crypto.service';
console.log('`Web rtc` component loaded asynchronously');

@Component({
  selector: 'webrtc',
  template: `
    <article>
      <header>
        摘要
      </header>
      <input type="text" [(ngModel)]="source">
      <textarea [(ngModel)]="result"></textarea>
      <textarea [(ngModel)]="decryptHex"></textarea>
      <div>{{decryptText}}</div>
    <div class="select">
      <label for="digest">算法</label>
      <select id="digest" [(ngModel)]="digestAlgorithm" (change)="onDigestAlgorithmChange()">
        <option>请选择</option>
        <option value="SHA-1">SHA-1</option>
        <option value="SHA-256">SHA-256</option>
        <option value="SHA-384">SHA-384</option>
        <option value="SHA-512">SHA-512</option>
      </select>
      
    </div>
    </article>
    <hr/>
    <article>
      <header>
        加解密
      </header>
      <button (click)="onCreateUserKeyClick()">创建秘钥</button>
      <input type="text" [(ngModel)]="key"/>
      <div>publicKey:{{publicKey|json}}</div>
      <div>privateKey:{{privateKey|json}}</div>
    <div class="select">
      <label for="crypto">算法</label>
      <select id="crypto" [(ngModel)]="cryptoAlgorithm" (change)="onCryptoAlgorithmChange()">
        <optgroup label="对称">
          <option value="AES-CTR">AES-CTR</option>
          <option value="AES-CBC">AES/CBC/PKCS7Padding,Java需要BouncyCastleProvider(bcprov-jdk16)</option>
          <option value="AES-GCM">AES-GCM</option>
        </optgroup>
        <optgroup label="非对称">
          <option value="RSA-OAEP">AES-OAEP</option>
        </optgroup>
      </select>
      <button (click)="onDecryptClick()">解密</button>
    </div>
    </article>
  `
})
export class CryptoComponent implements OnInit {
  public digestAlgorithm;
  public cryptoAlgorithm;
  public source='你好呀你好嘛你好吗你好哦';
  public result;
  public decryptHex;
  public decryptText;
  public publicKey;
  public privateKey;
  public key='12345678';
  constructor(private cryptoService: CryptoService) {

  }
  public ngOnInit() {

  }
  public onDecryptClick(){
    let buffer = this.hex2bytes(this.result);
    console.log(buffer);
    let encryptedKey:any;
    let alg:any;
    let format:string;
    if(this.cryptoAlgorithm=='AES-GCM'){
      encryptedKey= this.hex2bytes(this.key);
      console.log(encryptedKey.length);
      alg = { name: 'AES-GCM', iv: crypto.getRandomValues(new Uint8Array(12)) };
      format = 'raw';
      this.aesDecrypt(encryptedKey,buffer,alg,format);
    }else if(this.cryptoAlgorithm=='AES-CBC'){
      encryptedKey= this.hex2bytes('31323334353637383930313233343536');
      console.log(encryptedKey);
      console.log(encryptedKey.length);
      alg = { name: 'AES-CBC', iv: this.hex2bytes('31323334353637383930313233343536') };
      format = 'raw';
      this.aesDecrypt(encryptedKey,buffer,alg,format);
    }else if(this.cryptoAlgorithm=='AES-CTR'){
      encryptedKey= this.hex2bytes(this.key);
      console.log(encryptedKey.length);
      alg = { name: 'AES-CTR', counter: crypto.getRandomValues(new Uint8Array(16)),length: 2 };
      format = 'raw';
      this.aesDecrypt(encryptedKey,buffer,alg,format);
    }else if(this.cryptoAlgorithm=='RSA-OAEP'){
      encryptedKey = { "alg": "RSA-OAEP-256", "d": "io5o-I0dxjVnVhAGZUOVVZe271W0_r7wonGxAY5-9qoLq9ujt5k992V14WRnluXHZ6wMCOXCQENzpx1yEzMt81VJ2lKEo9u66uniUh8Ma9fptwp0h93C5twmCR9n9ja1BUW_XENCo1BJC234jmzE8iOKNoXMNaRdVBqlFYZzwV5r37-_MO2apeGACW6yKIDf4Arr5GOWWtbtTea3UbNfj4dIbHfrSWq1IAqTPY30f60NFMlaAi2tqhhCQu-sePMU0GfMgWilS3-KwFoyTrQKxNz-P5WJxEBlsBvP9TixiUTJOJm8Z-sVvs2dtKSeil4rftP7-_FwOPPFNwNAj5OMQQ", "dp": "vsDS2wSKa-Y19hx93nEiJjXvQl5R8dpxWwMHbffJ-eNeoyjkikjnw7tKUsZ0W3ziVGqLR4KZL_JCYE_pgePifx3XGm5Y8TZKg1tbuOIOAEdDZiwcblJrTbfyl_D9gwRItOL7rV3TWFOHbgYKqqRtDQtDSJoNdFyO5TNPwHOHYGc", "dq": "HKoT-QnX3yWfsO4VukX1dzIAY4vaaAyO0Z9v9aEbEwAva1cgoCkwnfXBBDS5fiWq2EA7UO2aI1zmw3SkojmXD-V_blVbHiEib79akToLZGXCGmvbQ2yX4gMi3bsj1q0I83VpNfPkyqNkmvK3QtoQB3TL8EW_lUEf7zEWkt4AfYE", "e": "AQAB", "ext": true, "key_ops": [ "decrypt" ], "kty": "RSA", "n": "y4lDq1cm-xhN1CJcx_kVUW4GiTaeAdX4dOMcd9rR7fz18j9ehnX8CGuV3IF1Fn1hIa33YBPlFqEgKNyUagZFyjHziNsk10AEz-5DzTDwDZzauxA2o97fYG3g4kAcxMlbehDCR-zOMk45VWOOXWDMXLsKmrjxhnhbTrcZMPdjgmC49M91EO6DHvjHNK79SazSFgS7dmcgLAJv5ZE82tG4NfbiMTE6bq6UdDrr-diNuRHMXSVtT5Z0yY0uT1jkU5pj6xy9CHnkc6gzk_bgDcylNYmjNgE8b5aY7LoDjPXAZuQ5JTPjjq9R4tt33IkbXnhLhKvppziNh8BciJJvfq_Rdw", "p": "6vvzhtUbxZYKWONphBGJnQ6rRxM8HcwiE1YSwwFBchVH6r-K6XQRrCluWj8yIqRuxvB9We4ELewoOI-Y1zdEWUq-ss8czB5o_q0UvtSxJfojM5E0A6u4zZ7Ffbg0Btdyzdf6HKNlzBy8WMcaJYTmRJwyd4ttHNt1mQtzwnsPSYc", "q": "3b1MuZahRNHLBArWbpXejeJA9AqTGCR32MksZByL2S3C8ms1pOt5z1yN9Yl6pc55ShCLwmJ61PETl248KI7n3wUOYNbyz0wqFscFGBJFFv_0Zusj_0U8okwNkEHMznhfvjKqCwhNT8dpGw3YhfZq5NRZHNFXHcFOFzzZruoadJE", "qi": "n-kbNlX6ROgKG_rNndy7IuojhlZBCqmL_di_x92wVFs4qrOJ-okK76dxd6ekqxdUO76UIjUzlsUsCTJsDfMcMSnbu37FlZf7vDEGb2F6FY7gVMyRDS4uOmarHrdMZIt8eymc_Y6jOwmXsEn33f_Uxxmk6YxexVUdGV3R5JEkJw4" };
      alg = {name: "rsa-oaep", hash: {name: "sha-256"}};
      format = 'jwk';
    }

  }

  public rasDecrypt(encryptedKey,data,alg,format){
    console.log('encryptedKey:'+ encryptedKey);
    this.cryptoService.importKey(format, encryptedKey,alg,true, ['encrypt']).then((key)=>{
      return this.cryptoService.encrypt(alg, key, data);
    }).then((result)=>{
      this.result = this.hex(result);
    });
  }
  public aesDecrypt(encryptedKey,data,alg,format){
    console.log("encryptedKey::",encryptedKey);
    this.cryptoService.digest('SHA-256', encryptedKey).then((keyData)=>{
      return this.cryptoService.importKey(format, encryptedKey, alg, true, ['decrypt']);
    }).then((key)=>{
      console.log(key);
      return this.cryptoService.decrypt(alg, key, data);
    }).then((result)=>{
      this.decryptHex = this.hex(result);
      this.decryptText = this.string(this.decryptHex);
    });
  }
  public rasEncrypt(encryptedKey,data,alg,format){
    console.log('encryptedKey:'+ encryptedKey);
    this.cryptoService.importKey(format, encryptedKey,alg,true, ['encrypt']).then((key)=>{
      return this.cryptoService.encrypt(alg, key, data);
    }).then((result)=>{
      this.result = this.hex(result);
    });
  }
  public aesEncrypt(encryptedKey,data,alg,format){
    this.cryptoService.digest('SHA-1', encryptedKey).then((keyData)=>{
      return this.cryptoService.importKey(format, encryptedKey, alg, true, ['encrypt']);
    }).then((key)=>{
      console.log(key);
      console.log(data);
      return this.cryptoService.encrypt(alg, key, data);
    }).then((result)=>{
      console.log(result);
      this.result = this.hex(result);
    });
  }
  public onCreateUserKeyClick(){
    let algorithmKeyGen = {
      name: "RSA-OAEP",
      hash: {name: "sha-256"},
      modulusLength: 2048,
      publicExponent: new Uint8Array([0x01, 0x00, 0x01])
    };
    let nonExtractable = false;
    let publicKey = "";
    let privateKey = "";
    let keyPairs;
    this.cryptoService.generateKey(algorithmKeyGen, true, ['encrypt', 'decrypt']).then((result)=>{
      keyPairs = result;
      return Promise.all([
        this.cryptoService.exportKey("jwk", keyPairs.publicKey),
        this.cryptoService.exportKey("jwk", keyPairs.privateKey)]);
    }).then((keyPairs)=>{
        console.log(keyPairs);
        this.publicKey = keyPairs[0];
        this.privateKey = keyPairs[1];
    });
  }
  public onCryptoAlgorithmChange(){
    let buffer = this.bytes(this.source);
    console.log(buffer);
    let encryptedKey:any;
    let alg:any;
    let format:string;
    if(this.cryptoAlgorithm=='AES-GCM'){
      encryptedKey= this.bytes(this.key);
      console.log(encryptedKey.length);
      alg = { name: 'AES-GCM', iv: crypto.getRandomValues(new Uint8Array(12)) };
      format = 'raw';
      this.aesEncrypt(encryptedKey,buffer,alg,format);
    }else if(this.cryptoAlgorithm=='AES-CBC'){
      encryptedKey= this.hex2bytes('31323334353637383930313233343536');
      console.log(encryptedKey);
      console.log(encryptedKey.length);
      alg = { name: 'AES-CBC', iv: this.hex2bytes('31323334353637383930313233343536') };
      format = 'raw';
      this.aesEncrypt(encryptedKey,buffer,alg,format);
    }else if(this.cryptoAlgorithm=='AES-CTR'){
      encryptedKey= this.bytes(this.key);
      console.log(encryptedKey.length);
      alg = { name: 'AES-CTR', counter: crypto.getRandomValues(new Uint8Array(16)),length: 2 };
      format = 'raw';
      this.aesEncrypt(encryptedKey,buffer,alg,format);
    }else if(this.cryptoAlgorithm=='RSA-OAEP'){
      encryptedKey = { "alg": "RSA-OAEP-256", "e": "AQAB", "ext": true, "key_ops": [ "encrypt" ], "kty": "RSA", "n": "y4lDq1cm-xhN1CJcx_kVUW4GiTaeAdX4dOMcd9rR7fz18j9ehnX8CGuV3IF1Fn1hIa33YBPlFqEgKNyUagZFyjHziNsk10AEz-5DzTDwDZzauxA2o97fYG3g4kAcxMlbehDCR-zOMk45VWOOXWDMXLsKmrjxhnhbTrcZMPdjgmC49M91EO6DHvjHNK79SazSFgS7dmcgLAJv5ZE82tG4NfbiMTE6bq6UdDrr-diNuRHMXSVtT5Z0yY0uT1jkU5pj6xy9CHnkc6gzk_bgDcylNYmjNgE8b5aY7LoDjPXAZuQ5JTPjjq9R4tt33IkbXnhLhKvppziNh8BciJJvfq_Rdw" };
      alg = {name: "rsa-oaep", hash: {name: "sha-256"}};
      format = 'jwk';
    }
  }

  public onDigestAlgorithmChange(){
      let buffer = this.bytes(this.source);
      this.cryptoService.digest(this.digestAlgorithm,buffer).then((result)=>{
        this.result = this.hex(result);
      });
  }
  private hex2bytes(arr:string){
    return new Uint8Array(arr.split(/(.{2})/g).filter((v)=>{return v.length>0}).map(function(v){return parseInt(v,16)}));
   }
  private bytes(string){
    return new Uint8Array(encodeURIComponent(string).split('%').filter(function(v,i,arr){return v.length>0}).map(function(v){return parseInt(v,16)}));
  }
  private string(bytes){
    return decodeURIComponent(bytes.replace(/(.{2})/g, '%$1'));
  }
  private hex(buffer) {
    let hexCodes = [];
    let view = new DataView(buffer);
    for (let i = 0; i < view.byteLength; i++) {
      let value = view.getUint8(i);
      let stringValue = value<15?'0'+value.toString(16):value.toString(16);
      hexCodes.push(stringValue);
    }
    return hexCodes.join("");
  }

}
