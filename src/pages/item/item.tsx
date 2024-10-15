import { useState } from 'react';
import cn from './item.module.css';
import { Header } from './header/header';
import classNames from 'classnames';
import { Carousel } from 'antd';
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../catalog/catalog';
import { NavBar } from '../../features/navBar/navBar';
import { useGlobalContext } from '../../global';
import { observer } from 'mobx-react-lite';

const sizes = [41, 42, 43, 44, 45];

const Item = observer(() => {
  const { article } = useParams();
  const global = useGlobalContext();
  const item = PRODUCTS.find((prod) => prod.article === parseInt(article!));
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const handleSizeSelect = (size: number) => {
    setSelectedSize(size);
  };
  return (
    <>
      <div className={cn.container}>
        <Header />
        <Carousel className={cn.carousel}>
          <div>
            <img className={cn.image} src={item?.imgUrl} alt="sneakers" />
          </div>
          <div>
            <img className={cn.image} src={item?.imgUrl} alt="sneakers" />
          </div>
        </Carousel>
        <div className={cn.header}>
          <div className={cn.titleContainer}>
            <h2 className={cn.title}>{item?.title}</h2>
            <div className={cn.category}>Мужские кроссовки</div>
          </div>
          <div className={cn.price}>{item?.price} ₽</div>
        </div>
        <p className={cn.description}>
          {`Эти кроссовки созданы для тех, кто ценит комфорт и стиль в повседневной жизни. Модель 
          ${item?.title} сочетает в себе ультралегкий дышащий материал и современный дизайн, который
          подходит как для городских прогулок, так и для активного отдыха.`}
        </p>

        <h3>Размер</h3>
        <div className={cn.sizes}>
          {sizes.map((size, index) => (
            <div
              onClick={() => handleSizeSelect(size)}
              key={index}
              className={classNames(cn.size, selectedSize === size && cn.active)}>
              {size}
            </div>
          ))}
        </div>
        <div className={cn.buy}>
          <button
            disabled={selectedSize === null}
            className={cn.addCart}
            onClick={() => global?.addToCart(item?.article)}>
            <div className={cn.buttonContent}>
              Заказать{' '}
              {item?.article !== undefined && (global?.cart.get(item?.article)?.count ?? 0) > 0 ? (
                <div className={cn.count}>{global?.cart.get(item?.article)?.count}</div>
              ) : (
                <span></span>
              )}
            </div>
          </button>
        </div>
      </div>
      <NavBar />
    </>
  );
});

export { Item };
