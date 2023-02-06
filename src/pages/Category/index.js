import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Pagination } from 'antd';
import classNames from 'classnames/bind';

import styles from './Category.module.scss';
import ProductCard from '~/components/reuse/ProductCard';
import { CategoryAPI } from '~/api/EcommerceApi';
import constants_local from '~/constants';

const cx = classNames.bind(styles);

function Category() {
   const [page, setPage] = useState(1);
   const [pageable, setPageable] = useState({});
   const [products, setProducts] = useState([]);
   const [category, setCategory] = useState({});

   const { categoryId } = useParams();

   useEffect(() => {
      window.scrollTo(0, 0);
      CategoryAPI.getOne(
         {
            params: {
               page,
               perPage: constants_local.PRODUCT_ITEM_LIMIT,
            },
         },
         categoryId,
      )
         .then((res) => {
            if (res.data) {
               setPageable(res.data);
               setProducts(res.data.content);
               setCategory(res.data.content[0]?.category);
            }
         })
         .catch((e) => {
            console.log(`Get category ${categoryId} failed: `, e);
         });
   }, [categoryId, page]);

   return (
      <div className={cx('wrapper')}>
         {products.length > 0 ? (
            <>
               <h2 className={cx('title', 'disable-text-transform')}>{category?.name}</h2>
               <div className={cx('product-grid')}>
                  {products.map((item) => (
                     <ProductCard key={item.id} data={item} />
                  ))}
               </div>
               <div className={cx('pagination-container', 'mt-[30px]', 'flex', 'justify-center')}>
                  <Pagination
                     onChange={(page) => setPage(page)}
                     pageSize={constants_local.PRODUCT_ITEM_LIMIT}
                     total={pageable.totalItem}
                     showSizeChanger={false}
                  />
               </div>
            </>
         ) : (
            ''
         )}
      </div>
   );
}

export default Category;
