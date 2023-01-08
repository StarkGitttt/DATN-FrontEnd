import { Pagination } from 'antd';
import classNames from 'classnames/bind';
import styles from './Category.module.scss';
import ProductCard from '~/components/reuse/ProductCard';

const cx = classNames.bind(styles);

function Category() {
   return (
      <div className={cx('wrapper')}>
         <h2 className={cx('title')}>Category name</h2>
         <div className={cx('product-grid')}>
            {['', '', '', '', '', '', '', ''].map((element, index) => {
               return <ProductCard key={index} />;
            })}
         </div>
         <div className={cx('pagination-container', 'mt-[30px]', 'flex', 'justify-center')}>
            <Pagination pageSize={3} total={100} showSizeChanger={false} />
         </div>
      </div>
   );
}

export default Category;
