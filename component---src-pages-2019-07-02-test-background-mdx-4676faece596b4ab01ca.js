(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return i});var r=n(83),o=n.n(r),a=n(0),u=n.n(a),c=n(157);t.default=function(e){var t=e.components;o()(e,["components"]);return u.a.createElement(c.MDXTag,{name:"wrapper",components:t})};var i={templateKey:"content-with-background",title:"Test Background",backgroundImage:"/assets/fillmurray.jpg",key:"test-background",parentKey:null,points:[]}},156:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=c(n(0)),a=c(n(56)),u=c(n(4));function c(e){return e&&e.__esModule?e:{default:e}}var i=(0,a.default)({}),p=i.Provider,l=i.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,a=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["components"]);return o.default.createElement(l,null,function(t){return o.default.createElement(e,r({components:n||t},a))})}};var f=function(e){var t=e.components,n=e.children;return o.default.createElement(p,{value:t},n)};f.propTypes={components:u.default.object.isRequired,children:u.default.element.isRequired},t.default=f},157:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(158);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return a(r).default}});var o=n(156);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return a(o).default}})},158:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),u=p(a),c=p(n(159)),i=n(156);function p(e){return e&&e.__esModule?e:{default:e}}var l={inlineCode:"code",wrapper:"div"},f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,o=e.props,a=void 0===o?{}:o,i=e.children,p=e.components,f=void 0===p?{}:p,s=e.Layout,d=e.layoutProps,y=f[n+"."+t]||f[t]||l[t]||t;return s?((0,c.default)(this,s),u.default.createElement(s,r({components:f},d),u.default.createElement(y,a,i))):u.default.createElement(y,a,i)}}]),t}();t.default=(0,i.withMDXComponents)(f)},159:function(e,t,n){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,u=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,l=p&&p(Object);e.exports=function e(t,n,f){if("string"!=typeof n){if(l){var s=p(n);s&&s!==l&&e(t,s,f)}var d=u(n);c&&(d=d.concat(c(n)));for(var y=0;y<d.length;++y){var m=d[y];if(!(r[m]||o[m]||f&&f[m])){var v=i(n,m);try{a(t,m,v)}catch(b){}}}return t}return t}}}]);
//# sourceMappingURL=component---src-pages-2019-07-02-test-background-mdx-4676faece596b4ab01ca.js.map