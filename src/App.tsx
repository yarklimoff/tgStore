import { Catalog } from './pages/catalog/catalog';
import { Item } from './pages/item/item';
import 'normalize.css';
import cn from './App.module.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Cart } from './pages/cart/cart';
import { Global, GlobalContext } from './global';
import { useMemo } from 'react';

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
  const global = useMemo(() => new Global(), []);
  return (
    <div className={cn.app}>
      <GlobalContext.Provider value={global}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
