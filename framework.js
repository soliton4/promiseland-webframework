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
var __requireFun = function(parModule){
      var returnPromise = new __Promise();
      try{__require([parModule], function(m){
        if (promiseland.isPromiseLandPromisingModule(m)){
          m.then(function(realm){returnPromise.resolve(realm);}, function(e){returnPromise.reject(e);});
        }else{
          returnPromise.resolve(m);
        };
        }, function(err){ returnPromise.reject(err); });
      }catch(e){ returnPromise.reject(e); };
      return returnPromise.promise;};
    if (promiseland._hasModule({ hashStr: "7812b87d7e2ed902526253123ab92edd" })){ return promiseland._getModule("7812b87d7e2ed902526253123ab92edd"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "7812b87d7e2ed902526253123ab92edd", "module": PL$1, promising: true });
var PL$25/*JSON*/;try{PL$25/*JSON*/ = JSON;}catch(e){};
var PL$26/*promiseland*/;try{PL$26/*promiseland*/ = promiseland;}catch(e){};
var PL$27/*__dirname*/;try{PL$27/*__dirname*/ = __dirname;}catch(e){};
var PL$21/*i*/;try{PL$21/*i*/ = i;}catch(e){};
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
var PL$5/*express*/;
var PL$7/*http*/;
var PL$9/*fs*/;
var PL$11/*socketIo*/;
var PL$13/*htmlStr*/;
var PL$39/*Framework*/;
PL$3/*promiseland exception catcher*/(function(){

  ;
  __requireFun("express").then(PL$3/*promiseland exception catcher*/(function(PL$6){PL$5/*express*/ = PL$6;
  __requireFun("http").then(PL$3/*promiseland exception catcher*/(function(PL$8){PL$7/*http*/ = PL$8;
  __requireFun("fs").then(PL$3/*promiseland exception catcher*/(function(PL$10){PL$9/*fs*/ = PL$10;
  __requireFun("socket.io").then(PL$3/*promiseland exception catcher*/(function(PL$12){PL$11/*socketIo*/ = PL$12;
  PL$13/*htmlStr*/ = "<html>\n  <head>\n    {{css}}\n    <!-- socket.io -->\n      <script src='/socket.io/socket.io.js'></script>\n    <!-- require -->\n      <script src='/requirejs/require.js'></script>\n    <script>\n      require.config({{requirejsconfig}});\n    </script>\n    \n    <script>\n      require(['frameworkClient/client'], function(){\n        {{require}};\n      });\n    </script>\n    \n  </head>\n  <body>\n  </body>\n</html>";
  PL$39/*Framework*/ = (function(){var PL$14/*inherited*/ = {};
  var res = promiseland.createClass({
    "constructor": (function(PL$15/*parConfig*/){
    
      ;
      PL$15/*parConfig*/ = (PL$15/*parConfig*/ || {
        
      });
      this["app"] = PL$5/*express*/();
      this["http"] = PL$7/*http*/["createServer"](this["app"]);
      this["config"] = PL$15/*parConfig*/;
      var PL$16/*self*/ = this;
      ;
      this["app"]["get"]("/", (function(PL$17/*req*/, PL$18/*res*/){
      
        ;
        PL$18/*res*/["setHeader"]("Content-Type", "text/html");
        var PL$19/*s*/ = PL$13/*htmlStr*/;
        ;
        var PL$20/*cssStr*/ = "";
        ;
        if((PL$16/*self*/["config"]["css"] && PL$16/*self*/["config"]["css"]["length"])){
          if((typeof PL$16/*self*/["config"]["css"] === "string")){
            PL$20/*cssStr*/ = (("<link type = \"text/css\" rel=\"stylesheet\" href=\"" + PL$16/*self*/["config"]["css"]) + "\">");
          }else{
          var PL$21/*i*/;
          ;
          for(PL$21/*i*/ = 0;(PL$21/*i*/ < PL$16/*self*/["config"]["css"]["length"]);++PL$21/*i*/){{
            PL$20/*cssStr*/ += (("<link type = \"text/css\" rel=\"stylesheet\" href=\"" + PL$16/*self*/["config"]["css"][PL$21/*i*/]) + "\">");}};
          ;
          };
          ;
        };
        ;
        PL$19/*s*/ = PL$19/*s*/["replace"]("{{css}}", PL$20/*cssStr*/);
        var PL$22/*loadStr*/ = "";
        ;
        if((PL$16/*self*/["config"]["load"] && PL$16/*self*/["config"]["load"]["length"])){
          if((typeof PL$16/*self*/["config"]["load"] === "string")){
            PL$22/*loadStr*/ = (("require(['" + PL$16/*self*/["config"]["load"]) + "'], function(){});");
          }else{
          PL$22/*loadStr*/ = "require([";
          PL$21/*i*/;
          for(PL$21/*i*/ = 0;(PL$21/*i*/ < PL$16/*self*/["config"]["load"]["length"]);++PL$21/*i*/){{
            if(PL$21/*i*/){
              PL$22/*loadStr*/ += ", ";
            };
            ;
            PL$22/*loadStr*/ += (("'" + PL$16/*self*/["config"]["load"][PL$21/*i*/]) + "'");}};
          ;
          PL$22/*loadStr*/ += "], function(){});";
          };
          ;
        };
        ;
        PL$19/*s*/ = PL$19/*s*/["replace"]("{{require}}", PL$22/*loadStr*/);
        var PL$23/*requireConfig*/;
        ;
        if(PL$16/*self*/["config"]["requireConfig"]){
          PL$23/*requireConfig*/ = PL$16/*self*/["config"]["requireConfig"];
        };
        ;
        if(! PL$23/*requireConfig*/){
          PL$23/*requireConfig*/ = {
            
          };
        };
        ;
        if(! PL$23/*requireConfig*/["packages"]){
          PL$23/*requireConfig*/["packages"] = [
            {
              "name": "promiseland",
              "main": "promiseland",
              "location": "promiseland"
            }
          ];
        }else{
        PL$21/*i*/ = 0;
        var PL$24/*found*/ = false;
        ;
        for(PL$21/*i*/ = 0;(PL$21/*i*/ < PL$23/*requireConfig*/["packages"]["length"]);++PL$21/*i*/){{
          if((PL$23/*requireConfig*/["packages"][PL$21/*i*/]["name"] == "promiseland")){
            PL$24/*found*/ = true;
            PL$23/*requireConfig*/["packages"][PL$21/*i*/]["main"] = "promiseland";
            PL$23/*requireConfig*/["packages"][PL$21/*i*/]["location"] = "promiseland";
          };
          ;}};
        ;
        if(! PL$24/*found*/){
          PL$23/*requireConfig*/["packages"]["push"]({
            "name": "promiseland",
            "main": "promiseland",
            "location": "promiseland"
          });
        };
        ;
        };
        ;
        PL$19/*s*/ = PL$19/*s*/["replace"]("{{requirejsconfig}}", PL$25/*JSON*/["stringify"](PL$23/*requireConfig*/));
        PL$18/*res*/["end"](PL$19/*s*/);
        ;}));
      this["app"]["use"]("/promiseland", PL$5/*express*/["static"]((this["config"]["promiselandPathName"] || PL$26/*promiseland*/["getPromiselandPathName"]())));
      this["app"]["use"]("/requirejs", PL$5/*express*/["static"]((this["config"]["requirejsPathName"] || (PL$27/*__dirname*/ + "/requirejs"))));
      this["app"]["use"]("/frameworkClient", PL$5/*express*/["static"]((this["config"]["frameworkClientPathName"] || (PL$27/*__dirname*/ + "/frameworkClient"))));
      if(PL$16/*self*/["config"]["dirs"]){
        for(PL$21/*i*/ = 0;(PL$21/*i*/ < PL$16/*self*/["config"]["dirs"]["length"]);++PL$21/*i*/){{
          var PL$28/*d*/ = PL$16/*self*/["config"]["dirs"][PL$21/*i*/];
          ;
          this["app"]["use"](PL$28/*d*/["client"], PL$5/*express*/["static"](PL$28/*d*/["server"]));}};
        ;
      };
      ;
      PL$26/*promiseland*/["set"]("profile", "server");
      var PL$29/*ClientProfile*/ = (function(){
      
        ;
        this["name"] = (function(){
        
          ;
          return "client";
          ;});
        this["connections"] = {
          
        };
        this["find"] = (function(PL$30/*parId*/){
        
          ;
          return this["connections"][PL$30/*parId*/];
          ;});
        var PL$31/*nextid*/ = 1;
        ;
        this["addConnection"] = (function(PL$32/*connection*/){
        
          ;
          var PL$33/*id*/ = PL$31/*nextid*/;
          ;
          PL$31/*nextid*/++;
          this["connections"][PL$33/*id*/] = PL$32/*connection*/;
          this["emit"]("connection", PL$32/*connection*/);
          ;});
        ;});
      ;
      PL$29/*ClientProfile*/["prototype"] = new PL$26/*promiseland*/["ProfileBaseClass"]();
      var PL$34/*clientProfile*/ = new PL$29/*ClientProfile*/();
      ;
      PL$26/*promiseland*/["addProfile"](PL$34/*clientProfile*/);
      this["clientProfile"] = PL$34/*clientProfile*/;
      var PL$35/*mainio*/ = PL$11/*socketIo*/["listen"](this["http"]);
      ;
      PL$35/*mainio*/["on"]("connection", (function(PL$36/*socket*/){
      
        ;
        var PL$32/*connection*/ = new PL$26/*promiseland*/["ConnectionBaseClass"]();
        ;
        PL$32/*connection*/["socket"] = PL$36/*socket*/;
        PL$36/*socket*/["on"]("pl", (function(PL$37/*data*/){
        
          ;
          PL$32/*connection*/["emit"]("data", PL$37/*data*/);
          ;}));
        PL$32/*connection*/["send"] = (function(PL$37/*data*/){
        
          ;
          PL$36/*socket*/["emit"]("pl", PL$37/*data*/);
          ;});
        PL$34/*clientProfile*/["addConnection"](PL$32/*connection*/);
        PL$36/*socket*/["on"]("disconnect", (function(){
        
          ;
          PL$32/*connection*/["emit"]("disconnect");
          ;}));
        ;}));
      this["socketio"] = PL$35/*mainio*/;
      ;}),
    "listen": (function(PL$38/*port*/){
    
      ;
      return this["http"]["listen"](PL$38/*port*/);
      ;})
  }, [], PL$14/*inherited*/);
  return res; })();PL$39/*Framework*/;
  PL$1.resolve(PL$39/*Framework*/); return;
  PL$1.resolve(); return;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
  ;
})();return PL$1;
})();
;;
return PL$1});
})();