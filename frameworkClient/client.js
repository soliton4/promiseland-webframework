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
if (promiseland._hasModule({ hashStr: "7ee42b6c070032be4e7843ef18b5bdfa" })){ return promiseland._getModule("7ee42b6c070032be4e7843ef18b5bdfa"); };
var PL$2/*promiseland*/;try{PL$2/*promiseland*/ = promiseland;}catch(e){};
var PL$8/*Promise*/;try{PL$8/*Promise*/ = Promise;}catch(e){};
var PL$10/*io*/;try{PL$10/*io*/ = io;}catch(e){};
var PL$1 = (function(){
"use strict";

  ;
  PL$2/*promiseland*/["addLocalFrameName"]("client");
  var PL$3/*ServerFrame*/ = (function(){var PL$4/*inherited*/ = {};
  var res = promiseland.createClass({
    "name": "server"
  }, [PL$2/*promiseland*/["FrameBaseClass"]], PL$4/*inherited*/);
  return res; })();
  ;
  var PL$5/*serverFrame*/ = new PL$3/*ServerFrame*/();
  ;
  PL$2/*promiseland*/["addFrame"](PL$5/*serverFrame*/);
  var PL$6/*serverConnection*/;
  ;
  var PL$7/*connectPs*/ = new PL$8/*Promise*/();
  ;
  var PL$9/*socket*/ = PL$10/*io*/["connect"]();
  ;
  PL$9/*socket*/["on"]("connect", (function(){
  
    ;
    PL$6/*serverConnection*/ = new PL$5/*serverFrame*/["ConnectionBaseClass"]();
    PL$6/*serverConnection*/["send"] = (function(PL$11/*data*/){
    
      ;
      PL$9/*socket*/["emit"]("pl", PL$11/*data*/);
      ;});
    PL$5/*serverFrame*/["newConnection"](PL$6/*serverConnection*/);
    PL$9/*socket*/["on"]("disconnect", (function(){
    
      ;
      PL$6/*serverConnection*/["disconnect"]();
      ;}));
    PL$9/*socket*/["on"]("pl", (function(PL$11/*data*/){
    
      ;
      PL$6/*serverConnection*/["data"](PL$11/*data*/);
      ;}));
    try
    {
      PL$7/*connectPs*/["resolve"]();}catch(PL$12/*e*/){};
    ;
    ;}));
  PL$9/*socket*/["on"]("disconnect", (function(){
  
    ;
    PL$6/*serverConnection*/["disconnect"]();
    ;}));
  return {
    "connectPs": PL$7/*connectPs*/
  };
  ;})();
;return PL$1;
});
})();