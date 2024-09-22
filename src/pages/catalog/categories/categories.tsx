import { ReactNode } from 'react';
import cn from './categories.module.css';
const mockCategories: { value: string; label: ReactNode }[] = [
  {
    value: 'all',
    label: 'Все',
  },
  {
    value: 'boots',
    label: 'Кроссовки',
  },
  {
    value: 'parfum',
    label: 'Парфюмерия',
  },
  {
    value: 'tech',
    label: 'Техника',
  },
  {
    value: 'a',
    label: 'Парфюмерия',
  },
  {
    value: 'b',
    label: 'Техника',
  },
  {
    value: 'c',
    label: 'Парфюмерия',
  },
  {
    value: 'd',
    label: 'Техника',
  },
];
const Categories = () => {
  return (
    <div className={cn.container}>
      <h2>Категории</h2>
      <div className={cn['scrollable-tabs-container']}>
        {mockCategories.map((item, index) => (
          <button key={index} className={cn['tab']}>
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export { Categories };
