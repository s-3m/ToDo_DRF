import React from "react";
import { Table } from 'antd'

// const UserItem = ({user}) => {
//     return (
//         <tr>
//             <td>{user.username}</td>
//             <td>{user.last_name}</td>
//             <td>{user.first_name}</td>
//             <td>{user.email}</td>
//         </tr>
//     )
// }

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