import React from 'react';
import cn from './header.module.css';
import { Button } from 'antd';
import { HeartOutlined, LeftOutlined } from '@ant-design/icons';
const Header = () => {
  return (
    <div className={cn.container}>
      <Button variant="link" icon={<LeftOutlined />} />
      <Button variant="filled" icon={<HeartOutlined />} />
    </div>
  );
};

export { Header };
