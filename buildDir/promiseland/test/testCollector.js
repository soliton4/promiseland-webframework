(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
var classSystem = promiseland.classSystem;
if (promiseland._hasModule({ hashStr: "2c4ae3017f175bf1f7b91699d6625b7e" })){ return promiseland._getModule("2c4ae3017f175bf1f7b91699d6625b7e"); };
var PL$6/*Promise*/;try{PL$6/*Promise*/ = Promise;}catch(e){};
var PL$1 = (function(){
"use strict";

  ;
  var PL$2/*results*/ = {
    
  };
  ;
  var PL$3/*finishObj*/ = {
    
  };
  ;
  var PL$4/*getResultPromise*/ = (function(PL$5/*type*/){
  
    ;
    if(PL$2/*results*/[PL$5/*type*/]){
      return PL$2/*results*/[PL$5/*type*/];
    };
    ;
    PL$2/*results*/[PL$5/*type*/] = new PL$6/*Promise*/();
    return PL$2/*results*/[PL$5/*type*/];
    ;});
  ;
  var PL$7/*getFinishPromise*/ = (function(PL$5/*type*/){
  
    ;
    if(! PL$3/*finishObj*/[PL$5/*type*/]){
      PL$3/*finishObj*/[PL$5/*type*/] = new PL$6/*Promise*/();
    };
    ;
    return PL$3/*finishObj*/[PL$5/*type*/];
    ;});
  ;
  var PL$8/*postResult*/ = ((function(f){
  promiseland.registerRemote("server", "2c4ae3017f175bf1f7b91699d6625b7e", "PL$15", f, classSystem.getBuiltinType("var"));
  if (promiseland.profileHas("server")){
  return function(){
  var i = 0; var l = arguments.length; var newArgs = [undefined];
  for(i = 0; i < l; ++i){ newArgs.push(arguments[i]); };
  return f.apply(this, newArgs);
  };
  }else{
  return function(){
  return promiseland.remoteExec("2c4ae3017f175bf1f7b91699d6625b7e", "PL$15", arguments);
  }
  };
  })(function(PL$9/*session*/, PL$5/*type*/, PL$10/*res*/){
  var PL$11 = new __Promise();
  var PL$13/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$11.reject(e);
      };
    };
  };
  var PL$14/*catch rejected*/ = function(e){
    PL$11.reject(e);
  };
  PL$13/*promiseland exception catcher*/(function(){
  
    ;
    PL$4/*getResultPromise*/(PL$5/*type*/)["resolve"](PL$10/*res*/);
    PL$11.resolve(); return;
  })();return PL$11;
  }));
  ;
  var PL$16/*finish*/ = (function(PL$5/*type*/){
  
    ;
    PL$7/*getFinishPromise*/(PL$5/*type*/)["resolve"]();
    ;});
  ;
  var PL$17/*waitForFinish*/ = ((function(f){
  promiseland.registerRemote("server", "2c4ae3017f175bf1f7b91699d6625b7e", "PL$23", f, classSystem.getBuiltinType("var"));
  if (promiseland.profileHas("server")){
  return function(){
  var i = 0; var l = arguments.length; var newArgs = [undefined];
  for(i = 0; i < l; ++i){ newArgs.push(arguments[i]); };
  return f.apply(this, newArgs);
  };
  }else{
  return function(){
  return promiseland.remoteExec("2c4ae3017f175bf1f7b91699d6625b7e", "PL$23", arguments);
  }
  };
  })(function(PL$9/*session*/, PL$5/*type*/){
  var PL$18 = new __Promise();
  var PL$20/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$18.reject(e);
      };
    };
  };
  var PL$21/*catch rejected*/ = function(e){
    PL$18.reject(e);
  };
  PL$20/*promiseland exception catcher*/(function(){
  
    ;
    PL$7/*getFinishPromise*/(PL$5/*type*/).then(PL$20/*promiseland exception catcher*/(function(PL$22){PL$22;
    PL$18.resolve(true); return;
    PL$18.resolve(); return;}), PL$21/*catch rejected*/);
    ;
  })();return PL$18;
  }));
  ;
  return {
    "getResultPromise": PL$4/*getResultPromise*/,
    "postResult": PL$8/*postResult*/,
    "finish": PL$16/*finish*/,
    "waitForFinish": PL$17/*waitForFinish*/
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
