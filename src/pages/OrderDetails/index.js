import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames/bind';

import styles from './OrderDetails.module.scss';
import { OrderAPI } from '~/api/EcommerceApi';
import { formatCurrency } from '~/utils';

const cx = classNames.bind(styles);

function OrderDetails() {
   const { t } = useTranslation();

   const { idOrder } = useParams();

   const [orderItems, setOrderItems] = useState([]);
   useEffect(() => {
      OrderAPI.findById({
         params: {
            id: idOrder,
         },
      })
         .then((res) => {
            if (res.data) {
               setOrderItems(res.data?.orderItems);
               console.log('Find by id order ', res.data?.orderItems);
            }
         })
         .catch((e) => {
            console.log('Find by id error', e);
         });
   }, [idOrder]);
   return (
      <div className={cx('wrapper')}>
         <div className={cx('limiter')}>
            <div className={cx('title-box')}>
               <h3 className="title">{t('order.detail')}</h3>
            </div>
            <div className={cx('container-table100')}>
               <div className={cx('wrap-table100')}>
                  <div className={cx('table')}>
                     <div className={cx('row', 'header')}>
                        <div className={cx('cell')}>{t('order.idProduct')}</div>
                        <div className={cx('cell')}>{t('order.nameProduct')}</div>
                        <div className={cx('cell')}>{t('order.priceEachProduct')}</div>
                        <div className={cx('cell')}>{t('order.quantityOrderProduct')}</div>
                        <div className={cx('cell')}>{t('order.totalProduct')}</div>
                     </div>

                     {orderItems.map((item, index) => (
                        <div className={cx('row')} key={index}>
                           <div className={cx('cell')} data-title="Full Name">
                              {item?.product?.id}
                           </div>
                           <div className={cx('cell')} data-title="Age">
                              {item?.product?.name}
                           </div>
                           <div className={cx('cell')} data-title="Job Title">
                              {item?.product?.unitPrice}
                           </div>
                           <div className={cx('cell')} data-title="Location">
                              {formatCurrency('vi-VN', item?.quantity)}
                           </div>
                           <div className={cx('cell')} data-title="Location">
                              {formatCurrency('vi-VN', item?.quantity * item?.product?.unitPrice)}
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default OrderDetails;
