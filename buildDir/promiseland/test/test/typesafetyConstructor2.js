(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

var classSystem = promiseland.classSystem;
if (promiseland._hasModule({ hashStr: "2155bc6dc8372113a022f738f7243400" })){ return promiseland._getModule("2155bc6dc8372113a022f738f7243400"); };
var PL$1 = (function(){
"use strict";
var PL$3/*C2*/;
var PL$8/*b*/;
var PL$6/*C1*/;
var PL$10/*v1*/;

/* ---------------------------- */
/* type C2 */
var PL$2/*type:C2*/ = classSystem._createProvisionalClass();
PL$3/*C2*/ = PL$2/*type:C2*/
var PL$4/*C2-constructor*/ = undefined;
classSystem.readyPromise(PL$2/*type:C2*/).then(function(parType){
  PL$2/*type:C2*/ = parType;
  PL$4/*C2-constructor*/ = classSystem.getTypeConstructor(PL$2/*type:C2*/);
});
/* ---------------------------- */


/* ---------------------------- */
/* type C1 */
var PL$5/*type:C1*/ = classSystem._createProvisionalClass();
PL$6/*C1*/ = PL$5/*type:C1*/
var PL$7/*C1-constructor*/ = undefined;
classSystem.readyPromise(PL$5/*type:C1*/).then(function(parType){
  PL$5/*type:C1*/ = parType;
  PL$7/*C1-constructor*/ = classSystem.getTypeConstructor(PL$5/*type:C1*/);
});
/* ---------------------------- */


  ;
  classSystem._resolveProvisional(PL$2/*type:C2*/, classSystem.createClass({className: "C2",members: [{"name":"a","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "hashStr": "2155bc6dc8372113a022f738f7243400", "name": "C2"}, {"a": 2}));PL$3/*C2*/;
  PL$8/*b*/ = new PL$4/*C2-constructor*/();
  PL$8/*b*/[3] = 3;
  classSystem._resolveProvisional(PL$5/*type:C1*/, classSystem.createClass({className: "C1",members: [{"name":"a","type":PL$2/*type:C2*/},{"name":"constructor","type":(classSystem.createFunctionType({ "return": classSystem.getBuiltinType("var"), arguments: [PL$2/*type:C2*/]}))}], "extends": [], "hasFreePart": true, "hashStr": "2155bc6dc8372113a022f738f7243400", "name": "C1"}, {"a": new PL$4/*C2-constructor*/(), "constructor": (function(PL$9/*par1*/){
  
    ;
    this[3] = PL$9/*par1*/;
    ;})}));PL$6/*C1*/;
  PL$10/*v1*/ = new PL$7/*C1-constructor*/(PL$8/*b*/);
  if((PL$10/*v1*/[3][3] == 3)){
    return {
      "success": true
    };
  };
  ;
  return {
    "success": false
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
