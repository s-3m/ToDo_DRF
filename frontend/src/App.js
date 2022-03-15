import './App.css';
import React from "react";
import UserList from "./components/users";
import ProjectList from "./components/Project";
import ToDotList from "./components/ToDo";
import axios from "axios";
// import Menu from "./components/menu";
import Footer from "./components/footer";
import Header from "./components/header";
import NotFound404 from "./components/notFound"
import {Row, Col} from 'antd'
import {BrowserRouter, Navigate, Route, Routes, SwitchProps} from "react-router-dom";



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/users/')
        .then(response => {
          const users = response.data.results
            this.setState(
        {
                'users': users,
              }
            )
        }).catch(error => console.log(error))

    axios.get('http://127.0.0.1:8000/api/projects/')
        .then(response => {
          const projects = response.data.results
            this.setState(
        {
                'projects': projects,
              }
            )
        }).catch(error => console.log(error))

    axios.get('http://127.0.0.1:8000/api/todo/')
        .then(response => {
          const todo = response.data.results
            this.setState(
        {
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
                                        <Route path="/projects" element={<ProjectList projects={this.state.projects}/>} />
                                        <Route path="/todo" element={<ToDotList todo={this.state.todo}/>} />
                                        <Route path="/" element={<Navigate to="/users" />} />
                                        <Route element={<NotFound404 />}/>

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
