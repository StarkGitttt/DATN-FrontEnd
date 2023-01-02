import { Link } from 'react-router-dom';
import { faStar, faRepeat, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faEye } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './ProductCard.module.scss';
import Image from '~/components/reuse/Image';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function ProductCard() {
   return (
      <div className={cx('showcase')}>
         <div className={cx('showcase-banner')}>
            <Image
               src={images.jacket3}
               alt="Mens Winter Leathers Jackets"
               width="300"
               className={cx('product-img', 'default')}
            />
            <Image
               src={images.jacket4}
               alt="Mens Winter Leathers Jackets"
               width="300"
               className={cx('product-img', 'hover')}
            />

            <p className={cx('showcase-badge', 'angle', 'black')}>15%</p>

            <div className={cx('showcase-actions')}>
               <button className={cx('btn-action')}>
                  <FontAwesomeIcon icon={faHeart} />
               </button>

               <button className={cx('btn-action')}>
                  <FontAwesomeIcon icon={faEye} />
               </button>

               <button className={cx('btn-action')}>
                  <FontAwesomeIcon icon={faRepeat} />
               </button>

               <button className={cx('btn-action')}>
                  <FontAwesomeIcon icon={faCartPlus} />
               </button>
            </div>
         </div>

         <div className={cx('showcase-content')}>
            <Link to={'/'} className={cx('showcase-category')}>
               jacket
            </Link>

            <Link to={'/'}>
               <h3 className={cx('showcase-title')}>Mens Winter Leathers Jackets</h3>
            </Link>

            <div className={cx('showcase-rating')}>
               <FontAwesomeIcon icon={faStar} />
               <FontAwesomeIcon icon={faStar} />
               <FontAwesomeIcon icon={faStar} />
               <FontAwesomeIcon icon={faStar} />
               <FontAwesomeIcon icon={faStar} />
            </div>

            <div className={cx('price-box')}>
               <p className={cx('price')}>$48.00</p>
               <del>$75.00</del>
            </div>
         </div>
      </div>
   );
}

export default ProductCard;
