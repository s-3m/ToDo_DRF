import './App.css';
import React from "react";
import UserList from "./components/users";
import ProjectList from "./components/Project";
import ToDotList from "./components/ToDo";
import ProjToDoList from "./components/ProjectToDo";
import axios from "axios";
import Footer from "./components/footer";
import Header from "./components/header";
import NotFound404 from "./components/notFound"
import {Row, Col,} from 'antd'
import {BrowserRouter, Navigate, Route, Routes, } from "react-router-dom";




class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
      Promise.all([
          axios.get('http://127.0.0.1:8000/api/users/'),
          axios.get('http://127.0.0.1:8000/api/projects/'),
          axios.get('http://127.0.0.1:8000/api/todo/'),
      ]).then(response => {
                            const users = response[0].data.results,
                            projects = response[1].data.results,
                            todo = response[2].data.results
          this.setState(
              {
                  'users': users,
                  'projects': projects,
                  'todo': todo,
              }
          )
      }).catch(error => console.log(error))
  }

  render() {
    return (
        <div className={'wrapper'}>
            <div className={'container'}>
                <BrowserRouter>
                    <div className={'main_menu'}>
                        <Header />
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

export default App;
