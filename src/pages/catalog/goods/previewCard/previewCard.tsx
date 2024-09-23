import React, { FC } from 'react';
import cn from './previewCard.module.css';
import { Link } from 'react-router-dom';
import Image1 from '../../../../assets/boots1.png';
import Image2 from '../../../../assets/boots2.png';
import { Button } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

type ItemCardProps = {
  article: number;
  title: string;
  price: number;
};

const PreviewCard: FC<ItemCardProps> = ({ article, title, price }) => {
  const onLikeClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.stopPropagation();
  };
  return (
    <div className={cn.container}>
      {' '}
      <Button onClick={onLikeClick} className={cn.like} icon={<HeartOutlined />} />
      <Link to={`/catalog/${article}`} className={cn.link}>
        <div className={cn.card}>
          <img className={cn.image} src={article % 2 === 0 ? Image1 : Image2} alt={'boots'} />

          <h3 className={cn.title}>{title}</h3>
          <p className={cn.price}>{price} ₽</p>
        </div>
      </Link>
    </div>
  );
};

export { PreviewCard };
