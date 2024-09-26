import React, { useEffect, useState } from 'react';
import { Categories } from './categories/categories';
import { Goods } from './goods/goods';
import cn from './catalog.module.css';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Image from '../../assets/banner.png';

async function fetchProducts() {
  try {
    const response = await fetch('http://localhost:5000/api/products'); // URL вашего локального API
    if (!response.ok) {
      throw new Error('Сеть ответила с ошибкой: ' + response.status);
    }
    const products = await response.json(); // Преобразуем ответ в JSON
    return products; // Возвращаем полученные продукты
  } catch (error) {
    console.error('Ошибка при получении продуктов:', error); // Логируем ошибку
    throw error; // Пробрасываем ошибку дальше
  }
}

const Catalog = () => {
  const [category, setCategory] = useState<string>('all');

  useEffect(() => {
    const fetch = async () => {
      const result = await fetchProducts();
      console.log(result);
    };
    fetch();
  }, []);
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
