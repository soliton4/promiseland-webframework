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
if (promiseland._hasModule({ hashStr: "1d031d7f0b3c41d75aaa205065333a9b" })){ return promiseland._getModule("1d031d7f0b3c41d75aaa205065333a9b"); };
var PL$2/*promiseland*/;try{PL$2/*promiseland*/ = promiseland;}catch(e){};
var PL$11/*Promise*/;try{PL$11/*Promise*/ = Promise;}catch(e){};
var PL$14/*io*/;try{PL$14/*io*/ = io;}catch(e){};
var PL$17/*authConnection*/;try{PL$17/*authConnection*/ = authConnection;}catch(e){};
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
  var PL$5/*ServerNoAuthFrame*/ = (function(){var PL$6/*inherited*/ = {};
  var res = promiseland.createClass({
    "name": "serverNoAuth"
  }, [PL$2/*promiseland*/["FrameBaseClass"]], PL$6/*inherited*/);
  return res; })();
  ;
  var PL$7/*serverFrame*/ = new PL$3/*ServerFrame*/();
  ;
  PL$2/*promiseland*/["addFrame"](PL$7/*serverFrame*/);
  var PL$8/*serverNoAuthFrame*/ = new PL$5/*ServerNoAuthFrame*/();
  ;
  PL$2/*promiseland*/["addFrame"](PL$8/*serverNoAuthFrame*/);
  var PL$9/*serverConnection*/;
  ;
  var PL$10/*connectPs*/ = new PL$11/*Promise*/();
  ;
  var PL$12/*authPs*/ = new PL$11/*Promise*/();
  ;
  var PL$13/*socket*/ = PL$14/*io*/["connect"]();
  ;
  PL$13/*socket*/["on"]("connect", (function(){
  
    ;
    PL$9/*serverConnection*/ = new PL$7/*serverFrame*/["ConnectionBaseClass"]();
    PL$9/*serverConnection*/["send"] = (function(PL$15/*data*/){
    
      ;
      PL$13/*socket*/["emit"]("pl", PL$15/*data*/);
      ;});
    PL$7/*serverFrame*/["newConnection"](PL$9/*serverConnection*/);
    PL$13/*socket*/["on"]("disconnect", (function(){
    
      ;
      PL$9/*serverConnection*/["disconnect"]();
      ;}));
    PL$13/*socket*/["on"]("pl", (function(PL$15/*data*/){
    
      ;
      PL$9/*serverConnection*/["data"](PL$15/*data*/);
      ;}));
    try
    {
      PL$10/*connectPs*/["resolve"]();}catch(PL$16/*e*/){};
    ;
    PL$17/*authConnection*/ = new PL$7/*serverFrame*/["ConnectionBaseClass"]();
    PL$17/*authConnection*/["send"] = (function(PL$15/*data*/){
    
      ;
      PL$13/*socket*/["emit"]("a", PL$15/*data*/);
      ;});
    PL$8/*serverNoAuthFrame*/["newConnection"](PL$17/*authConnection*/);
    PL$13/*socket*/["on"]("disconnect", (function(){
    
      ;
      PL$17/*authConnection*/["disconnect"]();
      ;}));
    PL$13/*socket*/["on"]("a", (function(PL$15/*data*/){
    
      ;
      PL$17/*authConnection*/["data"](PL$15/*data*/);
      ;}));
    ;}));
  PL$13/*socket*/["on"]("disconnect", (function(){
  
    ;
    PL$9/*serverConnection*/["disconnect"]();
    ;}));
  return {
    "connectPs": PL$10/*connectPs*/,
    "authPs": PL$12/*authPs*/
  };
  ;})();
;return PL$1;
});
})();