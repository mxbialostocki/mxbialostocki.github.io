(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"51K9":function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"mxbialostocki","description":"a portfolio / cv site","author":"@mxbialostocki"}}}}')},"8+s/":function(t,e,n){"use strict";n("sc67"),n("AqHK"),n("pJf4"),n("pS08"),n("R48M");var r,a=n("q1tI"),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function u(){s=t(l.map((function(t){return t.props}))),f.canUseDOM?e(s):n&&(s=n(s))}var f=function(t){var e,n;function a(){return t.apply(this,arguments)||this}n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=s;return s=void 0,l=[],t};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var t=l.indexOf(this);l.splice(t,1),u()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},"8ypT":function(t,e,n){},Aw06:function(t,e,n){"use strict";n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("E5k/");var r=n("q1tI"),a=n.n(r),o=n("Wbzz");e.a=function(t){var e=t.children,n=t.to,r=t.activeClassName,i=(t.activeStyle,t.partiallyActive),c=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,["children","to","activeClassName","activeStyle","partiallyActive"]);return/^\/(?!\/)/.test(n)?a.a.createElement(o.Link,Object.assign({to:n,activeClassName:r,activeStyle:{color:"#f50057"},partiallyActive:i},c),e):a.a.createElement("a",Object.assign({href:n},c,{target:"_blank",rel:"noreferrer"}),e)}},Bl7J:function(t,e,n){"use strict";var r=n("f98A"),a=n("q1tI"),o=n.n(a),i=n("tRbT"),c=n("ofer"),s=n("wx14"),l=n("Ff2n"),u=n("iuhU"),f=n("NqtD"),p=n("H2TA"),d=n("G7As"),m=n("bfFb"),h=a.forwardRef((function(t,e){var n=t.classes,r=t.className,o=t.color,i=void 0===o?"primary":o,p=t.component,h=void 0===p?"a":p,y=t.onBlur,g=t.onFocus,b=t.TypographyClasses,v=t.underline,w=void 0===v?"hover":v,T=t.variant,x=void 0===T?"inherit":T,E=Object(l.a)(t,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),O=Object(d.a)(),A=O.isFocusVisible,j=O.onBlurVisible,C=O.ref,S=a.useState(!1),k=S[0],I=S[1],M=Object(m.a)(e,C);return a.createElement(c.a,Object(s.a)({className:Object(u.a)(n.root,n["underline".concat(Object(f.a)(w))],r,k&&n.focusVisible,"button"===h&&n.button),classes:b,color:i,component:h,onBlur:function(t){k&&(j(),I(!1)),y&&y(t)},onFocus:function(t){A(t)&&I(!0),g&&g(t)},ref:M,variant:x},E))})),y=Object(p.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(h),g=n("Aw06"),b=n("lUEA"),v=function(t){var e=t.siteTitle,n=Object(b.a)(),r=n.header,a=n.headerWrap;return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:r},o.a.createElement("div",{className:a},o.a.createElement(i.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"flex-start",spacing:2},o.a.createElement(i.a,{item:!0,md:3,xs:12},o.a.createElement(g.a,{to:"/"},o.a.createElement(c.a,{variant:"h5"},e))),o.a.createElement(i.a,{item:!0,md:3},o.a.createElement(g.a,{to:"/photography"},o.a.createElement(c.a,{variant:"h5"},"photography"))),o.a.createElement(i.a,{item:!0,md:3},o.a.createElement(g.a,{to:"/code"},o.a.createElement(c.a,{variant:"h5"},"code"))),o.a.createElement(i.a,{item:!0,md:3},o.a.createElement(g.a,{to:"/contact"},o.a.createElement(c.a,{variant:"h5"},"contact")))))))};v.defaultProps={siteTitle:""};var w=v;n("8ypT"),e.a=function(t){var e=t.children,n=r.data,a=Object(b.a)();return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{container:!0,direction:"row",justify:"space-between",className:a.layout},o.a.createElement(i.a,{item:!0,xs:12},o.a.createElement(w,{siteTitle:n.site.siteMetadata.title})),o.a.createElement(i.a,{item:!0,xs:12},o.a.createElement("main",null,e)),o.a.createElement(i.a,{container:!0,item:!0,xs:12,alignContent:"flex-end"},o.a.createElement("footer",null,o.a.createElement(c.a,{variant:"body2"},"© ",(new Date).getFullYear(),", Built by"," ",o.a.createElement(y,{to:"/"},"mxbialostocki")," with"," ",o.a.createElement(y,{to:"https://www.gatsbyjs.org"},"Gatsby"))))))}},G7As:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var r=n("q1tI"),a=n("i8i4"),o=!0,i=!1,c=null,s={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function l(t){t.metaKey||t.altKey||t.ctrlKey||(o=!0)}function u(){o=!1}function f(){"hidden"===this.visibilityState&&i&&(o=!0)}function p(t){var e,n,r,a=t.target;try{return a.matches(":focus-visible")}catch(i){}return o||(n=(e=a).type,!("INPUT"!==(r=e.tagName)||!s[n]||e.readOnly)||"TEXTAREA"===r&&!e.readOnly||!!e.isContentEditable)}function d(){i=!0,window.clearTimeout(c),c=window.setTimeout((function(){i=!1}),100)}function m(){return{isFocusVisible:p,onBlurVisible:d,ref:r.useCallback((function(t){var e,n=a.findDOMNode(t);null!=n&&((e=n.ownerDocument).addEventListener("keydown",l,!0),e.addEventListener("mousedown",u,!0),e.addEventListener("pointerdown",u,!0),e.addEventListener("touchstart",u,!0),e.addEventListener("visibilitychange",f,!0))}),[])}}},H2TA:function(t,e,n){"use strict";var r=n("wx14"),a=n("ucgz"),o=n("cNwE");e.a=function(t,e){return Object(a.a)(t,Object(r.a)({defaultTheme:o.a},e))}},NqtD:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("TrhM");function a(t){if("string"!=typeof t)throw new Error(Object(r.a)(7));return t.charAt(0).toUpperCase()+t.slice(1)}},bfFb:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("q1tI");function a(t,e){"function"==typeof t?t(e):t&&(t.current=e)}function o(t,e){return r.useMemo((function(){return null==t&&null==e?null:function(n){a(t,n),a(e,n)}}),[t,e])}},bmMU:function(t,e,n){n("Ll4R"),n("Ggvi"),n("q8oJ"),n("C9fy"),n("Kz6e"),n("klQ5"),n("MIFh"),n("ToIb"),n("rzGZ"),n("Dq+y"),n("8npG"),n("YbXK"),n("xJgp");var r="undefined"!=typeof Element,a="function"==typeof Map,o="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;t.exports=function(t,e){try{return function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){if(e.constructor!==n.constructor)return!1;var c,s,l,u;if(Array.isArray(e)){if((c=e.length)!=n.length)return!1;for(s=c;0!=s--;)if(!t(e[s],n[s]))return!1;return!0}if(a&&e instanceof Map&&n instanceof Map){if(e.size!==n.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!n.has(s.value[0]))return!1;for(u=e.entries();!(s=u.next()).done;)if(!t(s.value[1],n.get(s.value[0])))return!1;return!0}if(o&&e instanceof Set&&n instanceof Set){if(e.size!==n.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!n.has(s.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(n)){if((c=e.length)!=n.length)return!1;for(s=c;0!=s--;)if(e[s]!==n[s])return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(n).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(n,l[s]))return!1;if(r&&e instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==l[s]&&"__v"!==l[s]&&"__o"!==l[s]||!e.$$typeof)&&!t(e[l[s]],n[l[s]]))return!1;return!0}return e!=e&&n!=n}(t,e)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},cNwE:function(t,e,n){"use strict";var r=n("viY9"),a=Object(r.a)();e.a=a},f98A:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"mxbialostocki"}}}}')},lUEA:function(t,e,n){"use strict";var r=n("wx14"),a=n("RD7I"),o=n("cNwE");var i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(a.a)(t,Object(r.a)({defaultTheme:o.a},e))}((function(t){var e,n;return{primary:{color:"#f50057"},layout:(e={margin:"0 auto",maxWidth:"70vw"},e[t.breakpoints.down("sm")]={maxWidth:"90vw",paddingTop:"8rem"},e[t.breakpoints.down("xs")]={maxWidth:"100vw"},e.height="100vh",e.padding="0 1.0875rem 1.45rem",e),header:(n={background:"#ffffff",marginBottom:"1.45rem"},n[t.breakpoints.down("sm")]={position:"fixed",top:0,zIndex:"10"},n),headerWrap:{margin:"0 auto",padding:"1rem 0",borderBottom:"solid #f50057 .5px"},projectHeroContainer:{maxWidth:"100%",padding:".5rem",marginBottom:".5rem"},projectHero:{boxShadow:"5px 5px 10px grey",margin:"2rem 0"}}}));e.a=i},ofer:function(t,e,n){"use strict";var r=n("wx14"),a=n("Ff2n"),o=n("q1tI"),i=n("iuhU"),c=n("H2TA"),s=n("NqtD"),l={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},u=o.forwardRef((function(t,e){var n=t.align,c=void 0===n?"inherit":n,u=t.classes,f=t.className,p=t.color,d=void 0===p?"initial":p,m=t.component,h=t.display,y=void 0===h?"initial":h,g=t.gutterBottom,b=void 0!==g&&g,v=t.noWrap,w=void 0!==v&&v,T=t.paragraph,x=void 0!==T&&T,E=t.variant,O=void 0===E?"body1":E,A=t.variantMapping,j=void 0===A?l:A,C=Object(a.a)(t,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),S=m||(x?"p":j[O]||l[O])||"span";return o.createElement(S,Object(r.a)({className:Object(i.a)(u.root,f,"inherit"!==O&&u[O],"initial"!==d&&u["color".concat(Object(s.a)(d))],w&&u.noWrap,b&&u.gutterBottom,x&&u.paragraph,"inherit"!==c&&u["align".concat(Object(s.a)(c))],"initial"!==y&&u["display".concat(Object(s.a)(y))]),ref:e},C))}));e.a=Object(c.a)((function(t){return{root:{margin:0},body2:t.typography.body2,body1:t.typography.body1,caption:t.typography.caption,button:t.typography.button,h1:t.typography.h1,h2:t.typography.h2,h3:t.typography.h3,h4:t.typography.h4,h5:t.typography.h5,h6:t.typography.h6,subtitle1:t.typography.subtitle1,subtitle2:t.typography.subtitle2,overline:t.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},colorTextPrimary:{color:t.palette.text.primary},colorTextSecondary:{color:t.palette.text.secondary},colorError:{color:t.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(u)},qhky:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return ht}));n("wZFJ"),n("HQhv"),n("n7j8"),n("1dPr"),n("JHok"),n("OeI1"),n("MIFh"),n("sC2a"),n("sc67"),n("LagC"),n("pS08"),n("E5k/"),n("R48M"),n("m210"),n("4DPX"),n("U6Bt"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("AqHK");var r,a,o,i,c=n("17x9"),s=n.n(c),l=n("8+s/"),u=n.n(l),f=n("bmMU"),p=n.n(f),d=n("q1tI"),m=n.n(d),h=n("MgzW"),y=n.n(h),g="bodyAttributes",b="htmlAttributes",v="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(w).map((function(t){return w[t]})),"charset"),x="cssText",E="href",O="http-equiv",A="innerHTML",j="itemprop",C="name",S="property",k="rel",I="src",M="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",L="defer",B="encodeSpecialCharacters",q="onChangeClientState",D="titleTemplate",R=Object.keys(N).reduce((function(t,e){return t[N[e]]=e,t}),{}),F=[w.NOSCRIPT,w.SCRIPT,w.STYLE],W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},z=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),U=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},G=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},_=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},K=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Y=function(t){var e=X(t,w.TITLE),n=X(t,D);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=X(t,P);return e||r||void 0},J=function(t){return X(t,q)||function(){}},V=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return U({},t,e)}),{})},Z=function(t,e){return e.filter((function(t){return void 0!==t[w.BASE]})).map((function(t){return t[w.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==t.indexOf(o)&&n[o])return e.concat(n)}return e}),[])},$=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&rt("Helmet: "+t+' should be of type "Array". Instead found type "'+W(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var a={};n.filter((function(t){for(var n=void 0,o=Object.keys(t),i=0;i<o.length;i++){var c=o[i],s=c.toLowerCase();-1===e.indexOf(s)||n===k&&"canonical"===t[n].toLowerCase()||s===k&&"stylesheet"===t[s].toLowerCase()||(n=s),-1===e.indexOf(c)||c!==A&&c!==x&&c!==j||(n=c)}if(!n||!t[n])return!1;var l=t[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][l]&&(a[n][l]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],s=y()({},r[c],a[c]);r[c]=s}return t}),[]).reverse()},X=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},Q=(r=Date.now(),function(t){var e=Date.now();e-r>16?(r=e,t(e)):setTimeout((function(){Q(t)}),0)}),tt=function(t){return clearTimeout(t)},et="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:t.requestAnimationFrame||Q,nt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||tt:t.cancelAnimationFrame||tt,rt=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},at=null,ot=function(t,e){var n=t.baseTag,r=t.bodyAttributes,a=t.htmlAttributes,o=t.linkTags,i=t.metaTags,c=t.noscriptTags,s=t.onChangeClientState,l=t.scriptTags,u=t.styleTags,f=t.title,p=t.titleAttributes;st(w.BODY,r),st(w.HTML,a),ct(f,p);var d={baseTag:lt(w.BASE,n),linkTags:lt(w.LINK,o),metaTags:lt(w.META,i),noscriptTags:lt(w.NOSCRIPT,c),scriptTags:lt(w.SCRIPT,l),styleTags:lt(w.STYLE,u)},m={},h={};Object.keys(d).forEach((function(t){var e=d[t],n=e.newTags,r=e.oldTags;n.length&&(m[t]=n),r.length&&(h[t]=d[t].oldTags)})),e&&e(),s(t,m,h)},it=function(t){return Array.isArray(t)?t.join(""):t},ct=function(t,e){void 0!==t&&document.title!==t&&(document.title=it(t)),st(w.TITLE,e)},st=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(e),c=0;c<i.length;c++){var s=i[c],l=e[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),-1===a.indexOf(s)&&a.push(s);var u=o.indexOf(s);-1!==u&&o.splice(u,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},lt=function(t,e){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(t+"[data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===A)n.innerHTML=e.innerHTML;else if(r===x)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var c=void 0===e[r]?"":e[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),a.some((function(t,e){return i=e,n.isEqualNode(t)}))?a.splice(i,1):o.push(n)})),a.forEach((function(t){return t.parentNode.removeChild(t)})),o.forEach((function(t){return n.appendChild(t)})),{oldTags:a,newTags:o}},ut=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},ft=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[N[n]||n]=t[n],e}),e)},pt=function(t,e,n){switch(t){case w.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})["data-react-helmet"]=!0,a=ft(n,r),[m.a.createElement(w.TITLE,a,t)];var t,n,r,a},toString:function(){return function(t,e,n,r){var a=ut(n),o=it(e);return a?"<"+t+' data-react-helmet="true" '+a+">"+K(o,r)+"</"+t+">":"<"+t+' data-react-helmet="true">'+K(o,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case g:case b:return{toComponent:function(){return ft(e)},toString:function(){return ut(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(e).forEach((function(t){var n=N[t]||t;if(n===A||n===x){var r=e.innerHTML||e.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=e[t]})),m.a.createElement(t,a)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var a=Object.keys(r).filter((function(t){return!(t===A||t===x)})).reduce((function(t,e){var a=void 0===r[e]?e:e+'="'+K(r[e],n)+'"';return t?t+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===F.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+t+">")}),"")}(t,e,n)}}}},dt=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,a=t.htmlAttributes,o=t.linkTags,i=t.metaTags,c=t.noscriptTags,s=t.scriptTags,l=t.styleTags,u=t.title,f=void 0===u?"":u,p=t.titleAttributes;return{base:pt(w.BASE,e,r),bodyAttributes:pt(g,n,r),htmlAttributes:pt(b,a,r),link:pt(w.LINK,o,r),meta:pt(w.META,i,r),noscript:pt(w.NOSCRIPT,c,r),script:pt(w.SCRIPT,s,r),style:pt(w.STYLE,l,r),title:pt(w.TITLE,{title:f,titleAttributes:p},r)}},mt=u()((function(t){return{baseTag:Z([E,M],t),bodyAttributes:V(g,t),defer:X(t,L),encode:X(t,B),htmlAttributes:V(b,t),linkTags:$(w.LINK,[k,E],t),metaTags:$(w.META,[C,T,O,S,j],t),noscriptTags:$(w.NOSCRIPT,[A],t),onChangeClientState:J(t),scriptTags:$(w.SCRIPT,[I,A],t),styleTags:$(w.STYLE,[x],t),title:Y(t),titleAttributes:V(v,t)}}),(function(t){at&&nt(at),t.defer?at=et((function(){ot(t,(function(){at=null}))})):(ot(t),at=null)}),dt)((function(){return null})),ht=(a=mt,i=o=function(t){function e(){return H(this,e),_(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!p()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:e};case w.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,a=t.newChildProps,o=t.nestedChildren;return U({},r,((e={})[n.type]=[].concat(r[n.type]||[],[U({},a,this.mapNestedChildrenToProps(n,o))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,a=t.newProps,o=t.newChildProps,i=t.nestedChildren;switch(r.type){case w.TITLE:return U({},a,((e={})[r.type]=i,e.titleAttributes=U({},o),e));case w.BODY:return U({},a,{bodyAttributes:U({},o)});case w.HTML:return U({},a,{htmlAttributes:U({},o)})}return U({},a,((n={})[r.type]=U({},o),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=U({},e);return Object.keys(t).forEach((function(e){var r;n=U({},n,((r={})[e]=t[e],r))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return m.a.Children.forEach(t,(function(t){if(t&&t.props){var a=t.props,o=a.children,i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[R[n]||n]=t[n],e}),e)}(G(a,["children"]));switch(n.warnOnInvalidChildren(t,o),t.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:i,nestedChildren:o})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=G(t,["children"]),r=U({},n);return e&&(r=this.mapChildrenToProps(e,r)),m.a.createElement(a,r)},z(e,null,[{key:"canUseDOM",set:function(t){a.canUseDOM=t}}]),e}(m.a.Component),o.propTypes={base:s.a.object,bodyAttributes:s.a.object,children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),defaultTitle:s.a.string,defer:s.a.bool,encodeSpecialCharacters:s.a.bool,htmlAttributes:s.a.object,link:s.a.arrayOf(s.a.object),meta:s.a.arrayOf(s.a.object),noscript:s.a.arrayOf(s.a.object),onChangeClientState:s.a.func,script:s.a.arrayOf(s.a.object),style:s.a.arrayOf(s.a.object),title:s.a.string,titleAttributes:s.a.object,titleTemplate:s.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var t=a.rewind();return t||(t=dt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},i);ht.renderStatic=ht.rewind}).call(this,n("yLpj"))},tRbT:function(t,e,n){"use strict";n("rzGZ"),n("Dq+y"),n("8npG"),n("U6Bt"),n("sC2a"),n("JHok");var r=n("Ff2n"),a=n("wx14"),o=n("q1tI"),i=n("iuhU"),c=n("H2TA"),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(t);return"".concat(n/e).concat(String(t).replace(String(n),"")||"px")}var f=o.forwardRef((function(t,e){var n=t.alignContent,c=void 0===n?"stretch":n,s=t.alignItems,l=void 0===s?"stretch":s,u=t.classes,f=t.className,p=t.component,d=void 0===p?"div":p,m=t.container,h=void 0!==m&&m,y=t.direction,g=void 0===y?"row":y,b=t.item,v=void 0!==b&&b,w=t.justify,T=void 0===w?"flex-start":w,x=t.lg,E=void 0!==x&&x,O=t.md,A=void 0!==O&&O,j=t.sm,C=void 0!==j&&j,S=t.spacing,k=void 0===S?0:S,I=t.wrap,M=void 0===I?"wrap":I,N=t.xl,P=void 0!==N&&N,L=t.xs,B=void 0!==L&&L,q=t.zeroMinWidth,D=void 0!==q&&q,R=Object(r.a)(t,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),F=Object(i.a)(u.root,f,h&&[u.container,0!==k&&u["spacing-xs-".concat(String(k))]],v&&u.item,D&&u.zeroMinWidth,"row"!==g&&u["direction-xs-".concat(String(g))],"wrap"!==M&&u["wrap-xs-".concat(String(M))],"stretch"!==l&&u["align-items-xs-".concat(String(l))],"stretch"!==c&&u["align-content-xs-".concat(String(c))],"flex-start"!==T&&u["justify-xs-".concat(String(T))],!1!==B&&u["grid-xs-".concat(String(B))],!1!==C&&u["grid-sm-".concat(String(C))],!1!==A&&u["grid-md-".concat(String(A))],!1!==E&&u["grid-lg-".concat(String(E))],!1!==P&&u["grid-xl-".concat(String(P))]);return o.createElement(d,Object(a.a)({className:F,ref:e},R))})),p=Object(c.a)((function(t){return Object(a.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(t,e){var n={};return s.forEach((function(r){var a=t.spacing(r);0!==a&&(n["spacing-".concat(e,"-").concat(r)]={margin:"-".concat(u(a,2)),width:"calc(100% + ".concat(u(a),")"),"& > $item":{padding:u(a,2)}})})),n}(t,"xs"),t.breakpoints.keys.reduce((function(e,n){return function(t,e,n){var r={};l.forEach((function(t){var e="grid-".concat(n,"-").concat(t);if(!0!==t)if("auto"!==t){var a="".concat(Math.round(t/12*1e8)/1e6,"%");r[e]={flexBasis:a,flexGrow:0,maxWidth:a}}else r[e]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else r[e]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(a.a)(t,r):t[e.breakpoints.up(n)]=r}(e,t,n),e}),{}))}),{name:"MuiGrid"})(f);e.a=p},vrFN:function(t,e,n){"use strict";var r=n("51K9"),a=n("q1tI"),o=n.n(a),i=n("qhky");function c(t){var e=t.description,n=t.lang,a=t.meta,c=t.title,s=r.data.site,l=e||s.siteMetadata.description;return o.a.createElement(i.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:c},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:l}].concat(a)})}c.defaultProps={lang:"en",meta:[],description:""},e.a=c},wZFJ:function(t,e,n){"use strict";var r=n("P8UN"),a=n("Wadk")(3);r(r.P+r.F*!n("h/qr")([].some,!0),"Array",{some:function(t){return a(this,t,arguments[1])}})},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}t.exports=n}}]);
//# sourceMappingURL=commons-0bbcc59c067734f4a5db.js.map