(this["webpackJsonpnear-clicker-game"]=this["webpackJsonpnear-clicker-game"]||[]).push([[0],{107:function(e,t){},135:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(64),s=n.n(a),o=n(33),i=n(2),u=(n(73),n(6)),l=n(12),j=n(5),d=(n(74),Object({NODE_ENV:"production",PUBLIC_URL:"/near-clicker-game",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).CONTRACT_NAME||"mycontract.myaccount8.testnet");var b=function(e){switch(e){case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:d,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"};case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:d,walletUrl:"https://wallet.testnet.near.org/",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://explorer.testnet.near.org"};default:throw Error("Unknown environment '".concat(e,"'."))}},p=n(25),O=n(32),h=b("testnet");function w(){return(w=Object(l.a)(Object(u.a)().mark((function e(){var t;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.connect)(Object.assign({deps:{keyStore:new p.keyStores.BrowserLocalStorageKeyStore}},h));case 2:return t=e.sent,window.walletConnection=new p.WalletConnection(t),window.accountId=window.walletConnection.getAccountId(),e.next=7,t.account(window.accountId);case 7:return window.account=e.sent,e.next=10,new p.Contract(window.walletConnection.account(),h.contractName,{viewMethods:["get_num"],changeMethods:["increment","reset"]});case 10:window.contract=e.sent;case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return m.apply(this,arguments)}function m(){return(m=Object(l.a)(Object(u.a)().mark((function e(){var t;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.contract.get_num({args:{}});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return v.apply(this,arguments)}function v(){return(v=Object(l.a)(Object(u.a)().mark((function e(t){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.contract.increment({args:{count:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return N.apply(this,arguments)}function N(){return(N=Object(l.a)(Object(u.a)().mark((function e(){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.contract.reset({args:{}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){window.walletConnection.signOut(),window.location.replace(window.location.origin+window.location.pathname)}function C(){window.walletConnection.requestSignIn(h.contractName)}function S(){return k.apply(this,arguments)}function k(){return(k=Object(l.a)(Object(u.a)().mark((function e(){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=O.formatNearAmount,e.next=3,window.walletConnection.account().getAccountBalance();case 3:return e.t1=e.sent.total,e.abrupt("return",(0,e.t0)(e.t1,2));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=n(1);var A=function(){var e=window.walletConnection.account(),t=Object(c.useState)(),n=Object(j.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)("hidden"),o=Object(j.a)(s,2),d=o[0],b=o[1],p=Object(i.f)();Object(c.useEffect)((function(){e.accountId&&(O(),b("visible"))}),[e.accountId]);var O=function(){var e=Object(l.a)(Object(u.a)().mark((function e(){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.next=3,S();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(I.jsxs)("div",{className:"App",children:[Object(I.jsx)("header",{children:Object(I.jsxs)("div",{className:"header-titles",children:[Object(I.jsx)("img",{alt:"NEAR Logo",className:"near-logo",src:"./near_logo.svg",width:"500"}),Object(I.jsx)("h1",{children:"Clicker Game"})]})}),Object(I.jsxs)("div",{className:"App-container",children:[Object(I.jsxs)("div",{className:"App-menu-container",children:[Object(I.jsxs)("div",{className:"menu",children:[Object(I.jsx)("button",{className:"play-btn",onClick:function(){p("/play",{state:{}})},style:{visibility:d},children:Object(I.jsx)("span",{children:"PLAY"})}),!e.accountId&&Object(I.jsx)("p",{children:"Choose your network and Connect wallet"}),e.accountId&&Object(I.jsx)("p",{children:"Click as many CosmWasm Icon as you can within 15 seconds!"})]}),Object(I.jsx)("div",{className:"connect-wallet",children:e.accountId?Object(I.jsx)("button",{type:"button",onClick:y,className:"disconnect-btn",children:"DISCONNECT"}):Object(I.jsx)("button",{type:"button",onClick:C,className:"connect-btn",children:"CONNECT WALLET"})})]}),function(){if(e.accountId)return Object(I.jsxs)("div",{className:"wallet-info",children:[Object(I.jsx)("p",{children:"address: ".concat(e.accountId)}),Object(I.jsx)("p",{children:"balance: ".concat(r," NEAR")})]})}()]})]})},E=n(65),T=function(){var e=Object(c.useState)(15),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),s=Object(j.a)(a,2),o=s[0],d=s[1],b=Object(c.useState)(!1),p=Object(j.a)(b,2),O=p[0],h=p[1],w=Object(c.useState)({top:"20%",left:"50%"}),m=Object(j.a)(w,2),v=m[0],N=m[1],y=Object(c.useState)(!1),C=Object(j.a)(y,2),S=C[0],k=C[1],A=Object(c.useState)(0),T=Object(j.a)(A,2),_=T[0],U=T[1],M=Object(c.useState)(0),R=Object(j.a)(M,2),L=R[0],P=R[1],W=Object(c.useState)(),D=Object(j.a)(W,2),B=(D[0],D[1],Object(c.useState)()),K=Object(j.a)(B,2),G=K[0],H=K[1];Object(i.e)();Object(c.useEffect)((function(){0===n&&(N({display:"none"}),alert("Game Over! Your score is ".concat(_,". Please confirm transaction to submit score.")),clearInterval(G),d(!0),h(!1))}),[n]);var F=function(){var e=Object(l.a)(Object(u.a)().mark((function e(t){var n;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),e.next=3,f();case 3:return n=e.sent,console.log(n),P(n),e.next=8,g();case 8:k(!1),h(!0),N({top:"20%",left:"50%"}),H(setInterval((function(){r((function(e){return e>0?e-1:0}))}),1e3));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(l.a)(Object(u.a)().mark((function e(t){var n;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),e.next=3,x(_);case 3:return U(0),e.next=6,f();case 6:n=e.sent,P(n),k(!1),d(!1),r(15);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(I.jsxs)("div",{className:"score-board-container",children:[Object(I.jsxs)("div",{className:"play-container",children:[Object(I.jsxs)("div",{className:"score-menu",children:[Object(I.jsxs)("span",{children:["Previous Score: ",L]}),Object(I.jsxs)("span",{children:["Current Score: ",_]})]}),!1===o?Object(I.jsx)("button",{className:"game-btn",onClick:function(e){return F(e)},children:"GAME START"}):Object(I.jsx)("button",{className:"game-btn",onClick:function(e){return J(e)},children:"TRANSACTION"}),Object(I.jsxs)("span",{children:["Time left: ",n," s"]})]}),Object(I.jsxs)("div",{className:"game-container",children:[O&&Object(I.jsx)("img",{src:"./near-mark.svg",alt:"Target",id:"target",style:Object(E.a)({position:"absolute"},v),onClick:function(){U((function(e){return e+1})),N({top:"".concat(Math.floor(80*Math.random()+10),"%"),left:"".concat(Math.floor(80*Math.random())+10,"%")})}}),S&&Object(I.jsx)("div",{className:"loading-msg",children:"Loading..."})]})]})};window.nearInitPromise=function(){return w.apply(this,arguments)}().then((function(){s.a.createRoot(document.getElementById("root")).render(Object(I.jsx)(r.a.StrictMode,{children:Object(I.jsxs)("div",{className:"App-header",children:[Object(I.jsx)(o.a,{basename:"/near-clicker-game",children:Object(I.jsxs)(i.c,{children:[Object(I.jsx)(i.a,{path:"/",element:Object(I.jsx)(A,{})}),Object(I.jsx)(i.a,{path:"/play",element:Object(I.jsx)(T,{})})]})}),Object(I.jsxs)("div",{className:"footer-container",children:[Object(I.jsx)("span",{children:"Made with"}),Object(I.jsx)("img",{src:"./dsrv.png",id:"footer-logo",alt:"dsrv-logo"})]})]})}))})).catch(console.error)},73:function(e,t,n){},74:function(e,t,n){},79:function(e,t){},89:function(e,t){}},[[135,1,2]]]);
//# sourceMappingURL=main.7be36b12.chunk.js.map