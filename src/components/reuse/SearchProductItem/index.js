import classNames from 'classnames/bind';
import styles from './SearchProductItem.module.scss';
import Image from '~/components/reuse/Image';
import images from '~/assets/images';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function SearchProductItem({ data, setShowResult }) {
   return (
      <div className={cx('wrapper')}>
         <Image src={data?.image ? data?.image : images.brandAsus} className={cx('product-thumbnail')} />
         <Link to={`/product/${data?.id}`} onClick={() => setShowResult((showResult) => !showResult)}>
            <div className={cx('info')}>
               <h4 className={cx('product-name')}>{data?.name}</h4>
               <span className={cx('product-quantity')}>{data?.quantity}</span>
            </div>
         </Link>
      </div>
   );
}

export default SearchProductItem;
