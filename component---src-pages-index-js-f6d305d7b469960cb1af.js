(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{187:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(201),l=a(253),c=a(191),s=a(254),o=a.n(s),m=function(){return r.a.createElement(c.b,{query:"2321886676",render:function(e){return r.a.createElement(o.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:l})},u=a(199),d=a(272),p=a(286),E=a(281),g=a(282),f=a(283),b=a(284),h=a(285),y=a(287),w=a(255),v=a.n(w),x=a(259),A=a.n(x),k=a(256),N=a.n(k),O=a(257),S=a.n(O),q=a(258),j=a.n(q),M=Object(d.a)(function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper},nested:{paddingLeft:e.spacing(4)}}});t.default=function(){var e=M(),t=r.a.useState(!0),a=t[0],n=t[1],l=r.a.useState(!0),c=l[0],s=l[1];function o(e){switch(e){case"features":n(!a);break;case"info":s(!c)}}return r.a.createElement(i.a,null,r.a.createElement(u.a,{title:"Home"}),r.a.createElement(p.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(p.a,{item:!0,xs:2},r.a.createElement("div",{style:{maxWidth:"100px",marginBottom:"1.45rem"}},r.a.createElement(m,null))),r.a.createElement(p.a,{item:!0,xs:8},r.a.createElement("h1",null,"Gatsby Material UI Starter"),r.a.createElement("h5",null,"A responsive, minimalist Gatsby starter based on the world's most popular React UI framework."))),r.a.createElement(E.a,null),r.a.createElement(g.a,{component:"nav",className:e.root},r.a.createElement(f.a,{id:"features",button:!0,onClick:function(){return o("features")}},r.a.createElement(b.a,null,r.a.createElement(v.a,null)),r.a.createElement(h.a,{primary:"Features"}),a?r.a.createElement(N.a,null):r.a.createElement(S.a,null)),r.a.createElement(y.a,{in:!a,timeout:"auto",unmountOnExit:!0},r.a.createElement(g.a,{component:"div",disablePadding:!0},r.a.createElement(f.a,{button:!0,className:e.nested},r.a.createElement(b.a,null,r.a.createElement(j.a,null)),r.a.createElement(h.a,{primary:"Material UI Framework"})),r.a.createElement(f.a,{button:!0,className:e.nested},r.a.createElement(b.a,null,r.a.createElement(j.a,null)),r.a.createElement(h.a,{primary:"Progressive Web App"})),r.a.createElement(f.a,{button:!0,className:e.nested},r.a.createElement(b.a,null,r.a.createElement(j.a,null)),r.a.createElement(h.a,{primary:"SEO"})),r.a.createElement(f.a,{button:!0,className:e.nested},r.a.createElement(b.a,null,r.a.createElement(j.a,null)),r.a.createElement(h.a,{primary:"Offline Support"})),r.a.createElement(f.a,{button:!0,className:e.nested},r.a.createElement(b.a,null,r.a.createElement(j.a,null)),r.a.createElement(h.a,{primary:"Roboto Typeface (self hosted)"})))),r.a.createElement(f.a,{button:!0,onClick:function(){return o("info")}},r.a.createElement(b.a,null,r.a.createElement(A.a,null)),r.a.createElement(h.a,{primary:"Info"}),c?r.a.createElement(N.a,null):r.a.createElement(S.a,null)),r.a.createElement(y.a,{in:!c,timeout:"auto",unmountOnExit:!0},r.a.createElement(g.a,{component:"div",disablePadding:!0},r.a.createElement(f.a,{button:!0,className:e.nested},r.a.createElement(b.a,null,r.a.createElement(j.a,null)),r.a.createElement(h.a,{primary:"Based on Gatsby Default Starter"})),r.a.createElement(f.a,{button:!0,className:e.nested},r.a.createElement(b.a,null,r.a.createElement(j.a,null)),r.a.createElement(h.a,{primary:"Uses Gatsby Material UI Plugin"}))))))}},191:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),i=a(3),l=a.n(i),c=a(53),s=a.n(c);a.d(t,"a",function(){return s.a});a(193);var o=r.a.createContext({}),m=function(e){return r.a.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},193:function(e,t,a){var n;e.exports=(n=a(197))&&n.default||n},196:function(e){e.exports={data:{site:{siteMetadata:{title:"tkymism.g"}}}}},197:function(e,t,a){"use strict";a.r(t);a(56);var n=a(0),r=a.n(n),i=a(3),l=a.n(i),c=a(86),s=a(4),o=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=o},199:function(e,t,a){"use strict";var n=a(200),r=a(0),i=a.n(r),l=a(3),c=a.n(l),s=a(221),o=a.n(s);function m(e){var t=e.description,a=e.lang,r=e.meta,l=e.title,c=n.data.site,s=t||c.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"},{name:"description",content:s},{property:"og:title",content:l},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:s}].concat(r)})}m.defaultProps={lang:"en",meta:[],description:""},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},t.a=m},200:function(e){e.exports={data:{site:{siteMetadata:{title:"tkymism.g",description:"Garally of tkymism",author:"@tkymism"}}}}},201:function(e,t,a){"use strict";var n=a(196),r=a(0),i=a.n(r),l=a(3),c=a.n(l),s=a(191),o=(a(56),a(54)),m=a(272),u=a(273),d=a(288),p=a(274),E=a(275),g=a(277),f=a(282),b=a(280),h=a(281),y=a(278),w=a(214),v=a.n(w),x=a(216),A=a.n(x),k=a(217),N=a.n(k),O=a(283),S=a(284),q=a(285),j=a(219),M=a.n(j),R=a(220),F=a.n(R),B=Object(m.a)(function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),background:"linear-gradient(to right,  #663399, #5B72FF)"},appBarShift:{width:"calc(100% - 240px)",marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object.assign({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}}),T=function(e){var t,a=e.siteTitle,n=B(),r=Object(u.a)(),l=i.a.useState(!1),c=l[0],m=l[1];return i.a.createElement("div",{className:n.root},i.a.createElement(p.a,null),i.a.createElement(E.a,{position:"fixed",elevation:0,className:Object(o.a)(n.appBar,(t={},t[n.appBarShift]=c,t))},i.a.createElement(g.a,null,i.a.createElement(y.a,{color:"inherit","aria-label":"Open drawer",onClick:function(){m(!0)},edge:"start",className:Object(o.a)(n.menuButton,c&&n.hide)},i.a.createElement(v.a,null)),i.a.createElement(b.a,{variant:"h6",color:"inherit"},a))),i.a.createElement(d.a,{className:n.drawer,variant:"persistent",anchor:"left",open:c,classes:{paper:n.drawerPaper}},i.a.createElement("div",{className:n.drawerHeader},i.a.createElement(y.a,{onClick:function(){m(!1)}},"ltr"===r.direction?i.a.createElement(A.a,null):i.a.createElement(N.a,null))),i.a.createElement(h.a,null),i.a.createElement(f.a,null,i.a.createElement(O.a,{button:!0},i.a.createElement(S.a,null,i.a.createElement(M.a,null)),i.a.createElement(q.a,null,i.a.createElement(s.a,{to:"/"},"Home"))),i.a.createElement(O.a,{button:!0},i.a.createElement(S.a,null,i.a.createElement(F.a,null)),i.a.createElement(q.a,null,i.a.createElement(s.a,{to:"/components"},"Components"))))))};T.propTypes={siteTitle:c.a.string},T.defaultProps={siteTitle:""};var U=T,G=(a(182),function(e){var t=e.children;return i.a.createElement(s.b,{query:"2994927498",render:function(e){return i.a.createElement("div",{style:{minHeight:"100vh",backgroundColor:"#FFF"}},i.a.createElement(U,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:100}},i.a.createElement("main",null,t),i.a.createElement("footer",{style:{paddingTop:10}},"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})});G.propTypes={children:c.a.node.isRequired};t.a=G},253:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAD2klEQVQ4y3WUW2xUVRSGDyY+8MCLTxofvNNWqPY61Wgk4IvxEmI1ktpxOm2n01IKCg8gCYpGgxgkpTB3LjOlnaYNDQGaaC0kpbaVS0molWYql9SMGDWxRBrajt3nrOX6d+cMo5aTrOx99uXba61/7W14i0MGvrqikOEtDt+HvqcgeH+DI/LO+rKDnQ2lkUmZU2JmfWkkKWPdMlcp/0uxFnvqisJGum/YnSVNLxy2+2tlQ6KhKMrVuRF2LfezpyDEnsIQu3L87M6JcENhlGXNDVlbYRh3GRlqFmzXBkeM3Xkh3vTSEdWxe1D9OJy0bl6bopvXp2j83C/Utfd7tXl1TLlzg9zkOMreknBLFtTIhAnYprI4V+X5zOjOfnM+pYiZCbCRvut0sfcaJX/6U49ZpsXxLwbNqqd9qqm0netLwr502jJeroVngPVELlmyiS/3T9KONztJNrFz+X5trjwfb3+jg85/fRVg7u+6QrJXpT11GlkCJBAmPMPCk8ERqnxqP7tX+HE6ixgLJv3qlX6ueHwfH2s+R5ZF/PFbXWZtfhhzSYEvM6AmBGh68bD6e07R6MDP5BSYNw2SRf8yjEloIlSQt73aTmjh5YbSVrQeA6UBNeVEhfxsfz1O8EwO0huzYfa/9lqs5pkAWrKBMt9joM6qcgMc+/Qsckd9bT/oXGlIyV1Idlv7bFAbvJOWxKz1JUcwPw5lFMJY92gzdXw5pJN9Oj7GrtwDi0LhmZRUxj5YHaP3V0WpvlhHNGNIwZqNzx/i0NY+qnyyhdp3fceLQQFyiyAflXfy9NQsp2bneWY6xTO3UzQx8ivVFeq0zBm4TrgBKNqhkxNU/uAeju8e/B8UUSDMzWti3N1ynk/4LyLvfOevOZq88odVu1JXQQKidEMUgWhRvm0dpbcf3rs4VLxE3t6T/4rH9rHkn01lUU/4kgmGCPkNysaJu7nl5VY1fWuWbWHuBYX6jc8dZEkPD3SP65x/+Fpc1Rfo+90IUZbiouNuiii6sO8JFfVr8gO6sGOf9GvYcd8F05UTgLe/CesB++pV4PpI0tWZjjGyob2to1z+0FdsC4VDRFE+e2zBs+FTE1SdH5jf6GiDcF4btvA4yKux0dGuoZ17hs07t1MaOnQiQe8+0ULiqX4Y0sbHD1wwF2Bx5DaaecIyj6J8eDXgaZWEv/WVNoXbc2Psd+voZwO07pFmavt8wOqNXTYxhzDhmQ3775u4JGvQKTlNQigoh3JoLDukFa1ZEdZjWgDJmaz1LgILZR5He7CuMLRMoB4pqR7xYFz+Z1C0UosJlAbUtAXAHnsfGP8An71yIvslifEAAAAASUVORK5CYII=",aspectRatio:1,src:"/static/4a9773549091c227cd2eb82ccd9c5e3a/fdbb0/gatsby-icon.png",srcSet:"/static/4a9773549091c227cd2eb82ccd9c5e3a/e22c9/gatsby-icon.png 75w,\n/static/4a9773549091c227cd2eb82ccd9c5e3a/d3809/gatsby-icon.png 150w,\n/static/4a9773549091c227cd2eb82ccd9c5e3a/fdbb0/gatsby-icon.png 300w,\n/static/4a9773549091c227cd2eb82ccd9c5e3a/b5207/gatsby-icon.png 450w,\n/static/4a9773549091c227cd2eb82ccd9c5e3a/774d6/gatsby-icon.png 512w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-f6d305d7b469960cb1af.js.map