import React from 'react';
import { PreviewCard } from './previewCard/previewCard';
import cn from './goods.module.css';
import { ProductType } from '../catalog';
type GoodsProps = {
  items: ProductType[];
};
const Goods = ({ items }: GoodsProps) => {
  if (items.length === 0) {
    return <div className={cn.empty}>{`Этот раздел пуст :(`}</div>;
  }
  return (
    <div className={cn.container}>
      {items.map((item, index) => (
        <PreviewCard
          key={index}
          article={item.article}
          title={item.title}
          price={item.price}
          imgUrl={item.imgUrl}
        />
      ))}
    </div>
  );
};

export { Goods };
