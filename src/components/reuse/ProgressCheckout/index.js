import classNames from 'classnames/bind';
import styles from './ProgressCheckout.module.scss';

const cx = classNames.bind(styles);

function ProgressCheckout() {
   return (
      <div className={cx('wrapper')}>
         <section className={cx('progress-checkout-container')}>
            <ul className={cx('progress-step-list')}>
               <li className={cx('progress-step-item', 'current-item')}>
                  <span className={cx('progress-count')}>1</span>
                  <span className={cx('progress-label')}>Đăng nhập</span>
               </li>
               <li className={cx('progress-step-item')}>
                  <span className={cx('progress-count')}>2</span>
                  <span className={cx('progress-label')}>Địa chỉ giao hàng</span>
               </li>
               <li className={cx('progress-step-item')}>
                  <span className={cx('progress-count')}>3</span>
                  <span className={cx('progress-label')}>Thanh toán</span>
               </li>
            </ul>
         </section>
      </div>
   );
}

export default ProgressCheckout;
