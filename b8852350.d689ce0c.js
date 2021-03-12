(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{127:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(166)),l={id:"feel-built-in-functions-string",title:"String Functions"},b={unversionedId:"reference/builtin-functions/feel-built-in-functions-string",id:"version-1.13/reference/builtin-functions/feel-built-in-functions-string",isDocsHomePage:!1,title:"String Functions",description:"substring()",source:"@site/versioned_docs/version-1.13/reference/builtin-functions/feel-built-in-functions-string.md",slug:"/reference/builtin-functions/feel-built-in-functions-string",permalink:"/feel-scala/docs/1.13/reference/builtin-functions/feel-built-in-functions-string",editUrl:"https://github.com/camunda/feel-scala/edit/master/docs/versioned_docs/version-1.13/reference/builtin-functions/feel-built-in-functions-string.md",version:"1.13",sidebar:"version-1.13/Reference",previous:{title:"Boolean Functions",permalink:"/feel-scala/docs/1.13/reference/builtin-functions/feel-built-in-functions-boolean"},next:{title:"Numeric Functions",permalink:"/feel-scala/docs/1.13/reference/builtin-functions/feel-built-in-functions-numeric"}},c=[{value:"substring()",id:"substring",children:[]},{value:"string length()",id:"string-length",children:[]},{value:"upper case()",id:"upper-case",children:[]},{value:"lower case()",id:"lower-case",children:[]},{value:"substring before()",id:"substring-before",children:[]},{value:"substring after()",id:"substring-after",children:[]},{value:"contains()",id:"contains",children:[]},{value:"starts with()",id:"starts-with",children:[]},{value:"ends with()",id:"ends-with",children:[]},{value:"matches()",id:"matches",children:[]},{value:"replace()",id:"replace",children:[]},{value:"split()",id:"split",children:[]}],s={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"substring"},"substring()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"parameters:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"string"),": string"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"start position"),": number"),Object(i.b)("li",{parentName:"ul"},"(optional) ",Object(i.b)("inlineCode",{parentName:"li"},"length"),": number  "))),Object(i.b)("li",{parentName:"ul"},"result: string")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'substring("foobar",3) \n// "obar"\n\nsubstring("foobar",3,3) \n// "oba"\n')),Object(i.b)("h2",{id:"string-length"},"string length()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"parameters:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"string"),": string"))),Object(i.b)("li",{parentName:"ul"},"result: number")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'string length("foo") \n// 3\n')),Object(i.b)("h2",{id:"upper-case"},"upper case()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"parameters:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"string"),": string"))),Object(i.b)("li",{parentName:"ul"},"result: string")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'upper case("aBc4") \n// "ABC4"\n')),Object(i.b)("h2",{id:"lower-case"},"lower case()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"parameters:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"string"),": string"))),Object(i.b)("li",{parentName:"ul"},"result: string")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'lower case("aBc4") \n// "abc4"\n')),Object(i.b)("h2",{id:"substring-before"},"substring before()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"parameters:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"string"),": string"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"match"),": string"))),Object(i.b)("li",{parentName:"ul"},"result: string")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'substring before("foobar", "bar") \n// "foo"\n')),Object(i.b)("h2",{id:"substring-after"},"substring after()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"parameters:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"string"),": string"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"match"),": string"))),Object(i.b)("li",{parentName:"ul"},"result: string")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'substring after("foobar", "ob") \n// "ar"\n')),Object(i.b)("h2",{id:"contains"},"contains()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"parameters:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"string"),": string"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"match"),": string"))),Object(i.b)("li",{parentName:"ul"},"result: boolean")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'contains("foobar", "of") \n// false\n')),Object(i.b)("h2",{id:"starts-with"},"starts with()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"parameters:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"input"),": string"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"match"),": string"))),Object(i.b)("li",{parentName:"ul"},"result: boolean")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'starts with("foobar", "fo") \n// true\n')),Object(i.b)("h2",{id:"ends-with"},"ends with()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"parameters:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"input"),": string"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"match"),": string"))),Object(i.b)("li",{parentName:"ul"},"result: boolean")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'ends with("foobar", "r") \n// true\n')),Object(i.b)("h2",{id:"matches"},"matches()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"parameters:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"input"),": string"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"pattern"),": string (regular expression)"))),Object(i.b)("li",{parentName:"ul"},"result: boolean")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'matches("foobar", "^fo*bar") \n// true\n')),Object(i.b)("h2",{id:"replace"},"replace()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"parameters:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"input"),": string"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"pattern"),": string (regular expression)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"replacement"),": string (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"$1")," returns the first match group) "),Object(i.b)("li",{parentName:"ul"},"(optional) ",Object(i.b)("inlineCode",{parentName:"li"},"flags"),': string ("s", "m", "i", "x")'))),Object(i.b)("li",{parentName:"ul"},"result: string")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'replace("abcd", "(ab)|(a)", "[1=$1][2=$2]")\n// "[1=ab][2=]cd"\n\nreplace("0123456789", "(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3")\n// "(012) 345-6789"\n')),Object(i.b)("h2",{id:"split"},"split()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"parameters:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"string"),": string"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"delimiter"),": string (regular expression)"))),Object(i.b)("li",{parentName:"ul"},"result: list of strings")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'split("John Doe", "\\s" ) \n// ["John", "Doe"]\n\nsplit("a;b;c;;", ";")\n// ["a", "b", "c", "", ""]\n')))}u.isMDXComponent=!0},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return j}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},o=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),o=u(n),m=r,j=o["".concat(l,".").concat(m)]||o[m]||p[m]||i;return n?a.a.createElement(j,b(b({ref:t},s),{},{components:n})):a.a.createElement(j,b({ref:t},s))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:r,l[1]=b;for(var s=2;s<i;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);