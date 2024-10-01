import React, { useEffect, useState } from 'react';
import { Categories } from './categories/categories';
import { Goods } from './goods/goods';
import cn from './catalog.module.css';
import { Image, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Boots1 from '../../assets/boots1.png';
import Boots2 from '../../assets/boots2.png';
import Boots3 from '../../assets/boots3.png';
import Boots4 from '../../assets/boots4.png';
import Banner from '../../assets/banner.png';
import { NavBar } from '../../features/navBar/navBar';
type ProductType = {
  article: number;
  imgUrl: string;
  category: string[];
  title: string;
  description: string;
  price: number;
};

const PRODUCTS = [
  {
    article: 1,
    imgUrl: Boots1,
    category: ['shoes'],
    title: 'Boots 1',
    description:
      'Эти кроссовки созданы для тех, кто ценит комфорт и стиль в повседневной жизни. Модель сочетает в себе ультралегкий дышащий материал и современный дизайн, который подходит как для городских прогулок, так и для активного отдыха.',
    price: 6500,
  },
  {
    article: 2,
    imgUrl: Boots2,
    category: ['shoes'],
    title: 'Boots 2',
    description:
      'Эти кроссовки созданы для тех, кто ценит комфорт и стиль в повседневной жизни. Модель сочетает в себе ультралегкий дышащий материал и современный дизайн, который подходит как для городских прогулок, так и для активного отдыха.',
    price: 5500,
  },
  {
    article: 3,
    imgUrl: Boots3,
    category: ['shoes'],
    title: 'Boots 3',
    description:
      'Эти кроссовки созданы для тех, кто ценит комфорт и стиль в повседневной жизни. Модель сочетает в себе ультралегкий дышащий материал и современный дизайн, который подходит как для городских прогулок, так и для активного отдыха.',
    price: 6000,
  },
  {
    article: 4,
    imgUrl: Boots4,
    category: ['shoes'],
    title: 'Boots 4',
    description:
      'Эти кроссовки созданы для тех, кто ценит комфорт и стиль в повседневной жизни. Модель сочетает в себе ультралегкий дышащий материал и современный дизайн, который подходит как для городских прогулок, так и для активного отдыха.',
    price: 6500,
  },
  {
    article: 1,
    imgUrl: Boots1,
    category: ['shoes'],
    title: 'Boots 1',
    description:
      'Эти кроссовки созданы для тех, кто ценит комфорт и стиль в повседневной жизни. Модель сочетает в себе ультралегкий дышащий материал и современный дизайн, который подходит как для городских прогулок, так и для активного отдыха.',
    price: 6500,
  },
  {
    article: 2,
    imgUrl: Boots2,
    category: ['shoes'],
    title: 'Boots 2',
    description:
      'Эти кроссовки созданы для тех, кто ценит комфорт и стиль в повседневной жизни. Модель сочетает в себе ультралегкий дышащий материал и современный дизайн, который подходит как для городских прогулок, так и для активного отдыха.',
    price: 5500,
  },
  {
    article: 3,
    imgUrl: Boots3,
    category: ['shoes'],
    title: 'Boots 3',
    description:
      'Эти кроссовки созданы для тех, кто ценит комфорт и стиль в повседневной жизни. Модель сочетает в себе ультралегкий дышащий материал и современный дизайн, который подходит как для городских прогулок, так и для активного отдыха.',
    price: 6000,
  },
  {
    article: 4,
    imgUrl: Boots4,
    category: ['shoes'],
    title: 'Boots 4',
    description:
      'Эти кроссовки созданы для тех, кто ценит комфорт и стиль в повседневной жизни. Модель сочетает в себе ультралегкий дышащий материал и современный дизайн, который подходит как для городских прогулок, так и для активного отдыха.',
    price: 6500,
  },
];

const Catalog = () => {
  const [category, setCategory] = useState<string>('all');
  const [currentItems, setCurrentItems] = useState<ProductType[]>([]);
  useEffect(() => {
    if (category === 'all') {
      setCurrentItems(PRODUCTS);
    } else {
      setCurrentItems(PRODUCTS.filter((item) => item.category.includes(category)));
    }
  }, [category]);
  return (
    <>
      <div className={cn.container}>
        <Input placeholder="Найти товары" prefix={<SearchOutlined />} className={cn.search} />
        <img src={Banner} className={cn.banner} alt="banner" />
        <Categories category={category} onChangeCategory={setCategory} />
        <Goods items={currentItems} />
        <NavBar />
      </div>
    </>
  );
};

export { Catalog, PRODUCTS };
export type { ProductType };
