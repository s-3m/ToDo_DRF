import React from "react";
import { Table } from 'antd'
import {Link} from 'react-router-dom'


const UserList = ({users}) => {
    const columns = [
    {
        title: 'Username',
        dataIndex: 'username',
        key: 'username',
        render: (text, record) => <Link to={record.username}>{record.username}</Link>
    },
    {
        title: 'Name',
        dataIndex: 'first_name',
        key: 'first_name',
        render: (text, record) => record.first_name + " " + record.last_name
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },

]
    return (
        <Table
            dataSource={users}
            columns={columns}
        />
    );
}

export default UserList