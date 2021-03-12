(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{103:function(n,e,i){"use strict";i.r(e),i.d(e,"frontMatter",(function(){return a})),i.d(e,"metadata",(function(){return o})),i.d(e,"toc",(function(){return p})),i.d(e,"default",(function(){return m}));var t=i(3),r=i(7),s=(i(0),i(166)),a={id:"feel-grammar",title:"FEEL Grammar"},o={unversionedId:"feel-grammar",id:"version-1.12/feel-grammar",isDocsHomePage:!1,title:"FEEL Grammar",description:"EBNF",source:"@site/versioned_docs/version-1.12/feel-grammar.md",slug:"/feel-grammar",permalink:"/feel-scala/docs/1.12/feel-grammar",editUrl:"https://github.com/camunda/feel-scala/edit/master/docs/versioned_docs/version-1.12/feel-grammar.md",version:"1.12"},p=[{value:"EBNF",id:"ebnf",children:[]},{value:"PEG",id:"peg",children:[]}],l={toc:p};function m(n){var e=n.components,i=Object(r.a)(n,["components"]);return Object(s.b)("wrapper",Object(t.a)({},l,i,{components:e,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"ebnf"},"EBNF"),Object(s.b)("p",null,"This is the original grammar from the spec."),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{}),'1. expression = \n  a. textual expression |\n  b. boxed expression ;\n  \n2. textual expression =\n  a. function definition | for expression | if expression | quantified expression |\n  b. disjunction |\n  c. conjunction |\n  d. comparison |\n  e. arithmetic expression |\n  f. instance of |\n  g. path expression |\n  h. filter expression | function invocation |\n  i. literal | simple positive unary test | name | "(" , textual expression , ")" ;\n  \n3. textual expressions = textual expression , { "," , textual expression } ;\n\n4. arithmetic expression =\n  a. addition | subtraction |\n  b. multiplication | division |\n  c. exponentiation |\n  d. arithmetic negation ;\n  \n5. simple expression = arithmetic expression | simple value ;\n\n6. simple expressions = simple expression , { "," , simple expression } ;\n\n7. simple positive unary test =\n  a. [ "<" | "<=" | ">" | ">=" ] , endpoint |\n  b. interval ;\n  \n8. interval = ( open interval start | closed interval start ) , endpoint , ".." , endpoint , ( open interval end | closed interval\nend ) ;\n\n9. open interval start = "(" | "]" ;\n\n10. closed interval start = "[" ;\n\n11. open interval end = ")" | "[" ;\n\n12. closed interval end = "]" ;\n\n13. simple positive unary tests = simple positive unary test , { "," , simple positive unary test } ;\n\n14. simple unary tests =\n  a. simple positive unary tests |\n  b. "not", "(", simple positive unary tests, ")" |\n  c. "-";\n\n15. positive unary test = simple positive unary test | "null" ;\n\n16. positive unary tests = positive unary test , { "," , positive unary test } ;\n\n17. unary tests =\n  a. positive unary tests |\n  b. "not", " (", positive unary tests, ")" |\n  c. "-"\n\n18. endpoint = simple value ;\n\n19. simple value = qualified name | simple literal ;\n\n20. qualified name = name , { "." , name } ;\n\n21. addition = expression , "+" , expression ;\n\n22. subtraction = expression , "-" , expression ;\n\n23. multiplication = expression , "*" , expression ;\n\n24. division = expression , "/" , expression ;\n\n25. exponentiation = expression, "**", expression ;\n\n26. arithmetic negation = "-" , expression ;\n\n27. name = name start , { name part | additional name symbols } ;\n\n28. name start = name start char, { name part char } ;\n\n29. name part = name part char , { name part char } ;\n\n30. name start char = "?" | [A-Z] | "_" | [a-z] | [\\uC0-\\uD6] | [\\uD8-\\uF6] | [\\uF8-\\u2FF] | [\\u370-\\u37D] | [\\u37F-\\u1FFF] |\n[\\u200C-\\u200D] | [\\u2070-\\u218F] | [\\u2C00-\\u2FEF] | [\\u3001-\\uD7FF] | [\\uF900-\\uFDCF] | [\\uFDF0-\\uFFFD] |\n[\\u10000-\\uEFFFF] ;\n\n31. name part char = name start char | digit | \\uB7 | [\\u0300-\\u036F] | [\\u203F-\\u2040] ;\n\n32. additional name symbols = "." | "/" | "-" | "\u2019" | "+" | "*" ;\n\n33. literal = simple literal | "null" ;\n\n34. simple literal = numeric literal | string literal | Boolean literal | date time literal ;\n\n35. string literal = \'"\' , { character \u2013 (\'"\' | vertical space) }, \'"\' ;\n\n36. Boolean literal = "true" | "false" ;\n\n37. numeric literal = [ "-" ] , ( digits , [ ".", digits ] | "." , digits ) ;\n\n38. digit = [0-9] ;\n\n39. digits = digit , {digit} ;\n\n40. function invocation = expression , parameters ;\n\n41. parameters = "(" , ( named parameters | positional parameters ) , ")" ;\n\n42. named parameters = parameter name , ":" , expression ,\n{ "," , parameter name , ":" , expression } ;\n\n43. parameter name = name ;\n\n44. positional parameters = [ expression , { "," , expression } ] ;\n\n45. path expression = expression , "." , name ;\n\n46. for expression = "for" , name , "in" , expression { "," , name , "in" , expression } , "return" , expression ;\n\n47. if expression = "if" , expression , "then" , expression , "else" expression ;\n\n48. quantified expression = ("some" | "every") , name , "in" , expression , { name , "in" , expression } , "satisfies" ,\nexpression ;\n\n49. disjunction = expression , "or" , expression ;\n\n50. conjunction = expression , "and" , expression ;\n\n51. comparison =\n  a. expression , ( "=" | "!=" | "<" | "<=" | ">" | ">=" ) , expression |\n  b. expression , "between" , expression , "and" , expression |\n  c. expression , "in" , positive unary test ;\n  d. expression , "in" , " (", positive unary tests, ")" ;\n\n52. filter expression = expression , "[" , expression , "]" ;\n\n53. instance of = expression , "instance" , "of" , type ;\n\n54. type = qualified name ;\n\n55. boxed expression = list | function definition | context ;\n\n56. list = "[" [ expression , { "," , expression } ] , "]" ;\n\n57. function definition = "function" , "(" , [ formal parameter { "," , formal parameter } ] , ")" ,\n[ "external" ] , expression ;\n\n58. formal parameter = parameter name ;\n\n59. context = "{" , [context entry , { "," , context entry } ] , "}" ;\n\n60. context entry = key , ":" , expression ;\n\n61. key = name | string literal ;\n\n62. date time literal = ( "date" | "time" | "date and time" | "duration" ) , "(" , string literal , ")" ;\n')),Object(s.b)("h2",{id:"peg"},"PEG"),Object(s.b)("p",null,"Rewritten grammar which is used by the parser."),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{}),'// 1 a)\nexpression = textualExpression\n// 1 b)\nexpression10 = boxedExpression\n\n// 3\ntextualExpressions = textualExpression ( "," textualExpression )*\n\n// 2 a)\ntextualExpression = functionDefinition / forExpression / ifExpression / quantifiedExpression / expression2\n// 2 b) \nexpression2 = disjunction\n// 2 c)\nexpression3 = conjunction\n// 2 d)\nexpression4 = comparison / expression5\n// 2 e)\nexpression5 = arithmeticExpression\n// 2 f)\nexpression6 = instanceOf / expression7\n// 2 g)\nexpression7 = pathExpression\n// 2 h)\nexpression8 = filterExpression / functionInvocation / expression9\n// 2 i)\nexpression9 = literal / name / simplePositiveUnaryTest / ( "(" textualExpression ")" ) / expression10\n\n// 6\nsimpleExpressions = simpleExpression ( "," simple expression )*\n  \n// 5\nsimpleExpression = arithmeticExpression / simpleValue\n\n// 4 a) -> 21+22\narithmeticExpression = arithmeticExpression2 ( "+" arithmeticExpression2 / "-" arithmeticExpression2 )*\n// 4 b) -> 23+24\narithmeticExpression2 = arithmeticExpression3 ( "*" arithmeticExpression3 / "/" arithmeticExpression3 )*\n// 4 c) -> 25\narithmeticExpression3 = arithmeticExpression4 ( "**" arithmeticExpression4 )*\n// 4 d) -> 26\narithmeticExpression4 = ("-")? expression6\n\n// 17\nunaryTests = "-" / ( "not" "(" positiveUnaryTests ")" ) / positiveUnaryTests\n\n// 16\npositiveUnaryTests = positiveUnaryTest ( "," positiveUnaryTest )*\n\n// 15\npositiveUnaryTest = "null" / simplePositiveUnaryTest\n\n// 14\nsimpleUnaryTests = "-" / ( "not" "(" simplePositiveUnaryTests ")" ) / simplePositiveUnaryTests\n\n// 13\nsimplePositiveUnaryTests = simplePositiveUnaryTest ( "," simplePositiveUnaryTest )*\n\n// 7\nsimplePositiveUnaryTest = ( ( "<" / "<=" / ">" / ">=" )? endpoint ) / interval\n\n// 18\nendpoint = simpleValue\n\n// 19\nsimpleValue = simpleLiteral / qualifiedName\n\n// 33\nliteral = "null" / simpleLiteral\n\n// 34\nsimpleLiteral = booleanLiteral / dateTimeLiteral / stringLiteral / numericLiteral  \n\n// 36\nbooleanLiteral = "true" / "false"\n\n// 62\ndateTimeLiteral = ( "date" / "time" / "date and time" / "duration" ) "(" stringLiteral ")"\n\n// 35 \nstringLiteral = \'"\' ( !(\'"\' / verticalSpace) character )* \'"\'\n\n// 37\nnumericLiteral = ( "-" )? ( ( digits ( "." digits )? ) / ( "." digits ) )\n\n// 39\ndigits = digit ( digit )*\n\n// 38\ndigit = [0-9]\n\n// 20\nqualifiedName = name ( "." name )*\n\n// 27\nname = nameStart ( namePart / additionalNameSymbols )*\n\n// 28\nnameStart = nameStartChar ( namePartChar )*\n\n// 29\nnamePart = ( namePartChar )+\n\n// 30\nnameStartChar = "?" / [A-Z] / "_" / [a-z] / [\\uC0-\\uD6] / [\\uD8-\\uF6] / [\\uF8-\\u2FF] / [\\u370-\\u37D] / [\\u37F-\\u1FFF] /\n[\\u200C-\\u200D] / [\\u2070-\\u218F] / [\\u2C00-\\u2FEF] / [\\u3001-\\uD7FF] / [\\uF900-\\uFDCF] / [\\uFDF0-\\uFFFD] /\n[\\u10000-\\uEFFFF]\n\n// 31\nnamePartChar = nameStartChar / digit / [\\uB7] / [\\u0300-\\u036F] / [\\u203F-\\u2040] \n\n// 32\nadditionalNameSymbols = "." / "/" / "-" / "\u2019" / "+" / "*" \n  \n// 8\ninterval = ( openIntervalStart / closedIntervalStart ) endpoint ".." endpoint ( openIntervalEnd / closedIntervalEnd )\n\n// 9\nopenIntervalStart = "(" / "]"\n\n// 10\nclosedIntervalStart = "["\n\n// 11\nopenIntervalEnd = ")" / "["\n\n// 12\nclosedIntervalEnd = "]"\n\n// 46\nforExpression = "for" name "in" expression ( "," name "in" expression )* "return" expression\n\n// 47\nifExpression = "if" expression "then" expression "else" expression\n\n// 48\nquantifiedExpression = ("some" / "every") (name "in" expression)+ "satisfies" expression\n\n// 49\ndisjunction = expression3 ( "or" expression3 )*\n\n// 50\nconjunction = expression4 ( "and" expression )*\n\n// 51\ncomparison =  ( expression5 ( "=" / "!=" / "<" / "<=" / ">" / ">=" ) expression5 ) /\n              ( expression5 "between" expression "and" expression ) /\n              ( expression5 "in" "(" positiveUnaryTests ")" ) /\n              ( expression5 "in" positiveUnaryTest )               \n\n// 53\ninstanceOf = expression7 "instance" "of" type\n\n// 54\ntype = qualifiedName\n \n// 45\npathExpression = expression8 ( "." name )* ( "[" expression "]" )\n\n// 52\nfilterExpression = expression9 "[" expression "]"\n              \n// 40\nfunctionInvocation = expression9 parameters\n\n// 41\nparameters = "(" namedParameters / positionalParameters ")"\n\n// 42\nnamedParameters = parameterName ":" expression ( "," parameterName ":" expression )*\n\n// 43\nparameterName = name\n\n// 44\npositionalParameters = ( expression ( "," expression )* )?\n\n// 55\nboxedExpression = list / functionDefinition / context \n\n// 56\nlist = "[" ( expression ( "," expression )* )? "]" \n\n// 57\nfunctionDefinition = "function" "(" ( formalParameter ( "," formalParameter )* )? ")" ( "external" )? expression\n\n// 58\nformalParameter = parameterName\n\n// 59\ncontext = "{" ( contextEntry ( "," contextEntry )* )? "}" \n\n// 60\ncontextEntry = key ":" expression \n\n// 61\nkey = name / stringLiteral \n')))}m.isMDXComponent=!0},166:function(n,e,i){"use strict";i.d(e,"a",(function(){return u})),i.d(e,"b",(function(){return d}));var t=i(0),r=i.n(t);function s(n,e,i){return e in n?Object.defineProperty(n,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[e]=i,n}function a(n,e){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.push.apply(i,t)}return i}function o(n){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){s(n,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(i,e))}))}return n}function p(n,e){if(null==n)return{};var i,t,r=function(n,e){if(null==n)return{};var i,t,r={},s=Object.keys(n);for(t=0;t<s.length;t++)i=s[t],e.indexOf(i)>=0||(r[i]=n[i]);return r}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(t=0;t<s.length;t++)i=s[t],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(n,i)&&(r[i]=n[i])}return r}var l=r.a.createContext({}),m=function(n){var e=r.a.useContext(l),i=e;return n&&(i="function"==typeof n?n(e):o(o({},e),n)),i},u=function(n){var e=m(n.components);return r.a.createElement(l.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return r.a.createElement(r.a.Fragment,{},e)}},x=r.a.forwardRef((function(n,e){var i=n.components,t=n.mdxType,s=n.originalType,a=n.parentName,l=p(n,["components","mdxType","originalType","parentName"]),u=m(i),x=t,d=u["".concat(a,".").concat(x)]||u[x]||c[x]||s;return i?r.a.createElement(d,o(o({ref:e},l),{},{components:i})):r.a.createElement(d,o({ref:e},l))}));function d(n,e){var i=arguments,t=e&&e.mdxType;if("string"==typeof n||t){var s=i.length,a=new Array(s);a[0]=x;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=n,o.mdxType="string"==typeof n?n:t,a[1]=o;for(var l=2;l<s;l++)a[l]=i[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,i)}x.displayName="MDXCreateElement"}}]);