import cn from './cart.module.css';
import { LeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../catalog/catalog';
import { useGlobalContext } from '../../global';
import { observer } from 'mobx-react-lite';
const Cart = observer(() => {
  const navigate = useNavigate();
  const onClickBack = () => {
    navigate('/');
  };
  const global = useGlobalContext();
  const handleOrderSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/order', {
        // URL бекенда
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ chatId: global?.chatId }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Order submitted:', data);
      } else {
        console.error('Error submitting order:', response.status);
      }
    } catch (error) {
      console.error('Error submitting order:', error);
    }
  };
  return (
    <div className={cn.container}>
      <Button icon={<LeftOutlined />} onClick={onClickBack} />
      <div className={cn.body}>
        {Array.from(global?.cart.values() ?? []).map((cartItem) => {
          const item = PRODUCTS.find((product) => product.article === cartItem.article);
          if (item?.article === undefined) {
            return <></>;
          }
          return (
            <div className={cn.row}>
              <img src={item?.imgUrl} alt="boots" className={cn.image} />
              <div className={cn.center}>
                <div>
                  <div className={cn.title}>{item?.title}</div>
                </div>
                <div className={cn.price}>{item?.price} ₽</div>
              </div>
              <div className={cn.right}>
                <div className={cn.count}>
                  <button onClick={() => global?.removeFromCart(item?.article)}>-</button>
                  <div>{global?.cart.get(item?.article)?.count}</div>
                  <button onClick={() => global?.addToCart(item?.article)}>+</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className={cn.footer}>
        <div className={cn.totalRow}>
          <div className={cn.total}>Итого</div>
          <div className={cn.totalPrice}>
            {Array.from(global?.cart.values() ?? [])
              .map(
                (cartItem) =>
                  (PRODUCTS.find((product) => product.article === cartItem.article)?.price ?? 0) *
                  cartItem.count,
              )
              .reduce((prev, curr) => prev + curr, 0)}{' '}
            ₽
          </div>
        </div>
        <button className={cn.order} onClick={() => handleOrderSubmit()}>
          Заказать
        </button>
      </div>
    </div>
  );
});

export { Cart };
