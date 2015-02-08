(function(){
  var defineFun;
  var requireFun;
  
  if (typeof exports == "object" && typeof module == "object"){ // CommonJS
    requireFun = function(modulesAr, callback, errBack){
      try{
        var i = 0;
        var l = modulesAr.length;
        var args = [];
        for (i; i < l; ++i){
          args.push(require(modulesAr[i]));
        };
      }catch(e){
        errBack(e);
        return;
      };
      callback.apply(callback, args);
    };
    defineFun = function(requireAr, callback){
      requireFun(requireAr, function(){
        module.exports = callback.apply(callback, arguments);
      });
    };
    
  }else if (typeof define == "function" && define.amd){ // AMD
    var _define = define;
    requireFun = require;
    
    defineFun = function(par1, par2){
      if (par1 instanceof Array){
        par1.unshift("require");
      }else{
        par2 = par1;
        par1 = ["require"];
      };
      _define(par1, function(){
        requireFun = arguments[0];
        var args = [];
        for (var i = 1; i < arguments.length; ++i){
          args.push(arguments[i]);
        };
        return par2.apply(par2, args);
      });
    };
    
  }else{ // Plain browser env
    alert("not working out!");
    
  };
  defineFun(["promiseland"], function(promiseland){
var __require = requireFun;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
var classSystem = promiseland.classSystem;
if (promiseland._hasModule({ hashStr: "95d2855001b8eaf73eab98e0b5b839bb" })){ return promiseland._getModule("95d2855001b8eaf73eab98e0b5b839bb"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "95d2855001b8eaf73eab98e0b5b839bb", "module": PL$1, promising: true });
var PL$5/*console*/;try{PL$5/*console*/ = console;}catch(e){};
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
var PL$6/*testFun*/ = (function(f){
promiseland.registerRemote("server", "95d2855001b8eaf73eab98e0b5b839bb", "PL$11", f, classSystem.getBuiltinType("var"));
if (promiseland.profileHas("server")){
return f;
}else{
return function(){
return promiseland.remoteExec("95d2855001b8eaf73eab98e0b5b839bb", "PL$11", arguments);
}
};
})(function (){
var PL$7 = new __Promise();
var PL$9/*promiseland exception catcher*/ = function(code){
  return function(res){
    try{ code(res); }catch(e){
      PL$7.reject(e);
    };
  };
};
var PL$10/*catch rejected*/ = function(e){
  PL$7.reject(e);
};
PL$9/*promiseland exception catcher*/(function(){

  ;
  PL$7.resolve("server Content"); return;
  PL$7.resolve(); return;
})();return PL$7;
});
PL$3/*promiseland exception catcher*/(function(){

  ;
  PL$5/*console*/["log"]("connected");
  /* function testFun (){} - hoisted */;
  ;
  var PL$12 = new __Promise();
  var PL$13 = new __Promise();
  var PL$14/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$13.resolve(e); }; }; };
  var PL$15 = function(e){ PL$13.resolve(e); };
  PL$14/*try catch*/(function(){
    PL$6/*testFun*/().then(PL$14/*try catch*/(function(PL$16){PL$5/*console*/["log"](PL$16);
    PL$12.resolve();}), PL$15);
  ;})();
  PL$13.then(PL$3/*promiseland exception catcher*/(function(PL$17/*err*/){
    PL$5/*console*/["log"](PL$17/*err*/);
    PL$12.resolve();;}));
  PL$12.then(PL$3/*promiseland exception catcher*/(function(){;
  ;
  PL$1.resolve(); return;}), PL$4/*catch rejected*/)
})();return PL$1;
})();
;;
return PL$1});
})();