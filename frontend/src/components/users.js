import React from "react";
import { Table } from 'antd'


const UserList = ({users}) => {
    const columns = [
    {
        title: 'Username',
        dataIndex: 'username',
        key: 'username',
    },
    {
        title: 'First Name',
        dataIndex: 'first_name',
        key: 'first_name',
    },
    {
        title: 'Last Name',
        dataIndex: 'last_name',
        key: 'last_name',
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