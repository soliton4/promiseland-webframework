(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
if (promiseland._hasModule({ hashStr: "bd9d6daff691126a54d403e075368a5e" })){ return promiseland._getModule("bd9d6daff691126a54d403e075368a5e"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "bd9d6daff691126a54d403e075368a5e", "module": PL$1, promising: true });
var PL$2 = (function(){
"use strict";
var PL$3/*promiseland exception catcher*/ = function(code){
  return function(res){
    try{ code(res); }catch(e){
      PL$1.reject(e);
    };
  };
};
var PL$4/*catch rejected*/ = function(e){
  PL$1.reject(e);
};
var PL$5/*x*/;
PL$3/*promiseland exception catcher*/(function(){

  ;
  PL$5/*x*/ = (function(){
  var PL$6 = new __Promise();
  var PL$8/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$6.reject(e);
      };
    };
  };
  var PL$9/*catch rejected*/ = function(e){
    PL$6.reject(e);
  };
  PL$8/*promiseland exception catcher*/(function(){
  
    ;
    PL$6.resolve({
      "fun": (function(){
      var PL$10 = new __Promise();
      var PL$12/*promiseland exception catcher*/ = function(code){
        return function(res){
          try{ code(res); }catch(e){
            PL$10.reject(e);
          };
        };
      };
      var PL$13/*catch rejected*/ = function(e){
        PL$10.reject(e);
      };
      PL$12/*promiseland exception catcher*/(function(){
      
        ;
        PL$10.resolve(4); return;
        PL$10.resolve(); return;
      })();return PL$10;
      })
    }); return;
    PL$6.resolve(); return;
  })();return PL$6;
  });
  PL$5/*x*/().then(PL$3/*promiseland exception catcher*/(function(PL$14){PL$1.resolve(PL$14); return;
  PL$1.resolve(); return;}), PL$4/*catch rejected*/);
  ;
})();return PL$1;
})();
;;
return PL$1};
  
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
