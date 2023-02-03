import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Pagination } from 'antd';
import queryString from 'query-string';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './SearchProduct.module.scss';
import ProductCard from '~/components/reuse/ProductCard';
import { ProductAPI } from '~/api/EcommerceApi';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function SearchProduct() {
   const [products, setProducts] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [pageable, setPageable] = useState({});

   const search = useLocation().search;
   const searchParams = queryString.parse(search);

   useEffect(() => {
      ProductAPI.searchProducts({
         params: {
            currentPage,
            ...searchParams,
         },
      })
         .then((res) => {
            if (res.data) {
               setProducts(res.data.products);
               setPageable(res.data);
               console.log('Data search', res.data);
            }
         })
         .catch((e) => {
            console.log('Search products failed: ', e);
         });
      // eslint-disable-next-line
   }, [currentPage, searchParams?.q]);

   return (
      <div className={cx('wrapper')}>
         <h3 className={cx('title', 'disable-text-transform')}>{`Kết quả tìm kiếm cho '${searchParams?.q}'`}</h3>
         {products.length > 0 ? (
            <>
               <div className={cx('product-grid')}>
                  {products.map((item) => {
                     return <ProductCard key={item.id} data={item} />;
                  })}
               </div>
               <div className={cx('pagination-container', 'mt-[30px]', 'flex', 'justify-center')}>
                  <Pagination
                     pageSize={pageable?.perPage}
                     total={pageable?.totalItems}
                     showSizeChanger={false}
                     onChange={(page) => {
                        setCurrentPage(page);
                        console.log('Current page', page);
                     }}
                  />
               </div>
            </>
         ) : (
            <div className={cx('no-result')}>
               <p>Không tìm thấy dòng nào phù hợp </p>
               <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
         )}
      </div>
   );
}

export default SearchProduct;
