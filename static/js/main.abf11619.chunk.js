(this["webpackJsonppomodoro-clock"]=this["webpackJsonppomodoro-clock"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(3),c=a.n(s),i=(a(14),a(4)),l=a(5),o=a(6),m=a(1),d=a(8),g=a(7),u=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).goingToBreak=!1,n.pomodoring=!1,n.state={breakLength:5,sessionLength:25,currentMinutes:0,currentSeconds:0},n.changeLength=n.changeLength.bind(Object(m.a)(n)),n.pomodoroStart=n.pomodoroStart.bind(Object(m.a)(n)),n}return Object(o.a)(a,[{key:"pomodoroStart",value:function(){var e=this;if(!this.pomodoring){this.pomodoring=!0,this.setState((function(e){return{currentMinutes:e.sessionLength,currentSeconds:0}}));setInterval((function(){e.setState((function(e){return{currentSeconds:e.currentSeconds-1}})),0===e.state.currentMinutes&&e.state.currentSeconds<0?e.goingToBreak?(e.goingToBreak=!1,e.setState({currentMinutes:e.state.breakLength-1,currentSeconds:59})):(e.goingToBreak=!0,e.setState({currentMinutes:e.state.sessionLength-1,currentSeconds:59})):e.state.currentSeconds<0&&e.setState((function(e){return{currentSeconds:59,currentMinutes:e.currentMinutes-1}}))}),1e3)}}},{key:"changeLength",value:function(e,t){1===this.state[t]&&-1===e||30===this.state[t]&&1===e||this.setState((function(a){return Object(i.a)({},t,a[t]+e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"grid-item m-small d-col",style:{gridArea:"title"}},r.a.createElement("h1",null,"POMODORO CLOCK"),r.a.createElement("hr",null)),r.a.createElement("div",{className:"grid-item-grid m-small",style:{gridArea:"break"}},r.a.createElement("div",{className:"grid-item align-end"},r.a.createElement("p",null,"Break length")),r.a.createElement("div",{className:"grid-item"},r.a.createElement("i",{className:"fas fa-chevron-circle-left clickable",onClick:function(){return e.changeLength(-1,"breakLength")}}),r.a.createElement("p",{className:"length-nr"},this.state.breakLength),r.a.createElement("i",{className:"fas fa-chevron-circle-right clickable",onClick:function(){return e.changeLength(1,"breakLength")}}))),r.a.createElement("div",{className:"grid-item-grid m-small",style:{gridArea:"session"}},r.a.createElement("div",{className:"grid-item align-end"},r.a.createElement("p",null,"Session length")),r.a.createElement("div",{className:"grid-item"},r.a.createElement("i",{className:"fas fa-chevron-circle-left clickable",onClick:function(){return e.changeLength(-1,"sessionLength")}}),r.a.createElement("p",{className:"length-nr"},this.state.sessionLength),r.a.createElement("i",{className:"fas fa-chevron-circle-right clickable",onClick:function(){return e.changeLength(1,"sessionLength")}}))),r.a.createElement("div",{className:"grid-item-grid m-small",style:{gridArea:"timer"}},r.a.createElement("div",{className:"grid-item align-end"},"Session"),r.a.createElement("div",{className:"grid-item"},r.a.createElement("p",{className:"timer"},this.pomodoring?this.state.currentMinutes+":":this.state.sessionLength+":",this.pomodoring?this.state.currentSeconds<10?"0"+this.state.currentSeconds:this.state.currentSeconds:"00"))),r.a.createElement("div",{className:"grid-item m-small",style:{gridArea:"controls"}},r.a.createElement("i",{className:"fas fa-play clickable",onClick:this.pomodoroStart}),r.a.createElement("i",{className:"fas fa-pause clickable"}),r.a.createElement("i",{className:"fas fa-redo-alt clickable"})),r.a.createElement("div",{className:"grid-item m-small",style:{gridArea:"cred"}},r.a.createElement("p",{className:"cred"},"by"," ",r.a.createElement("a",{href:"https://github.com/qvistsson",target:"_blank",rel:"noopener noreferrer"},"Qvistsson"))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement("i",{className:"fas fa-seedling decoleaf"}),r.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.abf11619.chunk.js.map