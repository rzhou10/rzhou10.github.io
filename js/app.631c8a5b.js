(function(e){function t(t){for(var n,s,i=t[0],u=t[1],l=t[2],p=0,f=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);c&&c(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var u=r[i];0!==o[u]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={app:0},a=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var c=u;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0729":function(e,t,r){e.exports=r.p+"img/linkedin_logo.3c2a10cc.png"},"2b0f":function(e,t,r){"use strict";r("2c31")},"2c31":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("2b0e"),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("h1",[e._v(" I am a fullstack software engineer, graduated from Stevens Institute of Technology (2019). I speak Node JS, React.js, Vue.js, SQL and NoSQL. Focused on building applications that provide seamless, dynamic, and snappy user experiences. ")]),t("h1",[e._v(" You're always welcome to contact me at the following ")]),t("div",{staticClass:"footer"},[t("a",{attrs:{href:e.pdf,target:"_blank"}},[t("img",{staticClass:"external",attrs:{title:"Resume",src:r("8e73"),alt:"Resume icon"}})]),e._m(0),e._m(1)]),t("h3",{staticClass:"footer"},[e._v(" "+e._s(e.time)+" ")])])},a=[function(){var e=this,t=e._self._c;return t("a",{staticClass:"externalLinks",attrs:{href:"https://github.com/rzhou10",target:"_blank",rel:"noopener noreferrer"}},[t("img",{staticClass:"external",attrs:{title:"Github",src:r("8125"),alt:"Github logo"}})])},function(){var e=this,t=e._self._c;return t("a",{staticClass:"externalLinks",attrs:{href:"https://www.linkedin.com/in/rzhou10/",target:"_blank",rel:"noopener noreferrer"}},[t("img",{staticClass:"external",attrs:{title:"LinkedIn",src:r("0729"),alt:"LinkedIn logo"}})])}],s=r("c043"),i=r.n(s),u={name:"App",data(){return{time:"",pdf:i.a}},mounted(){this.loadTime()},methods:{loadTime(){return setInterval(this.getDate,1e3)},getDate(){let e=new Date,t=e.getHours(),r=e.getMinutes(),n=e.getSeconds(),o=e.getMonth(),a=e.getDate(),s=e.getFullYear(),i=["January","February","March","April","May","June","July","August","September","October","November","December"];this.time=`Today is: ${i[o]} ${a}, ${s} ${this.padZeros(t)}:${this.padZeros(r)}:${this.padZeros(n)}`},padZeros(e){return e<10?"0"+e:e}}},l=u,c=(r("2b0f"),r("2877")),p=Object(c["a"])(l,o,a,!1,null,null,null),f=p.exports;n["a"].config.productionTip=!1,new n["a"]({render:e=>e(f)}).$mount("#app")},8125:function(e,t,r){e.exports=r.p+"img/github_logo.111283b5.png"},"8e73":function(e,t,r){e.exports=r.p+"img/resumeIcon.0f33c0ed.png"},c043:function(e,t,r){e.exports=r.p+"pdf/Renjie_Zhou_resume.pdf"}});
//# sourceMappingURL=app.631c8a5b.js.map