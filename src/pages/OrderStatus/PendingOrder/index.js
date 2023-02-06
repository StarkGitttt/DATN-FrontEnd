import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Pagination } from 'antd';
import classNames from 'classnames/bind';

import { OrderAPI } from '~/api/EcommerceApi';
import styles from './PendingOrder.module.scss';
import constants_local from '~/constants';
import { formatCurrency, formatDate } from '~/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import routes from '~/config/routes';
const cx = classNames.bind(styles);

function PendingOrder() {
   const { t } = useTranslation();
   const userInfo = useSelector((state) => state.user.userInfo);
   const [ordersPending, setOrdersPending] = useState([]);
   const [page, setPage] = useState(1);
   const [pageable, setPageable] = useState({});
   const [totalItems, setTotalItems] = useState(1);

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
      if (userInfo?.id) {
         OrderAPI.findByStatus({
            params: {
               status: constants_local.STATUS_PENDING_ORDER,
               curPage: page,
            },
         })
            .then((res) => {
               if (res.data) {
                  console.log('Pending order', res.data);
                  setOrdersPending(res.data?.content);
                  setPageable(res.data?.pageable);
                  setTotalItems(res.data?.totalElements);
               }
            })
            .catch((e) => {
               console.log('Get order by status pending failed: ', e);
            });
      }
   }, [userInfo?.id, page]);

   return (
      <div className={cx('wrapper')}>
         {userInfo?.id ? (
            ordersPending.length > 0 ? (
               <>
                  <div className={cx('limiter')}>
                     <div className={cx('title-box')}>
                        <h3 className="title">{t('order.pending.title')}</h3>
                     </div>
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
                              {ordersPending.map((order) => (
                                 <div className={cx('row')} key={order.id}>
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
                  </div>
                  <div className={cx('pagination-container', 'mb-[30px]', 'flex', 'justify-center')}>
                     <Pagination
                        onChange={(page) => setPage(page)}
                        pageSize={pageable.pageSize}
                        total={totalItems}
                        showSizeChanger={false}
                     />
                  </div>
               </>
            ) : (
               <div className={cx('order-empty')}>
                  <p>{t('order.empty')}</p>
                  <FontAwesomeIcon icon={faMoneyBill} />
               </div>
            )
         ) : (
            <h3>{t('login.required')}</h3>
         )}
      </div>
   );
}

export default PendingOrder;
