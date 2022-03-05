import logo from './logo.svg';
import './App.css';
import React from "react";
import UserList from "./components/users";
import axios from "axios";
// import Menu from "./components/menu";
import Footer from "./components/footer";
import Header from "./components/header";
import {Row, Col} from 'antd'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'users': []
    }
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/users/')
        .then(response => {
          const users = response.data
            this.setState(
        {
                'users': users
              }
            )
        }).catch(error => console.log(error))
  }

  render() {
    return (
        <div className={'wrapper'}>
            <div className={'container'}>
                <div className={'main_menu'}>
                    <Header />
                </div>
                <div className={'content'}>
                    <div className={'users_list'}>
                        <Row>
                            <Col md={{span: 20, offset: 2}}>
                                <UserList users={this.state.users}/>
                            </Col>
                        </Row>



                    </div>
                </div>
                <div className={'footer'}>
                    <Footer/>
                </div>
            </div>
        </div>
    )
  }
}

export default App;
