(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
if (promiseland._hasModule({ hashStr: "1e351999ee726218b8ecf1cbb17b24fc" })){ return promiseland._getModule("1e351999ee726218b8ecf1cbb17b24fc"); };
var PL$2/*psfun*/;try{PL$2/*psfun*/ = psfun;}catch(e){};
var PL$1 = (function(){
"use strict";

  ;
  PL$2/*psfun*/ = (function(){
  var PL$3 = new __Promise();
  var PL$5/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$3.reject(e);
      };
    };
  };
  var PL$6/*catch rejected*/ = function(e){
    PL$3.reject(e);
  };
  PL$5/*promiseland exception catcher*/(function(){
  
    ;
    PL$3.resolve(); return;
    PL$3.resolve(); return;
  })();return PL$3;
  });
  var PL$7/*catched*/ = false;
  ;
  (function(){
  var PL$8 = new __Promise();
  var PL$10/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$8.reject(e);
      };
    };
  };
  var PL$11/*catch rejected*/ = function(e){
    PL$8.reject(e);
  };
  var PL$16/*a*/;
  PL$10/*promiseland exception catcher*/(function(){
  
    ;
    var PL$12 = new __Promise();
    var PL$13 = new __Promise();
    var PL$14/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$13.resolve(e); }; }; };
    var PL$15 = function(e){ PL$13.resolve(e); };
    PL$14/*try catch*/(function(){
      PL$16/*a*/ = 1;
      PL$2/*psfun*/().then(PL$14/*try catch*/(function(PL$17){PL$17;
      throw ("xxx" * PL$2/*psfun*/());
      PL$16/*a*/ = 2;
      PL$12.resolve();}), PL$15);
    ;})();
    PL$13.then(PL$10/*promiseland exception catcher*/(function(PL$18/*e*/){
      PL$7/*catched*/ = true;
      PL$12.resolve();;}));
    PL$12.then(PL$10/*promiseland exception catcher*/(function(){;
    ;
    PL$8.resolve(); return;}), PL$11/*catch rejected*/)
  })();return PL$8;
  })();
  if(PL$7/*catched*/){
    return {
      "success": true
    };
  };
  ;
  return {
    "success": false
  };
  ;})();
;return PL$1;
};
  
  if (typeof exports == "object" && typeof module == "object"){ // CommonJS
    module.exports = __modFun(function(modulesAr, callback, errBack){
      // the require function for CommonJs
      var args = [];
      try{
        var i = 0;
        var l = modulesAr.length;
        for (i; i < l; ++i){
          args.push(require(modulesAr[i]));
        };
      }catch(e){
        errBack(e);
        return;
      };
      callback.apply(callback, args);
    }, require("promiseland"));
  
  }else if (typeof define == "function" && define.amd){ // AMD
    define(["require", "promiseland"], __modFun);
  
  }else{ // Plain browser env
    __modFun(function(){ throw { msg: "require not possible in non loader mode" }; });
  
  };
})();
