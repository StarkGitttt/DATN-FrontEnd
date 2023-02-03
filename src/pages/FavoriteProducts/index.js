import { useState } from 'react';
import { useSelector } from 'react-redux';

import classNames from 'classnames/bind';
import styles from './FavoriteProducts.module.scss';
import ProductCard from '~/components/reuse/ProductCard';
import LoginForm from '~/components/reuse/LoginForm';

const cx = classNames.bind(styles);

function FavoriteProducts() {
   const [showLoginForm, setShowLoginForm] = useState(false);

   const userInfo = useSelector((state) => state.user.userInfo);
   const favoriteProducts = useSelector((state) => state.user.userFavoriteProducts);
   return (
      <div className={cx('wrapper')}>
         {userInfo?.id ? (
            <>
               <h2 className={cx('title', 'disable-text-transform')}>Danh sách sản phảm yêu thích</h2>
               <div className={cx('product-grid')}>
                  {favoriteProducts.map((item) => (
                     <ProductCard key={item?.product?.id} data={item?.product} />
                  ))}
               </div>
               {favoriteProducts.length <= 0 && <p>Danh sách trống, hãy trở lại và thích sản phẩm bất kỳ</p>}
            </>
         ) : (
            <div className={cx('no-login')}>
               <p>
                  Bạn cần <strong onClick={() => setShowLoginForm(!showLoginForm)}>đăng nhập</strong> để thực hiện chức
                  năng này
               </p>
            </div>
         )}
         <LoginForm showForm={showLoginForm} setShowForm={setShowLoginForm} />
      </div>
   );
}

export default FavoriteProducts;
