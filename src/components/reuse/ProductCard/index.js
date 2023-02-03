import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { faStar, faRepeat, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faEye } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './ProductCard.module.scss';
import Image from '~/components/reuse/Image';
import images from '~/assets/images';
import { formatCurrency } from '~/utils';
import { addCart, addOrRemoveFavoriteProduct } from '~/features/user/userSlice';
import { UserAPI } from '~/api/EcommerceApi';

const cx = classNames.bind(styles);

function ProductCard({ data }) {
   const { t } = useTranslation();

   const userInfo = useSelector((state) => state.user.userInfo);
   const userCarts = useSelector((state) => state.user.userCarts);
   const favoriteProducts = useSelector((state) => state.user.userFavoriteProducts);
   const dispatch = useDispatch();
   const handleAddOrRemoveFavProduct = (data) => {
      if (!userInfo?.id) {
         toast.warning('Vui lòng đăng nhập!');
         return;
      }
      UserAPI.addOrRemoveFavProd({
         productId: data?.id,
      })
         .then((res) => {
            if (res.data) {
               console.log('Add fav prod success', res.data);
               if (favoriteProducts.filter((favProd) => favProd?.product.id === data?.id).length > 0) {
                  toast.success(`Xóa sản phẩm khỏi mục yêu thích thành công`);
               } else {
                  toast.success(`Thêm sản phẩm vào mục yêu thích thành công`);
               }
               dispatch(addOrRemoveFavoriteProduct(res.data));
            }
         })
         .catch((e) => {
            console.log('Add fav prod failed', e);
         });
   };
   const handleAddProdToCart = (data) => {
      const findCart = userCarts.find((cart) => cart.id === data.id);
      if (findCart?.amountOrder && findCart.amountOrder + 1 > findCart.quantity) {
         toast.warning(t('cart.message.add.warningMaxQty', { amount: findCart.quantity }));
         return;
      }
      dispatch(addCart({ ...data, amountOrder: 1 }));
      toast.success(t('cart.message.add.success', { name: data?.name }));
   };

   return (
      <div className={cx('showcase')}>
         <div className={cx('showcase-banner')}>
            <Link to={`/product/${data?.id}`}>
               <Image
                  src={data?.image ? data?.image : images.jacket3}
                  alt={data?.name ? data?.name : 'Mens Winter Leathers Jackets'}
                  width="300"
                  className={cx('product-img', 'default')}
               />
               <Image
                  src={data?.image ? data?.image : images.jacket4}
                  alt="Mens Winter Leathers Jackets"
                  width="300"
                  className={cx('product-img', 'hover')}
               />
            </Link>
            <p className={cx('showcase-badge', 'angle', 'black')}>15%</p>

            <div className={cx('showcase-actions')}>
               <button
                  className={cx(
                     'btn-action',
                     favoriteProducts.filter((favProd) => favProd?.product?.id === data.id).length > 0
                        ? 'active'
                        : null,
                  )}
                  onClick={() => handleAddOrRemoveFavProduct(data)}
               >
                  <FontAwesomeIcon icon={faHeart} />
               </button>

               <Link to={`/product/${data?.id}`}>
                  <button className={cx('btn-action')}>
                     <FontAwesomeIcon icon={faEye} />
                  </button>
               </Link>

               <button className={cx('btn-action')}>
                  <FontAwesomeIcon icon={faRepeat} />
               </button>

               <button className={cx('btn-action')} onClick={() => handleAddProdToCart(data)}>
                  <FontAwesomeIcon icon={faCartPlus} />
               </button>
            </div>
         </div>

         <div className={cx('showcase-content')}>
            <Link to={'#'} className={cx('showcase-brand')}>
               <p className={cx('title')}>{data?.brand?.name ? data?.brand?.name : 'jacket'}</p>
               <span className={cx('quantity')}>{data?.quantity ? data?.quantity : 10}</span>
            </Link>

            <Link to={`/product/${data?.id}`}>
               <h3 className={cx('showcase-title')}>{data?.name ? data?.name : 'Mens Winter Leathers Jackets'}</h3>
            </Link>

            <div className={cx('showcase-rating')}>
               <FontAwesomeIcon icon={faStar} />
               <FontAwesomeIcon icon={faStar} />
               <FontAwesomeIcon icon={faStar} />
               <FontAwesomeIcon icon={faStar} />
               <FontAwesomeIcon icon={faStar} />
            </div>

            <div className={cx('price-box')}>
               <p className={cx('price')}>{data?.unitPrice ? formatCurrency('vi-VN', data?.unitPrice) : '48.00'}</p>
               <del>{formatCurrency('vi-VN', 760)}</del>
            </div>
         </div>
      </div>
   );
}

export default ProductCard;
