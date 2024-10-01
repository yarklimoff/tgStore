import React, { FC } from 'react';
import cn from './previewCard.module.css';
import { Link } from 'react-router-dom';

import { Button, Image } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

type ItemCardProps = {
  article: number;
  title: string;
  price: number;
  imgUrl: string;
};

const PreviewCard: FC<ItemCardProps> = ({ article, title, price, imgUrl }) => {
  const onLikeClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.stopPropagation();
  };
  console.log(imgUrl)
  return (
    <div className={cn.container}>
      {' '}
      <Button onClick={onLikeClick} className={cn.like} icon={<HeartOutlined />} />
      <Link to={`/catalog/${article}`} className={cn.link}>
        <div className={cn.card}>
          <Image className={cn.image} src={imgUrl} alt={'boots'} />
          <h3 className={cn.title}>{title}</h3>
          <p className={cn.price}>{price} ₽</p>
        </div>
      </Link>
    </div>
  );
};

export { PreviewCard };
