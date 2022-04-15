import React from "react";

class ProjectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: "", link:"", users: props.users[1].uid}
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit(event) {
        this.props.createProject(this.state.name, this.state.link, this.state.users)
        event.preventDefault()

    }

    render() {
        return (
            <form onSubmit={(event)=>this.handleSubmit(event)}>
                <div className="form_project_name form form_project">
                    <label>Name of project</label>
                    <input type="text" className="input_project_name" name="name" value={this.state.name}
                        onChange={(event)=>this.handleChange(event)}/>
                </div>
                <div className="form_project_link form form_project">
                    <label>Link on project</label>
                    <input type="text" className="input_project_link" name="link"
                        onChange={(event)=>this.handleChange(event)}/>
                </div>

                <div className="form_users_project form form_project">
                    <label>User(s) in project</label>
                    <select className="select select_users_form" name="users"
                        onChange={(event)=>this.handleChange(event)}>
                        {this.props.users.map((user)=><option value={user.uid}>{user.username}</option>)}
                    </select>
                </div>

                <input type="submit" className="submit_project" value="Save"/>
            </form>
        )
    }
}

export default ProjectForm