(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Njg2:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return u}));var r=a("q1tI"),n=a.n(r),i=a("Wbzz"),l=a("9eSz"),s=a.n(l),o=a("vOnD"),c=o.b.div.withConfig({displayName:"Pagination__PaginationStyles",componentId:"sc-1g15gau-0"})(["display:flex;align-content:center;align-items:center;justify-items:center;border:1px solid var(--grey);margin:2rem,0;border-radius:5px;text-align:center;& > *{padding:1rem;flex:1;border-right:1px solid var(--grey);text-decoration:none;&[aria-current ],&.current{color:var(--red);}&[disabled]{pointer-events:none;color:var(--grey);}}"]);var m=function(e){var t=e.pageSize,a=e.totalCount,r=e.currentPage,l=(e.skip,e.base),s=Math.ceil(a/t),o=r-1,m=r+1,d=m<=s,g=o>=1;return n.a.createElement(c,null,n.a.createElement(i.a,{disabled:!g,to:l+"/"+o},"⏪ Prev"),Array.from({length:s}).map((function(e,t){return n.a.createElement(i.a,{className:1===r&&0===t?"current":"",to:l+"/"+(t>0?t+1:"")},t+1)})),n.a.createElement(i.a,{disabled:!d,to:l+"/"+m},"Next ⏩"))},d=a("EYWl"),g=o.b.div.withConfig({displayName:"slicemasters__SlicemastersGrid",componentId:"sc-1ghrt1m-0"})(["display:grid;gap:2rem;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));"]),p=o.b.div.withConfig({displayName:"slicemasters__SlicemasterStyles",componentId:"sc-1ghrt1m-1"})(["text-decoration:none;.gatsby-image-wrapper{height:400px;}h2{transform:rotate(-2deg);text-align:center;font-size:4rem;margin-bottom:-2rem;position:relative;z-index:2;}.description{background:var(--yellow);padding:1rem;margin:2rem;margin-top:-6rem;z-index:2;position:relative;transform:rotate(1deg);text-align:center;}"]);var u="134471079";t.default=function(e){var t=e.data,a=e.pageContext,r=t.slicemasters.nodes;return console.log(r),n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a,{title:"Slicemasters - Page "+(a.currentPage||1)}),n.a.createElement(m,{pageSize:parseInt("3"),totalCount:t.slicemasters.totalCount,currentPage:a.currentPage||1,skip:a.skip,base:"/slicemasters"}),n.a.createElement(g,null,r.map((function(e){return n.a.createElement(p,{key:e.id},n.a.createElement(i.a,{to:"/slicemasters/"+e.name},n.a.createElement("h2",null,n.a.createElement("span",{className:"mark"},e.name))),n.a.createElement(s.a,{fluid:e.image.asset.fluid}),n.a.createElement("p",{className:"description"},e.description))}))))}}}]);
//# sourceMappingURL=component---src-pages-slicemasters-js-23df32dae35db5814627.js.map