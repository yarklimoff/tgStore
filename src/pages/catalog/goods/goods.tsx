import React from 'react';
import { PreviewCard } from './previewCard/previewCard';
import './goods.css';

const mockItems = [
  {
    title: 'Ambush Air',
    price: 6500,
    article: 1,
  },
  {
    title: 'Ambush Air',
    price: 6500,
    article: 2,
  },
  {
    title: 'Ambush Air',
    price: 6500,
    article: 3,
  },
  {
    title: 'Ambush Air',
    price: 6500,
    article: 4,
  },
  {
    title: 'Ambush Air',
    price: 6500,
    article: 5,
  },
  {
    title: 'Ambush Air',
    price: 6500,
    article: 6,
  },
  {
    title: 'Ambush Air',
    price: 6500,
    article: 7,
  },
  {
    title: 'Ambush Air',
    price: 6500,
    article: 8,
  },
];

const Goods = () => {
  return (
    <div className="goods-container">
      {mockItems.map((item, index) => (
        <PreviewCard key={index} article={item.article} title={item.title} price={item.price} />
      ))}
    </div>
  );
};

export { Goods };
