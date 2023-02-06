import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import classNames from 'classnames/bind';
import 'swiper/css/bundle';

import { ProductAPI } from '~/api/EcommerceApi';
import styles from './ErrorStep.module.scss';
import ProductCard from '~/components/reuse/ProductCard';

const cx = classNames.bind(styles);

function ErrorStep() {
   const { t } = useTranslation();

   const [randomProducts, setRandomProducts] = useState([]);

   useEffect(() => {
      ProductAPI.getCurrentCreated()
         .then((res) => {
            if (res.data) {
               setRandomProducts(res.data?.content);
            }
         })
         .catch((e) => console.log(`Get random products failed `, e));
   }, []);

   return (
      <div className={cx('wrapper')}>
         <div className={cx('cart-empty')}>
            <div className={cx('cart-empty-title')}>
               <FontAwesomeIcon icon={faShoppingCart} />
               <h3>{t('cart.title')}</h3>
            </div>
            <div className={cx('cart-empty-suggestion')}>
               <p>{t('cart.error.message')}</p>
               <p>
                  {t('cart.click')}
                  <Link to="/products/new">
                     <strong> {t('cart.here')} </strong>
                  </Link>{' '}
                  {t('cart.continue')}
               </p>
            </div>
         </div>
         {/* RELATED PRODUCTS */}
         <div className={cx('related-product', 'flex', 'flex-col', 'justify-center', 'mt-[40px]')}>
            <div className={cx('related-heading')}>
               <h3 className={cx('title')}>{t('cart.error.suggestion.title')}</h3>
            </div>
            <div className={cx('related-list')}>
               {/* <div className={cx('product-grid')}> */}
               <Swiper
                  spaceBetween={25}
                  slidesPerView={5}
                  autoplay={{
                     delay: 5000,
                     pauseOnMouseEnter: true,
                     disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
               >
                  {randomProducts.map((item) => (
                     <SwiperSlide key={item.id}>
                        <ProductCard data={item} />
                     </SwiperSlide>
                  ))}
               </Swiper>
               {/* </div> */}
            </div>
         </div>
      </div>
   );
}

export default ErrorStep;
