(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{394:function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return o}));i(395);var n=new(i(0).a),o={data:function(){return{timeToStart:1,timeToEnd:1,tickCb:null}},methods:{setRemainingTime:function(t){var e=t.timeToStart,i=t.timeToEnd;this.timeToStart=e,this.timeToEnd=i}},mounted:function(){this.tickCb=this.setRemainingTime.bind(this),n.$on("tick",this.tickCb)},beforeDestroy:function(){n.$off("tick",this.tickCb)}}},395:function(t,e,i){i(1)({target:"Function",proto:!0},{bind:i(224)})},410:function(t,e,i){},439:function(t,e,i){var n=i(1),o=i(6),r=i(223),a=[].slice,s=function(t){return function(e,i){var n=arguments.length>2,o=n?a.call(arguments,2):void 0;return t(n?function(){("function"==typeof e?e:Function(e)).apply(this,o)}:e,i)}};n({global:!0,bind:!0,forced:/MSIE .\./.test(r)},{setTimeout:s(o.setTimeout),setInterval:s(o.setInterval)})},440:function(t,e,i){"use strict";i(410)},461:function(t,e,i){"use strict";i.r(e);i(221),i(439);var n=i(394),o={data:function(){return{startDate:new Date("2021/05/28 12:00 GMT"),endDate:new Date("2021/05/29 12:00 GMT"),timer:null,timeToStart:1,timeToEnd:0}},methods:{tick:function(){this.timeToStart=new Date(this.startDate-new Date),this.timeToEnd=new Date(this.endDate-new Date),n.a.$emit("tick",{timeToStart:this.timeToStart,timeToEnd:this.timeToEnd})}},mounted:function(){this.timer=setInterval(this.tick,500)},beforeDestroy:function(){clearInterval(this.timer)}},r=(i(440),i(57)),a=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.timeToStart>0?e("div",{staticStyle:{"margin-bottom":"12rem"}},[e("center",{staticStyle:{"font-size":"2rem","font-weight":"700","text-transform":"uppercase"}},[e("timer",{attrs:{time:this.timeToStart}})],1)],1):this.timeToStart<0&&this.timeToEnd>0?e("join-button"):e("div",{staticStyle:{"margin-bottom":"12rem",display:"flex","justify-content":"center",overflow:"hidden"}},[e("center",[e("img",{attrs:{src:"finish.svg",alt:"Race is over",height:"150px",width:"auto"}})])],1),this._v(" "),e("tracks")],1)}),[],!1,null,null,null);e.default=a.exports}}]);