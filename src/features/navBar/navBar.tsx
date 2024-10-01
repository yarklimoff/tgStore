import { HomeOutlined, HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import cn from './navBar.module.css';
import { useNavigate } from 'react-router-dom';
const NavBar = () => {
  const navigate = useNavigate();
  const onClickBack = () => {
    navigate('/');
  };
  return (
    <div className={cn.navBar}>
      <button className={cn.button} onClick={onClickBack}>
        <HomeOutlined style={{ fontSize: '24px' }} />
      </button>
      <button className={cn.button}>
        <HeartOutlined style={{ fontSize: '24px' }} />
      </button>
      <button className={cn.button}>
        <ShoppingCartOutlined style={{ fontSize: '24px' }} />
      </button>
    </div>
  );
};

export { NavBar };
