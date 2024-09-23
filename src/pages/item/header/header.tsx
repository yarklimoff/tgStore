import React from 'react';
import cn from './header.module.css';
import { Button } from 'antd';
import { HeartOutlined, LeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();
  const onClickBack = () => {
    navigate('/');
  };
  return (
    <div className={cn.container}>
      <Button icon={<LeftOutlined />} onClick={onClickBack} />
      <Button icon={<HeartOutlined />} />
    </div>
  );
};

export { Header };
