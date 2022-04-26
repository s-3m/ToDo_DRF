import React from "react";
import {Button, Form, Input, Select} from "antd";
import * as events from "events";
import {Navigate} from "react-router-dom";

class ProjectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                        name: "",
                        link:"",
                        users: '',
                        flag: false
                    }
    }

    handleChange(event, name) {
        if (name) {
            this.setState({
            'users': event,
        })
        } else {
            this.setState({
                [event.target.name]: event.target.value,
        })}
        console.log(this.state)
    }

    handleSubmit(event) {
        this.props.createProject(this.state.name, this.state.link, this.state.users)
        this.setState({flag: true})
        event.preventDefault()

    }

    render() {
        if(this.state.flag) {return <Navigate to='/projects'/>;}
        return(
            <div className="project_form">
                <Form
                    name="project_form_form"
                    onFinish={()=>this.handleSubmit()}
                    wrapperCol={{span: 8}}
                >
                    <Form.Item label="Name of project" name="project_name" rules={[{ required: true, message: 'Input name of project' }]}>
                        <Input type="text" name="name" wrapperCol={{offset: 8}} onChange={(event)=>this.handleChange(event)}/>
                    </Form.Item>
                    <Form.Item label="Link of project" name="project_link" rules={[{ required: true, message: 'Input link on project' }]}>
                        <Input type="text" name="link" onChange={(event)=>this.handleChange(event)}/>
                    </Form.Item>
                    <Form.Item label="User in project" name="users" rules={[{ required: true, message: 'Select project`s user' }]}>
                        <Select onChange={(event, name)=>this.handleChange(event, name='users')}> className="select select_users_form" name="users"
                            {this.props.users.map((user)=><option value={user.uid}>{user.username}</option>)}
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" >Add project</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default ProjectForm