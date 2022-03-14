import React from "react";
import {Space, Table} from 'antd';


const ProjectList = ({projects}) => {
    const columns = [
    {
        title: 'Project name',
        dataIndex: 'name',
        key: 'name',
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