import classNames from 'classnames/bind';
import styles from './Checkout.module.scss';

const cx = classNames.bind(styles);

function Checkout() {
   return <div className={cx('wrapper')}></div>;
}

export default Checkout;
