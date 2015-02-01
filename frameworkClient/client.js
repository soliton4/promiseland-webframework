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

if (promiseland._hasModule({ hashStr: "1afc07a3a2c642854bff29b65f989660" })){ return promiseland._getModule("1afc07a3a2c642854bff29b65f989660"); };
var PL$2/*promiseland*/;try{PL$2/*promiseland*/ = promiseland;}catch(e){};
var PL$9/*io*/;try{PL$9/*io*/ = io;}catch(e){};
var PL$1 = (function(){
"use strict";

  ;
  PL$2/*promiseland*/["set"]("profile", "client");
  var PL$3/*ServerProfile*/ = (function(){
  
    ;
    this["name"] = (function(){
    
      ;
      return "server";
      ;});
    this["find"] = (function(){
    
      ;
      return this["connection"];
      ;});
    ;});
  ;
  PL$3/*ServerProfile*/["prototype"] = new PL$2/*promiseland*/["ProfileBaseClass"]();
  var PL$4/*ServerConnection*/ = (function(PL$5/*socket*/){
  
    ;
    this["socket"] = PL$5/*socket*/;
    var PL$6/*self*/ = this;
    ;
    PL$5/*socket*/["on"]("pl", (function(PL$7/*data*/){
    
      ;
      PL$6/*self*/["emit"]("data", PL$7/*data*/);
      ;}));
    this["send"] = (function(PL$7/*data*/){
    
      ;
      PL$5/*socket*/["emit"]("pl", PL$7/*data*/);
      ;});
    ;});
  ;
  PL$4/*ServerConnection*/["prototype"] = new PL$2/*promiseland*/["ConnectionBaseClass"]();
  var PL$8/*serverProfile*/ = new PL$3/*ServerProfile*/();
  ;
  PL$2/*promiseland*/["addProfile"](PL$8/*serverProfile*/);
  var PL$5/*socket*/ = PL$9/*io*/["connect"]();
  ;
  PL$5/*socket*/["on"]("connect", (function(){
  
    ;
    var PL$10/*connection*/ = new PL$4/*ServerConnection*/(PL$5/*socket*/);
    ;
    PL$8/*serverProfile*/["connection"] = PL$10/*connection*/;
    PL$8/*serverProfile*/["emit"]("connection", PL$10/*connection*/);
    ;}));
  PL$5/*socket*/["on"]("disconnect", (function(){
  
    ;
    PL$8/*serverProfile*/["connection"]["emit"]("disconnect");
    PL$8/*serverProfile*/["connection"] = undefined;
    ;}));
  return (function(PL$11/*f*/){
  
    ;
    PL$11/*f*/();
    ;});
  ;})();
;return PL$1;
});
})();