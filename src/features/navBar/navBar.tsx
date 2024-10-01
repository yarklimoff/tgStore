import { HomeOutlined, HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import cn from './navBar.module.css';
import { useNavigate } from 'react-router-dom';
const NavBar = () => {
  const navigate = useNavigate();
  const onClickHome = () => {
    navigate('/');
  };
  const onClickCart = () => {
    navigate('/cart');
  };
  return (
    <div className={cn.navBar}>
      <button className={cn.button} onClick={onClickHome}>
        <HomeOutlined style={{ fontSize: '24px' }} />
      </button>
      <button className={cn.button}>
        <HeartOutlined style={{ fontSize: '24px' }} />
      </button>
      <button className={cn.button}>
        <ShoppingCartOutlined style={{ fontSize: '24px' }} onClick={onClickCart} />
      </button>
    </div>
  );
};

export { NavBar };
