(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
if (promiseland._hasModule({ hashStr: "6b8ec887e2e2ef75dc50107c1d6615af" })){ return promiseland._getModule("6b8ec887e2e2ef75dc50107c1d6615af"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "6b8ec887e2e2ef75dc50107c1d6615af", "module": PL$1, promising: true });
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
var PL$5/*p*/;
var PL$6/*i*/;
PL$3/*promiseland exception catcher*/(function(){

  ;
  PL$5/*p*/;
  PL$6/*i*/ = 0;
  var PL$8 = new __Promise();
  var PL$7 = function(){var PL$9 = new __Promise();
  
  PL$6/*i*/ += 1;
  
  var PL$10 = new __Promise();if(false){
    PL$5/*p*/.then(PL$3/*promiseland exception catcher*/(function(PL$11){PL$11;
    PL$10.resolve();;}), PL$4/*catch rejected*/);
    ;
  }else{PL$10.resolve();
  };PL$10.then(PL$3/*promiseland exception catcher*/(function(PL$12){PL$12;;
  ;
  if((PL$6/*i*/ < 4)){PL$9.resolve(true); return PL$9; /* continue */
  }else{
  PL$9.resolve(false); return PL$9; /* break */
  };
  ;}), PL$4/*catch rejected*/);
  ;PL$9;return PL$9;
  };
  var PL$13 = function(){PL$7().then(function(contLoop){
  if (contLoop){PL$13();}else{PL$8.resolve();};
  });
  };
  PL$13();
  PL$8.then(function(){;
  if((PL$6/*i*/ == 4)){
    PL$1.resolve({
      "success": true
    }); return;
  };
  ;
  PL$1.resolve({
    "success": false
  }); return;
  PL$1.resolve(); return;});
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
