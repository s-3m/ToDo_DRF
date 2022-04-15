import './App.css';
import React from "react";
import UserList from "./components/users";
import ProjectList from "./components/Project";
import ToDotList from "./components/ToDo";
import ProjToDoList from "./components/ProjectToDo";
import ProjectForm from "./components/ProjectForm";
import ToDoForm from "./components/ToDoForm";
import axios from "axios";
import Footer from "./components/footer";
import Header from "./components/header";
import NotFound404 from "./components/notFound";
import LoginForm from "./components/Auth";
import {Row, Col,} from 'antd'
import {BrowserRouter, Navigate, Route, Routes, } from "react-router-dom";
import Cookies from "universal-cookie/es6";




class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        'users': [],
        'projects': [],
        'todo': [],
        'token': '',
        'graph': []

    }
  }

  set_token(token) {
      const cookies = new Cookies()
      cookies.set('token', token)
      this.setState({'token': token}, ()=>this.load_data())
  }

  is_authenticated() {
      return this.state.token !== ''
  }

  logout() {
      this.set_token('')
  }

  get_token_from_storages() {
      const cookies = new Cookies()
      const token = cookies.get('token')
      this.setState({'token': token}, ()=>this.load_data())
  }

  get_token(username, password) {
      axios.post('http://127.0.0.1:8000/api-token-auth/',
                {username: username, password: password}).then(response => {
                    this.set_token(response.data['token'])
          console.log(this.state.token)
      }).catch(error => alert('Неверный логин или пароль'))
  }

  get_headers() {
      let headers = {'Content-Type': 'application/json'}
      if (this.is_authenticated()) {
          headers['Authorization'] = 'Token' + ' ' + this.state.token
      }
      return headers
  }

  deleteProject(id) {
      const headers = this.get_headers()
      axios.delete(`http://127.0.0.1:8000/api/projects/${id}/`, {headers})
          .then(response => {this.setState({'projects': this.state.projects.filter((item)=>item.id !== id)})
                }).catch(error => console.log(error))
  }

  deleteToDo(id) {
      const headers = this.get_headers()
      axios.delete(`http://127.0.0.1:8000/api/todo/${id}/`, {headers})
          .then(response=>{this.setState({'todo': this.state.todo.filter((item)=>item.id !==id)})
          }).catch(error=>console.log(error))
  }

 createProject(name, link, users) {
      const headers = this.get_headers()
      const data = {name: name, link: link, users: [users,]}
      axios.post("http://127.0.0.1:8000/api/projects/", data, {headers})
          .then(response=>{
              let newProj = response.data
              const user = this.state.users.filter((item)=>item.uid === newProj.users[0])[0]
              newProj.users = [user]
              this.setState({projects: [...this.state.projects, newProj]})
          }).catch(error=>console.log(error))

 }

 createTodo(project, text, user) {
      const headers = this.get_headers()
      const data = {project: project, text: text, user: user}
     axios.post("http://127.0.0.1:8000/api/todo/", data, {headers})
         .then(response=> {
             let newTodo = response.data
             const user = this.state.users.filter((user)=>user.uid === newTodo.user)[0]
             const project = this.state.projects.filter((project)=>project.id === newTodo.project)[0]
             console.log(project)

             newTodo.user = user
             newTodo.project = project
             this.setState({todo: [...this.state.todo, newTodo]})
             console.log(this.state.todo)
         })
 }

  load_data (){
      const headers = this.get_headers()
      axios.get('http://127.0.0.1:8000/api/users/', {headers}).then(response => {
          const users = response.data.results
          this.setState({'users': users})
      }).catch(error => {
                        console.log(error)
                        this.setState({users: []})
                        })

      axios.get('http://127.0.0.1:8000/api/projects/', {headers}).then(response => {
          const projects = response.data.results
          this.setState({'projects': projects})
          console.log(this.state.projects)
      }).catch(error => {
                        console.log(error)
                        this.setState({projects: []})
                        })

      axios.get('http://127.0.0.1:8000/api/todo/', {headers}).then(response => {
          const todo = response.data.results
          this.setState({'todo': todo})
      }).catch(error => {
                        console.log(error)
                        this.setState({todo: []})
                        })

      //try graphQl get data
      const graphQlData =  `query allUsers {allUsers{username email}}`
      axios.post('http://127.0.0.1:8000/graphql/', {query: graphQlData}, {headers}).then(response => {
          const data = response.data.data.allUsers
          this.setState({'graph': data})
      }).catch(error => {
                        console.log(error)
                        })

  }

  componentDidMount() {
      this.get_token_from_storages()

  }

  render() {
    return (
        <div className={'wrapper'}>
            <div className={'container'}>
                <BrowserRouter>
                    <Header is_auth={this.is_authenticated()} logout={()=>this.logout()}/>
                    <div className={'content'}>
                        <div className={'data_table'}>
                            <Row>
                                <Col md={{span: 20, offset: 2}}>
                                    <Routes>

                                        <Route path="/users" element={<UserList users={this.state.users}/>} />
                                        <Route path="/users/:username" element={<ProjToDoList todo={this.state.todo}/>} />
                                        <Route path="/projects" element={<ProjectList projects={this.state.projects} deleteProjects={(id)=>this.deleteProject(id)}/>} />
                                        <Route path="/projects/:name" element={<ProjToDoList todo={this.state.todo}/>} />
                                        <Route path="/todo" element={<ToDotList todo={this.state.todo} delToDo={(id)=>this.deleteToDo(id)}/>} />
                                        <Route path="/login" element={<LoginForm get_token={(username, password) => this.get_token(username, password)}/>} />

                                        <Route path="/projects/create" element={<ProjectForm users={this.state.users} createProject={(name, link, users)=>this.createProject(name, link, users)}/>} />
                                        <Route path="/todo/create" element={<ToDoForm users={this.state.users} projects={this.state.projects} createTodo={(project, text, user)=>this.createTodo(project, text, user)}/>} />

                                        <Route path="/" element={<Navigate to="/users" />} />
                                        <Route path="/*" element={<NotFound404 />}/>


                                    </Routes>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </BrowserRouter>
                <div className={'footer'}>
                    <Footer/>
                </div>
            </div>
        </div>
    )
  }
}

export default App
