!function(t){var e=window.webpackHotUpdate;window.webpackHotUpdate=function(t,n){!function(t,e){if(!w[t]||!y[t])return;for(var n in y[t]=!1,e)Object.prototype.hasOwnProperty.call(e,n)&&(v[n]=e[n]);0==--_&&0===g&&O()}(t,n),e&&e(t,n)};var n,i=!0,r="bb16912a593a7959f9aa",a=1e4,o={},s=[],l=[];function c(t){var e=k[t];if(!e)return P;var i=function(i){return e.hot.active?(k[i]?-1===k[i].parents.indexOf(t)&&k[i].parents.push(t):(s=[t],n=i),-1===e.children.indexOf(i)&&e.children.push(i)):(console.warn("[HMR] unexpected require("+i+") from disposed module "+t),s=[]),P(i)},r=function(t){return{configurable:!0,enumerable:!0,get:function(){return P[t]},set:function(e){P[t]=e}}};for(var a in P)Object.prototype.hasOwnProperty.call(P,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(i,a,r(a));return i.e=function(t){return"ready"===u&&f("prepare"),g++,P.e(t).then(e,function(t){throw e(),t});function e(){g--,"prepare"===u&&(b[t]||E(t),0===g&&0===_&&O())}},i.t=function(t,e){return 1&e&&(t=i(t)),P.t(t,-2&e)},i}function d(t){var e={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==t,active:!0,accept:function(t,n){if(void 0===t)e._selfAccepted=!0;else if("function"==typeof t)e._selfAccepted=t;else if("object"==typeof t)for(var i=0;i<t.length;i++)e._acceptedDependencies[t[i]]=n||function(){};else e._acceptedDependencies[t]=n||function(){}},decline:function(t){if(void 0===t)e._selfDeclined=!0;else if("object"==typeof t)for(var n=0;n<t.length;n++)e._declinedDependencies[t[n]]=!0;else e._declinedDependencies[t]=!0},dispose:function(t){e._disposeHandlers.push(t)},addDisposeHandler:function(t){e._disposeHandlers.push(t)},removeDisposeHandler:function(t){var n=e._disposeHandlers.indexOf(t);n>=0&&e._disposeHandlers.splice(n,1)},check:x,apply:j,status:function(t){if(!t)return u;p.push(t)},addStatusHandler:function(t){p.push(t)},removeStatusHandler:function(t){var e=p.indexOf(t);e>=0&&p.splice(e,1)},data:o[t]};return n=void 0,e}var p=[],u="idle";function f(t){u=t;for(var e=0;e<p.length;e++)p[e].call(null,t)}var h,v,m,_=0,g=0,b={},y={},w={};function C(t){return+t+""===t?+t:t}function x(t){if("idle"!==u)throw new Error("check() is only allowed in idle status");return i=t,f("check"),(e=a,e=e||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var i=new XMLHttpRequest,a=P.p+""+r+".hot-update.json";i.open("GET",a,!0),i.timeout=e,i.send(null)}catch(t){return n(t)}i.onreadystatechange=function(){if(4===i.readyState)if(0===i.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===i.status)t();else if(200!==i.status&&304!==i.status)n(new Error("Manifest request to "+a+" failed."));else{try{var e=JSON.parse(i.responseText)}catch(t){return void n(t)}t(e)}}})).then(function(t){if(!t)return f("idle"),null;y={},b={},w=t.c,m=t.h,f("prepare");var e=new Promise(function(t,e){h={resolve:t,reject:e}});v={};return E(0),"prepare"===u&&0===g&&0===_&&O(),e});var e}function E(t){w[t]?(y[t]=!0,_++,function(t){var e=document.createElement("script");e.charset="utf-8",e.src=P.p+""+t+"."+r+".hot-update.js",document.head.appendChild(e)}(t)):b[t]=!0}function O(){f("ready");var t=h;if(h=null,t)if(i)Promise.resolve().then(function(){return j(i)}).then(function(e){t.resolve(e)},function(e){t.reject(e)});else{var e=[];for(var n in v)Object.prototype.hasOwnProperty.call(v,n)&&e.push(C(n));t.resolve(e)}}function j(e){if("ready"!==u)throw new Error("apply() is only allowed in ready status");var n,i,a,l,c;function d(t){for(var e=[t],n={},i=e.slice().map(function(t){return{chain:[t],id:t}});i.length>0;){var r=i.pop(),a=r.id,o=r.chain;if((l=k[a])&&!l.hot._selfAccepted){if(l.hot._selfDeclined)return{type:"self-declined",chain:o,moduleId:a};if(l.hot._main)return{type:"unaccepted",chain:o,moduleId:a};for(var s=0;s<l.parents.length;s++){var c=l.parents[s],d=k[c];if(d){if(d.hot._declinedDependencies[a])return{type:"declined",chain:o.concat([c]),moduleId:a,parentId:c};-1===e.indexOf(c)&&(d.hot._acceptedDependencies[a]?(n[c]||(n[c]=[]),p(n[c],[a])):(delete n[c],e.push(c),i.push({chain:o.concat([c]),id:c})))}}}}return{type:"accepted",moduleId:t,outdatedModules:e,outdatedDependencies:n}}function p(t,e){for(var n=0;n<e.length;n++){var i=e[n];-1===t.indexOf(i)&&t.push(i)}}e=e||{};var h={},_=[],g={},b=function(){console.warn("[HMR] unexpected require("+x.moduleId+") to disposed module")};for(var y in v)if(Object.prototype.hasOwnProperty.call(v,y)){var x;c=C(y);var E=!1,O=!1,j=!1,D="";switch((x=v[y]?d(c):{type:"disposed",moduleId:y}).chain&&(D="\nUpdate propagation: "+x.chain.join(" -> ")),x.type){case"self-declined":e.onDeclined&&e.onDeclined(x),e.ignoreDeclined||(E=new Error("Aborted because of self decline: "+x.moduleId+D));break;case"declined":e.onDeclined&&e.onDeclined(x),e.ignoreDeclined||(E=new Error("Aborted because of declined dependency: "+x.moduleId+" in "+x.parentId+D));break;case"unaccepted":e.onUnaccepted&&e.onUnaccepted(x),e.ignoreUnaccepted||(E=new Error("Aborted because "+c+" is not accepted"+D));break;case"accepted":e.onAccepted&&e.onAccepted(x),O=!0;break;case"disposed":e.onDisposed&&e.onDisposed(x),j=!0;break;default:throw new Error("Unexception type "+x.type)}if(E)return f("abort"),Promise.reject(E);if(O)for(c in g[c]=v[c],p(_,x.outdatedModules),x.outdatedDependencies)Object.prototype.hasOwnProperty.call(x.outdatedDependencies,c)&&(h[c]||(h[c]=[]),p(h[c],x.outdatedDependencies[c]));j&&(p(_,[x.moduleId]),g[c]=b)}var H,$=[];for(i=0;i<_.length;i++)c=_[i],k[c]&&k[c].hot._selfAccepted&&$.push({module:c,errorHandler:k[c].hot._selfAccepted});f("dispose"),Object.keys(w).forEach(function(t){!1===w[t]&&function(t){delete installedChunks[t]}(t)});for(var S,L,M=_.slice();M.length>0;)if(c=M.pop(),l=k[c]){var T={},I=l.hot._disposeHandlers;for(a=0;a<I.length;a++)(n=I[a])(T);for(o[c]=T,l.hot.active=!1,delete k[c],delete h[c],a=0;a<l.children.length;a++){var q=k[l.children[a]];q&&((H=q.parents.indexOf(c))>=0&&q.parents.splice(H,1))}}for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(l=k[c]))for(L=h[c],a=0;a<L.length;a++)S=L[a],(H=l.children.indexOf(S))>=0&&l.children.splice(H,1);for(c in f("apply"),r=m,g)Object.prototype.hasOwnProperty.call(g,c)&&(t[c]=g[c]);var N=null;for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(l=k[c])){L=h[c];var A=[];for(i=0;i<L.length;i++)if(S=L[i],n=l.hot._acceptedDependencies[S]){if(-1!==A.indexOf(n))continue;A.push(n)}for(i=0;i<A.length;i++){n=A[i];try{n(L)}catch(t){e.onErrored&&e.onErrored({type:"accept-errored",moduleId:c,dependencyId:L[i],error:t}),e.ignoreErrored||N||(N=t)}}}for(i=0;i<$.length;i++){var R=$[i];c=R.module,s=[c];try{P(c)}catch(t){if("function"==typeof R.errorHandler)try{R.errorHandler(t)}catch(n){e.onErrored&&e.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:n,originalError:t}),e.ignoreErrored||N||(N=n),N||(N=t)}else e.onErrored&&e.onErrored({type:"self-accept-errored",moduleId:c,error:t}),e.ignoreErrored||N||(N=t)}}return N?(f("fail"),Promise.reject(N)):(f("idle"),new Promise(function(t){t(_)}))}var k={};function P(e){if(k[e])return k[e].exports;var n=k[e]={i:e,l:!1,exports:{},hot:d(e),parents:(l=s,s=[],l),children:[]};return t[e].call(n.exports,n,n.exports,c(e)),n.l=!0,n.exports}P.m=t,P.c=k,P.d=function(t,e,n){P.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},P.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},P.t=function(t,e){if(1&e&&(t=P(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(P.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)P.d(n,i,function(e){return t[e]}.bind(null,i));return n},P.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return P.d(e,"a",e),e},P.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},P.p="",P.h=function(){return r},c(5)(P.s=5)}({"./app/css/admin.css":function(t,e){},"./app/js/admin-index.js":function(t,e,n){"use strict";n.r(e);var i={name:"shop-table",props:["list","alldata"],methods:{change:function(t){if(this.index=t,this.id=t,t>this.leng)return!1;t>=5&&t<=this.leng-2?this.page=[1,"...",t-1,t,t+1,"..."]:t==this.leng-1?this.page=[1,"...",t-2,t-1,t,t+1]:t===this.leng?this.page=[1,"...",t-3,t-2,t-1,t]:this.page=[1,2,3,4,5,"..."],this.$parent.pageList=this.$parent.alldata.slice(10*(t-1),10*t)},nextclic:function(t){if(this.id=t+1,console.log(this.leng),this.id>this.leng)return this.id=this.leng,!1;this.change(this.id)},preclic:function(t){if(this.id<=1)return this.id=1,!1;this.id=t-1,this.change(this.id)}},data:function(){return{page:[],leng:"",id:1,index:1}},created:function(){this.leng=Math.ceil(this.alldata.length/10);for(var t=1;t<=this.leng;t++){if(t>5){this.page.push("...");break}this.page.push(t)}}},r=n("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),a={name:"admin-index",data:function(){return{alldata:"",flag:!1,pageList:""}},components:{shopTable:Object(r.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("table",{staticClass:"table table-bordered text-center"},[t._m(0),t._v(" "),n("tbody",t._l(t.list,function(e){return n("tr",[n("td",{domProps:{innerHTML:t._s(e.id)}}),t._v(" "),n("td",{domProps:{innerHTML:t._s(e.title)}}),t._v(" "),n("td",{domProps:{innerHTML:t._s(e.newprice)}}),t._v(" "),n("td",{domProps:{innerHTML:t._s(e.class)}})])}),0)]),t._v(" "),n("ul",{staticClass:"list-inline text-center content-page"},[n("li",{on:{click:function(e){return t.preclic(t.id)}}},[t._v("<")]),t._v(" "),t._l(t.page,function(e){return n("li",{class:t.index==e?"bgcolor":"",domProps:{innerHTML:t._s(e)},on:{click:function(n){return t.change(e)}}})}),t._v(" "),n("li",{on:{click:function(e){return t.nextclic(t.id)}}},[t._v(">")])],2)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",{staticClass:"bg-primary"},[e("tr",[e("th",[this._v("id")]),this._v(" "),e("th",[this._v("商品")]),this._v(" "),e("th",[this._v("价格")]),this._v(" "),e("th",[this._v("分类")])])])}],!1,null,"346ea177",null).exports},created:function(){this.$http.post("./php/data.php",{admin:"all"},{emulateJSON:!0}).then(function(t){this.alldata=t.body,this.pageList=this.alldata.slice(0,10),this.flag=!0})}},o=Object(r.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content-box",staticStyle:{overflow:"hidden"}},[this.flag?e("shop-table",{attrs:{list:this.pageList,alldata:this.alldata}}):this._e()],1)},[],!1,null,"4a99011a",null).exports,s={name:"vue-add",methods:{clear:function(){var t=document.getElementById("add"),e=t.contentWindow,n=document.getElementsByTagName("input");t.onload=function(){var t=e.document.body.innerText;alert(t);for(var i=0;i<n.length;i++)"add"!==n[i].value&&(n[i].value="")}}}},l=Object(r.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-box",staticStyle:{overflow:"hidden"}},[n("p",[t._v("商品数据添加")]),t._v(" "),n("form",{staticClass:"form-horizontal",attrs:{role:"form",action:"./php/data.php",method:"post",enctype:"multipart/form-data",target:"add"}},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),n("div",{staticClass:"form-group"},[n("div",{staticClass:"col-lg-4 text-center",staticStyle:{margin:"0 auto"}},[n("input",{staticClass:"form-control btn btn-primary",attrs:{type:"submit"},on:{click:t.clear}})])])]),t._v(" "),n("iframe",{staticStyle:{display:"none"},attrs:{name:"add",id:"add"}})])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-lg-1 control-label",attrs:{for:"title"}},[this._v("title:")]),this._v(" "),e("div",{staticClass:"col-lg-4"},[e("input",{staticClass:"form-control",attrs:{type:"text",id:"title",name:"title",placeholder:"请输入名字",required:""}})]),this._v(" "),e("label",{staticClass:"col-lg-1 control-label",attrs:{for:"content"}},[this._v("content:")]),this._v(" "),e("div",{staticClass:"col-lg-6"},[e("input",{staticClass:"form-control",attrs:{type:"text",id:"content",name:"content",placeholder:"请输入名字"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-lg-1 control-label",attrs:{for:"newprice"}},[this._v("newprice:")]),this._v(" "),e("div",{staticClass:"col-lg-4"},[e("input",{staticClass:"form-control",attrs:{type:"text",id:"newprice",name:"newprice",placeholder:"请输入名字",required:""}})]),this._v(" "),e("label",{staticClass:"col-lg-1 control-label",attrs:{for:"oldprice"}},[this._v("oldprice:")]),this._v(" "),e("div",{staticClass:"col-lg-6"},[e("input",{staticClass:"form-control",attrs:{type:"text",id:"oldprice",name:"oldprice",placeholder:"请输入名字"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-lg-1 control-label",attrs:{for:"biaoqian"}},[this._v("biaoqian:")]),this._v(" "),e("div",{staticClass:"col-lg-4"},[e("input",{staticClass:"form-control",attrs:{type:"text",id:"biaoqian",name:"biaoqian",placeholder:"请输入名字"}})]),this._v(" "),e("label",{staticClass:"col-lg-1 control-label",attrs:{for:"admin"}},[this._v("admin:")]),this._v(" "),e("div",{staticClass:"col-lg-6"},[e("input",{staticClass:"form-control",attrs:{type:"text",id:"admin",name:"admin",value:"add"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group"},[n("label",{staticClass:"col-lg-1",attrs:{for:"pic"}},[t._v("picture")]),t._v(" "),n("div",{staticClass:"col-lg-4"},[n("input",{staticClass:"form-control",attrs:{type:"file",id:"pic",name:"pic"}})]),t._v(" "),n("label",{staticClass:"col-lg-1",attrs:{for:"name"}},[t._v("选择列表")]),t._v(" "),n("div",{staticClass:"col-lg-6"},[n("select",{staticClass:"form-control",attrs:{name:"class",id:"name"}},[n("option",{attrs:{value:"mix"}},[t._v("mix")]),t._v(" "),n("option",{attrs:{value:"redmi"}},[t._v("redmi")]),t._v(" "),n("option",{attrs:{value:"tv"}},[t._v("tv")]),t._v(" "),n("option",{attrs:{value:"pc"}},[t._v("pc")]),t._v(" "),n("option",{attrs:{value:"jiadian"}},[t._v("jiadian")]),t._v(" "),n("option",{attrs:{value:"new"}},[t._v("new")]),t._v(" "),n("option",{attrs:{value:"router"}},[t._v("router")]),t._v(" "),n("option",{attrs:{value:"zhineng"}},[t._v("zhineng")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group",staticStyle:{"margin-left":"0","margin-right":"0"}},[e("label",{staticClass:" control-label",attrs:{for:"description"}},[this._v("description:")]),this._v(" "),e("div",[e("input",{staticClass:"form-control",attrs:{id:"description",name:"description",required:"",type:"text"}})])])}],!1,null,"1bd72d33",null).exports,c={name:"vue-manage",data:function(){return{imgList:"",flag:!1,list:[],index:1,allList:"",id:"",window:!1,window1:!1,indexof:"",pic:"",link:""}},methods:{bgcolor:function(t){this.index=t,this.imgList=this.allList.slice(5*(t-1),5*t)},get:function(){this.$http.get("./data/imageShow.json?time="+new Date).then(function(t){this.allList=t.body,this.imgList=this.allList.slice(0,5),this.list=[];for(var e=1;e<=Math.ceil(this.allList.length/5);e++)this.list.push(e);this.flag=!0,this.id=this.allList.length+1})},show:function(){this.window=!this.window},refresh:function(){var t=document.getElementById("contentwindow"),e=t.contentWindow;t.onload=function(){"添加成功"==e.document.body.innerText?(this.flag=!1,this.get(),alert("数据添加完成")):alert("数据添加失败")}.bind(this)},change:function(t){this.window1=!this.window1,this.indexof=t},set:function(t){this.flag=!1,this.$http.post("./php/data.php",{admin:"imgchange",id:this.indexof,pic:this.pic,link:this.link},{emulateJSON:!0}).then(function(t){this.window1=!1,this.index=1,this.get()})},delect:function(t){this.flag=!1,this.$http.post("./php/data.php?time="+new Date,{admin:"delectimg",id:t},{emulateJSON:!0}).then(function(t){this.index=1,this.get()})}},created:function(){this.get()}},d=Object(r.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"manage-box",staticStyle:{overflow:"hidden",position:"relative"},attrs:{id:"manage-box"}},[n("p",[t._v("网站栏目管理")]),t._v(" "),t._m(0),t._v(" "),n("div",[n("table",{staticClass:"table table-bordered"},[t._m(1),t._v(" "),t.flag?n("tbody",{staticClass:"text-center"},t._l(t.imgList,function(e){return n("tr",[n("td",{domProps:{innerHTML:t._s(e.id)}}),t._v(" "),n("td",{domProps:{innerHTML:t._s(e.path)}}),t._v(" "),n("td",{domProps:{innerHTML:t._s(e.link)}}),t._v(" "),n("td",[n("button",{staticClass:"btn btn-primary",on:{click:function(n){return t.change(e.id)}}},[t._v("修改")]),t._v(" "),n("button",{staticClass:"btn btn-danger",on:{click:function(n){return t.delect(e.id)}}},[t._v("删除")])])])}),0):t._e()]),t._v(" "),n("button",{staticClass:"btn btn-primary",on:{click:t.show}},[t._v("增加一条")]),t._v(" "),t.flag?n("ul",{staticClass:"list-inline text-center manage-page"},t._l(t.list,function(e){return n("li",{class:t.index==e?"bgcolor":"",on:{click:function(n){return t.bgcolor(e)}}},[t._v(t._s(e))])}),0):t._e()]),t._v(" "),t.window?n("div",{staticClass:"manage-add-img"},[n("form",{attrs:{role:"form",enctype:"multipart/form-data",method:"post",action:"./php/data.php",target:"data"}},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"id"}},[t._v("id")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],staticClass:"form-control",attrs:{type:"text",id:"id",placeholder:"请输入id",name:"id"},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=e.target.value)}}})]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),n("div",{staticClass:"form-group"},[n("input",{staticClass:"btn btn-primary bg-primary text-center btn-block",attrs:{type:"submit",value:"添加"},on:{click:t.refresh}})])]),t._v(" "),n("iframe",{staticStyle:{display:"none"},attrs:{name:"data",id:"contentwindow"}})]):t._e(),t._v(" "),t.window1?n("div",{staticClass:"manage-change-img"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"id"}},[t._v("id")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.indexof,expression:"indexof"}],staticClass:"form-control",attrs:{type:"text",id:"id",placeholder:"请输入id",name:"id",required:""},domProps:{value:t.indexof},on:{input:function(e){e.target.composing||(t.indexof=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"pic"}},[t._v("图片")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.pic,expression:"pic"}],staticClass:"form-control",attrs:{type:"text",id:"pic",placeholder:"请上传图片",name:"pic",required:""},domProps:{value:t.pic},on:{input:function(e){e.target.composing||(t.pic=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"link"}},[t._v("链接")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.link,expression:"link"}],staticClass:"form-control",attrs:{type:"text",id:"link",placeholder:"请输入地址",name:"link",required:""},domProps:{value:t.link},on:{input:function(e){e.target.composing||(t.link=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("input",{staticClass:"btn btn-primary bg-primary text-center btn-block",attrs:{type:"submit",value:"修改"},on:{click:function(e){return t.set(t.indexof)}}})])]):t._e()])},[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"list-inline manage-list"},[e("li",{staticClass:"bg-primary"},[this._v("轮播图管理")]),this._v(" "),e("li",{staticClass:"bg-primary"},[this._v("轮播图管理")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",{staticClass:"bg-primary"},[e("tr",[e("th",[this._v("id")]),this._v(" "),e("th",[this._v("路径")]),this._v(" "),e("th",[this._v("链接")]),this._v(" "),e("th",[this._v("操作")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"file"}},[this._v("图片")]),this._v(" "),e("input",{staticClass:"form-control",attrs:{type:"file",id:"file",placeholder:"请上传图片",name:"pic"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"link"}},[this._v("链接")]),this._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",id:"link",placeholder:"请输入地址",name:"link"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("input",{staticClass:"form-control",attrs:{type:"hidden",id:"admin",name:"admin",value:"img"}})])}],!1,null,"0c14d196",null).exports;const p=new VueRouter({routes:[{path:"/",component:o},{path:"/add",component:l},{path:"/manage",component:d}]});new Vue({el:"#box",components:{adminIndex:o,adminAdd:l,adminManage:d},router:p})},"./node_modules/vue-loader/lib/runtime/componentNormalizer.js":function(t,e,n){"use strict";function i(t,e,n,i,r,a,o,s){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):r&&(l=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,e){return l.call(e),d(t,e)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,l):[l]}return{exports:t,options:c}}n.d(e,"a",function(){return i})},5:function(t,e,n){n("./app/js/admin-index.js"),t.exports=n("./app/css/admin.css")}});