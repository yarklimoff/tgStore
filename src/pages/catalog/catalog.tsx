import React from 'react';
import { Categories } from './categories/categories';
import { Goods } from './goods/goods';
import cn from './catalog.module.css'
const Catalog = () => {
  return (
    <div className={cn.container}>
      <Categories />
      <Goods />
    </div>
  );
};

export { Catalog };
