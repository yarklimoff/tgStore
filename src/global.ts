import { action, makeObservable, observable } from 'mobx';
import { createContext, useContext } from 'react';

class CartItem {
  count: number = 1;
  constructor(public article: number) {
    makeObservable(this, {
      count: observable,
    });
  }

  increment = () => {
    this.count += 1;
  };

  decrement = () => {
    this.count -= 1;
  };
}

class Global {
  cart: Map<number, CartItem> = new Map();
  constructor() {
    makeObservable(this, {
      cart: observable,
      addToCart: action,
      removeFromCart: action,
    });
  }

  addToCart = (article: number | undefined) => {
    if (article === undefined) {
      return;
    }
    const item = this.cart.get(article);
    if (item === undefined) {
      this.cart.set(article, new CartItem(article));
    } else {
      item.increment();
    }
  };

  removeFromCart = (article: number | undefined) => {
    if (article === undefined) {
      return;
    }
    const item = this.cart.get(article);
    if (!item) {
      return;
    }
    if (item.count <= 1) {
      this.cart.delete(article);
    } else {
      item.decrement();
    }
  };
}

const GlobalContext = createContext<Global | null>(null);
const useGlobalContext = (): Global | null => {
  const global = useContext(GlobalContext);
  return global;
};

export { Global, GlobalContext, useGlobalContext };
