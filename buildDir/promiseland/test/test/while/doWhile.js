(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

if (promiseland._hasModule({ hashStr: "6190b1ae26a107b8496dd725eae761ba" })){ return promiseland._getModule("6190b1ae26a107b8496dd725eae761ba"); };
var PL$1 = (function(){
"use strict";

  ;
  var PL$2/*i*/ = 0;
  ;
  do{
  {
    PL$2/*i*/ += 1;}} while ((PL$2/*i*/ < 4));
  if((PL$2/*i*/ == 4)){
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
