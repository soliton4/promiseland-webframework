(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

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
    if (promiseland._hasModule({ hashStr: "817f64e18468a3cecfd443fcc531f819" })){ return promiseland._getModule("817f64e18468a3cecfd443fcc531f819"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "817f64e18468a3cecfd443fcc531f819", "module": PL$1, promising: true });
var PL$35/*JSON*/;try{PL$35/*JSON*/ = JSON;}catch(e){};
var PL$36/*promiseland*/;try{PL$36/*promiseland*/ = promiseland;}catch(e){};
var PL$37/*__dirname*/;try{PL$37/*__dirname*/ = __dirname;}catch(e){};
var PL$29/*i*/;try{PL$29/*i*/ = i;}catch(e){};
var PL$39/*console*/;try{PL$39/*console*/ = console;}catch(e){};
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
var PL$13/*expressSession*/;
var PL$15/*CookieParser*/;
var PL$17/*htmlStr*/;
var PL$52/*Framework*/;
PL$3/*promiseland exception catcher*/(function(){

  ;
  __requireFun("express").then(PL$3/*promiseland exception catcher*/(function(PL$6){PL$5/*express*/ = PL$6;
  __requireFun("http").then(PL$3/*promiseland exception catcher*/(function(PL$8){PL$7/*http*/ = PL$8;
  __requireFun("fs").then(PL$3/*promiseland exception catcher*/(function(PL$10){PL$9/*fs*/ = PL$10;
  __requireFun("socket.io").then(PL$3/*promiseland exception catcher*/(function(PL$12){PL$11/*socketIo*/ = PL$12;
  __requireFun("express-session").then(PL$3/*promiseland exception catcher*/(function(PL$14){PL$13/*expressSession*/ = PL$14;
  __requireFun("cookie-parser").then(PL$3/*promiseland exception catcher*/(function(PL$16){PL$15/*CookieParser*/ = PL$16;
  PL$17/*htmlStr*/ = "<html>\n  <head>\n    {{css}}\n    <!-- socket.io -->\n      <script src='/socket.io/socket.io.js'></script>\n    <!-- require -->\n      {{script}}\n    <script>\n      try{\n        require.config({{requirejsconfig}});\n      }catch(e){};\n    </script>\n    \n    <script>\n      require(['frameworkClient/client'], function(clientPs){\n        clientPs.then(function(client){\n          {{require}};\n          client.getConnectPs().then(function(){\n            {{requireconnect}}\n          });\n        });\n      });\n    </script>\n    \n  </head>\n  <body>\n  </body>\n</html>";
  PL$52/*Framework*/ = (function(){var PL$18/*inherited*/ = {};
  var res = promiseland.createClass({
    "constructor": (function(PL$19/*parConfig*/){
    
      ;
      PL$19/*parConfig*/ = (PL$19/*parConfig*/ || {
        
      });
      this["app"] = PL$5/*express*/();
      this["http"] = PL$7/*http*/["createServer"](this["app"]);
      this["config"] = PL$19/*parConfig*/;
      var PL$20/*self*/ = this;
      ;
      var PL$21/*session*/;
      ;
      var PL$22/*store*/;
      ;
      if((this["config"]["session"] === true)){
        var PL$23/*Store*/ = PL$13/*expressSession*/["MemoryStore"];
        ;
        PL$22/*store*/ = new PL$23/*Store*/();
        PL$21/*session*/ = PL$13/*expressSession*/({
          "secret": "promiseland-webframework-secretxxx",
          "resave": false,
          "saveUninitialized": true,
          "store": PL$22/*store*/
        });
      }else{
      if(this["config"]["session"]){
        PL$21/*session*/ = this["config"]["session"];
      };
      };
      ;
      if(PL$21/*session*/){
        var PL$24/*cookieParser*/ = PL$15/*CookieParser*/();
        ;
        this["app"]["use"](PL$24/*cookieParser*/);
        this["app"]["use"](PL$21/*session*/);
      };
      ;
      this["app"]["get"]("/", (function(PL$25/*req*/, PL$26/*res*/){
      
        ;
        PL$26/*res*/["setHeader"]("Content-Type", "text/html");
        var PL$27/*s*/ = PL$17/*htmlStr*/;
        ;
        var PL$28/*cssStr*/ = "";
        ;
        if((PL$20/*self*/["config"]["css"] && PL$20/*self*/["config"]["css"]["length"])){
          if((typeof PL$20/*self*/["config"]["css"] === "string")){
            PL$28/*cssStr*/ = (("<link type = \"text/css\" rel=\"stylesheet\" href=\"" + PL$20/*self*/["config"]["css"]) + "\">");
          }else{
          var PL$29/*i*/;
          ;
          for(PL$29/*i*/ = 0;(PL$29/*i*/ < PL$20/*self*/["config"]["css"]["length"]);++PL$29/*i*/){{
            PL$28/*cssStr*/ += (("<link type = \"text/css\" rel=\"stylesheet\" href=\"" + PL$20/*self*/["config"]["css"][PL$29/*i*/]) + "\">");}};
          ;
          };
          ;
        };
        ;
        PL$27/*s*/ = PL$27/*s*/["replace"]("{{css}}", PL$28/*cssStr*/);
        var PL$30/*scriptStr*/ = "";
        ;
        if(PL$20/*self*/["config"]["addScript"]){
          PL$30/*scriptStr*/ += (("<script>" + PL$20/*self*/["config"]["addScript"]) + "</script>\n");
        };
        ;
        if(PL$20/*self*/["config"]["singleScriptFile"]){
          PL$30/*scriptStr*/ += (("<script src='" + PL$20/*self*/["config"]["singleScriptFile"]) + "'></script>");
        }else{
        PL$30/*scriptStr*/ += "<script src='/requirejs/require.js'></script>\n";
        };
        ;
        PL$27/*s*/ = PL$27/*s*/["replace"]("{{script}}", PL$30/*scriptStr*/);
        var PL$31/*loadStr*/ = "";
        ;
        if((PL$20/*self*/["config"]["load"] && PL$20/*self*/["config"]["load"]["length"])){
          if((typeof PL$20/*self*/["config"]["load"] === "string")){
            PL$31/*loadStr*/ = (("require(['" + PL$20/*self*/["config"]["load"]) + "'], function(){});");
          }else{
          PL$31/*loadStr*/ = "require([";
          PL$29/*i*/;
          for(PL$29/*i*/ = 0;(PL$29/*i*/ < PL$20/*self*/["config"]["load"]["length"]);++PL$29/*i*/){{
            if(PL$29/*i*/){
              PL$31/*loadStr*/ += ", ";
            };
            ;
            PL$31/*loadStr*/ += (("'" + PL$20/*self*/["config"]["load"][PL$29/*i*/]) + "'");}};
          ;
          PL$31/*loadStr*/ += "], function(){});";
          };
          ;
        };
        ;
        PL$27/*s*/ = PL$27/*s*/["replace"]("{{require}}", PL$31/*loadStr*/);
        var PL$32/*connectLoadStr*/ = "";
        ;
        if((PL$20/*self*/["config"]["loadOnConnect"] && PL$20/*self*/["config"]["loadOnConnect"]["length"])){
          if((typeof PL$20/*self*/["config"]["loadOnConnect"] === "string")){
            PL$32/*connectLoadStr*/ = (("require(['" + PL$20/*self*/["config"]["loadOnConnect"]) + "'], function(){});");
          }else{
          PL$32/*connectLoadStr*/ = "require([";
          PL$29/*i*/;
          for(PL$29/*i*/ = 0;(PL$29/*i*/ < PL$20/*self*/["config"]["loadOnConnect"]["length"]);++PL$29/*i*/){{
            if(PL$29/*i*/){
              PL$32/*connectLoadStr*/ += ", ";
            };
            ;
            PL$32/*connectLoadStr*/ += (("'" + PL$20/*self*/["config"]["loadOnConnect"][PL$29/*i*/]) + "'");}};
          ;
          PL$32/*connectLoadStr*/ += "], function(){});";
          };
          ;
        };
        ;
        PL$27/*s*/ = PL$27/*s*/["replace"]("{{requireconnect}}", PL$32/*connectLoadStr*/);
        var PL$33/*requireConfig*/;
        ;
        if(PL$20/*self*/["config"]["requireConfig"]){
          PL$33/*requireConfig*/ = PL$20/*self*/["config"]["requireConfig"];
        };
        ;
        if(! PL$33/*requireConfig*/){
          PL$33/*requireConfig*/ = {
            
          };
        };
        ;
        if(! PL$33/*requireConfig*/["packages"]){
          PL$33/*requireConfig*/["packages"] = [
            {
              "name": "promiseland",
              "main": "promiseland",
              "location": "promiseland"
            }
          ];
        }else{
        PL$29/*i*/ = 0;
        var PL$34/*found*/ = false;
        ;
        for(PL$29/*i*/ = 0;(PL$29/*i*/ < PL$33/*requireConfig*/["packages"]["length"]);++PL$29/*i*/){{
          if((PL$33/*requireConfig*/["packages"][PL$29/*i*/]["name"] == "promiseland")){
            PL$34/*found*/ = true;
            PL$33/*requireConfig*/["packages"][PL$29/*i*/]["main"] = "promiseland";
            PL$33/*requireConfig*/["packages"][PL$29/*i*/]["location"] = "promiseland";
          };
          ;}};
        ;
        if(! PL$34/*found*/){
          PL$33/*requireConfig*/["packages"]["push"]({
            "name": "promiseland",
            "main": "promiseland",
            "location": "promiseland"
          });
        };
        ;
        };
        ;
        PL$27/*s*/ = PL$27/*s*/["replace"]("{{requirejsconfig}}", PL$35/*JSON*/["stringify"](PL$33/*requireConfig*/));
        PL$26/*res*/["end"](PL$27/*s*/);
        ;}));
      this["app"]["use"]("/promiseland", PL$5/*express*/["static"]((this["config"]["promiselandPathName"] || PL$36/*promiseland*/["getPromiselandPathName"]())));
      this["app"]["use"]("/requirejs", PL$5/*express*/["static"]((this["config"]["requirejsPathName"] || (PL$37/*__dirname*/ + "/requirejs"))));
      this["app"]["use"]("/frameworkClient", PL$5/*express*/["static"]((this["config"]["frameworkClientPathName"] || (PL$37/*__dirname*/ + "/frameworkClient"))));
      if(PL$20/*self*/["config"]["dirs"]){
        for(PL$29/*i*/ = 0;(PL$29/*i*/ < PL$20/*self*/["config"]["dirs"]["length"]);++PL$29/*i*/){{
          var PL$38/*d*/ = PL$20/*self*/["config"]["dirs"][PL$29/*i*/];
          ;
          PL$39/*console*/["log"](((("using: " + PL$38/*d*/["server"]) + " as: ") + PL$38/*d*/["client"]));
          this["app"]["use"](PL$38/*d*/["client"], PL$5/*express*/["static"](PL$38/*d*/["server"]));}};
        ;
      };
      ;
      PL$36/*promiseland*/["addLocalFrameName"]("server");
      PL$36/*promiseland*/["addLocalFrameName"]("serverNoAuth");
      var PL$40/*ClientFrame*/ = (function(){var PL$41/*inherited*/ = {};
      var res = promiseland.createClass({
        "name": "client"
      }, [PL$36/*promiseland*/["FrameBaseClass"]], PL$41/*inherited*/);
      return res; })();
      ;
      var PL$42/*clientFrame*/ = new PL$40/*ClientFrame*/();
      ;
      PL$36/*promiseland*/["addFrame"](PL$42/*clientFrame*/);
      this["clientFrame"] = PL$42/*clientFrame*/;
      var PL$43/*mainio*/ = PL$11/*socketIo*/["listen"](this["http"]);
      ;
      if(PL$21/*session*/){
        PL$43/*mainio*/["use"]((function(PL$44/*socket*/, PL$45/*next*/){
        
          ;
          var PL$25/*req*/ = PL$44/*socket*/["handshake"];
          ;
          var PL$26/*res*/ = {
            
          };
          ;
          PL$24/*cookieParser*/(PL$25/*req*/, PL$26/*res*/, (function(PL$46/*err*/){
          
            ;
            if(PL$46/*err*/){
              return PL$45/*next*/(PL$46/*err*/);
            };
            PL$21/*session*/(PL$25/*req*/, PL$26/*res*/, PL$45/*next*/);
            ;}));
          ;}));
      };
      ;
      PL$43/*mainio*/["on"]("connection", (function(PL$44/*socket*/){
      
        ;
        PL$39/*console*/["log"]("Session: ", PL$44/*socket*/["handshake"]["session"]);
        var PL$47/*connection*/ = new PL$42/*clientFrame*/["ConnectionBaseClass"]();
        ;
        if(PL$20/*self*/["config"]["requireAuth"]){
          PL$47/*connection*/["restrictLocalFrames"] = true;
        };
        ;
        PL$47/*connection*/["send"] = (function(PL$48/*data*/){
        
          ;
          PL$44/*socket*/["emit"]("pl", PL$48/*data*/);
          ;});
        PL$42/*clientFrame*/["newConnection"](PL$47/*connection*/);
        PL$44/*socket*/["on"]("disconnect", (function(){
        
          ;
          PL$47/*connection*/["disconnect"]();
          ;}));
        PL$44/*socket*/["on"]("pl", (function(PL$48/*data*/){
        
          ;
          PL$47/*connection*/["data"](PL$48/*data*/);
          ;}));
        var PL$49/*authConnection*/ = new PL$42/*clientFrame*/["ConnectionBaseClass"]();
        ;
        PL$49/*authConnection*/["restrictLocalFrames"] = true;
        PL$49/*authConnection*/["addLocalFrameAccess"]("serverNoAuth");
        PL$49/*authConnection*/["session"]["setAuth"] = (function(PL$50/*parIsAuth*/){
        
          ;
          if(PL$50/*parIsAuth*/){
            PL$47/*connection*/["addLocalFrameAccess"]("server");
          }else{
          PL$47/*connection*/["removeLocalFrameAccess"]("server");
          };
          ;
          ;});
        PL$39/*console*/["log"](PL$49/*authConnection*/["session"]);
        PL$49/*authConnection*/["send"] = (function(PL$48/*data*/){
        
          ;
          PL$44/*socket*/["emit"]("a", PL$48/*data*/);
          ;});
        PL$42/*clientFrame*/["newConnection"](PL$49/*authConnection*/);
        PL$44/*socket*/["on"]("disconnect", (function(){
        
          ;
          PL$49/*authConnection*/["disconnect"]();
          ;}));
        PL$44/*socket*/["on"]("a", (function(PL$48/*data*/){
        
          ;
          PL$49/*authConnection*/["data"](PL$48/*data*/);
          ;}));
        ;}));
      this["socketio"] = PL$43/*mainio*/;
      ;}),
    "listen": (function(PL$51/*port*/){
    
      ;
      return this["http"]["listen"](PL$51/*port*/);
      ;})
  }, [], PL$18/*inherited*/);
  return res; })();PL$52/*Framework*/;
  PL$1.resolve(PL$52/*Framework*/); return;
  PL$1.resolve(); return;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
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
