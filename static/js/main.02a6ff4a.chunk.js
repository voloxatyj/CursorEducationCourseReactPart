(this.webpackJsonpreact_introduce_by_cursor_education_course=this.webpackJsonpreact_introduce_by_cursor_education_course||[]).push([[0],{70:function(e,t,a){e.exports=a(82)},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),l=a.n(i),s=a(15),c=a(30),m=a(43),o=a(35),d=a(3),u=a(107),p=a(28),f=a(109),g=a(111),h=a(112),E=a(113),v=a(41),w=a(117),N=a(114),b=a(115),x=a(118),y=a(116),k=a(52),S=a.n(k),j=a(54),L=a.n(j),O=a(55),C=a.n(O),W=a(53),_=a.n(W),B=Object(u.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},icons:{textDecoration:"none"},hide:{display:"none",font:""},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(m.a)(Object(m.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}})),J=function(){var e=B(),t=Object(p.a)(),a=r.a.useState(!1),n=Object(c.a)(a,2),i=n[0],l=n[1];return r.a.createElement("div",{className:e.root},r.a.createElement(f.a,null),r.a.createElement(g.a,{position:"fixed",className:Object(d.a)(e.appBar,Object(s.a)({},e.appBarShift,i))},r.a.createElement(h.a,{style:{justifyContent:"space-between"}},r.a.createElement(E.a,{color:"inherit","aria-label":"open drawer",onClick:function(){l(!0)},edge:"start",className:Object(d.a)(e.menuButton,i&&e.hide)},r.a.createElement(S.a,null)),r.a.createElement(v.a,{variant:"h6",noWrap:!0},"Introducing React"),r.a.createElement(_.a,{style:{float:"right"}}))),r.a.createElement(w.a,{className:e.drawer,variant:"persistent",anchor:"left",open:i,classes:{paper:e.drawerPaper}},r.a.createElement("div",{className:e.drawerHeader},r.a.createElement(E.a,{onClick:function(){l(!1)}},"ltr"===t.direction?r.a.createElement(L.a,null):r.a.createElement(C.a,null))),r.a.createElement(N.a,null),r.a.createElement(b.a,null,r.a.createElement(o.b,{to:"/basics",className:e.icons},r.a.createElement(x.a,{button:!0},r.a.createElement(y.a,{primary:"15-hw-ReactJS.\u041e\u0441\u043d\u043e\u0432\u0438"}))),r.a.createElement(o.b,{to:"/contracts",className:e.icons},r.a.createElement(x.a,{button:!0},r.a.createElement(y.a,{primary:"16-hw-ReactJS.\u041a\u043b\u0430\u0441\u043e\u0432\u0456 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0438"})))),r.a.createElement(N.a,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=a(6),I=a(39),R=a(40),z=a(59),F=a.n(z),G=a(60),M=a.n(G),T=a(61),H=a.n(T),P=a(62),D=a.n(P),$=a(63),q=a.n($);function K(){var e=Object(I.a)(["\n\t\t.div {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\theight: 100vh;\n\t\t\tborder-color: transparent;\n\t\t\ttransition: all 1s linear;\n\t\t\tcursor: pointer;\n\t\t}\n\t\t.card {\n\t\t\tbackground-color: #211f2f;\n\t\t\tmax-width: 1200px;\n    \twidth: 91%;\n\t\t\tdisplay: block;\n\t\t}\n\t\t.head {\n\t\t\tdisplay: inline-flex;\n\t\t\talign-items: center;\n\t\t\tmargin-left: 2rem;\n    \tmargin-top: .7rem; \n\t\t\theight:10vh;\n\t\t}\n\t\t.arrow {\n    \tcolor: grey;\n\t\t\tmargin-bottom: 2.5rem;\n    \tmargin-left: 30rem;\n\t\t}\n\t\t.main {\n\t\t\tdisplay: grid;\n\t\t\tgrid-template-rows: 35px 35px;\n\t\t\tmargin-bottom: 2rem;\n    \tpadding: .5rem;\n\t\t},\n\t\t.content {\n\t\t\tdisplay: inline-flex;\n\t\t\talign-items: center;\n\t\t\tcolor: white;\n\t\t\tpadding-top: 1.5rem;\n\t\t\t& span {\n\t\t\t\tcolor:grey;\n\t\t\t}\n\t\t}\n\t\t.text {\n\t\t\tdisplay: flex;\n\t\t}\n\t\t.image {\n\t\t\twidth: 70px;\n\t\t\theight: 70px;\n\t\t\tborder-radius: 60px;\n\t\t}\n\t\tsection {\n\t\t\tdisplay: inline-flex;\n\t\t\talign-items: center;\n\t\t\twidth: 961px;\n    \theight: 405px;\n\t\t\tbackground-image: url(",");\n\t\t\tborder-radius: 20px;\n\t\t\tmargin-left: 7rem;\n\t\t}\n\t\t.others {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-around;\n\t\t\tcolor: rgb(108 117 140);\n\t\t\t.icons {\n\t\t\t\tdisplay: inline-flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\t\t}\n\t"]);return K=function(){return e},e}var Q=function(e){var t=e.author,a=e.content,n=e.image,i=e.date,l=R.a.div(K(),n);return r.a.createElement(l,null,r.a.createElement("div",{className:"div"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"head"},r.a.createElement("img",{alt:"avatar",src:t.photo,className:"image"}),r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"content"},r.a.createElement("h2",{style:{paddingTop:".5rem"}},t.name),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",viewBox:"0 0 24 24",fill:"white",width:"24px",height:"24px",style:{margin:".5rem .5rem 0"}},r.a.createElement("g",null,r.a.createElement("rect",{fill:"none",height:"24",width:"24"})),r.a.createElement("g",null,r.a.createElement("path",{d:"M23,12l-2.44-2.79l0.34-3.69l-3.61-0.82L15.4,1.5L12,2.96L8.6,1.5L6.71,4.69L3.1,5.5L3.44,9.2L1,12l2.44,2.79l-0.34,3.7 l3.61,0.82L8.6,22.5l3.4-1.47l3.4,1.46l1.89-3.19l3.61-0.82l-0.34-3.69L23,12z M10.09,16.72l-3.8-3.81l1.48-1.48l2.32,2.33 l5.85-5.87l1.48,1.48L10.09,16.72z"}))),r.a.createElement("span",{style:{fontSize:"large",paddingTop:".5rem"}},t.nickname," \xb7 ",i)),r.a.createElement("div",{className:"text"},r.a.createElement("h2",{style:{color:"white",fontSize:"1.2rem",fontWeight:"normal"}},a))),r.a.createElement(F.a,{className:"arrow"})),r.a.createElement("section",null),r.a.createElement("div",{className:"others"},r.a.createElement("div",{className:"icons"},r.a.createElement(M.a,null),r.a.createElement("h3",{style:{marginLeft:"1rem"}},"482")),r.a.createElement("div",{className:"icons"},r.a.createElement(H.a,null),r.a.createElement("h3",{style:{marginLeft:"1rem"}},"146")),r.a.createElement("div",{className:"icons"},r.a.createElement(D.a,null),r.a.createElement("h3",{style:{marginLeft:"1rem"}},"887")),r.a.createElement("div",{className:"icons"},r.a.createElement(q.a,null))))))},U=a(38),V=a(23),X=a(65),Y=a(64),Z=function(e){var t=e.item;return r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"card mb-4 shadow-sm"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",null,t.firstName+" "+t.lastName),r.a.createElement("p",{className:"card-text"},r.a.createElement("i",{className:"fas fa-phone-alt fa-lg p-1"}),r.a.createElement("strong",null,"phone"),":",t.phone,r.a.createElement("br",null)),r.a.createElement("p",{className:"card-text d-flex align-items-center"},"male"===t.gender?r.a.createElement("i",{className:"fas fa-male fa-2x p-1"}):r.a.createElement("i",{className:"fas fa-female fa-2x p-1"}),r.a.createElement("strong",null,"gender"),":",t.gender))))},ee=[{firstName:"\u0411\u0430\u0440\u043d\u0435\u0439",lastName:"\u0421\u0442\u0438\u043d\u0441\u043e\u0432\u0441\u044c\u043a\u0438\u0439",phone:"+380956319521",gender:"male"},{firstName:"\u0420\u043e\u0431\u0456\u043d",lastName:"\u0429\u0435\u0440\u0431\u0430\u0442\u0441\u044c\u043a\u0430",phone:"+380931460123",gender:"female"},{firstName:"\u0410\u043d\u043e\u043d\u0456\u043c\u043d\u0438\u0439",lastName:"\u0410\u043d\u043e\u043d\u0456\u043c\u0443\u0441",phone:"+380666666666"},{firstName:"\u041b\u0456\u043b\u0456\u044f",lastName:"\u041e\u043b\u0434\u0440\u043e\u0432\u043d\u0430",phone:"+380504691254",gender:"female"},{firstName:"\u041c\u0430\u0440\u0448\u0435\u043d",lastName:"\u0415\u0440\u0456\u043a\u0441\u043e\u043d\u044f\u043d",phone:"+380739432123",gender:"male"},{firstName:"\u0422\u0435\u043e\u0434\u043e\u0440",lastName:"\u041c\u043e\u0442\u0441\u0431\u0435\u0441",phone:"+380956319528",gender:"male"}];function te(){var e=Object(I.a)(["\n\tform {\n\t\tdisplay: flex;\n\t\tjustify-content: flex-end;\n\t}\n"]);return te=function(){return e},e}var ae=function(e){Object(X.a)(a,e);var t=Object(Y.a)(a);function a(){var e;Object(U.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={items:ee},e.findGender=function(t){switch(e.setState({items:ee}),t.target.value){case"male":e.setState({items:e.state.items.filter((function(e){return"male"===e.gender}))});break;case"female":e.setState({items:e.state.items.filter((function(e){return"female"===e.gender}))});break;case"male&&female":e.setState({items:e.state.items.filter((function(e){return void 0!==e.gender}))});break;case"unknown":e.setState({items:[e.state.items[2]]})}},e.findContact=function(t){var a=t.target.value;""===a?e.setState({items:ee}):a.startsWith("+")?e.setState({items:e.state.items.filter((function(e){return e.phone.includes(a)}))}):a.startsWith("f")||a.startsWith("m")?e.setState({items:e.state.items.filter((function(e){if(void 0!==e.gender)return e.gender.startsWith(a)}))}):e.setState({items:e.state.items.filter((function(e){return e.lastName.toLowerCase().includes(a.toLowerCase())||e.firstName.toLowerCase().includes(a.toLowerCase())}))})},e}return Object(V.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(ne,{className:"mt-5 p-5 mb-4"},r.a.createElement("h3",{className:"text-center"},"Contacts"),r.a.createElement("div",{className:"context"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-column align-items-center p-5"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("label",{className:"sr-only",htmlFor:"inlineFormInput"},"Name"),r.a.createElement("input",{onChange:function(t){return e.findContact(t)},type:"text",className:"form-control mb-2",id:"inlineFormInput",placeholder:"Anonimus"})),r.a.createElement("select",{className:"custom-select",onChange:function(t){return e.findGender(t)}},r.a.createElement("option",{value:!0},"Select gender"),r.a.createElement("option",{value:"male"},"male"),r.a.createElement("option",{value:"female"},"female"),r.a.createElement("option",{value:"male&&female"},"male&&female"),r.a.createElement("option",{value:"unknown"},"unknown")))),r.a.createElement("div",{className:"row"},this.state.items.map((function(e){return r.a.createElement(Z,{key:e.phone,item:e})})))))}}]),a}(n.Component),ne=R.a.div(te());l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,null,r.a.createElement(J,null),r.a.createElement(A.c,null,r.a.createElement(A.a,{exact:!0,path:"/basics",component:function(){return r.a.createElement(Q,{author:{name:"Anakin skywalker",photo:"https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg",nickname:"@dart_vader"},content:"WTF? Who is Ray? Why she is Skywalker? Luke...?",image:"https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",date:"26 \u0444\u0435\u0432\u0440."})}}),r.a.createElement(A.a,{exact:!0,path:"/contracts",component:ae})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[70,1,2]]]);
//# sourceMappingURL=main.02a6ff4a.chunk.js.map