"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[157],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>p});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),d=c(a),p=r,m=d["".concat(s,".").concat(p)]||d[p]||u[p]||i;return a?n.createElement(m,l(l({ref:t},h),{},{components:a})):n.createElement(m,l({ref:t},h))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7719:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:4},l="Searching",o={unversionedId:"b2handle-tutorial/searching",id:"b2handle-tutorial/searching",title:"Searching",description:"Searching for a Handle. The  search_handle() is responsible to search for Handles with a specific key and value. Please note that searching requires access to a search servlet whose access information, if it differs from the handle server, has to be specified at client instantiation.",source:"@site/docs/b2handle-tutorial/searching.md",sourceDirName:"b2handle-tutorial",slug:"/b2handle-tutorial/searching",permalink:"/docs/b2handle-tutorial/searching",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/b2handle-tutorial/searching.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Start using the library",permalink:"/docs/b2handle-tutorial/using-the-library"},next:{title:"Congratulations!",permalink:"/docs/b2handle-tutorial/congratulations"}},s={},c=[{value:"Quick Links to Technical Documentation",id:"quick-links-to-technical-documentation",level:3}],h={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"searching"},"Searching"),(0,r.kt)("p",null,"Searching for a Handle. The  ",(0,r.kt)("inlineCode",{parentName:"p"},"search_handle()")," is responsible to search for Handles with a specific key and value. Please note that searching requires access to a search servlet whose access information, if it differs from the handle server, has to be specified at client instantiation."),(0,r.kt)("p",null,"In the definition of the credentials file, we found the entries ",(0,r.kt)("em",{parentName:"p"},"reverselookup_username")," and ",(0,r.kt)("em",{parentName:"p"},"reverselookup_password"),". These are used to authenticate with a specific local Handle server to retrieve the PID when given some key-value pair in the Handle record. Assume you just know some of the metadata stored with a PID but not the full PID. How can you get to the URL field to retrieve the data?"),(0,r.kt)("p",null,"We can fetch all data with a certain checksum.\nMake sure that your credential json file contains the keys ",(0,r.kt)("em",{parentName:"p"},"reverselookup_username")," and ",(0,r.kt)("em",{parentName:"p"},"reverselookup_password"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"credentials = PIDClientCredentials.load_from_JSON('<full_path>/cred_file.json')\nclient = EUDATHandleClient.instantiate_with_credentials(credentials)\nargs = dict([('CHECKSUM', md5sum)])\nresult = ec.search_handle(**args)\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"result")," conatins a list of all PIDs where a fiels ",(0,r.kt)("strong",{parentName:"p"},"CHECKSUM")," is defined and has the value stored in ",(0,r.kt)("strong",{parentName:"p"},"md5sum"),".\nNow we can retrieve the location of the first hit in the list."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"url = ec.get_value_from_handle(result[0], 'URL')\nprint(url) \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note,")," that this functionality is an EUDAT extension to the standard Handle server functionalities. You can also only query reversely on a local Handle server, not across the global Handle server."),(0,r.kt)("p",null,"The reverse look up function works also with wildcards:\nWe know that B2SAFE uses PIDs and stores the iRODS path in te field ",(0,r.kt)("strong",{parentName:"p"},"URL")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"rev = dict([('URL', 'irods:*')])\nresult = ec.search_handle(**rev)\n")),(0,r.kt)("p",null,"This will return a list of all PIDs stored in iRODS."),(0,r.kt)("h3",{id:"quick-links-to-technical-documentation"},"Quick Links to Technical Documentation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://eudat-b2handle.github.io/B2HANDLE/handleclient.html#instantiation"},"Instantiate Client")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://eudat-b2handle.github.io/B2HANDLE/handleclient.html#authentication"},"Authentication")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://eudat-b2handle.github.io/B2HANDLE/handleclient.html#authentication-using-client-certificates"},"Authentication using client certificates")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://eudat-b2handle.github.io/B2HANDLE/handleclient.html#authentication-using-username-and-password"},"Authentication using username and password")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://eudat-b2handle.github.io/B2HANDLE/handleclient.html#basic-handle-interaction"},"Basic Handle interaction")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://eudat-b2handle.github.io/B2HANDLE/handleclient.html#managing-multiple-urls-with-10320-loc"},"Managing multiple URLs with 10320/loc")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://eudat-b2handle.github.io/B2HANDLE/handleclient.html#full-method-documentation"},"Full method documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://eudat-b2handle.github.io/B2HANDLE/handleclient.html#constructors"},"Constructors")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://eudat-b2handle.github.io/B2HANDLE/handleclient.html#handle-record-methods"},"Handle record methods")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://eudat-b2handle.github.io/B2HANDLE/handleclient.html#methods-for-managing-10320-loc-entries"},"Methods for managing 10320/loc entries")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://eudat-b2handle.github.io/B2HANDLE/handleclient.html#helper-methods"},"Helper methods")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://eudat-b2handle.github.io/B2HANDLE/handleclient.html#module-b2handle.utilhandle"},"Utilities")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://eudat-b2handle.github.io/B2HANDLE/handleclient.html#module-b2handle.clientcredentials"},"Client credentials")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://eudat-b2handle.github.io/B2HANDLE/handleclient.html#module-b2handle.handleexceptions"},"Exceptions"))))}u.isMDXComponent=!0}}]);