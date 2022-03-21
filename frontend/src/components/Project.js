import React from "react";
import {Space, Table} from 'antd';
import {Link} from 'react-router-dom';


const ProjectList = ({projects}) => {
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
        render: users => (
                <Space size="middle">
                    {users.map(user => <a>{user.username+","+"\n"}</a>)}
                </Space>
        )
    },
    {
        title: 'Link to project',
        dataIndex: 'link',
        key: 'link',
    },
]
    return (
        <Table
            dataSource={projects}
            columns={columns}
        />
    )
}

export default ProjectList