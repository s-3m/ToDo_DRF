import React from "react";
import {useParams} from "react-router-dom";

class ToDoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {project: props.projects[0].id, text: "", user: props.users[1].uid}
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
        // const {id} = this.props.match.params
        console.log(this.props)
        return (
            <form onSubmit={(event)=>this.handleSubmit(event)}>
                <div className="form_todo_text form form_todo">
                    <label>Your text</label>
                    <input type="text" className="input_todo_text" name="text" value={this.state.text}
                        onChange={(event)=>this.handleChange(event)}/>
                </div>

                <div className="form_project_todo form form_todo">
                    <label>What project for</label>
                        <select className="select select_todo_form" name="project"
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