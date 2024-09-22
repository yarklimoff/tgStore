import React, { FC } from 'react';
import cn from './previewCard.module.css';
import { Link } from 'react-router-dom';
type ItemCardProps = {
  article: number;
  title: string;
  cost: number;
};

const PreviewCard: FC<ItemCardProps> = ({ article, title, cost }) => {
  return (
    <Link to={`/catalog/${article}`} className={cn.link}>
      <div className={cn.card}>
        <h3>{title}</h3>
        <div>{cost}</div>
      </div>
    </Link>
  );
};

export { PreviewCard };
