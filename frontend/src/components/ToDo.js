import React from "react";
import { Table } from 'antd';


const ToDotList = ({todo}) => {
    const columns = [
    {
        title: 'Project name',
        dataIndex: 'project',
        key: 'project',
        render: project => (
            <>
                {project.name}
            </>
        )
    },
    {
        title: 'Text',
        dataIndex: 'text',
        key: 'text',
    },
    {
        title: 'Username',
        dataIndex: 'user',
        key: 'user',
        render: user => user.username
    },
    {
        title: 'Created at',
        dataIndex: 'create',
        key: 'create',
    },
     {
        title: 'Active',
        dataIndex: 'is_active',
        key: 'is_active',
        render: is_active => {
            if (is_active) {
                return('active')}
            else {
                return ('closed')
            }
        }
    },
]
    return (
        <Table
            dataSource={todo}
            columns={columns}
        />
    )
}

export default ToDotList