(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"51K9":function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"mxbialostocki","description":"a portfolio / cv site","author":"@mxbialostocki"}}}}')},"8+s/":function(t,e,n){"use strict";n("sc67"),n("AqHK"),n("pJf4"),n("pS08"),n("R48M");var r,a=n("q1tI"),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function u(){s=t(l.map((function(t){return t.props}))),f.canUseDOM?e(s):n&&(s=n(s))}var f=function(t){var e,n;function a(){return t.apply(this,arguments)||this}n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=s;return s=void 0,l=[],t};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){l.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var t=l.indexOf(this);l.splice(t,1),u()},o.render=function(){return i.createElement(r,this.props)},a}(a.PureComponent);return o(f,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),o(f,"canUseDOM",c),f}}},"8ypT":function(t,e,n){},Aw06:function(t,e,n){"use strict";n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("E5k/");var r=n("q1tI"),a=n.n(r),i=n("Wbzz");e.a=function(t){var e=t.children,n=t.to,r=t.activeClassName,o=(t.activeStyle,t.partiallyActive),c=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,["children","to","activeClassName","activeStyle","partiallyActive"]);return/^\/(?!\/)/.test(n)?a.a.createElement(i.Link,Object.assign({to:n,activeClassName:r,activeStyle:{color:"#f50057"},partiallyActive:o},c),e):a.a.createElement("a",Object.assign({href:n},c,{target:"_blank",rel:"noreferrer"}),e)}},Bl7J:function(t,e,n){"use strict";var r=n("f98A"),a=n("q1tI"),i=n.n(a),o=n("tRbT"),c=(n("y7hu"),n("ofer")),s=n("Aw06"),l=n("lUEA"),u=function(t){var e=t.siteTitle,n=Object(l.a)(),r=n.header,a=n.headerWrap,u=n.lastChild,f=n.headerContainer,p=n.link;return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",{className:r},i.a.createElement("div",{className:a},i.a.createElement(o.a,{container:!0,direction:"row",justify:"flex-start",spacing:1},i.a.createElement(o.a,{item:!0,xl:3,md:3,xs:12,className:p},i.a.createElement(s.a,{to:"/"},i.a.createElement(c.a,{variant:"h5"},e))),i.a.createElement(o.a,{item:!0,xl:3,md:3,xs:5,className:p},i.a.createElement(s.a,{to:"/photography"},i.a.createElement(c.a,{variant:"h5"},"photography"))),i.a.createElement(o.a,{item:!0,xl:2,md:3,xs:3,className:p},i.a.createElement(s.a,{to:"/code"},i.a.createElement(c.a,{variant:"h5"},"code"))),i.a.createElement(o.a,{item:!0,xl:4,md:3,xs:4,className:p},i.a.createElement(s.a,{to:"/contact"},i.a.createElement(c.a,{variant:"h5",className:u},"contact")))),i.a.createElement("div",{className:f}))))};u.defaultProps={siteTitle:""};var f=u,p=function(){var t=Object(l.a)(),e=t.footer,n=t.footerWrap,r=t.primary;return i.a.createElement(i.a.Fragment,null,i.a.createElement("footer",{className:e},i.a.createElement("div",{className:n},i.a.createElement(o.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"flex-start",spacing:1},i.a.createElement(o.a,{item:!0,md:12,xs:12},i.a.createElement(c.a,{variant:"body2"},"© ",(new Date).getFullYear(),", Built by"," ",i.a.createElement(s.a,{to:"/"},i.a.createElement("span",{className:r},"mxbialostocki"))," with"," ",i.a.createElement(s.a,{to:"https://www.gatsbyjs.org"},"Gatsby")))))))};n("8ypT"),e.a=function(t){var e=t.children,n=r.data,a=Object(l.a)().layout;return i.a.createElement(i.a.Fragment,null,i.a.createElement(f,{siteTitle:n.site.siteMetadata.title}),i.a.createElement(o.a,{container:!0,direction:"row",justify:"space-between",className:a},i.a.createElement(o.a,{item:!0,xs:12}),i.a.createElement(o.a,{item:!0,xs:12},i.a.createElement("main",null,e)),i.a.createElement(o.a,{item:!0,xs:12})),i.a.createElement(p,null))}},H2TA:function(t,e,n){"use strict";var r=n("wx14"),a=n("ucgz"),i=n("cNwE");e.a=function(t,e){return Object(a.a)(t,Object(r.a)({defaultTheme:i.a},e))}},NqtD:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("TrhM");function a(t){if("string"!=typeof t)throw new Error(Object(r.a)(7));return t.charAt(0).toUpperCase()+t.slice(1)}},bmMU:function(t,e,n){n("Ll4R"),n("Ggvi"),n("q8oJ"),n("C9fy"),n("Kz6e"),n("klQ5"),n("MIFh"),n("ToIb"),n("rzGZ"),n("Dq+y"),n("8npG"),n("YbXK"),n("xJgp");var r="undefined"!=typeof Element,a="function"==typeof Map,i="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;t.exports=function(t,e){try{return function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){if(e.constructor!==n.constructor)return!1;var c,s,l,u;if(Array.isArray(e)){if((c=e.length)!=n.length)return!1;for(s=c;0!=s--;)if(!t(e[s],n[s]))return!1;return!0}if(a&&e instanceof Map&&n instanceof Map){if(e.size!==n.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!n.has(s.value[0]))return!1;for(u=e.entries();!(s=u.next()).done;)if(!t(s.value[1],n.get(s.value[0])))return!1;return!0}if(i&&e instanceof Set&&n instanceof Set){if(e.size!==n.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!n.has(s.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(n)){if((c=e.length)!=n.length)return!1;for(s=c;0!=s--;)if(e[s]!==n[s])return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(n).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(n,l[s]))return!1;if(r&&e instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==l[s]&&"__v"!==l[s]&&"__o"!==l[s]||!e.$$typeof)&&!t(e[l[s]],n[l[s]]))return!1;return!0}return e!=e&&n!=n}(t,e)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},cNwE:function(t,e,n){"use strict";var r=n("viY9"),a=Object(r.a)();e.a=a},f98A:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"mxbialostocki"}}}}')},lUEA:function(t,e,n){"use strict";var r=n("wx14"),a=n("RD7I"),i=n("cNwE");var o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(a.a)(t,Object(r.a)({defaultTheme:i.a},e))}((function(t){var e,n,r,a,i;return{primary:{color:"#f50057"},layout:(e={margin:"0 auto",maxWidth:"70vw"},e[t.breakpoints.down("sm")]={maxWidth:"90vw"},e[t.breakpoints.down("xs")]={maxWidth:"100vw"},e.minHeight="100vh",e.padding="9rem 1.0875rem 6rem 1.0875rem",e[t.breakpoints.down("sm")]={padding:"9rem 1.0875rem 9rem 1.0875rem"},e),header:{background:"#ffffff",position:"fixed",top:"0",zIndex:"10",width:"100vw"},lastChild:(n={},n[t.breakpoints.up("md")]={textAlign:"right"},n),headerWrap:(r={margin:"0 auto",padding:"1rem 1rem 0 1rem",maxWidth:"70vw"},r[t.breakpoints.down("sm")]={maxWidth:"90vw"},r[t.breakpoints.down("xs")]={maxWidth:"100vw"},r),link:{transition:"all .2s ease-in-out","&:hover":{transform:"scale(1.1)"}},footer:{background:"#ffffff",position:"fixed",bottom:"0rem",zIndex:"10",width:"100vw"},footerWrap:(a={margin:"0 auto",padding:"1rem 1rem 1rem 1rem",maxWidth:"70vw"},a[t.breakpoints.down("sm")]={maxWidth:"90vw"},a[t.breakpoints.down("xs")]={maxWidth:"100vw"},a),headerContainer:{height:"1rem",borderBottom:"solid #f50057 1px"},projectHeroContainer:(i={maxWidth:"100%",padding:".5rem",marginBottom:".5rem"},i[t.breakpoints.down("md")]={padding:"0 .5rem"},i),projectHero:{boxShadow:"5px 5px 10px grey",margin:"1rem 0"},stack:{transition:"all .2s ease-in-out","&:hover":{transform:"scale(2)"}}}}));e.a=o},ofer:function(t,e,n){"use strict";var r=n("wx14"),a=n("Ff2n"),i=n("q1tI"),o=n("iuhU"),c=n("H2TA"),s=n("NqtD"),l={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},u=i.forwardRef((function(t,e){var n=t.align,c=void 0===n?"inherit":n,u=t.classes,f=t.className,p=t.color,d=void 0===p?"initial":p,m=t.component,h=t.display,y=void 0===h?"initial":h,g=t.gutterBottom,b=void 0!==g&&g,v=t.noWrap,w=void 0!==v&&v,x=t.paragraph,T=void 0!==x&&x,E=t.variant,O=void 0===E?"body1":E,A=t.variantMapping,C=void 0===A?l:A,j=Object(a.a)(t,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),S=m||(T?"p":C[O]||l[O])||"span";return i.createElement(S,Object(r.a)({className:Object(o.a)(u.root,f,"inherit"!==O&&u[O],"initial"!==d&&u["color".concat(Object(s.a)(d))],w&&u.noWrap,b&&u.gutterBottom,T&&u.paragraph,"inherit"!==c&&u["align".concat(Object(s.a)(c))],"initial"!==y&&u["display".concat(Object(s.a)(y))]),ref:e},j))}));e.a=Object(c.a)((function(t){return{root:{margin:0},body2:t.typography.body2,body1:t.typography.body1,caption:t.typography.caption,button:t.typography.button,h1:t.typography.h1,h2:t.typography.h2,h3:t.typography.h3,h4:t.typography.h4,h5:t.typography.h5,h6:t.typography.h6,subtitle1:t.typography.subtitle1,subtitle2:t.typography.subtitle2,overline:t.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},colorTextPrimary:{color:t.palette.text.primary},colorTextSecondary:{color:t.palette.text.secondary},colorError:{color:t.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(u)},qhky:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return ht}));n("wZFJ"),n("HQhv"),n("n7j8"),n("1dPr"),n("JHok"),n("OeI1"),n("MIFh"),n("sC2a"),n("sc67"),n("LagC"),n("pS08"),n("E5k/"),n("R48M"),n("m210"),n("4DPX"),n("U6Bt"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("AqHK");var r,a,i,o,c=n("17x9"),s=n.n(c),l=n("8+s/"),u=n.n(l),f=n("bmMU"),p=n.n(f),d=n("q1tI"),m=n.n(d),h=n("MgzW"),y=n.n(h),g="bodyAttributes",b="htmlAttributes",v="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},x=(Object.keys(w).map((function(t){return w[t]})),"charset"),T="cssText",E="href",O="http-equiv",A="innerHTML",C="itemprop",j="name",S="property",k="rel",I="src",N="target",M={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",L="defer",W="encodeSpecialCharacters",q="onChangeClientState",B="titleTemplate",R=Object.keys(M).reduce((function(t,e){return t[M[e]]=e,t}),{}),D=[w.NOSCRIPT,w.SCRIPT,w.STYLE],F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},z=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),U=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},G=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},Y=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},J=function(t){var e=Q(t,w.TITLE),n=Q(t,B);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=Q(t,P);return e||r||void 0},K=function(t){return Q(t,q)||function(){}},Z=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return U({},t,e)}),{})},V=function(t,e){return e.filter((function(t){return void 0!==t[w.BASE]})).map((function(t){return t[w.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==t.indexOf(i)&&n[i])return e.concat(n)}return e}),[])},$=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&rt("Helmet: "+t+' should be of type "Array". Instead found type "'+F(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var a={};n.filter((function(t){for(var n=void 0,i=Object.keys(t),o=0;o<i.length;o++){var c=i[o],s=c.toLowerCase();-1===e.indexOf(s)||n===k&&"canonical"===t[n].toLowerCase()||s===k&&"stylesheet"===t[s].toLowerCase()||(n=s),-1===e.indexOf(c)||c!==A&&c!==T&&c!==C||(n=c)}if(!n||!t[n])return!1;var l=t[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][l]&&(a[n][l]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var c=i[o],s=y()({},r[c],a[c]);r[c]=s}return t}),[]).reverse()},Q=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},X=(r=Date.now(),function(t){var e=Date.now();e-r>16?(r=e,t(e)):setTimeout((function(){X(t)}),0)}),tt=function(t){return clearTimeout(t)},et="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:t.requestAnimationFrame||X,nt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||tt:t.cancelAnimationFrame||tt,rt=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},at=null,it=function(t,e){var n=t.baseTag,r=t.bodyAttributes,a=t.htmlAttributes,i=t.linkTags,o=t.metaTags,c=t.noscriptTags,s=t.onChangeClientState,l=t.scriptTags,u=t.styleTags,f=t.title,p=t.titleAttributes;st(w.BODY,r),st(w.HTML,a),ct(f,p);var d={baseTag:lt(w.BASE,n),linkTags:lt(w.LINK,i),metaTags:lt(w.META,o),noscriptTags:lt(w.NOSCRIPT,c),scriptTags:lt(w.SCRIPT,l),styleTags:lt(w.STYLE,u)},m={},h={};Object.keys(d).forEach((function(t){var e=d[t],n=e.newTags,r=e.oldTags;n.length&&(m[t]=n),r.length&&(h[t]=d[t].oldTags)})),e&&e(),s(t,m,h)},ot=function(t){return Array.isArray(t)?t.join(""):t},ct=function(t,e){void 0!==t&&document.title!==t&&(document.title=ot(t)),st(w.TITLE,e)},st=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(e),c=0;c<o.length;c++){var s=o[c],l=e[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),-1===a.indexOf(s)&&a.push(s);var u=i.indexOf(s);-1!==u&&i.splice(u,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);a.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==o.join(",")&&n.setAttribute("data-react-helmet",o.join(","))}},lt=function(t,e){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(t+"[data-react-helmet]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===A)n.innerHTML=e.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var c=void 0===e[r]?"":e[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),a.some((function(t,e){return o=e,n.isEqualNode(t)}))?a.splice(o,1):i.push(n)})),a.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return n.appendChild(t)})),{oldTags:a,newTags:i}},ut=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},ft=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[M[n]||n]=t[n],e}),e)},pt=function(t,e,n){switch(t){case w.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})["data-react-helmet"]=!0,a=ft(n,r),[m.a.createElement(w.TITLE,a,t)];var t,n,r,a},toString:function(){return function(t,e,n,r){var a=ut(n),i=ot(e);return a?"<"+t+' data-react-helmet="true" '+a+">"+Y(i,r)+"</"+t+">":"<"+t+' data-react-helmet="true">'+Y(i,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case g:case b:return{toComponent:function(){return ft(e)},toString:function(){return ut(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(e).forEach((function(t){var n=M[t]||t;if(n===A||n===T){var r=e.innerHTML||e.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=e[t]})),m.a.createElement(t,a)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var a=Object.keys(r).filter((function(t){return!(t===A||t===T)})).reduce((function(t,e){var a=void 0===r[e]?e:e+'="'+Y(r[e],n)+'"';return t?t+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===D.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+t+">")}),"")}(t,e,n)}}}},dt=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,a=t.htmlAttributes,i=t.linkTags,o=t.metaTags,c=t.noscriptTags,s=t.scriptTags,l=t.styleTags,u=t.title,f=void 0===u?"":u,p=t.titleAttributes;return{base:pt(w.BASE,e,r),bodyAttributes:pt(g,n,r),htmlAttributes:pt(b,a,r),link:pt(w.LINK,i,r),meta:pt(w.META,o,r),noscript:pt(w.NOSCRIPT,c,r),script:pt(w.SCRIPT,s,r),style:pt(w.STYLE,l,r),title:pt(w.TITLE,{title:f,titleAttributes:p},r)}},mt=u()((function(t){return{baseTag:V([E,N],t),bodyAttributes:Z(g,t),defer:Q(t,L),encode:Q(t,W),htmlAttributes:Z(b,t),linkTags:$(w.LINK,[k,E],t),metaTags:$(w.META,[j,x,O,S,C],t),noscriptTags:$(w.NOSCRIPT,[A],t),onChangeClientState:K(t),scriptTags:$(w.SCRIPT,[I,A],t),styleTags:$(w.STYLE,[T],t),title:J(t),titleAttributes:Z(v,t)}}),(function(t){at&&nt(at),t.defer?at=et((function(){it(t,(function(){at=null}))})):(it(t),at=null)}),dt)((function(){return null})),ht=(a=mt,o=i=function(t){function e(){return H(this,e),G(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!p()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:e};case w.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,a=t.newChildProps,i=t.nestedChildren;return U({},r,((e={})[n.type]=[].concat(r[n.type]||[],[U({},a,this.mapNestedChildrenToProps(n,i))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,a=t.newProps,i=t.newChildProps,o=t.nestedChildren;switch(r.type){case w.TITLE:return U({},a,((e={})[r.type]=o,e.titleAttributes=U({},i),e));case w.BODY:return U({},a,{bodyAttributes:U({},i)});case w.HTML:return U({},a,{htmlAttributes:U({},i)})}return U({},a,((n={})[r.type]=U({},i),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=U({},e);return Object.keys(t).forEach((function(e){var r;n=U({},n,((r={})[e]=t[e],r))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return m.a.Children.forEach(t,(function(t){if(t&&t.props){var a=t.props,i=a.children,o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[R[n]||n]=t[n],e}),e)}(_(a,["children"]));switch(n.warnOnInvalidChildren(t,i),t.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:o,nestedChildren:i});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:o,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=_(t,["children"]),r=U({},n);return e&&(r=this.mapChildrenToProps(e,r)),m.a.createElement(a,r)},z(e,null,[{key:"canUseDOM",set:function(t){a.canUseDOM=t}}]),e}(m.a.Component),i.propTypes={base:s.a.object,bodyAttributes:s.a.object,children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),defaultTitle:s.a.string,defer:s.a.bool,encodeSpecialCharacters:s.a.bool,htmlAttributes:s.a.object,link:s.a.arrayOf(s.a.object),meta:s.a.arrayOf(s.a.object),noscript:s.a.arrayOf(s.a.object),onChangeClientState:s.a.func,script:s.a.arrayOf(s.a.object),style:s.a.arrayOf(s.a.object),title:s.a.string,titleAttributes:s.a.object,titleTemplate:s.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var t=a.rewind();return t||(t=dt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},o);ht.renderStatic=ht.rewind}).call(this,n("yLpj"))},tRbT:function(t,e,n){"use strict";n("rzGZ"),n("Dq+y"),n("8npG"),n("U6Bt"),n("sC2a"),n("JHok");var r=n("Ff2n"),a=n("wx14"),i=n("q1tI"),o=n("iuhU"),c=n("H2TA"),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(t);return"".concat(n/e).concat(String(t).replace(String(n),"")||"px")}var f=i.forwardRef((function(t,e){var n=t.alignContent,c=void 0===n?"stretch":n,s=t.alignItems,l=void 0===s?"stretch":s,u=t.classes,f=t.className,p=t.component,d=void 0===p?"div":p,m=t.container,h=void 0!==m&&m,y=t.direction,g=void 0===y?"row":y,b=t.item,v=void 0!==b&&b,w=t.justify,x=void 0===w?"flex-start":w,T=t.lg,E=void 0!==T&&T,O=t.md,A=void 0!==O&&O,C=t.sm,j=void 0!==C&&C,S=t.spacing,k=void 0===S?0:S,I=t.wrap,N=void 0===I?"wrap":I,M=t.xl,P=void 0!==M&&M,L=t.xs,W=void 0!==L&&L,q=t.zeroMinWidth,B=void 0!==q&&q,R=Object(r.a)(t,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),D=Object(o.a)(u.root,f,h&&[u.container,0!==k&&u["spacing-xs-".concat(String(k))]],v&&u.item,B&&u.zeroMinWidth,"row"!==g&&u["direction-xs-".concat(String(g))],"wrap"!==N&&u["wrap-xs-".concat(String(N))],"stretch"!==l&&u["align-items-xs-".concat(String(l))],"stretch"!==c&&u["align-content-xs-".concat(String(c))],"flex-start"!==x&&u["justify-xs-".concat(String(x))],!1!==W&&u["grid-xs-".concat(String(W))],!1!==j&&u["grid-sm-".concat(String(j))],!1!==A&&u["grid-md-".concat(String(A))],!1!==E&&u["grid-lg-".concat(String(E))],!1!==P&&u["grid-xl-".concat(String(P))]);return i.createElement(d,Object(a.a)({className:D,ref:e},R))})),p=Object(c.a)((function(t){return Object(a.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(t,e){var n={};return s.forEach((function(r){var a=t.spacing(r);0!==a&&(n["spacing-".concat(e,"-").concat(r)]={margin:"-".concat(u(a,2)),width:"calc(100% + ".concat(u(a),")"),"& > $item":{padding:u(a,2)}})})),n}(t,"xs"),t.breakpoints.keys.reduce((function(e,n){return function(t,e,n){var r={};l.forEach((function(t){var e="grid-".concat(n,"-").concat(t);if(!0!==t)if("auto"!==t){var a="".concat(Math.round(t/12*1e8)/1e6,"%");r[e]={flexBasis:a,flexGrow:0,maxWidth:a}}else r[e]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else r[e]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(a.a)(t,r):t[e.breakpoints.up(n)]=r}(e,t,n),e}),{}))}),{name:"MuiGrid"})(f);e.a=p},vrFN:function(t,e,n){"use strict";var r=n("51K9"),a=n("q1tI"),i=n.n(a),o=n("qhky");function c(t){var e=t.description,n=t.lang,a=t.meta,c=t.title,s=r.data.site,l=e||s.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:c},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:l}].concat(a)})}c.defaultProps={lang:"en",meta:[],description:""},e.a=c},wZFJ:function(t,e,n){"use strict";var r=n("P8UN"),a=n("Wadk")(3);r(r.P+r.F*!n("h/qr")([].some,!0),"Array",{some:function(t){return a(this,t,arguments[1])}})},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}t.exports=n}}]);
//# sourceMappingURL=commons-c8c8ee4ebc4a3499734a.js.map