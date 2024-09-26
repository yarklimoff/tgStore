import { useState } from 'react';
import cn from './item.module.css';
import { Header } from './header/header';
import Image from '../../assets/boots.png';
import classNames from 'classnames';
import { Button, Carousel } from 'antd';

const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33F0', '#FFC133'];
const sizes = [41, 42, 43, 44, 45];

const addProduct = async (newProduct: { article: string; price: number; name: string }) => {
  try {
    const response = await fetch('http://localhost:5000/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    });

    if (!response.ok) {
      throw new Error(`Ошибка сети: ${response.status} ${response.statusText}`);
    }

    const addedProduct = await response.json();
    console.log('Товар добавлен:', addedProduct);
    return addedProduct;
  } catch (error) {
    console.error('Ошибка при добавлении товара:', error);
    throw error; // Пробрасываем ошибку дальше
  }
};

const Item = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };
  return (
    <div className={cn.container}>
      <Header />
      <Button onClick={() => addProduct({ name: 'a', price: 100, article: 'asd' })} />
      <Carousel className={cn.carousel}>
        <div>
          <img className={cn.image} src={Image} alt="sneakers" />
        </div>
        <div>
          <img className={cn.image} src={Image} alt="sneakers" />
        </div>
      </Carousel>
      <div className={cn.header}>
        <div className={cn.titleContainer}>
          <h2 className={cn.title}>UrbanFlex Pro</h2>
          <div className={cn.category}>Мужские кроссовки</div>
        </div>
        <div className={cn.price}>6500 ₽</div>
      </div>
      <p className={cn.description}>
        Эти кроссовки созданы для тех, кто ценит комфорт и стиль в повседневной жизни. Модель
        UrbanFlex Pro сочетает в себе ультралегкий дышащий материал и современный дизайн, который
        подходит как для городских прогулок, так и для активного отдыха.
      </p>
      <h3>Цвет</h3>
      <div className={cn.colors}>
        {colors.map((color, index) => (
          <div
            key={index}
            className={classNames(cn.colorCircle, selectedColor === color && cn.activeColor)}
            style={{ backgroundColor: color }}
            onClick={() => handleColorSelect(color)}
          />
        ))}
      </div>
      <h3>Размер</h3>
      <div className={cn.sizes}>
        {sizes.map((size, index) => (
          <div className={cn.size}>{size}</div>
        ))}
      </div>
    </div>
  );
};

export { Item };
