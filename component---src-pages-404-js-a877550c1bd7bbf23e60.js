(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{184:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(201),s=a(199);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(s.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},191:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(3),s=a.n(i),o=a(53),l=a.n(o);a.d(t,"a",function(){return l.a});a(193);var c=r.a.createContext({}),u=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},193:function(e,t,a){var n;e.exports=(n=a(197))&&n.default||n},196:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Material UI Starter"}}}}},197:function(e,t,a){"use strict";a.r(t);a(56);var n=a(0),r=a.n(n),i=a(3),s=a.n(i),o=a(86),l=a(4),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},199:function(e,t,a){"use strict";var n=a(200),r=a(0),i=a.n(r),s=a(3),o=a.n(s),l=a(221),c=a.n(l);function u(e){var t=e.description,a=e.lang,r=e.meta,s=e.title,o=n.data.site,l=t||o.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"},{name:"description",content:l},{property:"og:title",content:s},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:l}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},t.a=u},200:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Material UI Starter",description:"Kick off your next, great Gatsby project with this Material UI starter. This barebones starter ships with the main Gatsby and Material UI configuration files you might need.",author:"@dominicabela"}}}}},201:function(e,t,a){"use strict";var n=a(196),r=a(0),i=a.n(r),s=a(3),o=a.n(s),l=a(191),c=(a(56),a(54)),u=a(272),d=a(273),m=a(288),p=a(274),g=a(275),f=a(277),h=a(282),E=a(280),w=a(281),y=a(278),b=a(214),v=a.n(b),x=a(216),T=a.n(x),j=a(217),S=a.n(j),O=a(283),q=a(284),M=a(285),k=a(219),B=a.n(k),F=a(220),N=a.n(F),R=Object(u.a)(function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),background:"linear-gradient(to right,  #663399, #5B72FF)"},appBarShift:{width:"calc(100% - 240px)",marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object.assign({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}}),C=function(e){var t,a=e.siteTitle,n=R(),r=Object(d.a)(),s=i.a.useState(!1),o=s[0],u=s[1];return i.a.createElement("div",{className:n.root},i.a.createElement(p.a,null),i.a.createElement(g.a,{position:"fixed",elevation:0,className:Object(c.a)(n.appBar,(t={},t[n.appBarShift]=o,t))},i.a.createElement(f.a,null,i.a.createElement(y.a,{color:"inherit","aria-label":"Open drawer",onClick:function(){u(!0)},edge:"start",className:Object(c.a)(n.menuButton,o&&n.hide)},i.a.createElement(v.a,null)),i.a.createElement(E.a,{variant:"h6",color:"inherit"},a))),i.a.createElement(m.a,{className:n.drawer,variant:"persistent",anchor:"left",open:o,classes:{paper:n.drawerPaper}},i.a.createElement("div",{className:n.drawerHeader},i.a.createElement(y.a,{onClick:function(){u(!1)}},"ltr"===r.direction?i.a.createElement(T.a,null):i.a.createElement(S.a,null))),i.a.createElement(w.a,null),i.a.createElement(h.a,null,i.a.createElement(O.a,{button:!0},i.a.createElement(q.a,null,i.a.createElement(B.a,null)),i.a.createElement(M.a,null,i.a.createElement(l.a,{to:"/"},"Home"))),i.a.createElement(O.a,{button:!0},i.a.createElement(q.a,null,i.a.createElement(N.a,null)),i.a.createElement(M.a,null,i.a.createElement(l.a,{to:"/components"},"Components"))))))};C.propTypes={siteTitle:o.a.string},C.defaultProps={siteTitle:""};var G=C,I=(a(182),function(e){var t=e.children;return i.a.createElement(l.b,{query:"2994927498",render:function(e){return i.a.createElement("div",{style:{minHeight:"100vh",backgroundColor:"#FFF"}},i.a.createElement(G,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:100}},i.a.createElement("main",null,t),i.a.createElement("footer",{style:{paddingTop:10}},"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})});I.propTypes={children:o.a.node.isRequired};t.a=I}}]);
//# sourceMappingURL=component---src-pages-404-js-a877550c1bd7bbf23e60.js.map