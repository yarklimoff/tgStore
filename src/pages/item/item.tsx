import React from 'react';
import cn from './item.module.css';
import { Header } from './header/header';
import { useParams } from 'react-router-dom';
const Item = () => {
  const article = useParams();
  console.log(article);
  return (
    <div className={cn.container}>
      <Header />
      <img src="../../assets/boots.png" />
      <div>Nike Dunk Low</div>
      <div>Цвет</div>
    </div>
  );
};

export { Item };
