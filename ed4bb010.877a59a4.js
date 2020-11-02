(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{190:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return l})),n.d(r,"metadata",(function(){return a})),n.d(r,"rightToc",(function(){return i})),n.d(r,"default",(function(){return p}));var t=n(2),o=n(6),s=(n(0),n(198)),l={id:"merge-resolvers",title:"Resolvers merging",sidebar_label:"Resolvers merging"},a={unversionedId:"merge-resolvers",id:"merge-resolvers",isDocsHomePage:!1,title:"Resolvers merging",description:"Resolvers are merged using deep-merge. Resolver implementations can be separated across multiple objects and then merged into a single resolvers object.",source:"@site/docs/merge-resolvers.md",slug:"/merge-resolvers",permalink:"/docs/merge-resolvers",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/merge-resolvers.md",version:"current",sidebar_label:"Resolvers merging",sidebar:"someSidebar",previous:{title:"Type definitions (SDL) merging",permalink:"/docs/merge-typedefs"},next:{title:"GraphQLSchema merging",permalink:"/docs/merge-schemas"}},i=[{value:"Usage",id:"usage",children:[]}],c={rightToc:i};function p(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(t.a)({},c,n,{components:r,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Resolvers are merged using deep-merge. Resolver implementations can be separated across multiple objects and then merged into a single ",Object(s.b)("inlineCode",{parentName:"p"},"resolvers")," object."),Object(s.b)("h2",{id:"usage"},"Usage"),Object(s.b)("p",null,"Resolvers should be implemented as simple JS objects. Following our example, for the types we implemented\nour resolvers should look like the following:"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"// ./graphql/resolvers/clientResolver.js\nmodule.exports = {\n  Query: {\n    clients: () => {},\n    client: () => {},\n  },\n  Mutation: {\n    addClient: () => {},\n  },\n  Client: {\n    products: () => {},\n  },\n}\n\n// ./graphql/resolvers/productResolver.js\nmodule.exports = {\n  Query: {\n    products: () => {},\n    product: () => {},\n  },\n  Product: {\n    client: () => {},\n  },\n}\n")),Object(s.b)("p",null,"Just like your type definitions, you can choose to import files manually:"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"// ./graphql/resolvers/index.js\nconst { mergeResolvers } = require('@graphql-tools/merge');\nconst clientResolver = require('./clientResolver');\nconst productResolver = require('./productResolver');\n\nconst resolvers = [\n  clientResolver,\n  productResolver,\n];\n\nmodule.exports = mergeResolvers(resolvers);\n")),Object(s.b)("p",null,"Or automatically:"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"// ./graphql/resolvers.js\nconst path = require('path');\nconst { mergeResolvers } = require('@graphql-tools/merge');\nconst { loadFilesSync } = require('@graphql-tools/load-files');\n\nconst resolversArray = loadFilesSync(path.join(__dirname, './resolvers'));\n\nmodule.exports = mergeResolvers(resolversArray);\n")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Beware that ",Object(s.b)("inlineCode",{parentName:"p"},"mergeResolvers")," is simply merging plain Javascript objects together.\nThis means that you should be careful with Queries, Mutations or Subscriptions with naming conflicts.")),Object(s.b)("p",null,"You can also load files with specified extensions by setting the extensions option.\nOnly these values are supported now. ",Object(s.b)("inlineCode",{parentName:"p"},"'ts', 'js', 'gql', 'graphql', 'graphqls'")),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"// ./graphql/resolvers.js\nconst path = require('path');\nconst { mergeResolvers } = require('@graphql-tools/merge');\nconst { loadFilesSync } = require('@graphql-tools/load-files');\n\nconst resolversArray = loadFilesSync(path.join(__dirname, './resolvers'), { extensions: ['js'] });\n\nmodule.exports = mergeResolvers(resolversArray);\n")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Optional: Automatic with Resolver Naming Convention")),Object(s.b)("p",null,"If you would like to use the automated ",Object(s.b)("inlineCode",{parentName:"p"},"fileLoader")," approach ",Object(s.b)("em",{parentName:"p"},"but")," would like complete\nfreedom over the structure of your resolver files, then simply use a resolver file naming\nconvention like, ",Object(s.b)("inlineCode",{parentName:"p"},"[file].resolvers.js/ts"),"."),Object(s.b)("p",null,"Then setup your ",Object(s.b)("inlineCode",{parentName:"p"},"fileLoader")," like so, and you're in business:"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"// ./graphql/resolvers/index.js/ts\nconst path = require('path');\nconst { mergeResolvers } = require('@graphql-tools/merge');\nconst { loadFilesSync } = require('@graphql-tools/load-files');\n\nconst resolversArray = loadFilesSync(path.join(__dirname, \"./**/*.resolvers.*\"));\nmodule.exports = mergeResolvers(resolversArray);\n")),Object(s.b)("p",null,"With this approach, you're free to structure resolver files as you see fit. Of course,\nunique naming of Queries, Mutations and Subscriptions still applies!"),Object(s.b)("p",null,"Now you can structure by ",Object(s.b)("strong",{parentName:"p"},"function"),"..."),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{}),"+-- graphql\n|   +-- resolvers\n|   |   +-- author.resolvers.js/ts\n|   |   +-- book.resolvers.js/ts\n|   |   +-- index.ts  <<< Merges all `*.resolvers.*` files\n")),Object(s.b)("p",null,"Or by ",Object(s.b)("strong",{parentName:"p"},"type"),"..."),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{}),"+-- graphql\n|   +-- entity\n|   |   +-- author\n|   |   |   +-- author.resolvers.js/ts\n|   |   |   +-- ...\n|   |   +-- book\n|   |   |   +-- book.resolvers.js/ts\n|   |   |   +-- ...\n|   |   +-- index.ts <<< Merges all `*.resolvers.*` files\n")))}p.isMDXComponent=!0},198:function(e,r,n){"use strict";n.d(r,"a",(function(){return u})),n.d(r,"b",(function(){return d}));var t=n(0),o=n.n(t);function s(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){s(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var r=o.a.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},u=function(e){var r=p(e.components);return o.a.createElement(c.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=t,d=u["".concat(l,".").concat(m)]||u[m]||b[m]||s;return n?o.a.createElement(d,a(a({ref:r},c),{},{components:n})):o.a.createElement(d,a({ref:r},c))}));function d(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var s=n.length,l=new Array(s);l[0]=m;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a.mdxType="string"==typeof e?e:t,l[1]=a;for(var c=2;c<s;c++)l[c]=n[c];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);