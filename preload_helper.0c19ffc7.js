!function(){"use strict";var t="/".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"@totalizer/xcomponents","b":"webpack","f":[["nm__dumi__dist__client__pages__Demo__index.578aa5c0.chunk.css",9],["nm__dumi__dist__client__pages__Demo__index.e2feac7f.async.js",9],["58.ffeec0eb.async.js",58],["nm__dumi__dist__client__pages__404.8b85f2d9.chunk.css",65],["nm__dumi__dist__client__pages__404.e747ec7e.async.js",65],["82.322e32cd.async.js",82],["docs__components__text-typed.md.5af96f66.async.js",240],["docs__components__layout.md.e29e5d72.async.js",284],["dumi__theme__layouts__DocLayout__index.a5dd68d9.chunk.css",367],["dumi__theme__layouts__DocLayout__index.ee4988bb.async.js",367],["docs__pricing.md.aa3d6c64.async.js",393],["docs__components__carousel.md.2434b3ee.async.js",420],["docs__components__bg-canvas.md.8268a87c.async.js",512],["docs__components__countdown.md.4faa1cf7.async.js",728],["docs__components__border-dashed.md.36e8777b.async.js",753],["docs__components__animate-text.md.950cb75d.async.js",783],["docs__components__image-compare.md.3a1c9fd4.async.js",813],["docs__guide__index.md.d847b60e.async.js",825],["docs__components__border-moving.md.8844163f.async.js",870],["docs__components__image-lightbox.md.5b98e4c4.async.js",884],["dumi__tmp-production__dumi__theme__ContextWrapper.d994a683.async.js",923],["docs__components__text-countup.md.0cfe15a4.async.js",926],["docs__index.md.c1b5b8bd.async.js",935]],"r":{"/*":[3,4,2,5,8,9,20],"/":[22,2,5,8,9,20],"/guide":[17,2,5,8,9,20],"/pricing":[10,2,5,8,9,20],"/~demos/:id":[0,1,20],"/components/image-lightbox":[19,2,5,8,9,20],"/components/border-dashed":[14,2,5,8,9,20],"/components/border-moving":[18,2,5,8,9,20],"/components/image-compare":[16,2,5,8,9,20],"/components/animate-text":[15,2,5,8,9,20],"/components/text-countup":[21,2,5,8,9,20],"/components/text-typed":[6,2,5,8,9,20],"/components/bg-canvas":[12,2,5,8,9,20],"/components/countdown":[13,2,5,8,9,20],"/components/carousel":[11,2,5,8,9,20],"/components/layout":[7,2,5,8,9,20]}},{publicPath:"/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();