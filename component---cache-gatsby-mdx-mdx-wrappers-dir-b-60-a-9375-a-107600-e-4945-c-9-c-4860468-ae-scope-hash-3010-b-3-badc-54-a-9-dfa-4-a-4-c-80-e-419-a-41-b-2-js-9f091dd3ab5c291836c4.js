(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{232:function(e,t,r){"use strict";r.r(t);r(53),r(15),r(11),r(14),r(6),r(21);var n=r(0),o=r.n(n),a=r(241),c=r(245),i=r(247),u=r(242),l=r(334),s=r.n(l),f=r(244),p=[{title:"one",slug:"/test1",children:[{title:"one.first",slug:"/test1.one"},{title:"one.second",slug:"/test1.two"}]},{title:"two",slug:"/test2",children:[{title:"two.first",slug:"/test1.one"},{title:"two.second",slug:"/test1.two"}]},{title:"three",slug:"/test3",children:[{title:"three.first",slug:"/test3.one"},{title:"three.second",slug:"/test3.two"}]}],d={name:"Gabii Navigation",areas:[{shape:"rect",href:"/temple-of-juno",coords:"[ 365, 356, 183, 218 ]",name:"Temple of Juno",alt:"Temple of Juno"},{shape:"rect",href:"/hamiltons-form",coords:"[369,295,505,424]",name:"Hamilton's Forum",alt:"Hamilton's Forum"},{shape:"rect",href:"/area-f",coords:"[ 544,273,616,342]",name:"Area F",alt:"Area F"},{shape:"rect",href:"/area-b",coords:"[573,176,709,271]",name:"Area B",alt:"Area B"},{shape:"rect",href:"/lago-di-castiglione",coords:"[ 5,7,478,206]",name:"Lago di Castiglione",alt:"Lago di Castiglione"}]};function m(e){return o.a.createElement(i.a,{footerLinks:p},o.a.createElement(i.a.Content,{my:24,contentStyle:{borderTop:0,borderRight:0,borderColor:"#895E34"}},o.a.createElement(u.a,{ml:"auto",mr:"auto",imageSrc:s.a,map:Object(f.a)(JSON.stringify(d)),hideTag:!0})))}r(240);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(r,!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.default=function(e){var t=e.children,r=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,["children"]);return o.a.createElement(a.MDXScopeProvider,{__mdxScope:v({},c.a)},o.a.createElement(m,r,t))}},233:function(e,t,r){"use strict";r(35),r(28),r(98),Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=i(r(0)),a=i(r(100)),c=i(r(52));function i(e){return e&&e.__esModule?e:{default:e}}var u=(0,a.default)({}),l=u.Provider,s=u.Consumer;t.withMDXComponents=function(e){return function(t){var r=t.components,a=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(t,["components"]);return o.default.createElement(s,null,function(t){return o.default.createElement(e,n({components:r||t},a))})}};var f=function(e){var t=e.components,r=e.children;return o.default.createElement(l,{value:t},r)};f.propTypes={components:c.default.object.isRequired,children:c.default.element.isRequired},t.default=f},234:function(e,t,r){"use strict";r(98),Object.defineProperty(t,"__esModule",{value:!0});var n=r(235);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return a(n).default}});var o=r(233);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return a(o).default}})},235:function(e,t,r){"use strict";r(43),r(140),r(99),r(28),r(98),Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(0),c=l(a),i=l(r(236)),u=r(233);function l(e){return e&&e.__esModule?e:{default:e}}var s={inlineCode:"code",wrapper:"div"},f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"render",value:function(){var e=this.props,t=e.name,r=e.parentName,o=e.props,a=void 0===o?{}:o,u=e.children,l=e.components,f=void 0===l?{}:l,p=e.Layout,d=e.layoutProps,m=f[r+"."+t]||f[t]||s[t]||t;return p?((0,i.default)(this,p),c.default.createElement(p,n({components:f},d),c.default.createElement(m,a,u))):c.default.createElement(m,a,u)}}]),t}();t.default=(0,u.withMDXComponents)(f)},236:function(e,t,r){"use strict";r(15),r(98);var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,c=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,s=l&&l(Object);e.exports=function e(t,r,f){if("string"!=typeof r){if(s){var p=l(r);p&&p!==s&&e(t,p,f)}var d=c(r);i&&(d=d.concat(i(r)));for(var m=0;m<d.length;++m){var b=d[m];if(!(n[b]||o[b]||f&&f[b])){var v=u(r,b);try{a(t,b,v)}catch(y){}}}return t}return t}},241:function(e,t,r){"use strict";r(28),r(28),Object.defineProperty(t,"__esModule",{value:!0}),t.MDXScopeProvider=t.withMDXScope=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=a(r(0));function a(e){return e&&e.__esModule?e:{default:e}}var c=(0,a(r(100)).default)({}),i=c.Provider,u=c.Consumer;t.withMDXScope=function(e){return function(t){var r=t.scope,a=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(t,["scope"]);return o.default.createElement(u,null,function(t){return o.default.createElement(e,n({scope:r||t},a))})}};t.MDXScopeProvider=function(e){var t=e.__mdxScope,r=e.children;return o.default.createElement(i,{value:t},r)}},245:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(234);t.a={React:o.a,MDXTag:a.MDXTag}},334:function(e,t,r){e.exports=r.p+"static/map-30e4b6792f7368bd035ceadde70494cf.png"}}]);
//# sourceMappingURL=component---cache-gatsby-mdx-mdx-wrappers-dir-b-60-a-9375-a-107600-e-4945-c-9-c-4860468-ae-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-9f091dd3ab5c291836c4.js.map