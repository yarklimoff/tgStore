import React, { useState } from 'react';
import cn from './cart.module.css';
import { LeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../catalog/catalog';
const Cart = () => {
  const navigate = useNavigate();
  const onClickBack = () => {
    navigate('/');
  };
  const [count, setCount] = useState<number>(1);
  const item = PRODUCTS[0];
  return (
    <div className={cn.container}>
      <Button icon={<LeftOutlined />} onClick={onClickBack} />
      <div className={cn.body}>
        <div className={cn.row}>
          <img src={item.imgUrl} alt="boots" className={cn.image} />
          <div className={cn.center}>
            <div>
              <div className={cn.title}>{item.title}</div>
              <div className={cn.category}>Мужские кроссовки</div>
            </div>
            <div className={cn.price}>{item?.price} ₽</div>
          </div>
          <div className={cn.right}>
            <div className={cn.count}>
              <button onClick={() => setCount((prev) => (prev - 1 > 0 ? prev - 1 : 0))}>-</button>
              <div>{count}</div>
              <button onClick={() => setCount((prev) => prev + 1)}>+</button>
            </div>
          </div>
        </div>
        <div className={cn.footer}>
          <div className={cn.totalRow}>
            <div className={cn.total}>Итого</div>
            <div className={cn.totalPrice}>{item.price * count} ₽</div>
          </div>
          <button className={cn.order}>Заказать</button>
        </div>
      </div>
    </div>
  );
};

export { Cart };
