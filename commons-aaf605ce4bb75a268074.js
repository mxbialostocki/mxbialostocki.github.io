(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"51K9":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"mxbialostocki","description":"a portfolio / cv site","author":"@mxbialostocki"}}}}')},"8+s/":function(e,t,n){"use strict";n("sc67"),n("AqHK"),n("pJf4"),n("pS08"),n("R48M");var r,a=n("q1tI"),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function u(){s=e(l.map((function(e){return e.props}))),f.canUseDOM?t(s):n&&(s=n(s))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},"8ypT":function(e,t,n){},Aw06:function(e,t,n){"use strict";n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("E5k/");var r=n("q1tI"),a=n.n(r),o=n("Wbzz");t.a=function(e){var t=e.children,n=e.to,r=e.activeClassName,i=(e.activeStyle,e.partiallyActive),c=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["children","to","activeClassName","activeStyle","partiallyActive"]);return/^\/(?!\/)/.test(n)?a.a.createElement(o.Link,Object.assign({to:n,activeClassName:r,activeStyle:{color:"#f50057"},partiallyActive:i},c),t):a.a.createElement("a",Object.assign({href:n},c,{target:"_blank",rel:"noreferrer"}),t)}},Bl7J:function(e,t,n){"use strict";var r=n("f98A"),a=n("q1tI"),o=n.n(a),i=n("tRbT"),c=n("ofer"),s=n("wx14"),l=n("Ff2n"),u=n("iuhU"),f=n("NqtD"),p=n("H2TA"),d=n("G7As"),m=n("bfFb"),h=a.forwardRef((function(e,t){var n=e.classes,r=e.className,o=e.color,i=void 0===o?"primary":o,p=e.component,h=void 0===p?"a":p,y=e.onBlur,g=e.onFocus,b=e.TypographyClasses,v=e.underline,w=void 0===v?"hover":v,x=e.variant,T=void 0===x?"inherit":x,E=Object(l.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),O=Object(d.a)(),A=O.isFocusVisible,C=O.onBlurVisible,j=O.ref,S=a.useState(!1),k=S[0],I=S[1],N=Object(m.a)(t,j);return a.createElement(c.a,Object(s.a)({className:Object(u.a)(n.root,n["underline".concat(Object(f.a)(w))],r,k&&n.focusVisible,"button"===h&&n.button),classes:b,color:i,component:h,onBlur:function(e){k&&(C(),I(!1)),y&&y(e)},onFocus:function(e){A(e)&&I(!0),g&&g(e)},ref:N,variant:T},E))})),y=Object(p.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(h),g=n("Aw06"),b=n("lUEA"),v=function(e){var t=e.siteTitle,n=Object(b.a)(),r=n.header,a=n.headerWrap,s=n.headerContainer;return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:r},o.a.createElement("div",{className:a},o.a.createElement(i.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"flex-start",spacing:1},o.a.createElement(i.a,{item:!0,md:3,xs:12},o.a.createElement(g.a,{to:"/"},o.a.createElement(c.a,{variant:"h5"},t))),o.a.createElement(i.a,{item:!0,md:3,xs:5},o.a.createElement(g.a,{to:"/photography"},o.a.createElement(c.a,{variant:"h5"},"photography"))),o.a.createElement(i.a,{item:!0,md:3,xs:3},o.a.createElement(g.a,{to:"/code"},o.a.createElement(c.a,{variant:"h5"},"code"))),o.a.createElement(i.a,{item:!0,md:3,xs:4},o.a.createElement(g.a,{to:"/contact"},o.a.createElement(c.a,{variant:"h5"},"contact")))),o.a.createElement("div",{className:s}))))};v.defaultProps={siteTitle:""};var w=v;n("8ypT"),t.a=function(e){var t=e.children,n=r.data,a=Object(b.a)();return o.a.createElement(o.a.Fragment,null,o.a.createElement(w,{siteTitle:n.site.siteMetadata.title}),o.a.createElement(i.a,{container:!0,direction:"row",justify:"space-between",className:a.layout},o.a.createElement(i.a,{item:!0,xs:12}),o.a.createElement(i.a,{item:!0,xs:12},o.a.createElement("main",null,t)),o.a.createElement(i.a,{container:!0,item:!0,xs:12,alignContent:"flex-end"},o.a.createElement("footer",null,o.a.createElement(c.a,{variant:"body2"},"© ",(new Date).getFullYear(),", Built by"," ",o.a.createElement(y,{to:"/"},"mxbialostocki")," with"," ",o.a.createElement(y,{to:"https://www.gatsbyjs.org"},"Gatsby"))))))}},G7As:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n("q1tI"),a=n("i8i4"),o=!0,i=!1,c=null,s={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function l(e){e.metaKey||e.altKey||e.ctrlKey||(o=!0)}function u(){o=!1}function f(){"hidden"===this.visibilityState&&i&&(o=!0)}function p(e){var t,n,r,a=e.target;try{return a.matches(":focus-visible")}catch(i){}return o||(n=(t=a).type,!("INPUT"!==(r=t.tagName)||!s[n]||t.readOnly)||"TEXTAREA"===r&&!t.readOnly||!!t.isContentEditable)}function d(){i=!0,window.clearTimeout(c),c=window.setTimeout((function(){i=!1}),100)}function m(){return{isFocusVisible:p,onBlurVisible:d,ref:r.useCallback((function(e){var t,n=a.findDOMNode(e);null!=n&&((t=n.ownerDocument).addEventListener("keydown",l,!0),t.addEventListener("mousedown",u,!0),t.addEventListener("pointerdown",u,!0),t.addEventListener("touchstart",u,!0),t.addEventListener("visibilitychange",f,!0))}),[])}}},H2TA:function(e,t,n){"use strict";var r=n("wx14"),a=n("ucgz"),o=n("cNwE");t.a=function(e,t){return Object(a.a)(e,Object(r.a)({defaultTheme:o.a},t))}},NqtD:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("TrhM");function a(e){if("string"!=typeof e)throw new Error(Object(r.a)(7));return e.charAt(0).toUpperCase()+e.slice(1)}},bfFb:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("q1tI");function a(e,t){"function"==typeof e?e(t):e&&(e.current=t)}function o(e,t){return r.useMemo((function(){return null==e&&null==t?null:function(n){a(e,n),a(t,n)}}),[e,t])}},bmMU:function(e,t,n){n("Ll4R"),n("Ggvi"),n("q8oJ"),n("C9fy"),n("Kz6e"),n("klQ5"),n("MIFh"),n("ToIb"),n("rzGZ"),n("Dq+y"),n("8npG"),n("YbXK"),n("xJgp");var r="undefined"!=typeof Element,a="function"==typeof Map,o="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var c,s,l,u;if(Array.isArray(t)){if((c=t.length)!=n.length)return!1;for(s=c;0!=s--;)if(!e(t[s],n[s]))return!1;return!0}if(a&&t instanceof Map&&n instanceof Map){if(t.size!==n.size)return!1;for(u=t.entries();!(s=u.next()).done;)if(!n.has(s.value[0]))return!1;for(u=t.entries();!(s=u.next()).done;)if(!e(s.value[1],n.get(s.value[0])))return!1;return!0}if(o&&t instanceof Set&&n instanceof Set){if(t.size!==n.size)return!1;for(u=t.entries();!(s=u.next()).done;)if(!n.has(s.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(n)){if((c=t.length)!=n.length)return!1;for(s=c;0!=s--;)if(t[s]!==n[s])return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((c=(l=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(n,l[s]))return!1;if(r&&t instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==l[s]&&"__v"!==l[s]&&"__o"!==l[s]||!t.$$typeof)&&!e(t[l[s]],n[l[s]]))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},cNwE:function(e,t,n){"use strict";var r=n("viY9"),a=Object(r.a)();t.a=a},f98A:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"mxbialostocki"}}}}')},lUEA:function(e,t,n){"use strict";var r=n("wx14"),a=n("RD7I"),o=n("cNwE");var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(a.a)(e,Object(r.a)({defaultTheme:o.a},t))}((function(e){var t,n;return{primary:{color:"#f50057"},layout:(t={margin:"0 auto",maxWidth:"70vw"},t[e.breakpoints.down("sm")]={maxWidth:"90vw"},t[e.breakpoints.down("xs")]={maxWidth:"100vw"},t.height="100vh",t.padding="9rem 1.0875rem 1.45rem",t),header:{background:"#ffffff",position:"fixed",top:"0",zIndex:"10",width:"100vw"},headerWrap:(n={margin:"0 auto",padding:"1rem 1rem 0 1rem",maxWidth:"70vw"},n[e.breakpoints.down("sm")]={maxWidth:"90vw"},n[e.breakpoints.down("xs")]={maxWidth:"100vw"},n),headerContainer:{height:"1rem",borderBottom:"solid #f50057 1px"},projectHeroContainer:{maxWidth:"100%",padding:".5rem",marginBottom:".5rem"},projectHero:{boxShadow:"5px 5px 10px grey",margin:"2rem 0"},stack:{transition:"all .2s ease-in-out","&:hover":{transform:"scale(2)"}}}}));t.a=i},ofer:function(e,t,n){"use strict";var r=n("wx14"),a=n("Ff2n"),o=n("q1tI"),i=n("iuhU"),c=n("H2TA"),s=n("NqtD"),l={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},u=o.forwardRef((function(e,t){var n=e.align,c=void 0===n?"inherit":n,u=e.classes,f=e.className,p=e.color,d=void 0===p?"initial":p,m=e.component,h=e.display,y=void 0===h?"initial":h,g=e.gutterBottom,b=void 0!==g&&g,v=e.noWrap,w=void 0!==v&&v,x=e.paragraph,T=void 0!==x&&x,E=e.variant,O=void 0===E?"body1":E,A=e.variantMapping,C=void 0===A?l:A,j=Object(a.a)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),S=m||(T?"p":C[O]||l[O])||"span";return o.createElement(S,Object(r.a)({className:Object(i.a)(u.root,f,"inherit"!==O&&u[O],"initial"!==d&&u["color".concat(Object(s.a)(d))],w&&u.noWrap,b&&u.gutterBottom,T&&u.paragraph,"inherit"!==c&&u["align".concat(Object(s.a)(c))],"initial"!==y&&u["display".concat(Object(s.a)(y))]),ref:t},j))}));t.a=Object(c.a)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(u)},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return he}));n("wZFJ"),n("HQhv"),n("n7j8"),n("1dPr"),n("JHok"),n("OeI1"),n("MIFh"),n("sC2a"),n("sc67"),n("LagC"),n("pS08"),n("E5k/"),n("R48M"),n("m210"),n("4DPX"),n("U6Bt"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("AqHK");var r,a,o,i,c=n("17x9"),s=n.n(c),l=n("8+s/"),u=n.n(l),f=n("bmMU"),p=n.n(f),d=n("q1tI"),m=n.n(d),h=n("MgzW"),y=n.n(h),g="bodyAttributes",b="htmlAttributes",v="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},x=(Object.keys(w).map((function(e){return w[e]})),"charset"),T="cssText",E="href",O="http-equiv",A="innerHTML",C="itemprop",j="name",S="property",k="rel",I="src",N="target",M={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",L="defer",q="encodeSpecialCharacters",B="onChangeClientState",D="titleTemplate",R=Object.keys(M).reduce((function(e,t){return e[M[t]]=t,e}),{}),F=[w.NOSCRIPT,w.SCRIPT,w.STYLE],W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},z=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},_=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Y=function(e){var t=X(e,w.TITLE),n=X(e,D);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=X(e,P);return t||r||void 0},J=function(e){return X(e,B)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},Z=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},$=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+W(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],s=c.toLowerCase();-1===t.indexOf(s)||n===k&&"canonical"===e[n].toLowerCase()||s===k&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==A&&c!==T&&c!==C||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][l]&&(a[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],s=y()({},r[c],a[c]);r[c]=s}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Q=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Q(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:e.requestAnimationFrame||Q,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,f=e.title,p=e.titleAttributes;se(w.BODY,r),se(w.HTML,a),ce(f,p);var d={baseTag:le(w.BASE,n),linkTags:le(w.LINK,o),metaTags:le(w.META,i),noscriptTags:le(w.NOSCRIPT,c),scriptTags:le(w.SCRIPT,l),styleTags:le(w.STYLE,u)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),s(e,m,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),se(w.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var s=i[c],l=t[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),-1===a.indexOf(s)&&a.push(s);var u=o.indexOf(s);-1!==u&&o.splice(u,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},le=function(e,t){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===A)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[M[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=fe(n,r),[m.a.createElement(w.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=ue(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+K(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case g:case b:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=M[e]||e;if(n===A||n===T){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),m.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===A||e===T)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===F.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,u=e.title,f=void 0===u?"":u,p=e.titleAttributes;return{base:pe(w.BASE,t,r),bodyAttributes:pe(g,n,r),htmlAttributes:pe(b,a,r),link:pe(w.LINK,o,r),meta:pe(w.META,i,r),noscript:pe(w.NOSCRIPT,c,r),script:pe(w.SCRIPT,s,r),style:pe(w.STYLE,l,r),title:pe(w.TITLE,{title:f,titleAttributes:p},r)}},me=u()((function(e){return{baseTag:Z([E,N],e),bodyAttributes:V(g,e),defer:X(e,L),encode:X(e,q),htmlAttributes:V(b,e),linkTags:$(w.LINK,[k,E],e),metaTags:$(w.META,[j,x,O,S,C],e),noscriptTags:$(w.NOSCRIPT,[A],e),onChangeClientState:J(e),scriptTags:$(w.SCRIPT,[I,A],e),styleTags:$(w.STYLE,[T],e),title:Y(e),titleAttributes:V(v,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),de)((function(){return null})),he=(a=me,i=o=function(e){function t(){return H(this,t),_(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return U({},r,((t={})[n.type]=[].concat(r[n.type]||[],[U({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case w.TITLE:return U({},a,((t={})[r.type]=i,t.titleAttributes=U({},o),t));case w.BODY:return U({},a,{bodyAttributes:U({},o)});case w.HTML:return U({},a,{htmlAttributes:U({},o)})}return U({},a,((n={})[r.type]=U({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=U({},t);return Object.keys(e).forEach((function(t){var r;n=U({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[R[n]||n]=e[n],t}),t)}(G(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=G(e,["children"]),r=U({},n);return t&&(r=this.mapChildrenToProps(t,r)),m.a.createElement(a,r)},z(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(m.a.Component),o.propTypes={base:s.a.object,bodyAttributes:s.a.object,children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),defaultTitle:s.a.string,defer:s.a.bool,encodeSpecialCharacters:s.a.bool,htmlAttributes:s.a.object,link:s.a.arrayOf(s.a.object),meta:s.a.arrayOf(s.a.object),noscript:s.a.arrayOf(s.a.object),onChangeClientState:s.a.func,script:s.a.arrayOf(s.a.object),style:s.a.arrayOf(s.a.object),title:s.a.string,titleAttributes:s.a.object,titleTemplate:s.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind}).call(this,n("yLpj"))},tRbT:function(e,t,n){"use strict";n("rzGZ"),n("Dq+y"),n("8npG"),n("U6Bt"),n("sC2a"),n("JHok");var r=n("Ff2n"),a=n("wx14"),o=n("q1tI"),i=n("iuhU"),c=n("H2TA"),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var f=o.forwardRef((function(e,t){var n=e.alignContent,c=void 0===n?"stretch":n,s=e.alignItems,l=void 0===s?"stretch":s,u=e.classes,f=e.className,p=e.component,d=void 0===p?"div":p,m=e.container,h=void 0!==m&&m,y=e.direction,g=void 0===y?"row":y,b=e.item,v=void 0!==b&&b,w=e.justify,x=void 0===w?"flex-start":w,T=e.lg,E=void 0!==T&&T,O=e.md,A=void 0!==O&&O,C=e.sm,j=void 0!==C&&C,S=e.spacing,k=void 0===S?0:S,I=e.wrap,N=void 0===I?"wrap":I,M=e.xl,P=void 0!==M&&M,L=e.xs,q=void 0!==L&&L,B=e.zeroMinWidth,D=void 0!==B&&B,R=Object(r.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),F=Object(i.a)(u.root,f,h&&[u.container,0!==k&&u["spacing-xs-".concat(String(k))]],v&&u.item,D&&u.zeroMinWidth,"row"!==g&&u["direction-xs-".concat(String(g))],"wrap"!==N&&u["wrap-xs-".concat(String(N))],"stretch"!==l&&u["align-items-xs-".concat(String(l))],"stretch"!==c&&u["align-content-xs-".concat(String(c))],"flex-start"!==x&&u["justify-xs-".concat(String(x))],!1!==q&&u["grid-xs-".concat(String(q))],!1!==j&&u["grid-sm-".concat(String(j))],!1!==A&&u["grid-md-".concat(String(A))],!1!==E&&u["grid-lg-".concat(String(E))],!1!==P&&u["grid-xl-".concat(String(P))]);return o.createElement(d,Object(a.a)({className:F,ref:t},R))})),p=Object(c.a)((function(e){return Object(a.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return s.forEach((function(r){var a=e.spacing(r);0!==a&&(n["spacing-".concat(t,"-").concat(r)]={margin:"-".concat(u(a,2)),width:"calc(100% + ".concat(u(a),")"),"& > $item":{padding:u(a,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var r={};l.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var a="".concat(Math.round(e/12*1e8)/1e6,"%");r[t]={flexBasis:a,flexGrow:0,maxWidth:a}}else r[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else r[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(a.a)(e,r):e[t.breakpoints.up(n)]=r}(t,e,n),t}),{}))}),{name:"MuiGrid"})(f);t.a=p},vrFN:function(e,t,n){"use strict";var r=n("51K9"),a=n("q1tI"),o=n.n(a),i=n("qhky");function c(e){var t=e.description,n=e.lang,a=e.meta,c=e.title,s=r.data.site,l=t||s.siteMetadata.description;return o.a.createElement(i.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:c},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:l}].concat(a)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},wZFJ:function(e,t,n){"use strict";var r=n("P8UN"),a=n("Wadk")(3);r(r.P+r.F*!n("h/qr")([].some,!0),"Array",{some:function(e){return a(this,e,arguments[1])}})},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=commons-aaf605ce4bb75a268074.js.map