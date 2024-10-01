import { Catalog } from './pages/catalog/catalog';
import { Item } from './pages/item/item';
import 'normalize.css';
import cn from './App.module.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Cart } from './pages/cart/cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Catalog />,
  },
  {
    path: '/catalog/:article',
    element: <Item />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
]);

function App() {
  return (
    <div className={cn.app}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
