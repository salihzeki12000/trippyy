(this.webpackJsonptrippyy=this.webpackJsonptrippyy||[]).push([[0],{151:function(e,t,a){},158:function(e,t,a){e.exports=a(300)},164:function(e,t,a){},186:function(e,t,a){},198:function(e,t){},300:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(29),l=a.n(o),c=a(8),u=a(13),s=a(14),i=a(17),m=a(16),p=(a(163),a(26)),h=(a(164),a(15)),d=a(30),f=a.n(d),v=function(e,t,a){return{token:e,type:"AUTH_SUCCESS",username:t,userId:a}},g=function(e){return alert(e),{error:e,type:"AUTH_FAIL"}},E=function(){return localStorage.removeItem("username"),localStorage.removeItem("user"),localStorage.removeItem("expirationDate"),localStorage.removeItem("token"),localStorage.removeItem("userId"),{type:"AUTH_LOGOUT"}},b=function(e){return function(t){setTimeout((function(){t(E())}),1e3*e)}},y=function(e,t){return function(a){a({type:"AUTH_START"}),f.a.post("http://127.0.0.1:8000/api/authenticate/",{username:e,password:t}).then((function(t){var n=t.data.token,r=t.data.id,o=new Date((new Date).getTime()+36e5);localStorage.setItem("token",n),localStorage.setItem("expirationDate",o),localStorage.setItem("username",e),localStorage.setItem("userId",r),a(v(n,e,r)),a(b(3600))})).catch((function(e){a(g(e))}))}},S=function(){return function(e){var t=localStorage.getItem("token"),a=localStorage.getItem("username");if(void 0===t)e(E());else{var n=new Date(localStorage.getItem("expirationDate"));n<=new Date?e(E()):(e(v(t,a)),e(b((n.getTime()-(new Date).getTime())/1e3)))}}},D=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar fixed-top navbar-expand-lg",id:"nav1"},r.a.createElement(p.b,{to:"/",className:"navbar-brand",href:"#"},"trippyy"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse col-11",id:"navbar-nav"},r.a.createElement("ul",{className:"navbar-nav justify-content-center"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/",className:"nav-link"}," Home ")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/mytrips",className:"nav-link"}," My Trips",r.a.createElement("span",{className:"sr-only"},"(current)"))),this.props.isAuthenticated?r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/",className:"nav-link",onClick:this.props.logout},"Logout")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/mytrips",className:"nav-link"}," Account: ",this.props.username," "))):r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:{pathname:"/login",state:{from:this.props.from}},className:"nav-link"}," Login ")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/signup",className:"nav-link"}," Signup "))))))}}]),a}(n.Component),k=Object(h.b)((function(e){return{isAuthenticated:null!==e.token,username:e.username}}),(function(e){return{onTryAutoSignup:function(){return e(S())},logout:function(){return e(E())}}}))(D),O=(a(186),a(187),a(236),a(154)),N=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={startDate:null,endDate:null,focusedInput:null},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(O.DateRangePicker,{startDateId:"startDate",endDateId:"endDate",startDate:this.state.startDate,endDate:this.state.endDate,onDatesChange:function(t){var a=t.startDate,n=t.endDate;e.setState({startDate:a,endDate:n}),null!==n&&null!==a&&e.props.updateDates(a.format("YYYY-MM-DD"),n.format("YYYY-MM-DD"))},focusedInput:this.state.focusedInput,onFocusChange:function(t){e.setState({focusedInput:t})}})}}]),a}(n.Component),j=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={startDate:null,endDate:null},e.updateDates=function(t,a){e.setState({startDate:t,endDate:a})},e.newTrip=function(t){t.preventDefault(),e.props.newTrip(t.target.country.value,e.state.startDate,e.state.endDate),e.props.history.push("/mytrips")},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid align-items-center inputForm"},this.props.isAuthenticated?r.a.createElement("h1",null,"Hello, ",this.props.username):r.a.createElement("h1",null),r.a.createElement("div",{className:"jumbotron"},r.a.createElement("form",{onSubmit:this.newTrip},r.a.createElement("div",null,r.a.createElement("h3",null," Enter Country: "),r.a.createElement("input",{type:"text",name:"country",placeholder:"Enter country pls"})),r.a.createElement("div",{className:"inputForm"},r.a.createElement("h3",null," Enter dates: "),r.a.createElement(N,{updateDates:this.updateDates})),r.a.createElement("div",{className:"inputForm"},r.a.createElement("button",null," Submit ")))))}}]),a}(n.Component),T=Object(h.b)((function(e){return{isAuthenticated:null!==e.token,username:e.username}}),(function(e){return{newTrip:function(t,a,n){return e(function(e,t,a){var n={destination:e,tripName:"Trip to "+e+" from "+t+" to "+a,startDate:t,endDate:a};return f.a.post("http://127.0.0.1:8000/api/trips/",n,{headers:{Authorization:"Token "+localStorage.token}}).then((function(e){return console.log(e)})),localStorage.setItem("country",e),localStorage.setItem("startDate",t),localStorage.setItem("endDate",a),{type:"NEW_TRIP",country:e,startDate:t,endDate:a}}(t,a,n))}}}))(j),A=(a(151),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k,{from:this.props.location.pathname}),r.a.createElement(T,{history:this.props.history}))}}]),a}(n.Component)),I=Object(h.b)((function(e){return{isAuthenticated:null!==e.token}}),(function(e){return{onTryAutoSignup:function(){return e(S())}}}))(A),w=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleSubmit=function(t){t.preventDefault(),e.props.onAuth(t.target.username.value,t.target.password.value)},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup(),null!==localStorage.token&&void 0!==localStorage.token&&this.props.history.push("/")}},{key:"componentDidUpdate",value:function(e,t,a){if(this.props.isAuthenticated)if(void 0===this.props.location.state||null===this.props.location.state)this.props.history.push("/");else{var n=this.props.location.state.from;this.props.history.push(n),this.setState({from:null})}}},{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid align-items-center"},r.a.createElement(k,{from:this.props.location.pathname}),r.a.createElement("div",{className:"jumbotron startBox"},r.a.createElement("h1",null," Login"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"element"},r.a.createElement("input",{type:"text",name:"username",placeholder:"Enter Username"})),r.a.createElement("div",{className:"element"},r.a.createElement("input",{type:"text",name:"password",placeholder:"Enter Password"})),r.a.createElement("button",{className:"element",type:"submit",value:"Submit"}," Submit "))))}}]),a}(n.Component),_=Object(h.b)((function(e){return{isAuthenticated:null!==e.token,loading:e.loading,error:e.error}}),(function(e){return{onTryAutoSignup:function(){return e(S())},onAuth:function(t,a){return e(y(t,a))}}}))(w),x=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleSubmit=function(t){t.preventDefault(),e.props.onAuth(t.target.username.value,t.target.email.value,t.target.password1.value,t.target.password2.value),e.props.history.push("/")},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup(),null!==localStorage.token&&void 0!==localStorage.token&&(alert("Please logout to create a new account"),this.props.history.push("/"))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid align-items-center"},r.a.createElement(k,{from:this.props.location.pathname}),r.a.createElement("div",{className:"jumbotron startBox"},r.a.createElement("h1",null," SIGN UP"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"element"},r.a.createElement("input",{type:"text",name:"username",placeholder:"Enter Username"})),r.a.createElement("div",{className:"element"},r.a.createElement("input",{type:"text",name:"email",placeholder:"Enter Email"})),r.a.createElement("div",{className:"element"},r.a.createElement("input",{type:"text",name:"password1",placeholder:"Enter Password"})),r.a.createElement("div",{className:"element"},r.a.createElement("input",{type:"text",name:"password2",placeholder:"Enter Password again"})),r.a.createElement("button",{className:"element",type:"submit",value:"Submit"}," Signup "))))}}]),a}(n.Component),U=Object(h.b)((function(e){return{}}),(function(e){return{onAuth:function(t,a,n,r){return e(function(e,t,a,n){return function(r){r({type:"AUTH_START"}),f.a.post("http://127.0.0.1:8000/rest-auth/registration/",{username:e,email:t,password1:a,password2:n}).then((function(t){r(y(e,a))})).catch((function(e){r(g(e))}))}}(t,a,n,r))},onTryAutoSignup:function(){return e(S())}}}))(x),C=a(157),H=a(155),M=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={tripIDs:[],trips:[],local_loading:null},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({local_loading:!0}),this.props.onTryAutoSignup(),null!=localStorage.getItem("token")&&void 0!=localStorage.getItem("token")||this.props.history.push({pathname:"/login",state:{from:this.props.location.pathname}});try{f.a.get("http://127.0.0.1:8000/api/users/"+localStorage.userId,{headers:{Authorization:"Token "+localStorage.token}}).then((function(t){e.setState({tripIDs:t.data.trips})})).then((function(t){var a,n=Object(H.a)(e.state.tripIDs);try{for(n.s();!(a=n.n()).done;){var r=a.value;f.a.get("http://127.0.0.1:8000/api/trips/"+r,{headers:{Authorization:"Token "+localStorage.token}}).then((function(t){e.setState({trips:[].concat(Object(C.a)(e.state.trips),[t.data])})}))}}catch(o){n.e(o)}finally{n.f()}e.setState({local_loading:!1})}))}catch(t){alert(t),this.props.history.push("/")}}},{key:"render",value:function(){return this.state.local_loading?null:r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{from:this.props.location.pathname}),r.a.createElement("div",{className:"jumbotron startBox"},r.a.createElement("h1",null," My Trips "),this.state.trips.length>0?r.a.createElement("ul",null,this.state.trips.map((function(e,t){return r.a.createElement("li",{key:t}," ",e.tripName," ")}))):r.a.createElement("p",null," No trips available ")))}}]),a}(n.Component),F=Object(h.b)((function(e){return{isAuthenticated:null!==e.token,username:e.username}}),(function(e){return{onTryAutoSignup:function(){return e(S())}}}))(M),P=function(){return r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:I}),r.a.createElement(c.a,{exact:!0,path:"/login/",component:_}),r.a.createElement(c.a,{exact:!0,path:"/signup/",component:U}),r.a.createElement(c.a,{exact:!0,path:"/mytrips",component:F}))},L=a(81),Y=function(e,t){return Object(L.a)(Object(L.a)({},e),t)},R={token:null,error:null,loading:!1,username:null,userId:null,country:"Alaska",startDate:null,endDate:null},B=function(e,t){return console.log("staaaart"),Y(e,{error:null,loading:!0})},z=function(e,t){return Y(e,{token:t.token,error:null,loading:!1,username:t.username,userId:t.userId})},G=function(e,t){return Y(e,{error:t.error,loading:!1})},J=function(e,t){return Y(e,{token:null})},W=function(e,t){return Y(e,{country:t.country,startDate:t.startDate,endDate:t.endDate})},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_TRIP":return W(e,t);case"AUTH_START":return B(e);case"AUTH_SUCCESS":return z(e,t);case"AUTH_FAIL":return G(e,t);case"AUTH_LOGOUT":return J(e);default:return e}},V=a(47),q=a(156),K=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||V.c,Q=Object(V.d)(X,K(Object(V.a)(q.a))),Z=r.a.createElement(h.a,{store:Q},r.a.createElement(p.a,null,r.a.createElement(P,null)));l.a.render(Z,document.getElementById("root"))}},[[158,1,2]]]);
//# sourceMappingURL=main.787c2b5a.chunk.js.map