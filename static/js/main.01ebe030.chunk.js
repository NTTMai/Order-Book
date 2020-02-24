(this.webpackJsonporderbook=this.webpackJsonporderbook||[]).push([[0],{20:function(e,a,t){e.exports=t(33)},30:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){"use strict";t.r(a);var r=t(0),o=t.n(r),s=t(4),n=t.n(s),c=t(8),i=t(2),l=t(18),d=t(19),m=t(1),p=t(3),u={hasErrored:!1,isLoading:!1,hasFetched:!1,price:"",open:"",volume:"",asks:[],bids:[]},h=Object(i.c)({orderbook:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ORDERBOOK_HAS_ERRORED":return Object(p.a)({},e,{hasErrored:a.hasErrored});case"ORDERBOOK_IS_LOADING":return Object(p.a)({},e,{isLoading:a.isLoading});case"ORDERBOOK_HAS_FETCHED":return Object(p.a)({},e,{hasFetched:a.hasFetched});case"ORDERBOOK_WS_UPDATE":switch(a.data.type){case"snapshot":return console.log("------------------"),console.log("ORDERBOOK_WS_UPDATE: snapshot"),console.log("------------------"),console.log("asks:",Object(m.a)(a.data.response.asks.slice(0,10))),console.log("bids:",Object(m.a)(a.data.response.bids.slice(0,10))),Object(p.a)({},e,{asks:Object(m.a)(a.data.response.asks),bids:Object(m.a)(a.data.response.bids)});case"l2update":return a.data.response.changes.forEach((function(a,t){var r=Object(d.a)(a,3),o=r[0],s=r[1],n=r[2],c=Object(m.a)(e.asks);"buy"===o&&(c=Object(m.a)(e.bids));var i=c.findIndex((function(e){return"buy"===o?parseFloat(e[0])<=parseFloat(s):parseFloat(e[0])>=parseFloat(s)}));console.log("------------------"),console.log("ORDERBOOK_WS_UPDATE: l2update"),console.log("------------------"),console.log("saleType:",o),console.log("price:",s),console.log("size:",n),console.log(c[i]),c[i]&&parseFloat(c[i][0])===parseFloat(s)?parseFloat(n)>0?c[i][1]=n:c.splice(i,1):parseFloat(n)>0&&c.splice(i,0,[s,n]),e=Object(p.a)({},e,{asks:"buy"!==o?c:e.asks,bids:"buy"===o?c:e.bids})})),e;case"ticker":return console.log("------------------"),console.log("ORDERBOOK_WS_UPDATE: ticker"),console.log("------------------"),console.log("price:",a.data.response.price),console.log("open:",a.data.response.open_24h),console.log("volume:",a.data.response.volume_24h),Object(p.a)({},e,{price:parseFloat(a.data.response.price).toFixed(2),open:parseFloat(a.data.response.open_24h).toFixed(2),volume:parseFloat(a.data.response.volume_24h).toFixed(2)});default:return e}default:return e}}});t(30);var O=t(5),b=t(6),E=t(9),v=t(7),k=t(10),_=t(14);t(32);function g(e){return{type:"ORDERBOOK_IS_LOADING",isLoading:e}}var N=function(e){function a(e){var t;return Object(O.a)(this,a),(t=Object(E.a)(this,Object(v.a)(a).call(this,e))).midpointRef=o.a.createRef(),t.renderHeaderBottom=Object(_.debounce)(t.renderHeaderBottom,100,{leading:!0,maxWait:100}),t.renderOrdersContainer=Object(_.debounce)(t.renderOrdersContainer,100,{leading:!0,maxWait:100}),t.state={hasScrolled:!1},t}return Object(k.a)(a,e),Object(b.a)(a,[{key:"componentDidMount",value:function(){this.props.connectToSocket()}},{key:"componentWillReceiveProps",value:function(e){this.state.hasScrolled||this.props.asks.length>0&&this.props.bids.length>0&&this.midpointRef.current&&(this.midpointRef.current.scrollIntoView({block:"center"}),this.setState({hasScrolled:!0}))}},{key:"renderOrders",value:function(e){return o.a.createElement("div",null,e.map((function(e,a){return o.a.createElement("div",{className:"Orderbook__book__item",key:a},o.a.createElement("div",{className:"columns"},o.a.createElement("div",{className:"column"},parseFloat(e[1]).toFixed(4)),o.a.createElement("div",{className:"column"},o.a.createElement("span",{className:"price"},parseFloat(e[0]).toFixed(2))),o.a.createElement("div",{className:"column"},"\xa0")))})))}},{key:"renderOrdersMidpoint",value:function(){return o.a.createElement("div",{id:"midpointPrice",ref:this.midpointRef,className:"Orderbook__book__item"},o.a.createElement("div",{className:"columns"},o.a.createElement("div",{className:"column"},"Midpoint Price:"),o.a.createElement("div",{className:"column"},o.a.createElement("span",{className:"price"},this.props.price)," ",o.a.createElement("span",{className:"percentage"},this.calcPriceChange())),o.a.createElement("div",{className:"column"},"\xa0")))}},{key:"calcPriceChange",value:function(){var e=this.props.price/this.props.open-1,a=e>=0?"color-green":"color-red",t=e>=0?"+":"";return o.a.createElement("span",{className:a},t,(100*e).toFixed(2),"%")}},{key:"renderOrdersContainer",value:function(e){return this.props.hasErrored?o.a.createElement("div",{className:"error--"},"Sorry! There was an error loading the items"):!this.props.hasFetched||this.props.isLoading?o.a.createElement("div",{className:"loading--"},"Loading\u2026"):o.a.createElement("div",null,o.a.createElement("div",{className:"asks"},this.renderOrders(this.limitOrders(this.props.asks,50).reverse())),this.renderOrdersMidpoint(),o.a.createElement("div",{className:"bids"},this.renderOrders(this.limitOrders(this.props.bids,50))))}},{key:"limitOrders",value:function(e,a){return Object(m.a)(e.slice(0,a))}},{key:"renderHeaderBottom",value:function(){return this.props.hasErrored?o.a.createElement("div",{className:"error--"},"Sorry! There was an error loading the items"):this.props.hasFetched&&!this.props.isLoading&&this.props.price?o.a.createElement("div",null,o.a.createElement("span",{className:"bold"},this.props.price," USD")," ",o.a.createElement("span",{className:"help-text"},"Last trade price"),o.a.createElement("span",{className:"bold"},this.calcPriceChange())," ",o.a.createElement("span",{className:"help-text"},"24h price"),o.a.createElement("span",{className:"bold"},this.props.volume," ETH")," ",o.a.createElement("span",{className:"help-text"},"24h volume")):o.a.createElement("div",{className:"loading--"},"Loading\u2026")}},{key:"render",value:function(){return o.a.createElement("div",{className:"Orderbook"},o.a.createElement("header",{className:"Orderbook__header"},o.a.createElement("div",{className:"Orderbook__header__top"},o.a.createElement("span",{className:"heading"},"Ethereum (ETH)")),o.a.createElement("div",{className:"Orderbook__header__bottom"},this.renderHeaderBottom())),o.a.createElement("div",{className:"Orderbook__book"},o.a.createElement("div",{className:"Orderbook__book__header"},o.a.createElement("span",{className:"heading"},"Order Book")),o.a.createElement("div",{className:"Orderbook__book__subheader"},o.a.createElement("div",{className:"columns"},o.a.createElement("div",{className:"column"},o.a.createElement("span",{className:"heading"},"Market Size")),o.a.createElement("div",{className:"column"},o.a.createElement("span",{className:"heading"},"Price (USD)")),o.a.createElement("div",{className:"column"},o.a.createElement("span",{className:"heading"},"\xa0")))),o.a.createElement("div",{className:"Orderbook__book__content"},o.a.createElement("div",{className:"Orderbook__book__content-inner"},this.renderOrdersContainer()))))}}]),a}(r.Component),f=Object(c.b)((function(e){return{isLoading:e.orderbook.isLoading,hasErrored:e.orderbook.hasErrored,hasFetched:e.orderbook.hasFetched,price:e.orderbook.price,open:e.orderbook.open,volume:e.orderbook.volume,asks:e.orderbook.asks,bids:e.orderbook.bids}}),(function(e){return{connectToSocket:function(){return e((function(e){e(g(!0));var a=new WebSocket("wss://ws-feed.pro.coinbase.com");a.addEventListener("message",(function(a){e(g(!1)),e({type:"ORDERBOOK_HAS_FETCHED",hasFetched:!0});var t=JSON.parse(a.data);e(function(e){return{type:"ORDERBOOK_WS_UPDATE",data:e}}({type:t.type,response:t}))})),a.addEventListener("open",(function(){a.send(JSON.stringify({type:"subscribe",product_ids:["ETH-USD"],channels:["level2","ticker"]}))})),a.addEventListener("close",(function(){console.info("WebSocket disconnected."),e({type:"ORDERBOOK_HAS_ERRORED",hasErrored:!0})}))}))}}}))(N),R=function(e){function a(){return Object(O.a)(this,a),Object(E.a)(this,Object(v.a)(a).apply(this,arguments))}return Object(k.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(f,null))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y,j=Object(i.d)(h,y,Object(i.a)(l.a));n.a.render(o.a.createElement(c.a,{store:j},o.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.01ebe030.chunk.js.map