import React from 'react'
import { useParams } from 'react-router-dom'
import {Table} from 'antd';


const ProjToDoList = ({todo}) => {
    let {name} = useParams();
    let filter_items = todo.filter((item) => item.project.name===name)
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
        title: 'User name',
        dataIndex: 'user',
        key: 'user',
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
            dataSource={filter_items}
            columns={columns}
        />
    )
}

export default ProjToDoList
