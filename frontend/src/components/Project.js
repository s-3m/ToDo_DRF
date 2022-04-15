import React from "react";
import {Space, Table, Button} from 'antd';
import {Link} from 'react-router-dom';


const ProjectList = ({projects, deleteProjects}) => {
    const columns = [
    {
        title: 'Project name',
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => <Link to={record.name}>{record.name}</Link>
    },
    {
        title: 'User in project',
        dataIndex: 'users',
        key: 'users',
        render: users =>
                <Space size="middle">
                    {users.map(user => <a>{user.username+","+"\n"}</a>)}
                </Space>

    },
    {
        title: 'Link to project',
        dataIndex: 'link',
        key: 'link',
    },
    {
        title: '',
        dataIndex: 'deleteButton',
        key: 'deleteButton',
        render: (text, record) => <Button type="primary" danger onClick={()=>deleteProjects(record.id)}>Delete</Button>
    }
]
    return (
        <div className="projectList">
            <Table
                dataSource={projects}
                columns={columns}
            />
            <Link to='/projects/create'><Button className="button_add" type="primary" style={{backgroundColor:'green', border:'None'}}>Add project</Button></Link>
        </div>
    )
}

export default ProjectList