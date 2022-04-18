import React from "react";
import {Form, Input, InputNumber, Button, Select} from 'antd';

class ToDoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {project: props.projects[0].id, text: "", user: props.users[0].uid}
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    handleSubmit(event) {
        this.props.createTodo(this.state.project, this.state.text, this.state.user)
        event.preventDefault()
    }
    render() {
        let index = 0
        if(this.props.match) {
            let {id} = this.props.match.params
            index = this.props.projects.findIndex(e => e.id === parseInt(id))
        }
        return (
            // <Form name="todoForm" onFinish={()=>this.handleSubmit()}>
            //     <Form.Item name="form_todo_text" label="Your text">
            //         <Input.TextArea type="text" className="input_todo_text" name="text" value={this.state.text}
            //             onChange={(event)=>this.handleChange(event)}/>
            //     </Form.Item>
            //     <Form.Item name="form_todo_project_name" label="With project">
            //         <Select className="select select_todo_form" name="project" defaultValue={this.props.projects[index].id}
            //                 onChange={(event)=>this.handleChange(event)}>
            //                 {this.props.projects.map((project)=><option value={project.id}>{project.name}</option>)}
            //         </Select>
            //     </Form.Item>
            //     <Form.Item name="form_todo_user" label="Projects user">
            //         <Select className="select select_todo_form" name="user"
            //                 onChange={(event)=>this.handleChange(event)}>
            //                 {this.props.users.map((user)=><option value={user.uid}>{user.username}</option>)}
            //         </Select>
            //     </Form.Item>
            //     <Form.Item name="button_form_todo">
            //         <Button type="primary" htmlType="submit">
            //             Create
            //         </Button>
            //     </Form.Item>
            // </Form>


            <form onSubmit={(event)=>this.handleSubmit(event)}>
                <div className="form_todo_text form form_todo">
                    <label>Your text</label>
                    <input type="text" className="input_todo_text" name="text" value={this.state.text}
                        onChange={(event)=>this.handleChange(event)}/>
                </div>

                <div className="form_project_todo form form_todo">
                    <label>What project for</label>
                        <select className="select select_todo_form" name="project" defaultValue={this.props.projects[index].id}
                            onChange={(event)=>this.handleChange(event)}>
                            {this.props.projects.map((project)=><option value={project.id}>{project.name}</option>)}
                        </select>
                </div>

                <div className="form_user_todo form form_todo">
                    <label>Whats user create</label>
                        <select className="select select_todo_form" name="user"
                            onChange={(event)=>this.handleChange(event)}>
                            {this.props.users.map((user)=><option value={user.uid}>{user.username}</option>)}
                        </select>
                </div>

                <input type="submit" className="submit_todo" value="Save"/>
            </form>

        )
    }
}

export default ToDoForm