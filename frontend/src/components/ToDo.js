import React from "react";
import {Button, Table} from 'antd';
import {Link} from "react-router-dom";


const ToDotList = ({todo, delToDo}) => {
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
    {
        title: '',
        dataIndex: 'deleteButton',
        key: 'deleteButton',
        render: (text, record) => <Button type="primary" danger onClick={()=>delToDo(record.id)}>Delete</Button>
    }
]
    return (
        <div className="todoList">
            <Table
                dataSource={todo}
                columns={columns}
            />
            <Link to="/todo/create"><Button className="button_add" type="primary" style={{backgroundColor:'green', border:'None'}}>Add ToDo</Button></Link>
        </div>
    )
}

export default ToDotList