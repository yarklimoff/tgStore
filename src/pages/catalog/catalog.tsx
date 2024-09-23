import React, { useState } from 'react';
import { Categories } from './categories/categories';
import { Goods } from './goods/goods';
import cn from './catalog.module.css';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Image from '../../assets/banner.png';

const Catalog = () => {
  const [category, setCategory] = useState<string>('all');
  return (
    <div className={cn.container}>
      <Input placeholder="Найти товары" prefix={<SearchOutlined />} className={cn.search} />
      <img src={Image} className={cn.banner} alt="banner" />
      <Categories category={category} onChangeCategory={setCategory} />
      <Goods />
    </div>
  );
};

export { Catalog };
