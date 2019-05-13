(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,a){},114:function(e,t,a){},235:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),s=a.n(c),i=(a(102),a(3)),o=a(4),l=a(6),u=a(5),m=a(7),p=a(96),d=a(11),h=a(28),g=a(89),b=a(45),f=a(23),E={isOpen:!1,cartItems:[],totalPrice:0},v={sortingType:["name","asc"]},y=Object(h.c)({cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_CART":return Object(f.a)({},e,{isOpen:!e.isOpen});case"ADD_ITEM":var a=e.cartItems.find(function(e){return e.id===t.payload.id});return a||(t.payload.qty=1),Object(f.a)({},e,{cartItems:a?e.cartItems.map(function(e){return e.id===t.payload.id?Object(f.a)({},e,{qty:++e.qty}):e}):[t.payload].concat(Object(b.a)(e.cartItems))});case"DELETE_ITEM":return Object(f.a)({},e,{cartItems:e.cartItems.filter(function(e){return e.id!==t.payload})});case"DECREMENT_QTY":return Object(f.a)({},e,{cartItems:e.cartItems.map(function(e){return e.id===t.payload.id?Object(f.a)({},e,{qty:--e.qty}):e})});case"UPDATE_PRICE":return Object(f.a)({},e,{totalPrice:e.cartItems.reduce(function(e,t){return e+t.qty*t.price},0).toFixed(2)});default:return e}},sorting:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SORT_TYPE":return Object(f.a)({},e,{sortingType:t.payload});default:return e}}}),j=Object(h.e)(y,{},Object(h.d)(Object(h.a)(g.a))),O=a(43),k=(a(114),a(115),a(116),function(){return{type:"SHOW_CART"}}),N=function(e){return function(t){t({type:"ADD_ITEM",payload:e}),t(C())}},C=function(){return{type:"UPDATE_PRICE"}},P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).showCart=function(){(0,a.props.showCart)()},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.cart,t=e.cartItems,a=e.totalPrice;return r.a.createElement("div",{className:"cart-icon ml-auto"},r.a.createElement("button",{type:"button",onClick:this.showCart},r.a.createElement("i",{className:"fas fa-shopping-cart"}),r.a.createElement("span",{className:"badge badge-primary"},t.reduce(function(e,t){return e+t.qty},0)),r.a.createElement("span",{className:"sr-only"},"products")),r.a.createElement("p",null,a," z\u0142"))}}]),t}(n.Component),w=Object(d.b)(function(e){return{cart:e.cart}},{showCart:k,updatePrice:C})(P),I=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isTop:!0},a.scrollToTop=function(){O.animateScroll.scrollToTop()},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("scroll",function(){var t=window.scrollY<100;t!==e.state.isTop&&e.setState({isTop:t})})}},{key:"render",value:function(){var e=this.state.isTop;return r.a.createElement("nav",{className:"navbar fixed-top ".concat(e?"":"scrolled")},r.a.createElement("div",{className:"container"},r.a.createElement("button",{type:"button",onClick:this.scrollToTop,className:"btn btn-link navbar-brand"},"Graphics shop"),r.a.createElement(w,null)))}}]),t}(n.Component),T=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",null,"2019 \xa9 Wide\u0142 Franciszek All rights reserved."))}}]),t}(n.Component),z=a(90),x=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onClick=function(e){(0,a.props.deleteItem)(e)},a.increment=function(){(0,a.props.addItem)(a.props.item)},a.decrement=function(e){a.props.item.qty>1?(0,a.props.decrement)(a.props.item):(0,a.props.deleteItem)(e)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.item;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"img-wrapper"},r.a.createElement("img",{className:"img-fluid",src:e.picture,alt:e.name})),r.a.createElement("h4",{className:"name"},e.name),r.a.createElement("div",{className:"quantity"},r.a.createElement("p",null,"Quantity:"," ",r.a.createElement("button",{className:"btn subtract",onClick:this.decrement.bind(this,e.id)},"-"),e.qty,r.a.createElement("button",{className:"btn add",onClick:this.increment.bind(this)},"+"))),r.a.createElement("small",{className:"price"},e.price*e.qty," z\u0142"),r.a.createElement("button",{type:"button",className:"close",onClick:this.onClick.bind(this,e.id)},"\xd7"))}}]),t}(n.Component),S=Object(d.b)(null,{deleteItem:function(e){return function(t){t({type:"DELETE_ITEM",payload:e}),t(C())}},addItem:N,decrement:function(e){return function(t){t({type:"DECREMENT_QTY",payload:e}),t(C())}}})(x),A=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.cart.totalPrice;return r.a.createElement("div",{className:"total-amount"},r.a.createElement("p",null,r.a.createElement("strong",null,"Delivery"),r.a.createElement("span",null,"E-mail")),r.a.createElement("p",null,r.a.createElement("strong",null,"Total"),e," z\u0142"),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{type:"button",className:"btn-custom disabled",disabled:!0},"Go to checkout")))}}]),t}(n.Component),_=Object(d.b)(function(e){return{cart:e.cart}},{updatePrice:C})(A),q=a(44),D=a.n(q),M=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).showCart=function(){(0,a.props.showCart)()},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.cart,t=e.isOpen,a=e.cartItems;return console.log(this.props,"Cart.js"),r.a.createElement("div",{className:"cart ".concat(t?"":"transparent")},r.a.createElement("div",{className:"cart-inside ".concat(t?"active":"")},r.a.createElement("h2",null,"Shopping cart"),r.a.createElement("button",{type:"button",className:"close",onClick:this.showCart},"\xd7"),r.a.createElement(z.Scrollbars,{style:{height:"65%"}},r.a.createElement("div",{className:"items"},0===a.length?r.a.createElement("h3",null,"Add some products to see details."):r.a.createElement("ul",null,console.log(a,"cartItems"),a.map(function(e){return r.a.createElement("li",{key:D()()},r.a.createElement(S,{item:e}))})))),r.a.createElement(_,null)))}}]),t}(n.Component),R=Object(d.b)(function(e){return{cart:e.cart}},{showCart:k,addItem:N})(M),W=a(94),F=a(91),B=a.n(F),L=a(92),Q=a.n(L),U=a(93),J=a.n(U),Y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1},a.addClick=function(e){a.setState({open:!0}),(0,a.props.addItem)(e)},a.handleClose=function(e,t){"clickaway"!==t&&a.setState({open:!1})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.product,t=this.props.classes;return r.a.createElement("div",{className:"col-sm-6 col-md-4"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"card-img-top img-fluid",src:e.picture,alt:e.name}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.name),r.a.createElement("p",{className:"price"},e.price," z\u0142"),r.a.createElement("ul",{className:"sizes"},r.a.createElement("li",null,"Resolutions:"),e.sizes.map(function(e){return r.a.createElement("li",{key:D()()},e)})),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{className:"btn-custom",onClick:this.addClick.bind(this,e)},"Add to cart")))),r.a.createElement(B.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:2e3,onClose:this.handleClose,ContentProps:{"aria-describedby":"message-id"},message:r.a.createElement("span",{id:"message-id"},"Item added!"),action:[r.a.createElement(Q.a,{key:"close","aria-label":"Close",color:"inherit",className:t.close,onClick:this.handleClose},r.a.createElement(J.a,null))]}))}}]),t}(n.Component),H=Object(d.b)(null,{addItem:N})(Object(W.withStyles)(function(e){return{close:{width:4*e.spacing.unit,height:4*e.spacing.unit}}})(Y)),K=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={pager:{}},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.props.items&&this.props.items.length&&this.setPage(this.props.initialPage)}},{key:"componentDidUpdate",value:function(e,t){this.props.items!==e.items&&this.setPage(this.props.initialPage)}},{key:"setPage",value:function(e){var t=this.props,a=t.items,n=t.pageSize,r=this.state.pager;if(!(e<1||e>r.totalPages)){r=this.getPager(a.length,e,n);var c=a.slice(r.startIndex,r.endIndex+1);this.setState({pager:r}),this.props.onChangePage(c)}}},{key:"getPager",value:function(e,t,a){t=t||1,a=a||6;var n,r,c=Math.ceil(e/a);c<=6?(n=1,r=c):t<=6?(n=1,r=6):t+4>=c?(n=c-9,r=c):(n=t-5,r=t+4);var s=(t-1)*a,i=Math.min(s+a-1,e-1),o=Object(b.a)(Array(r+1-n).keys()).map(function(e){return n+e});return{totalItems:e,currentPage:t,pageSize:a,totalPages:c,startPage:n,endPage:r,startIndex:s,endIndex:i,pages:o}}},{key:"render",value:function(){var e=this,t=this.state.pager;return!t.pages||t.pages.length<=1?null:r.a.createElement("nav",{className:"pagination-nav","aria-label":"Page navigation"},r.a.createElement("ul",{className:"pagination justify-content-center"},r.a.createElement("li",{className:"page-item ".concat(1===t.currentPage?"disabled":"")},r.a.createElement("a",{className:"page-link",onClick:function(){return e.setPage(1)}},"First")),r.a.createElement("li",{className:"page-item ".concat(1===t.currentPage?"disabled":"")},r.a.createElement("a",{className:"page-link",onClick:function(){return e.setPage(t.currentPage-1)}},"Previous")),t.pages.map(function(a,n){return r.a.createElement("li",{key:n,className:"page-item ".concat(t.currentPage===a?"active":"")},r.a.createElement("a",{className:"page-link",onClick:function(){return e.setPage(a)}},a))}),r.a.createElement("li",{className:"page-item ".concat(t.currentPage===t.totalPages?"disabled":"")},r.a.createElement("a",{className:"page-link",onClick:function(){return e.setPage(t.currentPage+1)}},"Next")),r.a.createElement("li",{className:"page-item ".concat(t.currentPage===t.totalPages?"disabled":"")},r.a.createElement("a",{className:"page-link",onClick:function(){return e.setPage(t.totalPages)}},"Last"))))}}]),t}(r.a.Component);K.defaultProps={initialPage:1,pageSize:6};var Z=K,G=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"spinner"},r.a.createElement("div",{className:"lds-ring"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}}]),t}(n.Component),$=[{picture:"https://img.freepik.com/free-vector/world-graphics-day-background_23-2147788754.jpg?size=338&ext=jpg",name:"World graphics day",price:"1020",sizes:["320","x","720"]},{picture:"https://images.ctfassets.net/1khq4uysbvty/1cN4JsEdKfizRvqQUbBbZc/4ac86d40c3f1bfd604406ba180fdcebe/graphic-design-hero.png",name:"Figma",sizes:["720","x","1040"],price:"300"},{picture:"https://img.freepik.com/free-vector/infographic-template-design_1284-601.jpg?size=338&ext=jpg",name:"Psycho test",sizes:["310","x","540"],price:"210"},{picture:"https://img.freepik.com/free-vector/world-graphics-day-background_23-2147788754.jpg?size=338&ext=jpg",name:"World graphics day",price:"1020",sizes:["320","x","720"]},{picture:"https://images.ctfassets.net/1khq4uysbvty/1cN4JsEdKfizRvqQUbBbZc/4ac86d40c3f1bfd604406ba180fdcebe/graphic-design-hero.png",name:"Figma",sizes:["720","x","1040"],price:"300"},{picture:"https://img.freepik.com/free-vector/infographic-template-design_1284-601.jpg?size=338&ext=jpg",name:"Psycho test",sizes:["310","x","540"],price:"210"},{picture:"https://img.freepik.com/free-vector/world-graphics-day-background_23-2147788754.jpg?size=338&ext=jpg",name:"World graphics day",price:"1020",sizes:["320","x","720"]},{picture:"https://images.ctfassets.net/1khq4uysbvty/1cN4JsEdKfizRvqQUbBbZc/4ac86d40c3f1bfd604406ba180fdcebe/graphic-design-hero.png",name:"Figma",sizes:["720","x","1040"],price:"110"},{picture:"https://img.freepik.com/free-vector/infographic-template-design_1284-601.jpg?size=338&ext=jpg",name:"Psycho test",sizes:["310","x","540"],price:"210"}],V=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={products:[],pageOfItems:[]},a.onChangePage=function(e){return a.setState({pageOfItems:e})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({products:$})}},{key:"render",value:function(){console.log(this.props,"sdfdsfsdf");var e=this.state.products;return e.length>0?r.a.createElement("div",{className:"products-wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},this.state.pageOfItems.map(function(e){return r.a.createElement(H,{product:e,key:e.id})}),r.a.createElement(Z,{items:e,onChangePage:this.onChangePage})))):r.a.createElement(G,null)}}]),t}(n.Component),X=Object(d.b)(function(e){return{products:e.products}})(V),ee=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onChange=function(e){"init"!==e.target.value&&a.props.sortPrices(e.target.value)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-3 ml-auto"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"sort"},"Sort by:"),r.a.createElement("select",{className:"form-control",id:"sort",onChange:this.onChange.bind(this)},r.a.createElement("option",{value:"init"},"- Select -"),r.a.createElement("option",{value:"asc"},"Lowest price"),r.a.createElement("option",{value:"desc"},"Highest price"))))}}]),t}(n.Component),te=Object(d.b)(function(e){return{sortBy:e.products}},{sortPrices:function(e){var t=[];return t[0]="price",t[1]=e,{type:"SET_SORT_TYPE",payload:t}}})(ee),ae=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"options container"},r.a.createElement("div",{className:"row"},r.a.createElement(te,null)))}}]),t}(n.Component),ne=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.sorting.sortingType;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ae,null),r.a.createElement(X,{sort:e}))}}]),t}(n.Component),re=Object(d.b)(function(e){return{sorting:e.sorting}})(ne),ce=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{store:j},r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"header"},r.a.createElement(I,null),r.a.createElement("div",{className:"container hero"},r.a.createElement("h1",null,"Welcome to our shop store!"),r.a.createElement("h2",null,"Check our products!"),r.a.createElement(O.Link,{to:"products",className:"btn-main",smooth:!0,offset:-10,duration:1200,onSetActive:this.handleSetActive},"Products",r.a.createElement("i",{className:"fas fa-chevron-down"})))),r.a.createElement("section",{name:"products",className:"products",id:"products"},r.a.createElement(re,null)),r.a.createElement(R,null),r.a.createElement(T,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},97:function(e,t,a){e.exports=a(235)}},[[97,1,2]]]);
//# sourceMappingURL=main.50dde424.chunk.js.map