(function(){var __modFun = function(__require){ __modFun = undefined;
var __execute = function(promiseland, extra){ __execute = undefined;

if (promiseland._hasModule({ hashStr: "fe20d8708e88b33927a054bc4c9cf0f3" })){ return promiseland._getModule("fe20d8708e88b33927a054bc4c9cf0f3"); };
var PL$3/*extra*/;try{PL$3/*extra*/ = extra;}catch(e){};
var PL$1 = (function(){
"use strict";

  ;
  ;
  var PL$2/*errorMsg*/ = PL$3/*extra*/["errorMsg"];
  ;
  return (function(PL$4/*classSystem*/, PL$5/*internals*/){
  
    ;
    var PL$6/*makro*/ = {
      "SELF": 0,
      "PROPERTY": 1,
      "PROPERTYSTRING": 2,
      "PROPERTYVALUE": 3,
      "VALUE": 4,
      "LEFT": 5,
      "OPERATOR": 6,
      "RIGHT": 7,
      "VALUEPROPERTY": 8,
      "RESOLVEFUN": 9,
      "REJECTFUN": 10,
      "TYPEVALUE": 11,
      "CONSTRUCTOR": 12,
      "NEWLINE": 13
    };
    ;
    PL$5/*internals*/["makro"] = PL$6/*makro*/;
    PL$5/*internals*/["xxx1"] = PL$6/*makro*/;
    return PL$6/*makro*/;
    ;});
  ;})();
;return PL$1;
}; return function(){ return __execute.apply(null, arguments); }; };
  
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
    });
  
  }else if (typeof define == "function" && define.amd){ // AMD
    define(["require"], __modFun);
  
  }else{ // Plain browser env
    __modFun(function(){ throw { msg: "require not possible in non loader mode" }; });
  
  };
})();
