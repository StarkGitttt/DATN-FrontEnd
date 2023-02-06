import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Pagination } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import { useDebounce } from '~/hooks';
import { OrderAPI } from '~/api/EcommerceApi';
import { formatCurrency, formatDate } from '~/utils';
import styles from './OrderTracking.module.scss';
import routes from '~/config/routes';
import constants_local from '~/constants';

const cx = classNames.bind(styles);

function OrderTracking() {
   const { t } = useTranslation();

   const [searchValue, setSearchValue] = useState('');
   const [pageableOrders, setPageableOrders] = useState({});
   const [page, setPage] = useState(1);
   const debouncedValue = useDebounce(searchValue, 600);

   const calcTotalProductSold = (orderPending) => {
      return orderPending.orderItems.reduce((accumulator, currentValue) => {
         return accumulator + currentValue.quantity;
      }, 0);
   };
   const defineStatusOrder = (status) => {
      if (status === constants_local.STATUS_SUCCESS_ORDER) {
         return 'Success';
      } else if (status === constants_local.STATUS_PENDING_ORDER) {
         return 'Pending';
      } else {
         return 'Cancel';
      }
   };
   useEffect(() => {
      if (!Number(debouncedValue)) {
         return;
      }
      OrderAPI.findByPhone({
         params: {
            phone: debouncedValue,
            curPage: page,
         },
      })
         .then((res) => {
            if (res.data) {
               console.log(`Find order by phone ${debouncedValue}`, res.data);
               setPageableOrders(res.data);
            }
         })
         .catch((e) => {
            console.log('Find orders by phone failed ', e);
         });
   }, [debouncedValue, page]);

   return (
      <div className={cx('wrapper')}>
         <div className={cx('container-oders')}>
            <h1 className={cx('search-heading')}>{t('header.order.search.title')}</h1>
            <div className={cx('form-info-oder')}>
               <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder={t('header.order.search.input')}
                  onChange={(e) => setSearchValue(e.target.value)}
               />

               <button className={cx('secondary-button', 'mr-[55px]')} value="Oder">
                  {t('header.order.search.button')}
               </button>
            </div>
            {pageableOrders?.totalItem > 0 ? (
               <div className={cx('limiter')}>
                  <div className={cx('container-table100')}>
                     <div className={cx('wrap-table100')}>
                        <div className={cx('table')}>
                           <div className={cx('row', 'header')}>
                              <div className={cx('cell')}>{t('order.id')}</div>
                              <div className={cx('cell')}>{t('order.created')}</div>
                              <div className={cx('cell')}>{t('order.totalProducts')}</div>
                              <div className={cx('cell')}>{t('order.totalPrice')}</div>
                              <div className={cx('cell')}>{t('order.detail')}</div>
                              <div className={cx('cell')}>{t('order.status')}</div>
                           </div>
                           {pageableOrders?.content.map((order) => (
                              <div className={cx('row')}>
                                 <div className={cx('cell')} data-title="Full Name">
                                    #{order?.id}
                                 </div>
                                 <div className={cx('cell')} data-title="Age">
                                    {formatDate(order?.createdAt)}
                                 </div>
                                 <div className={cx('cell')} data-title="Job Title">
                                    {calcTotalProductSold(order)}
                                 </div>
                                 <div className={cx('cell')} data-title="Location">
                                    {formatCurrency('vi-VN', order?.total)}
                                 </div>
                                 <div className={cx('cell')} data-title="Location">
                                    <Link to={`${routes.orderDetails}/${order?.id}`}>{t('order.detail')}</Link>
                                 </div>
                                 <div className={cx('cell', `status-${order.status}`)} data-title="Location">
                                    {defineStatusOrder(order.status)}
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
                  <div className={cx('pagination-container', 'mb-[30px]', 'flex', 'justify-center')}>
                     <Pagination
                        onChange={(page) => {
                           setPage(page);
                           window.scrollTo(0, 0);
                        }}
                        pageSize={pageableOrders.perPage}
                        total={pageableOrders.totalItem}
                        showSizeChanger={false}
                     />
                  </div>
               </div>
            ) : (
               <div className={cx('not-found')}>
                  <h3>{debouncedValue && t('header.order.search.notFound', { phone: debouncedValue })}</h3>
                  {debouncedValue && <FontAwesomeIcon icon={faMagnifyingGlass} />}
               </div>
            )}
         </div>
      </div>
   );
}

export default OrderTracking;
