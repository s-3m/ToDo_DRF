import React from "react";
import { Menu } from 'antd';
import {FundProjectionScreenOutlined, UsergroupAddOutlined, CopyOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import {Link} from 'react-router-dom'

const Header = () => {
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
          </Menu>
    );
  }

export default Header