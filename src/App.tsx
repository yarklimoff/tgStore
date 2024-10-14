import { Catalog } from './pages/catalog/catalog';
import { Item } from './pages/item/item';
import 'normalize.css';
import cn from './App.module.css';
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';
import { Cart } from './pages/cart/cart';
import { Global, GlobalContext } from './global';
import { useEffect, useMemo } from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ScrollToTop />
        <Catalog />
      </>
    ),
  },
  {
    path: '/catalog/:article',
    element: (
      <>
        <ScrollToTop />
        <Item />
      </>
    ),
  },
  {
    path: '/cart',
    element: (
      <>
        <ScrollToTop />
        <Cart />
      </>
    ),
  },
]);

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Сбрасываем скролл на верх при каждом изменении маршрута
  }, [pathname]);

  return null;
}

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
