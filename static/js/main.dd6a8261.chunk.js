(this["webpackJsonpbro-test3"]=this["webpackJsonpbro-test3"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n(1),a=n.n(c),l=n(7),s=n.n(l),r=(n(13),n.p,n(14),n(4)),o=n(2),d=function(e){var t=e.cellSize;return Object(i.jsx)("td",{className:"item",style:{height:"".concat(t,"px"),width:"".concat(t,"px")}})},u=function(e){var t=e.line,n=e.cellSize;return Object(i.jsx)("tr",{className:"line",children:t.map((function(e,t){return Object(i.jsx)(d,{cellSize:n},t)}))})},b=function(e){var t=e.data,n=e.cellSize;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("table",{className:"table",children:Object(i.jsx)("tbody",{children:t.map((function(e,t){return Object(i.jsx)(u,{line:e,cellSize:n},t)}))})})})},j=function(e){var t=e.id,n=e.onClick,c=e.isDeleteBtn,a=e.cellSize,l=e.displace,s=e.isVisible,r=e.isDeleteColumn;c=c||!1,l=l||0,s=s||!1;var o={height:"".concat(a+1,"px"),width:"".concat(a,"px"),lineHeight:"".concat(a-4,"px"),fontSize:"".concat(a/2,"px")};c&&(o.visibility=s?"visible":"hidden",r?o.left="".concat(l,"px"):o.top="".concat(l,"px"));var d=c?"item button delete-button":"item button add-button";return Object(i.jsx)("button",{id:t,onClick:n,className:d,style:o})},f=(n(15),function(e){var t=e.initialWidth,n=e.initialHeight,a=e.cellSize,l=e.parentId;t=t||4,n=n||4,a=a||50;var s=Object(c.useState)(!1),d=Object(o.a)(s,2),u=d[0],f=d[1],p=Object(c.useState)(!1),O=Object(o.a)(p,2),h=O[0],v=O[1],x=Object(c.useState)(0),m=Object(o.a)(x,2),S=m[0],g=m[1],N=Object(c.useState)(0),C=Object(o.a)(N,2),z=C[0],y=C[1],D=Object(c.useState)(0),L=Object(o.a)(D,2),k=L[0],B=L[1],F=Object(c.useState)(0),w=Object(o.a)(F,2),I=w[0],T=w[1],V=Object(c.useState)([]),H=Object(o.a)(V,2),J=H[0],M=H[1];if(!J.length){for(var P=[],q=0;q<n;q++){for(var E=[],W=0;W<t;W++)E.push("");P.push(E)}M(P)}var A=function(){f(!1),v(!1)},G=function(e){for(var t=0;t<e.parentNode.childNodes.length;t++)if(e.parentNode.childNodes[t]===e)return[t,e.parentNode.childNodes.length]};return Object(i.jsxs)("div",{id:l,onMouseOut:function(e){var t=e.relatedTarget;if(t)if(!!t.classList.value.split(" ").find((function(e){return"item"===e}))){var n=t.parentNode;if(!!t.parentNode.classList.value.split(" ").find((function(e){return"line"===e}))){var i=G(t),c=Object(o.a)(i,2),s=c[0],r=c[1],d=G(n),u=Object(o.a)(d,2),b=u[0],j=u[1];g(b*a),y(s*a),B(b),T(s),f(j>1),v(r>1)}}else{if(t.parentNode===document)return void A();var p=!!t.parentNode.classList.value.split(" ").find((function(e){return"body-root"===e}));(null===t||t.parentNode.id===l||p&&"table"!==t.className||t.id===l)&&A()}else A()},children:[Object(i.jsx)("div",{className:"header-root",style:{marginLeft:"".concat(a+2,"px")},children:Object(i.jsx)(j,{id:"deleteColumn",onClick:function(){if(!(J[0].length<2)){var e=J.map((function(e){var t=Object(r.a)(e);return t.splice(I,1),t}));M(e),A()}},isVisible:h,cellSize:a,displace:z,isDeleteBtn:!0,isDeleteColumn:!0})}),Object(i.jsxs)("div",{className:"body-root",children:[Object(i.jsx)("div",{className:"left-body-root",children:Object(i.jsx)(j,{id:"deleteLine",onClick:function(){if(!(J.length<2)){var e=Object(r.a)(J);e.splice(k,1),M(e),A()}},isVisible:u,cellSize:a,displace:S,isDeleteBtn:!0,isDeleteColumn:!1})}),Object(i.jsx)(b,{data:J,cellSize:a}),Object(i.jsx)("div",{className:"right-body-root",children:Object(i.jsx)(j,{id:"addColumn",onClick:function(){var e=J.map((function(e){var t=Object(r.a)(e);return t.push(""),t}));M(e)},isDeleteBtn:!1,cellSize:a})})]}),Object(i.jsx)("div",{className:"footer-root",style:{marginLeft:"".concat(a+2,"px")},children:Object(i.jsx)(j,{id:"addLine",onClick:function(){for(var e=Object(r.a)(J),t=[],n=0;n<J[0].length;n++)t.push("");e.push(t),M(e)},isDeleteBtn:!1,cellSize:a})})]})});var p=function(){return Object(i.jsx)(f,{parentId:"square"})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,l=t.getTTFB;n(e),i(e),c(e),a(e),l(e)}))};s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.dd6a8261.chunk.js.map