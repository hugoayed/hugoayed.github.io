(function(t){function e(e){for(var i,r,o=e[0],c=e[1],l=e[2],u=0,v=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&v.push(s[r][0]),s[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(v.length)v.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(i=!1)}i&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},s={app:0},n=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/tuto-medium/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0818":function(t,e,a){t.exports=a.p+"img/icon2.2cb1086d.svg"},"0b18":function(t,e,a){},1452:function(t,e,a){},"1f5a":function(t,e,a){"use strict";a("ba55")},"277a":function(t,e,a){t.exports=a.p+"img/borderWaves.eb7014a0.svg"},3147:function(t,e,a){t.exports=a.p+"img/paperplane.1fec4415.svg"},3893:function(t,e,a){t.exports=a.p+"img/airplane.6fd516cd.svg"},"3daf":function(t,e,a){},"47f4":function(t,e,a){},"4ffd":function(t,e,a){t.exports=a.p+"img/logo.7277adf6.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("navigation",{attrs:{color:t.color,flat:t.flat}}),a("v-main",{staticClass:"pt-0"},[a("home"),a("about"),a("download"),a("pricing"),a("contact")],1),a("v-scale-transition",[a("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.fab,expression:"fab"},{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"secondary"},on:{click:t.toTop}},[a("v-icon",[t._v("mdi-arrow-up")])],1)],1),a("foote")],1)},n=[],r=(a("0481"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-navigation-drawer",{attrs:{app:"",temporary:"",dark:"",src:a("7b11")},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-list",[i("v-list-item",[i("v-list-item-avatar",[i("img",{attrs:{src:a("4ffd"),alt:"Logo"}})]),i("v-list-item-content",[i("v-list-item-title",{staticClass:"title"},[t._v("Calango")]),i("v-list-item-subtitle",[t._v("WEB")])],1)],1)],1),i("v-divider"),i("v-list",{attrs:{dense:""}},t._l(t.items,(function(e,a){var s=e[0],n=e[1],r=e[2];return i("v-list-item",{key:a,attrs:{link:""},on:{click:function(e){return t.$vuetify.goTo(r)}}},[i("v-list-item-icon",{staticClass:"justify-center"},[i("v-icon",[t._v(t._s(s))])],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"subtitile-1"},[t._v(t._s(n))])],1)],1)})),1)],1),i("v-app-bar",{staticClass:"px-15",class:{expand:t.flat},attrs:{app:"",color:t.color,flat:t.flat,dark:""}},[i("v-toolbar-title",[i("v-img",{attrs:{src:a("4ffd"),"max-width":"50px"}})],1),i("v-spacer"),t.isXs?i("v-app-bar-nav-icon",{staticClass:"mr-4",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}):i("div",[i("v-btn",{attrs:{text:""},on:{click:function(e){return t.$vuetify.goTo("#hero")}}},[i("span",{staticClass:"mr-2"},[t._v("Home")])]),i("v-btn",{attrs:{text:""},on:{click:function(e){return t.$vuetify.goTo("#features")}}},[i("span",{staticClass:"mr-2"},[t._v("Le projet")])]),i("v-btn",{attrs:{text:""},on:{click:function(e){return t.$vuetify.goTo("#download")}}},[i("span",{staticClass:"mr-2"},[t._v("A propos")])]),i("v-btn",{attrs:{rounded:"",outlined:"",text:""},on:{click:function(e){return t.$vuetify.goTo("#contact")}}},[i("span",{staticClass:"mr-2"},[t._v("Contactez-nous")])])],1)],1)],1)}),o=[],c={data:function(){return{drawer:null,isXs:!1,items:[["mdi-home-outline","Home","#hero"],["mdi-information-outline","Sobre","#features"],["mdi-download-box-outline","Download","#download"],["mdi-currency-usd","Preços","#pricing"],["mdi-email-outline","Contatos","#contact"]]}},props:{color:String,flat:Boolean},methods:{onResize:function(){this.isXs=window.innerWidth<850}},watch:{isXs:function(t){t||this.drawer&&(this.drawer=!1)}},mounted:function(){this.onResize(),window.addEventListener("resize",this.onResize,{passive:!0})}},l=c,d=(a("ef4f"),a("2877")),u=a("6544"),v=a.n(u),m=a("40dc"),f=a("5bc1"),p=a("8336"),g=a("ce7e"),x=a("132d"),b=a("adda"),h=a("8860"),C=a("da13"),w=a("8270"),_=a("5d23"),y=a("34c3"),k=a("f774"),V=a("2fa4"),L=a("2a7f"),j=Object(d["a"])(l,r,o,!1,null,"0dee5c14",null),O=j.exports;v()(j,{VAppBar:m["a"],VAppBarNavIcon:f["a"],VBtn:p["a"],VDivider:g["a"],VIcon:x["a"],VImg:b["a"],VList:h["a"],VListItem:C["a"],VListItemAvatar:w["a"],VListItemContent:_["a"],VListItemIcon:y["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"],VNavigationDrawer:k["a"],VSpacer:V["a"],VToolbarTitle:L["a"]});var F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{dark:"",padless:""}},[a("v-card",{staticClass:"secondary white--text text-center",attrs:{flat:"",tile:""}},[a("v-card-text",t._l(t.icons,(function(e,i){return a("v-btn",{key:i,staticClass:"mx-4 white--text",attrs:{href:e.link,target:"_blank",icon:""}},[a("v-icon",{attrs:{size:"24px"}},[t._v(t._s(e.text))])],1)})),1),a("v-card-text",{staticClass:"white--text pt-0"},[t._v(" Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. ")]),a("v-divider"),a("v-card-text",{staticClass:"white--text"},[t._v(" "+t._s((new Date).getFullYear())+" — "),a("strong",[t._v("Fourmizz Agency")])])],1)],1)},I=[],$={data:function(){return{icons:[{text:"mdi-facebook",link:""},{text:"mdi-twitter",link:""},{text:"mdi-linkedin",link:""},{text:"mdi-instagram",link:"https://instagram.com/joabson_arley/"}]}}},S=$,T=(a("98c8"),a("b0af")),A=a("99d9"),B=a("553a"),E=Object(d["a"])(S,F,I,!1,null,"3e147b17",null),z=E.exports;v()(E,{VBtn:p["a"],VCard:T["a"],VCardText:A["a"],VDivider:g["a"],VFooter:B["a"],VIcon:x["a"]});var P=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{attrs:{id:"hero"}},[i("v-parallax",{attrs:{dark:"",src:a("9383"),height:"750"}},[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",{attrs:{cols:"10"}},[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",{attrs:{cols:"12",md:"6",xl:"8"}},[i("h1",{staticClass:"display-2 font-weight-bold mb-4"},[t._v("BLIBLABLOU")]),i("h1",{staticClass:"font-weight-light"},[t._v(" Lorem ipsum dolor sit amet consectetur "),i("br"),t._v(" adipisicing elit. Maiores porro voluptatibus "),i("br"),t._v(" delectus nam optio harum! ")]),i("v-btn",{staticClass:"mt-5",attrs:{rounded:"",outlined:"",large:"",dark:""},on:{click:function(e){return t.$vuetify.goTo("#features")}}},[t._v(" En savoir plus "),i("v-icon",{staticClass:"ml-2"},[t._v("mdi-arrow-down")])],1),i("div",{staticClass:"video d-flex align-center py-4"},[i("a",{staticClass:"playBut",on:{click:function(e){e.stopPropagation(),t.dialog=!0}}},[i("svg",{attrs:{version:"1.1",x:"0px",y:"0px",width:"60px",height:"60px",viewBox:"0 0 213.7 213.7","enable-background":"new 0 0 213.7 213.7","xml:space":"preserve"}},[i("polygon",{staticClass:"triangle",attrs:{id:"XMLID_18_",fill:"none","stroke-width":"7","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",points:"73.5,62.5 148.5,105.8 73.5,149.1 "}}),i("circle",{staticClass:"circle",attrs:{id:"XMLID_17_",fill:"none","stroke-width":"7","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",cx:"106.8",cy:"106.8",r:"103.3"}})])]),i("p",{staticClass:"subheading ml-2 mb-0"},[t._v("Lien d'une vidéo")])])],1),i("v-col",{staticClass:"hidden-sm-and-down",attrs:{cols:"12",md:"6",xl:"4"}})],1)],1)],1),i("div",{staticClass:"svg-border-waves text-white"},[i("v-img",{attrs:{src:a("277a")}})],1)],1),i("v-container",{staticClass:"mt-2",attrs:{fluid:"",id:"features"}},[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",{attrs:{cols:"10"}},[i("v-row",{attrs:{align:"center",justify:"space-around"}},t._l(t.features,(function(e,a){return i("v-col",{key:a,staticClass:"text-center",attrs:{cols:"12",sm:"4"}},[i("v-hover",{scopedSlots:t._u([{key:"default",fn:function(a){var s=a.hover;return[i("v-card",{staticClass:"card",class:{up:s},attrs:{shaped:"",elevation:s?10:4}},[i("v-img",{staticClass:"d-block ml-auto mr-auto",class:{"zoom-efect":s},attrs:{src:e.img,"max-width":"100px"}}),i("h1",{staticClass:"font-weight-regular"},[t._v(t._s(e.title))]),i("h4",{staticClass:"font-weight-regular subtitle-1"},[t._v(" "+t._s(e.text)+" ")])],1)]}}],null,!0)})],1)})),1)],1)],1)],1),i("v-dialog",{attrs:{"max-width":"640px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("youtube",{attrs:{"video-id":t.videoId},on:{ready:t.ready,playing:t.playing}})],1)],1),t._m(0)],1)},R=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"svg-border-waves"},[i("img",{attrs:{src:a("e355")}})])}],D={data:function(){return{dialog:!1,videoId:"dQw4w9WgXcQ",features:[{img:a("e82b"),title:"Les meilleurs cerveaux",text:"Lorem ipsum dolor sit amet consectetur adipisicing allo."},{img:a("ded3"),title:"On va gagner la compet",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},{img:a("b23c"),title:"C'est une LP de folie",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}]}},watch:{dialog:function(t){t||this.pause()}},methods:{ready:function(t){this.player=t.target},playing:function(t){},change:function(){this.videoId="another video id"},stop:function(){this.player.stopVideo()},pause:function(){this.player.pauseVideo()}}},M=D,q=(a("cb9f"),a("d115"),a("e1da"),a("62ad")),U=a("a523"),X=a("169a"),H=a("ce87"),W=a("8b9c"),N=a("0fd9"),Y=Object(d["a"])(M,P,R,!1,null,null,null),J=Y.exports;v()(Y,{VBtn:p["a"],VCard:T["a"],VCol:q["a"],VContainer:U["a"],VDialog:X["a"],VHover:H["a"],VIcon:x["a"],VImg:b["a"],VParallax:W["a"],VRow:N["a"]});var Q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{attrs:{id:"about"}},[i("v-container",{attrs:{fluid:""}},[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",{attrs:{cols:"10"}},[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",{attrs:{cols:"12",md:"7"}},[i("h1",{staticClass:"font-weight-light display-2"},[t._v("Sur nous")]),i("h1",{staticClass:"font-weight-light display-1 mb-3"},[t._v(" Lorem ipsum dolor! ")]),i("v-row",[i("v-col",{staticClass:"d-flex align-center",attrs:{cols:"12"}},[i("v-img",{staticClass:"mr-4",attrs:{src:a("c986"),"max-width":"60px"}}),i("p",{staticClass:"text-justify"},[t._v(" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. ")])],1),i("v-col",{staticClass:"d-flex align-center",attrs:{cols:"12"}},[i("v-img",{staticClass:"mr-4",attrs:{src:a("0818"),"max-width":"60px"}}),i("p",{staticClass:"text-justify"},[t._v(" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. ")])],1),i("v-col",{staticClass:"d-flex align-center",attrs:{cols:"12"}},[i("v-img",{staticClass:"mr-4",attrs:{src:a("99d2"),"max-width":"60px"}}),i("p",{staticClass:"text-justify"},[t._v(" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. ")])],1)],1)],1),i("v-col",{staticClass:"d-none d-md-flex",attrs:{cols:"12",md:"5"}},[i("v-img",{staticClass:"d-block ml-auto mr-auto",attrs:{src:a("bdd4"),"max-width":"400px"}})],1)],1)],1)],1)],1)],1)},G=[],Z=(a("8335"),{}),K=Object(d["a"])(Z,Q,G,!1,null,"3d4d0852",null),tt=K.exports;v()(K,{VCol:q["a"],VContainer:U["a"],VImg:b["a"],VRow:N["a"]});var et=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{attrs:{id:"download"}},[i("v-container",{attrs:{fluid:""}},[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",{attrs:{cols:"10"}},[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",{staticClass:"hidden-xs-only",attrs:{sm:"4"}},[i("v-img",{staticClass:"d-block ml-auto mr-auto",attrs:{src:a("7b11"),"max-width":"350px"}})],1),i("v-col",{staticClass:"white--text text-left",attrs:{cols:"12",sm:"8"}},[i("h1",{staticClass:"font-weight-light display-2 mb-2"},[t._v("Un produit de fou")]),i("h1",{staticClass:"font-weight-light"},[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ex animi quod laboriosam vel blanditiis labore alias, aliquid, tempora repellendus non. ")]),i("v-btn",{staticClass:"mt-4",attrs:{rounded:"",outlined:"",href:"https://github.com/Joabsonlg/Landing-Page",target:"_blank",large:"",color:"white"}},[i("v-icon",{staticClass:"mr-2"},[t._v(" mdi-github ")]),t._v(" Git Hub ")],1)],1)],1)],1)],1)],1)],1)},at=[],it=(a("967a"),{}),st=Object(d["a"])(it,et,at,!1,null,"37728494",null),nt=st.exports;v()(st,{VBtn:p["a"],VCol:q["a"],VContainer:U["a"],VIcon:x["a"],VImg:b["a"],VRow:N["a"]});var rt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"pb-8",attrs:{id:"pricing"}},[i("v-container",{attrs:{fluid:""}},[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",{attrs:{cols:"10"}},[i("v-card",{staticStyle:{width:"100%"}},[i("h1",{staticClass:"text-center pt-6 font-weight-light display-2"},[t._v("Tarifs")]),i("v-divider",{staticClass:"my-6"}),i("v-row",{staticClass:"text-center"},[i("v-col",{staticClass:"col-12 col-sm-6 col-md-4"},[i("div",{staticClass:"flex-center"},[i("v-card-text",[i("div",{staticClass:"flex-center"},[i("div",{staticClass:"circle1"},[i("div",{staticClass:"circle2"},[i("v-img",{attrs:{src:a("3147")}})],1)])]),i("div",{staticClass:"text--disabled text-uppercase text-h5 my-2"},[t._v("Basique")]),i("v-divider",{staticClass:"my-2"}),i("div",{staticClass:"text-uppercase blue--text"},[t._v("Fonctionnalité incroyable n°1")]),i("v-divider",{staticClass:"my-2"}),i("div",{staticClass:"text-uppercase blue--text"},[t._v("Fonctionnalité incroyable n°2")]),i("v-divider",{staticClass:"my-2"}),i("div",{staticClass:"text-uppercase blue--text"},[t._v("Fonctionnalité incroyable n°3")]),i("v-divider",{staticClass:"my-2"}),i("div",{staticClass:"text-uppercase text-h4 mt-6 blue--text"},[t._v("20 €")]),i("v-btn",t._b({staticClass:"mt-6",attrs:{rounded:"",outlined:"",color:"blue"}},"v-btn",t.size,!1),[t._v(" Commencez maintenant ! ")])],1),this.$vuetify.breakpoint.smAndUp?i("v-divider",{staticStyle:{"margin-right":"-23px"},attrs:{vertical:""}}):t._e()],1),this.$vuetify.breakpoint.smAndUp?t._e():i("v-divider",{staticClass:"mx-4"})],1),i("v-col",{staticClass:"col-12 col-sm-6 col-md-4"},[i("div",{staticClass:"flex-center"},[i("v-card-text",[i("div",{staticClass:"flex-center"},[i("div",{staticClass:"circle1"},[i("div",{staticClass:"circle2"},[i("v-img",{attrs:{src:a("3893")}})],1)])]),i("div",{staticClass:"text--disabled text-uppercase text-h5 my-2"},[t._v("Normal")]),i("v-divider",{staticClass:"my-2"}),i("div",{staticClass:"text-uppercase blue--text"},[t._v("Fonctionnalité incroyable n°1")]),i("v-divider",{staticClass:"my-2"}),i("div",{staticClass:"text-uppercase blue--text"},[t._v("Fonctionnalité incroyable n°2")]),i("v-divider",{staticClass:"my-2"}),i("div",{staticClass:"text-uppercase blue--text"},[t._v("Fonctionnalité incroyable n°3")]),i("v-divider",{staticClass:"my-2"}),i("div",{staticClass:"text-uppercase text-h4 mt-6 blue--text"},[t._v("100 €")]),i("v-btn",t._b({staticClass:"mt-6",attrs:{rounded:"",outlined:"",color:"blue"}},"v-btn",t.size,!1),[t._v(" Commencez maintenant ! ")])],1),this.$vuetify.breakpoint.mdAndUp?i("v-divider",{staticStyle:{"margin-right":"-23px"},attrs:{vertical:""}}):t._e()],1),this.$vuetify.breakpoint.smAndUp?t._e():i("v-divider",{staticClass:"mx-4"})],1),i("v-col",{staticClass:"col-12 col-md-4"},[this.$vuetify.breakpoint.smOnly?i("v-divider",{staticClass:"mx-4"}):t._e(),i("div",{staticClass:"flex-center"},[i("v-card-text",[i("div",{staticClass:"flex-center"},[i("div",{staticClass:"circle1"},[i("div",{staticClass:"circle2"},[i("v-img",{attrs:{src:a("ea8f")}})],1)])]),i("div",{staticClass:"text--disabled text-uppercase text-h5 my-2"},[t._v("Entreprise")]),i("v-divider",{staticClass:"my-2"}),i("div",{staticClass:"text-uppercase blue--text"},[t._v("Fonctionnalité incroyable n°1")]),i("v-divider",{staticClass:"my-2"}),i("div",{staticClass:"text-uppercase blue--text"},[t._v("Fonctionnalité incroyable n°2")]),i("v-divider",{staticClass:"my-2"}),i("div",{staticClass:"text-uppercase blue--text"},[t._v("Fonctionnalité incroyable n°3")]),i("v-divider",{staticClass:"my-2"}),i("div",{staticClass:"text-uppercase text-h4 mt-6 blue--text"},[t._v("500 €")]),i("v-btn",t._b({staticClass:"mt-6",attrs:{rounded:"",outlined:"",color:"blue"}},"v-btn",t.size,!1),[t._v(" Commencez maintenant ! ")])],1)],1)],1)],1)],1)],1)],1)],1),i("div",{staticClass:"svg-border-rounded text-light"},[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",preserveAspectRatio:"none",fill:"currentColor"}},[i("path",{attrs:{d:"M0,64L80,90.7C160,117,320,171,480,181.3C640,192,800,160,960,138.7C1120,117,1280,107,1360,101.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"}})])])],1)},ot=[],ct=a("ade3"),lt=(a("b0c0"),{data:function(){return{planos:[{title:"Básico",price:"R$100,00",img:"f1.png",features:[{icon:{text:"mdi-check",color:"success"},text:"Feature 1"},{icon:{text:"mdi-check",color:"success"},text:"Feature 2"},{icon:{text:"mdi-cancel",color:"red"},text:"Feature 3"},{icon:{text:"mdi-cancel",color:"red"},text:"Feature 4"}]},{title:"Padrão",price:"R$150,00",img:"f2.png",features:[{icon:{text:"mdi-check",color:"success"},text:"Feature 1",color:"success"},{icon:{text:"mdi-check",color:"success"},text:"Feature 2"},{icon:{text:"mdi-check",color:"success"},text:"Feature 3",color:"success"},{icon:{text:"mdi-cancel",color:"red"},text:"Feature 4"}]},{title:"Premium",price:"R$250,00",img:"f3.png",features:[{icon:{text:"mdi-check",color:"success"},text:"Feature 1",color:"success"},{icon:{text:"mdi-check",color:"success"},text:"Feature 2"},{icon:{text:"mdi-check",color:"success"},text:"Feature 3",color:"success"},{icon:{text:"mdi-check",color:"success"},text:"Feature 4",color:"success"}]}]}},computed:{size:function(){var t={md:"large",xl:"x-large"}[this.$vuetify.breakpoint.name];return t?Object(ct["a"])({},t,!0):{}}}}),dt=lt,ut=(a("1f5a"),a("5ee1"),Object(d["a"])(dt,rt,ot,!1,null,"53f4bc82",null)),vt=ut.exports;v()(ut,{VBtn:p["a"],VCard:T["a"],VCardText:A["a"],VCol:q["a"],VContainer:U["a"],VDivider:g["a"],VImg:b["a"],VRow:N["a"]});var mt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"pb-8",attrs:{id:"contact"}},[i("v-container",{attrs:{fluid:""}},[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",{attrs:{cols:"10"}},[i("v-row",{attrs:{justify:"center"}},[i("v-col",{attrs:{cols:"12",sm:"5"}},[i("h1",{staticClass:"font-weight-light display-1"},[t._v("Contactez-nous")]),i("h3",{staticClass:"font-weight-light mt-3"},[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste explicabo commodi quisquam asperiores dolore ad enim provident veniam perferendis voluptate, perspiciatis. ")]),i("h3",{staticClass:"font-weight-light mt-3"},[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing. ")]),i("h3",{staticClass:"font-weight-light mt-3"},[t._v(" Téléphone: +xx (xx) xx-xx-xx-xx-xx ")]),i("h3",{staticClass:"font-weight-light"},[t._v(" Adresse mail: email@email.com ")])]),i("v-col",{attrs:{cols:"12",sm:"7"}},[i("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.sendEmail.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("v-text-field",{attrs:{counter:10,rules:t.nameRules,label:"Prénom",required:"",name:"from_name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),i("v-text-field",{attrs:{rules:t.emailRules,label:"Adresse e-mail",required:"",name:"user_email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),i("v-col",{staticClass:"text-right"},[i("v-btn",{staticClass:"mr-4",attrs:{color:"success",elevation:"9",large:"",type:"submit"},on:{click:t.validate}},[t._v(" Validate ")])],1)],1)],1)],1)],1)],1)],1),i("div",{staticClass:"svg-border-waves text-white"},[i("v-img",{attrs:{src:a("d515")}})],1),i("v-snackbar",{attrs:{timeout:"3000",right:"",top:"",color:t.snackbar.color},scopedSlots:t._u([{key:"action",fn:function(e){var a=e.attrs;return[i("v-btn",t._b({attrs:{text:""},on:{click:function(e){t.snackbar.enabled=!1}}},"v-btn",a,!1),[t._v(" Fechar ")])]}}]),model:{value:t.snackbar.enabled,callback:function(e){t.$set(t.snackbar,"enabled",e)},expression:"snackbar.enabled"}},[t._v(" "+t._s(t.snackbar.text)+" ")])],1)},ft=[],pt=a("0f91"),gt=a.n(pt),xt={data:function(){return{icons:["fa-facebook","fa-twitter","fa-linkedin","fa-instagram"],valid:!0,name:"",nameRules:[function(t){return!!t||"O campo nome é obrigatório"},function(t){return t&&t.length>=6||"O nome precisa ter mais de 6 caracteres"}],email:"",emailRules:[function(t){return!!t||"O campo email é obrigatório"},function(t){return/.+@.+\..+/.test(t)||"O E-mail precisa ser válido"}],textArea:"",textAreaRules:[function(t){return!!t||"O campo de texto é obrigatório"},function(t){return t&&t.length>=10||"Mínimo de 10 caracteres"}],lazy:!1,snackbar:{enabled:!1,text:"",color:""}}},methods:{submit:function(){},sendEmail:function(t){gt.a.sendForm("default_service","contact_form",t.target,"user_ekTn8dEAYOfMMVPy0YHrW").then((function(t){alert("SUCCESS!",t.status,t.text)}),(function(t){alert("FAILED...",t)}))}}},bt=xt,ht=(a("78ee"),a("4bd4")),Ct=a("2db4"),wt=a("8654"),_t=Object(d["a"])(bt,mt,ft,!1,null,"791124f5",null),yt=_t.exports;v()(_t,{VBtn:p["a"],VCol:q["a"],VContainer:U["a"],VForm:ht["a"],VImg:b["a"],VRow:N["a"],VSnackbar:Ct["a"],VTextField:wt["a"]});var kt={name:"App",components:{navigation:O,foote:z,home:J,about:tt,download:nt,pricing:vt,contact:yt},data:function(){return{fab:null,color:"",flat:null}},created:function(){var t=window.pageYOffset||0;t<=60&&(this.color="transparent",this.flat=!0)},watch:{fab:function(t){t?(this.color="secondary",this.flat=!1):(this.color="transparent",this.flat=!0)}},methods:{onScroll:function(t){if("undefined"!==typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.fab=e>60}},toTop:function(){this.$vuetify.goTo(0)}}},Vt=kt,Lt=(a("fe43"),a("7496")),jt=a("f6c4"),Ot=a("0789"),Ft=a("269a"),It=a.n(Ft),$t=a("f977"),St=Object(d["a"])(Vt,s,n,!1,null,"2d3a67da",null),Tt=St.exports;v()(St,{VApp:Lt["a"],VBtn:p["a"],VIcon:x["a"],VMain:jt["a"],VScaleTransition:Ot["c"]}),It()(St,{Scroll:$t["b"]});var At=a("f309");i["a"].use(At["a"]);var Bt=new At["a"]({theme:{themes:{light:{primary:"#119DA4",secondary:"#171b34",accent:"3D87E4"}}}}),Et=a("f6dd");i["a"].use(Et["a"]),i["a"].config.productionTip=!1,new i["a"]({vuetify:Bt,render:function(t){return t(Tt)}}).$mount("#app")},"5ee1":function(t,e,a){"use strict";a("a69d")},"600b":function(t,e,a){},"78ee":function(t,e,a){"use strict";a("c55c")},"7b11":function(t,e,a){t.exports=a.p+"img/undraw_environment_iaus.9e7008f9.svg"},8335:function(t,e,a){"use strict";a("0b18")},9383:function(t,e,a){t.exports=a.p+"img/bgHome.8b3028c2.jpg"},"967a":function(t,e,a){"use strict";a("1452")},"98c8":function(t,e,a){"use strict";a("3daf")},"99d2":function(t,e,a){t.exports=a.p+"img/icon3.96b939ff.svg"},a244:function(t,e,a){},a69d:function(t,e,a){},b23c:function(t,e,a){t.exports=a.p+"img/icon3.247aff98.png"},ba55:function(t,e,a){},bdd4:function(t,e,a){t.exports=a.p+"img/undraw_nature_m5ll.0ca85194.svg"},c55c:function(t,e,a){},c986:function(t,e,a){t.exports=a.p+"img/icon1.571ab0b9.svg"},cb9f:function(t,e,a){"use strict";a("47f4")},ccdb:function(t,e,a){},d115:function(t,e,a){"use strict";a("ccdb")},d3fa:function(t,e,a){},d515:function(t,e,a){t.exports=a.p+"img/borderWavesBlue.1ad6aff0.svg"},ded3:function(t,e,a){t.exports=a.p+"img/icon1.6fddce46.png"},e1da:function(t,e,a){"use strict";a("a244")},e355:function(t,e,a){t.exports=a.p+"img/wave2.fd397f44.svg"},e82b:function(t,e,a){t.exports=a.p+"img/icon2.7e36b0c4.png"},ea8f:function(t,e,a){t.exports=a.p+"img/aeroplane.9c06bd32.svg"},ef4f:function(t,e,a){"use strict";a("d3fa")},fe43:function(t,e,a){"use strict";a("600b")}});
//# sourceMappingURL=app.531b9545.js.map