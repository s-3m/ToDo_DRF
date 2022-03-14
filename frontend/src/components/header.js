import React from "react";
import { Menu } from 'antd';
import {FundProjectionScreenOutlined, UsergroupAddOutlined, CopyOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';

const Header = () => {
    return (
      <Menu className={'main_menu_list'} mode="horizontal">
        <Menu.Item key="mail" icon={<UsergroupAddOutlined />}>
          Users list
        </Menu.Item>
        <Menu.Item key="app" icon={<FundProjectionScreenOutlined />}>
          Projects list
        </Menu.Item>
        <Menu.Item key="alipay" icon={<CopyOutlined />}>
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            ToDo list
          </a>
        </Menu.Item>
      </Menu>
    );
  }

export default Header