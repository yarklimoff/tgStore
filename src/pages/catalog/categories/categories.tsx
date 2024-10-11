import { FC, ReactNode } from 'react';
import cn from './categories.module.css';
import classNames from 'classnames';
const mockCategories: { value: string; label: ReactNode }[] = [
  {
    value: 'all',
    label: 'Все',
  },
  {
    value: 'Adidas',
    label: 'Adidas',
  },
  {
    value: 'Nike',
    label: 'Nike',
  },
  {
    value: 'Puma',
    label: 'Puma',
  },
  {
    value: 'Reebok',
    label: 'Reebok',
  },
  {
    value: 'Vans',
    label: 'Vans',
  },
];

type CategoriesProps = {
  category: string;
  onChangeCategory: (value: string) => void;
};

const Categories: FC<CategoriesProps> = ({ category, onChangeCategory }) => {
  return (
    <div className={cn.container}>
      <div className={cn['scrollable-tabs-container']}>
        {mockCategories.map((item, index) => (
          <button
            key={index}
            onClick={() => onChangeCategory(item.value)}
            className={classNames(cn['tab'], item.value === category && cn.active)}>
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export { Categories };
