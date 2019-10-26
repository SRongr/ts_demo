(this.webpackJsonpchess=this.webpackJsonpchess||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,s,r=n(0),c=n.n(r),i=n(8),h=n.n(i),o=(n(16),n(1)),l=n(2),u=n(4),d=n(3),m=n(5);!function(e){e[e.none=0]="none",e[e.red=1]="red",e[e.black=2]="black"}(a||(a={})),function(e){e[e.gaming=0]="gaming",e[e.redWin=1]="redWin",e[e.blackWin=2]="blackWin",e[e.equal=3]="equal"}(s||(s={}));var f=n(10),p=n(6),v=n.n(p),k=n(9),g=(n(18),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=null;return this.props.type===a.red&&(t=c.a.createElement("div",{className:"chess-red chess"})),this.props.type===a.black&&(t=c.a.createElement("div",{className:"chess-black chess"})),c.a.createElement("div",{className:"chess-box",onClick:function(){e.props.type===a.none&&e.props.handleClickItem&&e.props.handleClickItem()}},t)}}]),t}(c.a.Component)),b=(n(19),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.isGameOver,n=this.props.chesses.map((function(n,a){return c.a.createElement(g,{type:n,key:a,handleClickItem:function(){e.props.getItemClick&&!t&&e.props.getItemClick(a)}})}));return c.a.createElement("div",{className:"board ".concat(400===this.props.chesses.length&&"big"," ")},n)}}]),t}(c.a.Component));b.defaultProps={isGameOver:!1};n(20);var C=function(e){function t(){var e,n;Object(o.a)(this,t);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={chesses:[],gameState:s.gaming,nextChess:a.red,width:10,currentLenght:0},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.nextChess===a.red;return c.a.createElement("div",{className:"game"},c.a.createElement("div",{className:"button-group"},c.a.createElement("button",{className:"button",onClick:function(){return e.handleWidthChange(10)}},"10"),c.a.createElement("button",{className:"button",onClick:function(){return e.handleWidthChange(20)}},"20"),c.a.createElement("button",{className:"button",onClick:function(){return e.handleWidthChange()}},"reStart")),c.a.createElement("div",{className:"head"},t?"\u7ea2\u65b9\u4e0b\u68cb":"\u9ed1\u65b9\u4e0b\u68cb"),c.a.createElement(b,{chesses:this.state.chesses,isGameOver:this.state.gameState!==s.gaming,getItemClick:this.handleChessClick.bind(this)}))}},{key:"componentDidMount",value:function(){this.init()}},{key:"init",value:function(){console.log(this.state.width);var e=new Array(this.state.width*this.state.width);e.fill(a.none),this.setState({chesses:e,nextChess:a.red,gameState:s.gaming})}},{key:"handleWidthChange",value:function(){var e=Object(k.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t||this.state.width,e.next=3,this.setState({width:n});case 3:this.init(),console.log(this.state);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleChessClick",value:function(e){var t=this,n=Object(f.a)(this.state.chesses);n[e]=this.state.nextChess,this.setState((function(s){return{chesses:n,nextChess:s.nextChess===a.red?a.black:a.red,gameState:t.getGameState(n,e),currentLenght:t.state.currentLenght+1}}))}},{key:"getCheckHor",value:function(e,t){for(var n=1,a=this.state.width,s=1;s<5&&t%a!==9&&e[t]===e[t+s]&&(n+=1,(t+s)%a!==9);s++);for(var r=1;r<5&&t%a!==0&&e[t]===e[t-r]&&(n+=1,(t-r)%a!==0);r++);return 5===n}},{key:"getCheckVer",value:function(e,t){for(var n=1,a=this.state.width,s=1;s<5&&e[t]===e[t+s*a];s++)n+=1;for(var r=1;r<5&&e[t]===e[t-r*a];r++)n+=1;return 5===n}},{key:"getCheckSkim",value:function(e,t){var n=1,a=this.state.width;console.log(t);for(var s=1;s<5&&e[t]===e[t+s*a-s];s++)n+=1;for(var r=1;r<5&&e[t]===e[t-r*a+r];r++)n+=1;return 5===n}},{key:"getCheckRes",value:function(e,t){var n=1,a=this.state.width;console.log(t);for(var s=1;s<5&&e[t]===e[t+s*a+s];s++)n+=1;for(var r=1;r<5&&e[t]===e[t-r*a-r];r++)n+=1;return 5===n}},{key:"getGameState",value:function(e,t){var n=this.getCheckHor(e,t),r=this.getCheckVer(e,t),c=this.getCheckSkim(e,t),i=this.getCheckRes(e,t);return n||r||c||i?e[t]===a.red?(alert("\u7ea2\u65b9\u80dc\u5229"),s.redWin):(alert("\u9ed1\u65b9\u80dc\u5229"),s.blackWin):this.state.currentLenght===this.state.width*this.state.width-1?(alert("\u5e73\u5c40"),s.equal):s.gaming}}]),t}(c.a.Component),y=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={num:0,isGameOver:!1},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){a.none,a.red,a.black,a.none,a.red,a.black,a.none,a.red,a.black;return c.a.createElement("div",null,c.a.createElement(C,null))}}]),t}(c.a.Component);h.a.render(c.a.createElement(y,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.6b8d7c36.chunk.js.map