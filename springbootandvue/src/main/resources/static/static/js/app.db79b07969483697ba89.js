webpackJsonp([4],{"/5Jc":function(e,t){},0:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var u=n("VU/8")(null,a,!1,function(e){n("a8/C")},null,null).exports,r=n("/ocq");o.default.use(r.a);var l=new r.a({routes:[{path:"/",redirect:"/login"},{path:"/",component:function(e){return n.e(0).then(function(){var t=[n("MpTN")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"自述文件"},children:[{path:"/dashboard",component:function(e){return n.e(2).then(function(){var t=[n("a52u")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"系统首页"}}]},{path:"/login",component:function(e){return n.e(1).then(function(){var t=[n("GF4k")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"*",redirect:"/404"}]}),i=n("mtWM"),c=n.n(i),s=n("zL8q"),d=n.n(s),f=n("TXmL"),p=n("dAEq"),m=n.n(p),h=(n("tvR6"),n("/5Jc"),n("NYxO"));o.default.use(h.a);var g=new h.a.Store({state:{alertData:[]},getters:{},mutations:{},actions:{}});o.default.directive("dialogDrag",{bind:function(e,t,n,o){var a=e.querySelector(".el-dialog__header"),u=e.querySelector(".el-dialog");a.style.cssText+=";cursor:move;",u.style.cssText+=";top:0px;";var r=window.document.currentStyle?function(e,t){return e.currentStyle[t]}:function(e,t){return getComputedStyle(e,!1)[t]};a.onmousedown=function(e){var t=e.clientX-a.offsetLeft,n=e.clientY-a.offsetTop,o=document.body.clientWidth,l=document.documentElement.clientHeight,i=u.offsetWidth,c=u.offsetHeight,s=u.offsetLeft,d=o-u.offsetLeft-i,f=u.offsetTop,p=l-u.offsetTop-c,m=r(u,"left"),h=r(u,"top");m.includes("%")?(m=+document.body.clientWidth*(+m.replace(/\%/g,"")/100),h=+document.body.clientHeight*(+h.replace(/\%/g,"")/100)):(m=+m.replace(/\px/g,""),h=+h.replace(/\px/g,"")),document.onmousemove=function(e){var o=e.clientX-t,a=e.clientY-n;-o>s?o=-s:o>d&&(o=d),-a>f?a=-f:a>p&&(a=p),u.style.cssText+=";left:"+(o+m)+"px;top:"+(a+h)+"px;"},document.onmouseup=function(e){document.onmousemove=null,document.onmouseup=null}}}});n("j1ja");var v=n("8+8L");o.default.use(v.a),c.a.defaults.baseURL="http://localhost:8088/api",o.default.prototype.$axios=c.a,o.default.config.productionTip=!1,o.default.use(f.a),o.default.use(d.a,{size:"small"}),o.default.use(m.a,{ak:"zpOdlAB496jT170Fo73GWcOeoOfKwwvc"}),o.default.component("bml-marker-clusterer",p.BmlMarkerCluster),o.default.component("bml-curve-line",p.BmlCurveLine);var b=new f.a({locale:"zh",messages:{zh:{i18n:{breadcrumb:"国际化产品",tips:"通过切换语言按钮，来改变当前内容的语言。",btn:"切换英文",title1:"常用用法",p1:"要是你把你的秘密告诉了风，那就别怪风把它带给树。",p2:"没有什么比信念更能支撑我们度过艰难的时光了。",p3:"只要能把自己的事做好，并让自己快乐，你就领先于大多数人了。",title2:"组件插值",info:"Element组件需要国际化，请参考 {action}。",value:"文档"}},en:{i18n:{breadcrumb:"International Products",tips:"Click on the button to change the current language. ",btn:"Switch Chinese",title1:"Common usage",p1:"If you reveal your secrets to the wind you should not blame the wind for  revealing them to the trees.",p2:"Nothing can help us endure dark times better than our faith. ",p3:"If you can do what you do best and be happy, you're further along in life  than most people.",title2:"Component interpolation",info:"The default language of Element is Chinese. If you wish to use another language, please refer to the {action}.",value:"documentation"}}}});l.beforeEach(function(e,t,n){var a=localStorage.getItem("ms_username");a||"/login"===e.path?e.meta.permission?"admin"===a?n():n("/403"):navigator.userAgent.indexOf("MSIE")>-1&&"/editor"===e.path?o.default.prototype.$alert("vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看","浏览器不兼容通知",{confirmButtonText:"确定"}):n():n("/login")}),new o.default({router:l,i18n:b,render:function(e){return e(u)},store:g}).$mount("#app")},"a8/C":function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.db79b07969483697ba89.js.map