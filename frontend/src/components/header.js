import React from "react";
import { Menu, notification, } from 'antd';
import {Button} from "antd";
import {FundProjectionScreenOutlined, UsergroupAddOutlined, CopyOutlined, LogoutOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import {Link} from 'react-router-dom'


const OpenNotifications = (placement, itemName) => {
    notification.info ({
        message: 'Вы выбрали пункт '+itemName,
        placement,
    })
}

const Header = (is_auth) => {

    return (
          <Menu className={'main_menu_list'} mode="horizontal">
            <Menu.Item key="mail" icon={<UsergroupAddOutlined />}>
                <Link to='/users'> Users list </Link>
            </Menu.Item>
            <Menu.Item key="app" icon={<FundProjectionScreenOutlined />}>
                <Link to='/projects'>Projects list</Link>
            </Menu.Item>
            <Menu.Item key="alipay" icon={<CopyOutlined />}>
                <Link to='/todo'>ToDo list</Link>
            </Menu.Item>

            <Menu.Item key="logout">
                {is_auth.is_auth ? <Button type="primary" shape="round" icon={<LogoutOutlined />} onClick={is_auth.logout}>Logout</Button> : <Link to='/login'>Login</Link>}
            </Menu.Item>
          </Menu>
    );
  }

export default Header