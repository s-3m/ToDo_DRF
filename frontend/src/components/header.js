import React from "react";
import { Menu, notification, } from 'antd';
import {FundProjectionScreenOutlined, UsergroupAddOutlined, CopyOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import {Link} from 'react-router-dom'

const OpenNotifications = (placement, itemName) => {
    notification.info ({
        message: 'Вы выбрали пункт '+itemName,
        placement,
    })
}

const Header = () => {

    return (
          <Menu className={'main_menu_list'} mode="horizontal">
            <Menu.Item key="mail" icon={<UsergroupAddOutlined />} onClick={()=>OpenNotifications('topLeft', 'users')}>
                <Link to='/users'> Users list </Link>
            </Menu.Item>
            <Menu.Item key="app" icon={<FundProjectionScreenOutlined />} onClick={()=>OpenNotifications('topLeft', 'projects')}>
                <Link to='/projects'>Projects list</Link>
            </Menu.Item>
            <Menu.Item key="alipay" icon={<CopyOutlined />} onClick={()=>OpenNotifications('topLeft', 'todo')}>
                <Link to='/todo'>ToDo list</Link>
            </Menu.Item>
          </Menu>
    );
  }

export default Header