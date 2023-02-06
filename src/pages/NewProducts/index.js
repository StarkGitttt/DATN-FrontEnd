import { useState, useEffect } from 'react';
import { Pagination } from 'antd';
import classNames from 'classnames/bind';

import { ProductAPI } from '~/api/EcommerceApi';
import ProductCard from '~/components/reuse/ProductCard';
import styles from './NewProducts.module.scss';
import constants_local from '~/constants';

const cx = classNames.bind(styles);

function NewProducts() {
   const [currentCreatedProducts, setCurrentCreatedProducts] = useState([]);
   const [pageable, setPageable] = useState({});
   const [page, setPage] = useState(1);
   useEffect(() => {
      window.scrollTo(0, 0);
      ProductAPI.getCurrentCreated({
         params: {
            curPage: page,
            limit: constants_local.PRODUCT_ITEM_LIMIT,
         },
      })
         .then((res) => {
            if (res.data) {
               setCurrentCreatedProducts(res.data.content);
               setPageable(res.data);
            }
         })
         .catch((e) => {
            console.log('Get current created products failed', e);
         });
   }, [page]);
   return (
      <div className={cx('wrapper')}>
         {currentCreatedProducts.length > 0 ? (
            <>
               <h2 className={cx('title', 'disable-text-transform')}>Sản phẩm mới</h2>
               <div className={cx('product-grid')}>
                  {currentCreatedProducts.map((item) => (
                     <ProductCard key={item.id} data={item} />
                  ))}
               </div>
               <div className={cx('pagination-container', 'mt-[30px]', 'flex', 'justify-center')}>
                  <Pagination
                     onChange={(page) => setPage(page)}
                     pageSize={pageable.perPage}
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

export default NewProducts;
