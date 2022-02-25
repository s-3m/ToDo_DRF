import logo from './logo.svg';
import './App.css';
import React from "react";
import UserList from "./components/users";
import axios from "axios";
import Menu from "./components/menu";
import Footer from "./components/footer";

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
                    <Menu/>
                </div>
                <div className={'content'}>
                    <div className={'users_list'}>
                        <UserList users={this.state.users}/>
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
