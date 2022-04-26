import React from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import {Navigate} from "react-router-dom";


class LoginForm extends React.Component {
    constructor (props) {
        super (props)
        this.state = {login:'', password:''}
    }
    handleChange(event) {
        this.setState(
            {[event.target.name]: event.target.value}
        );

    }
    handleSubmit(event) {
        this.props.get_token(this.state.login, this.state.password)

        event.preventDefault();
    }


    render() {
        if (this.props.is_auth()) {return <Navigate to='/'/>}
        return (
            <div className="login_form">
                <Form
                  name="basic"
                  labelCol={{ span: 5 }}
                  wrapperCol={{ span: 6}}
                  initialValues={{ remember: true }}
                  onFinish={()=>this.handleSubmit()}
                  onFinishFailed={null}
                  autoComplete="off"
                  style={{paddingTop: '40px'}}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input type="text" name="login" placeholder="login" value={this.state.login} onChange={(event)=>this.handleChange(event)} />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password type="password" name="password" placeholder="password"  value={this.state.password} onChange={(event)=>this.handleChange(event)}/>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 6, span: 10 }}>
                        <Button type="primary" htmlType="submit">
                          Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default LoginForm
