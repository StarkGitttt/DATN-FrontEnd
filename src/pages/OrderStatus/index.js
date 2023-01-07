import classNames from 'classnames/bind';
import styles from './OrderStatus.module.scss';

const cx = classNames.bind(styles);

function OrderStatus() {
   return <div className={cx('wrapper')}></div>;
}

export default OrderStatus;
