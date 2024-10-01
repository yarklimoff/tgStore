import React from 'react';
import { PreviewCard } from './previewCard/previewCard';
import './goods.css';
import { ProductType } from '../catalog';
type GoodsProps = {
  items: ProductType[];
};
const Goods = ({ items }: GoodsProps) => {
  return (
    <div className="goods-container">
      {items.map((item, index) => (
        <PreviewCard key={index} article={item.article} title={item.title} price={item.price} imgUrl={item.imgUrl}/>
      ))}
    </div>
  );
};

export { Goods };
