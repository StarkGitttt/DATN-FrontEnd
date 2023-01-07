import classNames from 'classnames/bind';
import styles from './FavoriteProducts.module.scss';

const cx = classNames.bind(styles);

function FavoriteProducts() {
   return <div className={cx('wrapper')}></div>;
}

export default FavoriteProducts;
