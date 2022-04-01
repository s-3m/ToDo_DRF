import './App.css';
import React from "react";
import UserList from "./components/users";
import ProjectList from "./components/Project";
import ToDotList from "./components/ToDo";
import ProjToDoList from "./components/ProjectToDo";
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
        'token': ''

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
      this.setState({'token': ''})
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
          headers['Authorization'] = 'Token' + this.state.token
      }
      return headers
  }

  load_data (){
      const headers = this.get_headers()
      Promise.all([
          axios.get('http://127.0.0.1:8000/api/users/', {headers}),
          axios.get('http://127.0.0.1:8000/api/projects/', {headers}),
          axios.get('http://127.0.0.1:8000/api/todo/', {headers}),
      ]).then(response => {
                            const users = response[0].data.results,
                            projects = response[1].data.results,
                            todo = response[2].data.results
                            this.setState(
                              {
                                  'users': users,
                                  'projects': projects,
                                  'todo': todo,
                                  'token': ''
                              }
                            )
      }).catch(error => {
          console.log(error)
          this.setState({'users': []})
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
                    <div className={'main_menu'}>
                        <Header is_auth={this.is_authenticated()} logout={()=>this.logout()}/>
                    </div>
                    <div className={'content'}>
                        <div className={'data_table'}>
                            <Row>
                                <Col md={{span: 20, offset: 2}}>
                                    <Routes>

                                        <Route path="/users" element={<UserList users={this.state.users}/>} />
                                        <Route path="/users/:username" element={<ProjToDoList todo={this.state.todo}/>} />
                                        <Route path="/projects" element={<ProjectList projects={this.state.projects}/>} />
                                        <Route path="/projects/:name" element={<ProjToDoList todo={this.state.todo}/>} />
                                        <Route path="/todo" element={<ToDotList todo={this.state.todo}/>} />
                                        <Route path="/login" element={<LoginForm get_token={(username, password) => this.get_token(username, password)}/>} />
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
