(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
var classSystem = promiseland.classSystem;
if (promiseland._hasModule({ hashStr: "52359e7398cbfbfaf29d768d9b7a668b" })){ return promiseland._getModule("52359e7398cbfbfaf29d768d9b7a668b"); };
var PL$10/*doSome*/;try{PL$10/*doSome*/ = doSome;}catch(e){};
var PL$3/*context*/;try{PL$3/*context*/ = context;}catch(e){};
var PL$1 = (function(){
"use strict";
var PL$8/*x*/;

  ;
  var PL$2/*z*/ = (function(PL$3/*context*/){
  var PL$4 = new __Promise();
  var PL$6/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$4.reject(e);
      };
    };
  };
  var PL$7/*catch rejected*/ = function(e){
    PL$4.reject(e);
  };
  PL$6/*promiseland exception catcher*/(function(){
  
    ;
    PL$8/*x*/().then(PL$6/*promiseland exception catcher*/(function(PL$9){if(PL$9){
      PL$10/*doSome*/();
    };
    ;
    PL$4.resolve(); return;}), PL$7/*catch rejected*/);
    ;
  })();return PL$4;
  });
  ;
  var PL$11/*y*/ = ((function(f){
  promiseland.registerRemote("server", "52359e7398cbfbfaf29d768d9b7a668b", "PL$18", f, classSystem.getBuiltinType("var"));
  if (promiseland.profileHas("server")){
  return function(){
  var i = 0; var l = arguments.length; var newArgs = [undefined];
  for(i = 0; i < l; ++i){ newArgs.push(arguments[i]); };
  return f.apply(this, newArgs);
  };
  }else{
  return function(){
  return promiseland.remoteExec("52359e7398cbfbfaf29d768d9b7a668b", "PL$18", arguments);
  }
  };
  })(function(PL$12/*session*/){
  var PL$13 = new __Promise();
  var PL$15/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$13.reject(e);
      };
    };
  };
  var PL$16/*catch rejected*/ = function(e){
    PL$13.reject(e);
  };
  PL$15/*promiseland exception catcher*/(function(){
  
    ;
    PL$2/*z*/(PL$3/*context*/).then(PL$15/*promiseland exception catcher*/(function(PL$17){PL$17;
    PL$13.resolve(); return;}), PL$16/*catch rejected*/);
    ;
  })();return PL$13;
  }));
  ;
  PL$8/*x*/ = ((function(f){
  promiseland.registerRemote("client", "52359e7398cbfbfaf29d768d9b7a668b", "PL$23", f, classSystem.getBuiltinType("var"));
  if (promiseland.profileHas("client")){
  return function(){
  var i = 0; var l = arguments.length; var newArgs = [undefined];
  for(i = 0; i < l; ++i){ newArgs.push(arguments[i]); };
  return f.apply(this, newArgs);
  };
  }else{
  return function(){
  return promiseland.remoteExec("52359e7398cbfbfaf29d768d9b7a668b", "PL$23", arguments);
  }
  };
  })(function(PL$12/*session*/){
  var PL$19 = new __Promise();
  var PL$21/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$19.reject(e);
      };
    };
  };
  var PL$22/*catch rejected*/ = function(e){
    PL$19.reject(e);
  };
  PL$21/*promiseland exception catcher*/(function(){
  
    ;
    PL$19.resolve("x"); return;
    PL$19.resolve(); return;
  })();return PL$19;
  }));
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
