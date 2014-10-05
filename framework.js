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
    requireFun = require;
    
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
    if (promiseland._hasModule({ hashStr: "589923e6af79674ac2a5d84dec949a92" })){ return promiseland._getModule("589923e6af79674ac2a5d84dec949a92"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "589923e6af79674ac2a5d84dec949a92", "module": PL$1, promising: true });
var PL$24/*JSON*/;try{PL$24/*JSON*/ = JSON;}catch(e){};
var PL$25/*promiseland*/;try{PL$25/*promiseland*/ = promiseland;}catch(e){};
var PL$26/*__dirname*/;try{PL$26/*__dirname*/ = __dirname;}catch(e){};
var PL$21/*i*/;try{PL$21/*i*/ = i;}catch(e){};
var PL$2 = (function(){
"use strict";
var PL$3 = function(code){ return function(res){ try{code(res);}catch(e){ PL$1.reject(e); }; }; };
var PL$4 = function(e){ PL$1.reject(e); };
var PL$5/*express*/;
var PL$7/*http*/;
var PL$9/*fs*/;
var PL$11/*socketIo*/;
var PL$13/*htmlStr*/;
var PL$38/*Framework*/;
PL$3(function(){;
__requireFun("express").then(PL$3(function(PL$6){PL$5/*express*/ = PL$6;
__requireFun("http").then(PL$3(function(PL$8){PL$7/*http*/ = PL$8;
__requireFun("fs").then(PL$3(function(PL$10){PL$9/*fs*/ = PL$10;
__requireFun("socket.io").then(PL$3(function(PL$12){PL$11/*socketIo*/ = PL$12;
PL$13/*htmlStr*/ = "<html>\n  <head>\n    <!-- socket.io -->\n      <script src='/socket.io/socket.io.js'></script>\n    <!-- require -->\n      <script src='/requirejs/require.js'></script>\n    <script>\n      require.config({{requirejsconfig}});\n    </script>\n    \n    <script>\n      require(['frameworkClient/client'], function(){\n        {{require}};\n      });\n    </script>\n    \n  </head>\n  <body>\n  </body>\n</html>";
PL$38/*Framework*/ = (function(){var PL$14/*inherited*/ = {};
var res = promiseland.createClass({"constructor": (function(PL$15/*parConfig*/){
var PL$16/*self*/;
var PL$27/*d*/;
var PL$28/*ClientProfile*/;
var PL$33/*clientProfile*/;
var PL$34/*mainio*/;
;
PL$15/*parConfig*/ = (PL$15/*parConfig*/ || {});;
this["app"] = PL$5/*express*/();;
this["http"] = PL$7/*http*/["createServer"](this["app"]);;
this["config"] = PL$15/*parConfig*/;;
PL$16/*self*/ = this;
this["app"]["get"]("/", (function(PL$17/*req*/, PL$18/*res*/){
var PL$19/*s*/;
var PL$20/*loadStr*/;
var PL$21/*i*/;
var PL$22/*requireConfig*/;
var PL$23/*found*/;
;
PL$18/*res*/["setHeader"]("Content-Type", "text/html");;
PL$19/*s*/ = PL$13/*htmlStr*/;
PL$20/*loadStr*/ = "";
if((PL$16/*self*/["config"]["load"] && PL$16/*self*/["config"]["load"]["length"])){
if((typeof PL$16/*self*/["config"]["load"] === "string")){
PL$20/*loadStr*/ = (("require(['" + PL$16/*self*/["config"]["load"]) + "'], function(){});");;

}else{
PL$20/*loadStr*/ = "require([";;
PL$21/*i*/;
for(PL$21/*i*/ = 0;(PL$21/*i*/ < PL$16/*self*/["config"]["load"]["length"]);++PL$21/*i*/){{if(PL$21/*i*/){
PL$20/*loadStr*/ += ", ";;
};
;
PL$20/*loadStr*/ += (("'" + PL$16/*self*/["config"]["load"][PL$21/*i*/]) + "'");;
}};
;
PL$20/*loadStr*/ += "], function(){});";;
};
;
};
;
PL$19/*s*/ = PL$19/*s*/["replace"]("{{require}}", PL$20/*loadStr*/);;
PL$22/*requireConfig*/;
if(PL$16/*self*/["config"]["requireConfig"]){
PL$22/*requireConfig*/ = PL$16/*self*/["config"]["requireConfig"];;
};
;
if(! PL$22/*requireConfig*/){
PL$22/*requireConfig*/ = {};;
};
;
if(! PL$22/*requireConfig*/["packages"]){
PL$22/*requireConfig*/["packages"] = [{"name": "promiseland",
"main": "promiseland",
"location": "promiseland"}];;

}else{
PL$21/*i*/ = 0;
PL$23/*found*/ = false;
for(PL$21/*i*/ = 0;(PL$21/*i*/ < PL$22/*requireConfig*/["packages"]["length"]);++PL$21/*i*/){{if((PL$22/*requireConfig*/["packages"][PL$21/*i*/]["name"] == "promiseland")){
PL$23/*found*/ = true;;
PL$22/*requireConfig*/["packages"][PL$21/*i*/]["main"] = "promiseland";;
PL$22/*requireConfig*/["packages"][PL$21/*i*/]["location"] = "promiseland";;
};
;
}};
;
if(! PL$23/*found*/){
PL$22/*requireConfig*/["packages"]["push"]({"name": "promiseland",
"main": "promiseland",
"location": "promiseland"});;
};
;
};
;
PL$19/*s*/ = PL$19/*s*/["replace"]("{{requirejsconfig}}", PL$24/*JSON*/["stringify"](PL$22/*requireConfig*/));;
PL$18/*res*/["end"](PL$19/*s*/);;
;
}));;
this["app"]["use"]("/promiseland", PL$5/*express*/["static"]((this["config"]["promiselandPathName"] || PL$25/*promiseland*/["getPromiselandPathName"]())));;
this["app"]["use"]("/requirejs", PL$5/*express*/["static"]((this["config"]["requirejsPathName"] || (PL$26/*__dirname*/ + "/requirejs"))));;
this["app"]["use"]("/frameworkClient", PL$5/*express*/["static"]((this["config"]["frameworkClientPathName"] || (PL$26/*__dirname*/ + "/frameworkClient"))));;
if(PL$16/*self*/["config"]["dirs"]){
for(PL$21/*i*/ = 0;(PL$21/*i*/ < PL$16/*self*/["config"]["dirs"]["length"]);++PL$21/*i*/){{PL$27/*d*/ = PL$16/*self*/["config"]["dirs"][PL$21/*i*/];
this["app"]["use"](PL$27/*d*/["client"], PL$5/*express*/["static"](PL$27/*d*/["server"]));;
}};
;
};
;
PL$25/*promiseland*/["set"]("profile", "server");;
PL$28/*ClientProfile*/ = (function(){
var PL$30/*nextid*/;
;
this["name"] = (function(){
;
return "client";;
;
});;
this["connections"] = {};;
this["find"] = (function(PL$29/*parId*/){
;
return this["connections"][PL$29/*parId*/];;
;
});;
PL$30/*nextid*/ = 1;
this["addConnection"] = (function(PL$31/*connection*/){
var PL$32/*id*/;
;
PL$32/*id*/ = PL$30/*nextid*/;
PL$30/*nextid*/++;;
this["connections"][PL$32/*id*/] = PL$31/*connection*/;;
this["emit"]("connection", PL$31/*connection*/);;
;
});;
;
});
PL$28/*ClientProfile*/["prototype"] = new PL$25/*promiseland*/["ProfileBaseClass"]();;
PL$33/*clientProfile*/ = new PL$28/*ClientProfile*/();
PL$25/*promiseland*/["addProfile"](PL$33/*clientProfile*/);;
this["clientProfile"] = PL$33/*clientProfile*/;;
PL$34/*mainio*/ = PL$11/*socketIo*/["listen"](this["http"]);
PL$34/*mainio*/["on"]("connection", (function(PL$35/*socket*/){
var PL$31/*connection*/;
;
PL$31/*connection*/ = new PL$25/*promiseland*/["ConnectionBaseClass"]();
PL$31/*connection*/["socket"] = PL$35/*socket*/;;
PL$35/*socket*/["on"]("pl", (function(PL$36/*data*/){
;
PL$31/*connection*/["emit"]("data", PL$36/*data*/);;
;
}));;
PL$31/*connection*/["send"] = (function(PL$36/*data*/){
;
PL$35/*socket*/["emit"]("pl", PL$36/*data*/);;
;
});;
PL$33/*clientProfile*/["addConnection"](PL$31/*connection*/);;
PL$35/*socket*/["on"]("disconnect", (function(){
;
PL$31/*connection*/["emit"]("disconnect");;
;
}));;
;
}));;
this["socketio"] = PL$34/*mainio*/;;
;
}),
"listen": (function(PL$37/*port*/){
;
return this["http"]["listen"](PL$37/*port*/);;
;
})}, [], PL$14/*inherited*/);
return res; })();PL$38/*Framework*/;;
PL$1.resolve(PL$38/*Framework*/); return;;
PL$1.resolve(); return;;
}), PL$4);
;}), PL$4);
;}), PL$4);
;}), PL$4);
;})();
return PL$1;
})();
;;
return PL$1});
})();