(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n,a=c(7),s=c.n(a),r=c(5),i=c(16),l=c(6),o=c(13),d=c(14),u=function(e){return{type:"currentTodo/SET",payload:e}},j=function(){return{type:"currentTodo/REMOVE"}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/REMOVE":return null;case"currentTodo/SET":return t.payload;default:return e}};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(n||(n={}));var b=function(e,t){return{type:"FILTER",payload:{query:e,status:t}}},m={query:"",status:n.All},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;return"FILTER"===t.type?{query:t.payload.query,status:t.payload.status}:e},x=function(e){return{type:"todos/GET",payload:e}},O=[],p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;return"todos/GET"===t.type?t.payload:e},v=Object(l.combineReducers)({currentTodo:h,filter:f,todos:p}),y=Object(l.createStore)(v,Object(o.composeWithDevTools)(Object(l.applyMiddleware)(d.a))),N=c(8),g=c(3),T=c(4),w=c.n(T),E=c(0),k=(c(25),c(26),c(15)),C=c.n(k),S=r.b,q=r.c,A=c(1),F=function(){var e=S(),t=q((function(e){return e.currentTodo})),c=q((function(e){return e.filter})),a=q((function(e){return e.todos})),s=function(e){return(null===t||void 0===t?void 0:t.id)===e},r=Object(E.useMemo)((function(){switch(c.status){case n.Active:return a.filter((function(e){return!e.completed}));case n.Completed:return a.filter((function(e){return e.completed}));default:return a}}),[c.status,a]);return Object(A.jsxs)(A.Fragment,{children:[c.query&&!r.length&&Object(A.jsx)("p",{className:"notification is-warning",children:"There are no todos matching the current filter criteria"}),Object(A.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[!!r.length&&Object(A.jsx)("thead",{children:Object(A.jsxs)("tr",{children:[Object(A.jsx)("th",{children:"#"}),Object(A.jsx)("th",{children:Object(A.jsx)("span",{className:"icon",children:Object(A.jsx)("i",{className:"fas fa-check"})})}),Object(A.jsx)("th",{children:"Title"}),Object(A.jsx)("th",{children:" "})]})}),Object(A.jsx)("tbody",{children:r.map((function(t){var c=t.title,n=t.completed,a=t.id;return Object(A.jsxs)("tr",{"data-cy":"todo",children:[Object(A.jsx)("td",{className:"is-vcentered",children:a}),Object(A.jsx)("td",{className:"is-vcentered",children:n&&Object(A.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(A.jsx)("i",{className:"fas fa-check"})})}),Object(A.jsx)("td",{className:"is-vcentered is-expanded",children:Object(A.jsx)("p",{className:n?"has-text-success":"has-text-danger",children:c})}),Object(A.jsx)("td",{className:"has-text-right is-vcentered",children:Object(A.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return e(u(t))},children:Object(A.jsx)("span",{className:"icon",children:Object(A.jsx)("i",{className:C()("far",{"fa-eye-slash":s(a),"fa-eye":!s(a)})})})})})]},a)}))})]})]})},I=function(){var e=S(),t=q((function(e){return e.filter})),c=function(t,c){e(b(c,t))};return Object(A.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(A.jsx)("p",{className:"control",children:Object(A.jsx)("span",{className:"select",children:Object(A.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){return c(e.target.value,t.query)},children:[Object(A.jsx)("option",{value:n.All,children:"All"}),Object(A.jsx)("option",{value:n.Active,children:"Active"}),Object(A.jsx)("option",{value:n.Completed,children:"Completed"})]})})}),Object(A.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(A.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t.query,onChange:function(e){return c(t.status,e.target.value)}}),Object(A.jsx)("span",{className:"icon is-left",children:Object(A.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(A.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:t.query&&Object(A.jsx)("button",{"data-cy":"clearSearchButton","aria-label":"delete",type:"button",className:"delete",onClick:function(){return c(t.status,"")}})})]})]})},R=(c(28),function(){return Object(A.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(A.jsx)("div",{className:"Loader__content"})})});function _(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var L=function(){var e=S(),t=q((function(e){return e.currentTodo})),c=Object(E.useState)({email:"",name:""}),n=Object(g.a)(c,2),a=n[0],s=n[1],r=Object(E.useState)(!0),i=Object(g.a)(r,2),l=i[0],o=i[1],d=a.email,u=a.name;return Object(E.useEffect)((function(){var e=function(){var e=Object(N.a)(w.a.mark((function e(){var c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,o(!0),e.next=6,n=t.userId,_("/users/".concat(n));case 6:c=e.sent,s(c),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(2),new Error("Error");case 13:return e.prev=13,o(!1),e.finish(13);case 16:case"end":return e.stop()}var n}),e,null,[[2,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(A.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(A.jsx)("div",{className:"modal-background"}),l?Object(A.jsx)(R,{}):t&&Object(A.jsxs)("div",{className:"modal-card",children:[Object(A.jsxs)("header",{className:"modal-card-head",children:[Object(A.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",t.id]}),Object(A.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return e(j())}})]}),Object(A.jsxs)("div",{className:"modal-card-body",children:[Object(A.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(A.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(A.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(A.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(A.jsx)("a",{href:"mailto:".concat(d),children:"".concat(u)})]})]})]})]})},M=function(){var e=S(),t=Object(E.useState)(!1),c=Object(g.a)(t,2),n=c[0],a=c[1],s=q((function(e){return e.currentTodo}));return Object(E.useEffect)((function(){var t=function(){var t=Object(N.a)(w.a.mark((function t(){var c;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a(!0),t.next=4,_("/todos");case 4:c=t.sent,e(x(c)),t.next=11;break;case 8:throw t.prev=8,t.t0=t.catch(0),new Error("Error");case 11:return t.prev=11,a(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("div",{className:"section",children:Object(A.jsx)("div",{className:"container",children:Object(A.jsx)("div",{className:"box",children:n?Object(A.jsx)(R,{}):Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("h1",{className:"title",children:"Todos:"}),Object(A.jsx)("div",{className:"block",children:Object(A.jsx)(I,{})}),Object(A.jsx)("div",{className:"block",children:Object(A.jsx)(F,{})})]})})})}),s&&Object(A.jsx)(L,{})]})},B=function(){return Object(A.jsx)(r.a,{store:y,children:Object(A.jsx)(i.a,{children:Object(A.jsx)(M,{})})})};s.a.render(Object(A.jsx)(B,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.f443ece0.chunk.js.map