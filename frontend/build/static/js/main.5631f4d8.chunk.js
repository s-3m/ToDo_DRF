(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{147:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(36),s=a.n(o),c=(a(186),a(154),a(172)),l=a(151),i=a(49),u=a(50),m=a(53),d=a(51),p=a(54),h=(a(189),a(276)),f=a(29),E=function(e){var t=e.users,a=[{title:"Username",dataIndex:"username",key:"username",render:function(e,t){return r.a.createElement(f.b,{to:t.username},t.username)}},{title:"Name",dataIndex:"first_name",key:"first_name",render:function(e,t){return t.first_name+" "+t.last_name}},{title:"Email",dataIndex:"email",key:"email"}];return r.a.createElement(h.a,{dataSource:t,columns:a})},j=a(278),g=a(63),v=a(48),b=a(277),y=a(148),k=a(82),_=a(279),C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={word:""},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value)),console.log(this.state)}},{key:"handleSubmit",value:function(e,t){this.props.goSearch(this.state.word),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"search_project"},r.a.createElement(b.a,{name:"basic",layout:"inline",initialValues:{remember:!0},onFinish:function(){return e.handleSubmit()},onFinishFailed:null,autoComplete:"off",style:{paddingTop:"10px",paddingBottom:"10px"}},r.a.createElement(b.a.Item,{name:"SearchProj",rules:[{message:"Please input project name"}]},r.a.createElement(y.a,{type:"text",name:"word",placeholder:"Please input project name",value:this.state.word,onChange:function(t){return e.handleChange(t)}})),r.a.createElement(b.a.Item,{wrapperCol:{offset:10,span:10}},r.a.createElement(g.a,{type:"primary",htmlType:"submit",shape:"circle",icon:r.a.createElement(k.a,null)})),r.a.createElement(b.a.Item,{wrapperCol:{offset:-10,span:0}},""!==this.state.word&&r.a.createElement(g.a,{type:"primary",danger:!0,shape:"circle",icon:r.a.createElement(_.a,null),style:{marginLeft:"2px"},onClick:function(){e.props.canceled(),e.setState({word:""})}}))))}}]),t}(r.a.Component),S=function(e){var t=e.projects,a=e.deleteProjects,n=e.search,o=e.canceled,s=[{title:"Project name",dataIndex:"name",key:"name",render:function(e,t){return r.a.createElement(f.b,{to:t.name},t.name)}},{title:"User in project",dataIndex:"users",key:"users",render:function(e){return r.a.createElement(j.b,{size:"middle"},e.map(function(e){return r.a.createElement("a",null,e.username+",\n")}))}},{title:"Link to project",dataIndex:"link",key:"link"},{title:"",dataIndex:"deleteButton",key:"deleteButton",render:function(e,t){return r.a.createElement(g.a,{type:"primary",danger:!0,onClick:function(){return a(t.id)}},"Delete")}},{title:"",dataIndex:"createToDoButton",key:"createToDoButton",render:function(e,t){return r.a.createElement(f.b,{to:"/todo/create/".concat(t.id)},r.a.createElement(g.a,{type:"primary",style:{backgroundColor:"green"}},"Add ToDo"))}}];return r.a.createElement("div",null,r.a.createElement(C,{goSearch:function(e){return n(e)},canceled:o}),r.a.createElement("div",{className:"projectList"},r.a.createElement(h.a,{dataSource:t,columns:s}),r.a.createElement(f.b,{to:"/projects/create"},r.a.createElement(g.a,{className:"button_add",type:"primary",style:{backgroundColor:"green",border:"None"}},"Add project"))))},x=function(e){var t=e.todo,a=e.delToDo,n=[{title:"Project name",dataIndex:"project",key:"project",render:function(e){return r.a.createElement(r.a.Fragment,null,e.name)}},{title:"Text",dataIndex:"text",key:"text"},{title:"Username",dataIndex:"user",key:"user",render:function(e){return e.username}},{title:"Created at",dataIndex:"create",key:"create"},{title:"Active",dataIndex:"is_active",key:"is_active",render:function(e){return e?"active":"closed"}},{title:"",dataIndex:"deleteButton",key:"deleteButton",render:function(e,t){return r.a.createElement(g.a,{type:"primary",danger:!0,onClick:function(){return a(t.id)}},"Delete")}}];return r.a.createElement("div",{className:"todoList"},r.a.createElement(h.a,{dataSource:t,columns:n}),r.a.createElement(f.b,{to:"/todo/create"},r.a.createElement(g.a,{className:"button_add",type:"primary",style:{backgroundColor:"green",border:"None"}},"Add ToDo")))},I=a(10),O=function(e){var t=e.todo,a=Object(I.h)().name,n=Object(I.h)().username,o=t.filter(function(e){return e.project.name===a}),s=t.filter(function(e){return e.user.username===n}),c=[{title:"Project name",dataIndex:"project",key:"project",render:function(e){return r.a.createElement(r.a.Fragment,null,e.name)}},{title:"Text",dataIndex:"text",key:"text"},{title:"User name",dataIndex:"user",key:"user",render:function(e){return r.a.createElement(r.a.Fragment,null,e.username)}},{title:"Created at",dataIndex:"create",key:"create"},{title:"Active",dataIndex:"is_active",key:"is_active",render:function(e){return e?"active":"closed"}}];return a?r.a.createElement(h.a,{dataSource:o,columns:c}):r.a.createElement(h.a,{dataSource:s,columns:c})},w=a(109),N=(a(265),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={name:"",link:"",users:"",flag:!1},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e,t){t?this.setState({users:e}):this.setState(Object(v.a)({},e.target.name,e.target.value)),console.log(this.state)}},{key:"handleSubmit",value:function(e){this.props.createProject(this.state.name,this.state.link,this.state.users),this.setState({flag:!0}),e.preventDefault()}},{key:"render",value:function(){var e=this;return this.state.flag?r.a.createElement(I.a,{to:"/projects"}):r.a.createElement("div",{className:"project_form"},r.a.createElement(b.a,{name:"project_form_form",onFinish:function(){return e.handleSubmit()},wrapperCol:{span:8}},r.a.createElement(b.a.Item,{label:"Name of project",name:"project_name",rules:[{required:!0,message:"Input name of project"}]},r.a.createElement(y.a,{type:"text",name:"name",wrapperCol:{offset:8},onChange:function(t){return e.handleChange(t)}})),r.a.createElement(b.a.Item,{label:"Link of project",name:"project_link",rules:[{required:!0,message:"Input link on project"}]},r.a.createElement(y.a,{type:"text",name:"link",onChange:function(t){return e.handleChange(t)}})),r.a.createElement(b.a.Item,{label:"User in project",name:"users",rules:[{required:!0,message:"Select project`s user"}]},r.a.createElement(w.a,{onChange:function(t,a){return e.handleChange(t,"users")}},' className="select select_users_form" name="users"',this.props.users.map(function(e){return r.a.createElement("option",{value:e.uid},e.username)}))),r.a.createElement(b.a.Item,null,r.a.createElement(g.a,{type:"primary",htmlType:"submit"},"Add project"))))}}]),t}(r.a.Component)),T=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={project:e.projects[0].id,text:"",user:e.users[0].uid},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){this.props.createTodo(this.state.project,this.state.text,this.state.user),e.preventDefault()}},{key:"render",value:function(){var e=this,t=0;if(this.props.match){var a=this.props.match.params.id;t=this.props.projects.findIndex(function(e){return e.id===parseInt(a)})}return r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("div",{className:"form_todo_text form form_todo"},r.a.createElement("label",null,"Your text"),r.a.createElement("input",{type:"text",className:"input_todo_text",name:"text",value:this.state.text,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("div",{className:"form_project_todo form form_todo"},r.a.createElement("label",null,"What project for"),r.a.createElement("select",{className:"select select_todo_form",name:"project",defaultValue:this.props.projects[t].id,onChange:function(t){return e.handleChange(t)}},this.props.projects.map(function(e){return r.a.createElement("option",{value:e.id},e.name)}))),r.a.createElement("div",{className:"form_user_todo form form_todo"},r.a.createElement("label",null,"Whats user create"),r.a.createElement("select",{className:"select select_todo_form",name:"user",onChange:function(t){return e.handleChange(t)}},this.props.users.map(function(e){return r.a.createElement("option",{value:e.uid},e.username)}))),r.a.createElement("input",{type:"submit",className:"submit_todo",value:"Save"}))}}]),t}(r.a.Component),P=a(64),D=a.n(P),F=a(280);var U=function(){return r.a.createElement("div",{className:"footer_text"},r.a.createElement(F.a,{style:{fontSize:"45px",color:"#000000"}}))},B=(a(149),a(135)),L=a(281),q=a(282),A=a(283),z=a(284),V=a(285),J=function(e){return r.a.createElement("div",{className:"main_menu"},r.a.createElement("div",{className:"main_menu_left"},r.a.createElement(B.a,{className:"main_menu_list",mode:"horizontal"},r.a.createElement(B.a.Item,{key:"mail",icon:r.a.createElement(L.a,null)},r.a.createElement(f.b,{to:"/users"}," Users list ")),r.a.createElement(B.a.Item,{key:"app",icon:r.a.createElement(q.a,null)},r.a.createElement(f.b,{to:"/projects"},"Projects list")),r.a.createElement(B.a.Item,{key:"alipay",icon:r.a.createElement(A.a,null)},r.a.createElement(f.b,{to:"/todo"},"ToDo list")))),r.a.createElement("div",{className:"main_menu_right"},e.is_auth?r.a.createElement(g.a,{type:"primary",shape:"round",icon:r.a.createElement(z.a,null),onClick:e.logout},"Logout"):r.a.createElement(g.a,{type:"primary",shape:"round",icon:r.a.createElement(V.a,null)},r.a.createElement(f.b,{to:"/login",style:{color:"white"}},"Login"))))},W=function(){var e=Object(I.f)();return r.a.createElement("div",{className:"not_found"},r.a.createElement("h1",null,"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b '",e.pathname,"' \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"))},M=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={login:"",password:""},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){this.props.get_token(this.state.login,this.state.password),e.preventDefault()}},{key:"render",value:function(){var e=this;return this.props.is_auth()?r.a.createElement(I.a,{to:"/"}):r.a.createElement("div",{className:"login_form"},r.a.createElement(b.a,{name:"basic",labelCol:{span:5},wrapperCol:{span:6},initialValues:{remember:!0},onFinish:function(){return e.handleSubmit()},onFinishFailed:null,autoComplete:"off",style:{paddingTop:"40px"}},r.a.createElement(b.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}]},r.a.createElement(y.a,{type:"text",name:"login",placeholder:"login",value:this.state.login,onChange:function(t){return e.handleChange(t)}})),r.a.createElement(b.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},r.a.createElement(y.a.Password,{type:"password",name:"password",placeholder:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}})),r.a.createElement(b.a.Item,{wrapperCol:{offset:6,span:10}},r.a.createElement(g.a,{type:"primary",htmlType:"submit"},"Submit"))))}}]),t}(r.a.Component),Y=a(273),G=a(274),H=a(152),K=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={users:[],projects:[],todo:[],token:"",graph:[],originProject:""},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"set_token",value:function(e){var t=this;(new H.a).set("token",e),this.setState({token:e},function(){return t.load_data()})}},{key:"is_authenticated",value:function(){return""!==this.state.token}},{key:"logout",value:function(){this.set_token("")}},{key:"get_token_from_storages",value:function(){var e=this,t=(new H.a).get("token");this.setState({token:t},function(){return e.load_data()})}},{key:"get_token",value:function(e,t){var a=this;D.a.post("http://127.0.0.1:8000/api-token-auth/",{username:e,password:t}).then(function(e){a.set_token(e.data.token),console.log(a.state.token)}).catch(function(e){return alert("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c")})}},{key:"get_headers",value:function(){var e={"Content-Type":"application/json"};return this.is_authenticated()&&(e.Authorization="Token "+this.state.token),e}},{key:"deleteProject",value:function(e){var t=this,a=this.get_headers();D.a.delete("http://127.0.0.1:8000/api/projects/".concat(e,"/"),{headers:a}).then(function(a){t.setState({projects:t.state.projects.filter(function(t){return t.id!==e})})}).catch(function(e){return console.log(e)})}},{key:"deleteToDo",value:function(e){var t=this,a=this.get_headers();D.a.delete("http://127.0.0.1:8000/api/todo/".concat(e,"/"),{headers:a}).then(function(a){t.setState({todo:t.state.todo.filter(function(t){return t.id!==e})})}).catch(function(e){return console.log(e)})}},{key:"createProject",value:function(e,t,a){var n=this,r=this.get_headers(),o={name:e,link:t,users:[a]};D.a.post("http://127.0.0.1:8000/api/projects/",o,{headers:r}).then(function(e){var t=e.data,a=n.state.users.filter(function(e){return e.uid===t.users[0]})[0];t.users=[a],n.setState({projects:[].concat(Object(l.a)(n.state.projects),[t])})}).catch(function(e){return console.log(e)})}},{key:"createTodo",value:function(e,t,a){var n=this,r=this.get_headers(),o={project:e,text:t,user:a};D.a.post("http://127.0.0.1:8000/api/todo/",o,{headers:r}).then(function(e){var t=e.data,a=n.state.users.filter(function(e){return e.uid===t.user})[0],r=n.state.projects.filter(function(e){return e.id===t.project})[0];t.user=a,t.project=r,n.setState({todo:[].concat(Object(l.a)(n.state.todo),[t])})})}},{key:"goSearch",value:function(e){this.setState({originProject:this.state.projects});var t=this.state.projects.filter(function(t){if(t.name.includes(e))return t});this.setState({projects:t})}},{key:"canceled_search",value:function(){""!==this.state.originProject&&this.setState({projects:this.state.originProject})}},{key:"load_data",value:function(){var e=this,t=this.get_headers();D.a.get("http://127.0.0.1:8000/api/users/",{headers:t}).then(function(t){var a=t.data.results;e.setState({users:a})}).catch(function(t){console.log(t),e.setState({users:[]})}),D.a.get("http://127.0.0.1:8000/api/projects/",{headers:t}).then(function(t){var a=t.data.results;e.setState({projects:a}),console.log(e.state.projects)}).catch(function(t){console.log(t),e.setState({projects:[]})}),D.a.get("http://127.0.0.1:8000/api/todo/",{headers:t}).then(function(t){var a=t.data.results;e.setState({todo:a})}).catch(function(t){console.log(t),e.setState({todo:[]})});D.a.post("http://127.0.0.1:8000/graphql/",{query:"query allUsers {allUsers{username email}}"},{headers:t}).then(function(t){var a=t.data.data.allUsers;e.setState({graph:a})}).catch(function(e){console.log(e)})}},{key:"componentDidMount",value:function(){this.get_token_from_storages()}},{key:"render",value:function(){var e=this,t=function(t){var a=Object(I.h)();return r.a.createElement(T,Object.assign({users:e.state.users,projects:e.state.projects,createTodo:function(t,a,n){return e.createTodo(t,a,n)}},Object(c.a)({},t,{match:{params:a}})))};return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement(f.a,null,r.a.createElement(J,{is_auth:this.is_authenticated(),logout:function(){return e.logout()}}),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"data_table"},r.a.createElement(Y.a,null,r.a.createElement(G.a,{md:{span:20,offset:2}},r.a.createElement(I.d,null,r.a.createElement(I.b,{path:"/users",element:r.a.createElement(E,{users:this.state.users})}),r.a.createElement(I.b,{path:"/users/:username",element:r.a.createElement(O,{todo:this.state.todo})}),r.a.createElement(I.b,{path:"/projects",element:r.a.createElement(S,{projects:this.state.projects,deleteProjects:function(t){return e.deleteProject(t)},search:function(t){return e.goSearch(t)},canceled:function(){return e.canceled_search()}})}),r.a.createElement(I.b,{path:"/projects/:name",element:r.a.createElement(O,{todo:this.state.todo})}),r.a.createElement(I.b,{path:"/todo",element:r.a.createElement(x,{todo:this.state.todo,delToDo:function(t){return e.deleteToDo(t)}})}),r.a.createElement(I.b,{path:"/login",element:r.a.createElement(M,{get_token:function(t,a){return e.get_token(t,a)},is_auth:function(){return e.is_authenticated()}})}),r.a.createElement(I.b,{path:"/projects/create",element:r.a.createElement(N,{users:this.state.users,createProject:function(t,a,n){return e.createProject(t,a,n)}})}),r.a.createElement(I.b,{path:"/todo/create",element:r.a.createElement(T,{users:this.state.users,projects:this.state.projects,createTodo:function(t,a,n){return e.createTodo(t,a,n)}})}),r.a.createElement(I.b,{path:"/todo/create/:id",element:r.a.createElement(t,null)}),r.a.createElement(I.b,{path:"/",element:r.a.createElement(I.a,{to:"/users"})}),r.a.createElement(I.b,{path:"/*",element:r.a.createElement(W,null)}))))))),r.a.createElement("div",{className:"footer"},r.a.createElement(U,null))))}}]),t}(r.a.Component),Q=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,275)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),o(e),s(e)})};s.a.render(r.a.createElement(K,null),document.getElementById("root")),Q()},181:function(e,t,a){e.exports=a(147)},186:function(e,t,a){},189:function(e,t,a){}},[[181,3,2]]]);
//# sourceMappingURL=main.5631f4d8.chunk.js.map