(this["webpackJsonpblank1.0"]=this["webpackJsonpblank1.0"]||[]).push([[0],{121:function(e,n,t){},122:function(e,n,t){},133:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(9),i=t.n(c),l=(t(121),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,188)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),r(e),a(e),c(e),i(e)}))}),s=(t(122),t(42)),o=t(12),d=function(e){return e.app.status},j=function(e){return e.app.error},b=t(14),u=t(89),O=t.n(u),h=t(2),x=function(){return Object(h.jsx)("div",{className:O.a.xxx,children:"2222222222222"})},m=t(90),p=t.n(m),g=t(69),v=t(68),f=t(185),T=t(170),N=t(21),B=t(37),_=t.n(B),E=t(103),P=t(13),C={tableBetons:[{article:"any",car:"\u041c\u0438\u043a\u0441\u0435\u0440",id:"string",grade:"sssss",mobility:"\u041f3",prize:1111,numberOf:2222}],tradingProperty:{downTime:.75,downTimePrice:50,allTransportPrice:0,minimumLoad:6},expenses:{transportPrice:1.15,discount:0}},y=t(71),A=function(e,n){return Number(Math.round(e+"e"+n)+"e-"+n)},z=function(e){return e.tender.tableBetons},L=function(e){return e.tender.tradingProperty},S=function(e){return e.tender.expenses.transportPrice},k=function(e){return e.tender.expenses.discount},I=Object(y.a)([z],(function(e){return null===e||void 0===e?void 0:e.reduce((function(e,n){return n.numberOf+e}),0)})),R=Object(y.a)([L,I],(function(e,n){return e.allTransportPrice/(n||1e17)})),w=Object(y.a)([z,S,L,I,k,R],(function(e,n,t,r,a,c){return null===e||void 0===e?void 0:e.map((function(e){return e.name="".concat(e.grade," ").concat(e.mobility),e.transportPrize=A(50*n/6-t.allTransportPrice/(r||1),2),e.discountPrize=A(e.prize*(1-a/100)+e.transportPrize,2),e.totalOnePrize=A(e.discountPrize+c,2),e.totalAllPrize=A(e.totalOnePrize*e.numberOf,2),e.totalAllPrizNDS=A(1.2*e.totalAllPrize,2),e.totalNDS=A(e.totalAllPrize/5,2),e.NDS=A(.2*e.discountPrize,2),e.prizeNDS=A(1.2*e.discountPrize,2),e}))})),F=function(){var e=Object(o.b)(),n=Object(r.useState)(!0),t=Object(g.a)(n,2),a=t[0],c=t[1],i=Object(o.c)(L),l=i.allTransportPrice,s=i.downTime,d=i.downTimePrice,j=i.minimumLoad,b=Object(v.a)({enableReinitialize:!0,initialValues:{allTransportPrice:l,downTime:s,downTimePrice:d,minimumLoad:j},onSubmit:function(n){var t={downTime:Number(n.downTime),downTimePrice:Number(n.downTimePrice),allTransportPrice:Number(n.allTransportPrice),minimumLoad:Number(n.minimumLoad)};e({type:"TABLE_BETON/CHANGE_TRADING_PROPERTIES",properties:t}),b.resetForm(),c(!1)}});return Object(h.jsxs)("form",{onSubmit:b.handleSubmit,className:_.a.tradingTermsFormBlock,children:[Object(h.jsx)("h2",{children:"\u0423\u0441\u043b\u043e\u0432\u0438\u044f \u0422\u043e\u0440\u0433\u043e\u0432"}),Object(h.jsxs)("div",{className:_.a.formLine,children:[Object(h.jsx)("div",{children:"\u041e\u0431\u0449\u0430\u044f \u0441\u0443\u043c\u043c\u0430 \u0432\u044b\u0434\u0435\u043b\u044f\u0435\u043c\u0430\u044f \u043d\u0430 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442, \u0440\u0443\u0431"}),a?Object(h.jsx)(N.a,{customInput:f.a,variant:"outlined",name:"allTransportPrice",onChange:b.handleChange,value:b.values.allTransportPrice,placeholder:"\u0441\u0443\u043c\u043c\u0430, \u0440\u0443\u0431"}):l]}),Object(h.jsxs)("div",{className:_.a.formLine,children:[Object(h.jsx)("div",{children:"\u0432\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u043f\u0440\u043e\u0441\u0442\u043e\u044f, \u0447"}),a?Object(h.jsx)(N.a,{disabled:!0,customInput:f.a,variant:"outlined",name:"downTime",onChange:b.handleChange,value:b.values.downTime,placeholder:"\u0432\u0440\u0435\u043c\u044f, \u0447"}):s]}),Object(h.jsxs)("div",{className:_.a.formLine,children:[Object(h.jsx)("div",{children:" \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0441\u0432\u0435\u0440\u0445 \u043d\u043e\u0440\u043c\u0430\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u043f\u0440\u043e\u0441\u0442\u043e\u044f, \u0440\u0443\u0431/\u0447\u0430\u0441"}),a?Object(h.jsx)(N.a,{disabled:!0,customInput:f.a,variant:"outlined",name:"downTimePrice",onChange:b.handleChange,type:"text",value:b.values.downTimePrice,placeholder:"\u0440\u0443\u0431/\u0447\u0430\u0441"}):d]}),Object(h.jsxs)("div",{className:_.a.formLine,children:[Object(h.jsx)("div",{children:"\u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430, \u043c3"}),a?Object(h.jsx)(N.a,{disabled:!0,customInput:f.a,variant:"outlined",name:"minimumLoad",onChange:b.handleChange,type:"text",value:b.values.minimumLoad,placeholder:"m3"}):j]}),Object(h.jsxs)("div",{className:_.a.saveButton,children:[a&&Object(h.jsx)(T.a,{type:"submit",variant:"contained",color:"primary",children:"SAVE"}),!a&&Object(h.jsx)(T.a,{onClick:function(){c(!0)},variant:"contained",color:"primary",children:"Change"})]})]})},D=t(72),M=t.n(D),G=function(){var e=Object(o.b)(),n=Object(o.c)(S),t=Object(o.c)(k);return Object(h.jsxs)("div",{className:M.a.expensesFormBlock,children:[Object(h.jsx)("h2",{children:"\u0417\u0430\u0442\u0440\u0430\u0442\u044b"}),Object(h.jsxs)("div",{className:M.a.formLine,children:[Object(h.jsx)("div",{children:"\u0432\u043e\u0437\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430, \u043c/\u0447"}),Object(h.jsx)(N.a,{customInput:f.a,variant:"outlined",onChange:function(n){e(function(e){return{type:"TABLE_BETON/CHANGE_TRANSPORT_PRICE",transportPrice:e}}(Number(n.target.value)))},value:n,placeholder:"\u0441\u0443\u043c\u043c\u0430, \u0440\u0443\u0431"})]}),Object(h.jsxs)("div",{className:M.a.formLine,children:[Object(h.jsx)("div",{children:"\u0441\u043a\u0438\u0434\u043a\u0430, % "}),Object(h.jsx)(N.a,{customInput:f.a,variant:"outlined",onChange:function(n){e(function(e){return{type:"TABLE_BETON/CHANGE_DISCOUNT",discount:e}}(Number(n.target.value)))},value:t,placeholder:"\u0441\u0443\u043c\u043c\u0430, \u0440\u0443\u0431"})]})]})},H=t(102),V=t(180),W=t(171),U=t(173),Y=t(177),X=t(176),J=t(172),q=t(174),K=t(175),Q=t(135),Z=Object(W.a)({table:{minWidth:1250}});function $(){var e=Z(),n=Object(o.c)(w);return Object(h.jsx)(J.a,{component:Q.a,children:Object(h.jsxs)(U.a,{className:e.table,children:[Object(h.jsx)(q.a,{children:Object(h.jsxs)(K.a,{children:[Object(h.jsx)(X.a,{align:"center",children:"\u2116"}),Object(h.jsx)(X.a,{align:"center",children:"\u041c\u0430\u0440\u043a\u0430 \u0431\u0435\u0442\u043e\u043d\u0430"}),Object(h.jsx)(X.a,{align:"center",children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e, \u043c3"}),Object(h.jsx)(X.a,{align:"center",children:"\u041f\u0440\u0430\u0439\u0441"}),Object(h.jsx)(X.a,{align:"center",children:"\u0437\u0430\u0442\u0440\u0430\u0442\u044b \u043d\u0430 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442"}),Object(h.jsx)(X.a,{align:"center",children:"\u0426\u0435\u043d\u0430 \u0441\u043e \u0441\u043a\u0438\u0434\u043a\u043e\u0439"})," ",Object(h.jsx)(X.a,{align:"center",children:"\u041d\u0414\u0421"}),Object(h.jsx)(X.a,{align:"center",children:"\u0421 \u041d\u0414\u0421"}),Object(h.jsx)(X.a,{align:"center",children:"+ \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"})," ",Object(h.jsx)(X.a,{align:"center",children:" \u0438\u0442\u043e\u0433\u043e"}),Object(h.jsx)(X.a,{align:"center",children:" \u0438\u0442\u043e\u0433\u043e \u0441 \u041d\u0414\u0421"}),Object(h.jsx)(X.a,{align:"center",children:" \u0438\u0442\u043e\u0433\u043e \u041d\u0414\u0421"})]})}),Object(h.jsx)(Y.a,{children:null===n||void 0===n?void 0:n.map((function(e,n){return Object(h.jsxs)(K.a,{children:[Object(h.jsx)(X.a,{align:"center",children:n+1}),Object(h.jsx)(X.a,{align:"center",children:e.name}),Object(h.jsx)(X.a,{align:"center",children:e.numberOf}),Object(h.jsx)(X.a,{align:"center",children:e.prize}),Object(h.jsx)(X.a,{align:"center",children:e.transportPrize}),Object(h.jsx)(X.a,{align:"center",children:e.discountPrize}),Object(h.jsx)(X.a,{align:"center",children:e.NDS}),Object(h.jsx)(X.a,{align:"center",children:e.prizeNDS}),Object(h.jsx)(X.a,{align:"center",children:e.totalOnePrize}),Object(h.jsx)(X.a,{align:"center",children:e.totalAllPrize}),Object(h.jsx)(X.a,{align:"center",children:e.totalAllPrizNDS}),Object(h.jsx)(X.a,{align:"center",children:e.totalNDS})]},e.id)}))})]})})}var ee=t(183),ne=t(187),te=t(169),re=t(184),ae=["\u041f1","\u041f2","\u041f3","\u041f4"],ce=["\u041c\u0438\u043a\u0441\u0435\u0440","\u0421\u0430\u043c\u043e\u0441\u0432\u0430\u043b"],ie=function(e){var n=e.beton,t=void 0===n?{car:"\u041c\u0438\u043a\u0441\u0435\u0440",article:"",grade:"",mobility:"\u041f3",prize:0,numberOf:0,id:""}:n,r=e.changeType,a=void 0===r?"Add":r,c=e.setIsChangeBeton,i=t.car,l=t.article,s=t.grade,d=t.mobility,j=t.prize,b=t.numberOf,u=t.id,O=Object(o.b)(),x=Object(v.a)({initialValues:{car:i,article:l,grade:s,mobility:d,prize:j,numberOf:b,rememberMe:!0},validate:function(e){var n={};return e.numberOf||(n.numberOf="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e, \u043c3; "),e.grade||(n.grade="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043c\u0430\u0440\u043a\u0443 \u0431\u0435\u0442\u043e\u043d\u0430; "),e.prize||(n.prize="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0446\u0435\u043d\u0443 \u0431\u0435\u0442\u043e\u043d\u0430; "),n},onSubmit:function(e){var n={article:e.article,car:e.car,id:"Add"===a?Object(re.a)():u,grade:e.grade,mobility:e.mobility,prize:Number(e.prize),numberOf:Number(e.numberOf)};"Add"===a?O(function(e){return{type:"TABLE_BETON/SET_BETON",beton:e}}(n)):(O(function(e){return{type:"TABLE_BETON/CHANGE_BETON",beton:e}}(n)),c&&c(!1)),x.resetForm()}});return Object(h.jsxs)(K.a,{children:[Object(h.jsx)(X.a,{align:"center",children:Object(h.jsx)(N.a,{customInput:f.a,variant:"outlined",name:"article",onChange:x.handleChange,onBlur:x.handleBlur,type:"text",value:x.values.article,placeholder:"article"})}),Object(h.jsx)(X.a,{align:"center",children:Object(h.jsx)(te.a,{variant:"outlined",size:"small",children:Object(h.jsx)(ee.a,{name:"car",value:x.values.car,onChange:x.handleChange,label:"d",children:ce.map((function(e){return Object(h.jsx)(ne.a,{value:e,children:e})}))})})}),Object(h.jsxs)(X.a,{children:[Object(h.jsx)(f.a,{style:{margin:1},size:"small",variant:"outlined",name:"grade",onChange:x.handleChange,onBlur:x.handleBlur,type:"text",error:!!x.errors.grade,value:x.values.grade,placeholder:"\u041c\u0430\u0440\u043a\u0430 \u0431\u0435\u0442\u043e\u043d\u0430"}),x.touched.grade&&x.errors.grade?Object(h.jsxs)("div",{style:{color:"red"},children:[" ",x.errors.grade," "]}):null]}),Object(h.jsx)(X.a,{children:Object(h.jsx)(te.a,{variant:"outlined",size:"small",children:Object(h.jsx)(ee.a,{labelId:"demo-simple-select-outlined-label",name:"mobility",value:x.values.mobility,onChange:x.handleChange,label:"\u041f",children:ae.map((function(e){return Object(h.jsx)(ne.a,{value:e,children:e})}))})})}),Object(h.jsxs)(X.a,{children:[Object(h.jsx)(N.a,{customInput:f.a,size:1,variant:"outlined",name:"numberOf",onChange:x.handleChange,onBlur:x.handleBlur,error:!!x.errors.numberOf,value:x.values.numberOf,placeholder:"\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e, \u043c3"}),x.touched.numberOf&&x.errors.numberOf?Object(h.jsxs)("div",{style:{color:"red"},children:[" ",x.errors.numberOf," "]}):null]}),Object(h.jsxs)(X.a,{children:[Object(h.jsx)(N.a,{customInput:f.a,size:1,variant:"outlined",name:"prize",onChange:x.handleChange,onBlur:x.handleBlur,error:!!x.errors.prize,value:x.values.prize,placeholder:"\u0426\u0435\u043d\u0430"}),x.touched.prize&&x.errors.prize?Object(h.jsxs)("div",{style:{color:"red"},children:[" ",x.errors.prize," "]}):null]}),Object(h.jsx)(X.a,{children:Object(h.jsx)("div",{children:Object(h.jsx)(T.a,{onClick:function(){return x.handleSubmit()},variant:"contained",color:"primary",children:"Add"===a?"ADD":"Change"})})})]})},le=t(179),se=t(178),oe=t(98),de=t.n(oe),je=t(97),be=t.n(je),ue=function(e){var n=e.beton,t=Object(r.useState)(!1),a=Object(g.a)(t,2),c=a[0],i=a[1],l=Object(o.b)();return Object(h.jsx)(h.Fragment,{children:c?Object(h.jsx)(ie,{setIsChangeBeton:i,beton:n,changeType:"Change"}):Object(h.jsxs)(K.a,{children:[Object(h.jsx)(X.a,{align:"center",children:n.id}),Object(h.jsx)(X.a,{align:"center",children:n.car}),Object(h.jsx)(X.a,{align:"center",children:n.grade}),Object(h.jsx)(X.a,{align:"center",children:n.mobility}),Object(h.jsx)(X.a,{align:"center",children:n.numberOf}),Object(h.jsx)(X.a,{align:"center",children:n.prize}),Object(h.jsx)(X.a,{align:"center",children:Object(h.jsxs)("div",{className:be.a.change,children:[Object(h.jsx)(se.a,{onClick:function(){return e=n.id,void l(function(e){return{type:"TABLE_BETON/REMOVE_BETON",id:e}}(e));var e},children:Object(h.jsx)(le.a,{})}),Object(h.jsx)(se.a,{onClick:function(){return n.id,void i(!0)},children:Object(h.jsx)(de.a,{})})]})})]},n.id)})},Oe=Object(W.a)({table:{minWidth:1100}}),he=function(){var e=Oe(),n=Object(o.c)(z);return Object(h.jsx)(J.a,{component:Q.a,children:Object(h.jsxs)(U.a,{className:e.table,children:[Object(h.jsx)(q.a,{children:Object(h.jsxs)(K.a,{children:[Object(h.jsx)(X.a,{align:"center",children:"\u0410\u0440\u0442\u0438\u043a\u043b"}),Object(h.jsx)(X.a,{align:"center",children:"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430"}),Object(h.jsx)(X.a,{align:"center",children:"\u041c\u0430\u0440\u043a\u0430 \u0431\u0435\u0442\u043e\u043d\u0430"}),Object(h.jsx)(X.a,{align:"center",children:"\u041f\u043e\u0434\u0432\u0438\u0436\u043d\u043e\u0441\u0442\u044c"}),Object(h.jsx)(X.a,{align:"center",children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e, \u043c3"}),Object(h.jsx)(X.a,{align:"center",children:"\u0426\u0435\u043d\u0430, \u0431\u0435\u0437 \u041d\u0414\u0421"}),Object(h.jsx)(X.a,{align:"center",children:" \u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})]})}),Object(h.jsxs)(Y.a,{children:[null===n||void 0===n?void 0:n.map((function(e){return Object(h.jsx)(ue,{beton:e},e.id)})),Object(h.jsx)(ie,{})]})]})})},xe=Object(H.a)({overrides:{MuiOutlinedInput:{inputMarginDense:{padding:"2px",paddingTop:"2px",paddingBottom:"2px"},input:{height:"25px",padding:"2px"}},MuiTextField:{root:{padding:"2px",width:100}},MuiSelect:{root:{display:"flex",alignItems:"center"},selectMenu:{height:"25px"}},MuiIconButton:{root:{padding:"2px"}},MuiTableRow:{root:{height:"40px"}},MuiTableCell:{root:{height:"30px",padding:2,textAlign:"center",border:"1px solid black",borderTopColor:"black",borderBottomColor:"black"}}}}),me=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(V.a,{theme:xe,children:Object(h.jsxs)("div",{children:[Object(h.jsx)(he,{}),Object(h.jsxs)("div",{className:p.a.tradingFormBlock,children:[Object(h.jsx)(F,{}),Object(h.jsx)(G,{})]}),Object(h.jsx)(T.a,{variant:"contained",color:"primary",children:"\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c"}),Object(h.jsx)($,{})]})})})},pe="/page_one",ge="/page_two",ve=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.b,{path:"/",exact:!0,render:function(){return Object(h.jsx)(b.a,{to:pe})}}),Object(h.jsx)(b.b,{path:pe,render:function(){return Object(h.jsx)(me,{})}}),Object(h.jsx)(b.b,{path:ge,render:function(){return Object(h.jsx)(x,{})}})]})})},fe=t(51),Te=t.n(fe),Ne={status:"succeeded",error:null},Be=function(e){var n=Object(o.b)();return Object(h.jsxs)("div",{className:Te.a.notification,children:[Object(h.jsxs)("div",{className:Te.a.text,children:[" ",e.errorMessage," "]}),Object(h.jsx)("div",{className:"".concat(Te.a.close),children:Object(h.jsx)("div",{className:Te.a.text,onClick:function(){return n({type:"APP/SET_ERROR",error:null})},children:"X"})})]})},_e=t(99),Ee=t.n(_e),Pe=t.p+"static/media/Infinity-1s-200px.2a677e42.svg",Ce=function(){return Object(h.jsx)("div",{className:Ee.a.pre,children:Object(h.jsx)("img",{src:Pe,style:{height:200}})})},ye=t(181),Ae=t(182),ze=t(52),Le=t.n(ze),Se=function(){return Object(h.jsx)(ye.a,{position:"static",className:Le.a.appBarBlock,children:Object(h.jsx)(Ae.a,{children:Object(h.jsxs)("div",{className:Le.a.nav,children:[Object(h.jsx)("span",{children:Object(h.jsx)(s.b,{className:Le.a.NavLink,to:pe,children:"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440"})}),Object(h.jsx)("span",{children:Object(h.jsx)(s.b,{className:Le.a.NavLink,to:ge,children:"CONVERTER"})})]})})})};var ke=function(){var e=Object(o.c)(d),n=Object(o.c)(j);return Object(h.jsx)(s.a,{children:Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(Se,{}),null!==n&&Object(h.jsx)(Be,{errorMessage:n}),"loading"===e&&Object(h.jsx)(Ce,{}),Object(h.jsx)(ve,{})]})})},Ie=t(34),Re=t(100),we=t(101),Fe=Object(Ie.combineReducers)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"APP/SET_STATUS":return Object(P.a)(Object(P.a)({},e),{},{status:n.status});case"APP/SET_ERROR":return Object(P.a)(Object(P.a)({},e),{},{error:n.error});default:return e}},tender:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"TABLE_BETON/SET_BETON":return Object(P.a)(Object(P.a)({},e),{},{tableBetons:[].concat(Object(E.a)(e.tableBetons?e.tableBetons:[]),[n.beton])});case"TABLE_BETON/REMOVE_BETON":return Object(P.a)(Object(P.a)({},e),{},{tableBetons:e.tableBetons?e.tableBetons.filter((function(e){return e.id!==n.id})):null});case"TABLE_BETON/CHANGE_TRADING_PROPERTIES":return Object(P.a)(Object(P.a)({},e),{},{tradingProperty:n.properties});case"TABLE_BETON/CHANGE_TRANSPORT_PRICE":return Object(P.a)(Object(P.a)({},e),{},{expenses:Object(P.a)(Object(P.a)({},e.expenses),{},{transportPrice:n.transportPrice})});case"TABLE_BETON/CHANGE_DISCOUNT":return Object(P.a)(Object(P.a)({},e),{},{expenses:Object(P.a)(Object(P.a)({},e.expenses),{},{discount:n.discount})});case"TABLE_BETON/CHANGE_BETON":return Object(P.a)(Object(P.a)({},e),{},{tableBetons:e.tableBetons?e.tableBetons.map((function(e){return e.id===n.beton.id?n.beton:e})):null});default:return e}}}),De=Object(Ie.createStore)(Fe,Object(we.composeWithDevTools)(Object(Ie.applyMiddleware)(Re.a)));i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(o.a,{store:De,children:Object(h.jsx)(ke,{})})}),document.getElementById("root")),l()},37:function(e,n,t){e.exports={formLine:"TradingTermsForm_formLine__1u-wO",tradingTermsFormBlock:"TradingTermsForm_tradingTermsFormBlock__1uCDm",saveButton:"TradingTermsForm_saveButton__NS8uy"}},51:function(e,n,t){e.exports={notification:"ErrorSnackBar_notification__3q0sr",text:"ErrorSnackBar_text__1XKYY",close:"ErrorSnackBar_close__kWfQL"}},52:function(e,n,t){e.exports={nav:"Navbar_nav__21WcC",NavLink:"Navbar_NavLink__IYNYA",appBarBlock:"Navbar_appBarBlock__2ZyS9"}},72:function(e,n,t){e.exports={formLine:"ExpensesForm_formLine__34u6V",expensesFormBlock:"ExpensesForm_expensesFormBlock__2GkpX"}},89:function(e,n,t){e.exports={xxx:"PageTwo_xxx__269Fi"}},90:function(e,n,t){e.exports={tradingFormBlock:"PageOne_tradingFormBlock__1U5h4"}},97:function(e,n,t){e.exports={change:"InputTableBetonRow_change__27O1L"}},99:function(e,n,t){e.exports={pre:"Preloader_pre__2pHbL"}}},[[133,1,2]]]);
//# sourceMappingURL=main.05724423.chunk.js.map