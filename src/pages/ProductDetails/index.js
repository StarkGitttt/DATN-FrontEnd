import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import 'swiper/css/bundle';

import { addCart } from '~/features/user/userSlice';
import { ProductAPI } from '~/api/EcommerceApi';
import { formatCurrency } from '~/utils';
import styles from './ProductDetails.module.scss';
import images from '~/assets/images';
import Image from '~/components/reuse/Image';
import ProductCard from '~/components/reuse/ProductCard';
import constants_local from '~/constants';
import routes from '~/config/routes';
import { toast } from 'react-toastify';

const cx = classNames.bind(styles);

function ProductDetails() {
   const carts = useSelector((state) => state.user.userCarts);
   const dispatch = useDispatch();
   const { t } = useTranslation();

   const [orderProdQty, setOrderProdQty] = useState(1);
   const [isValidOrder, setIsValidOrder] = useState(true);
   const [product, setProduct] = useState({});
   const [productsRandom, setProductsRandom] = useState([]);
   const [totalSoldProduct, setTotalSoldProduct] = useState(0);
   const { productId } = useParams();

   const handleChanageAmountFromInput = (amount) => {
      if (amount <= 0 || !amount || amount > product?.quantity) {
         setIsValidOrder(false);
         console.log('Not valid');
      } else {
         setIsValidOrder(true);
         console.log('Valid');
      }
      setOrderProdQty(amount);
   };

   const handleAddCart = (data) => {
      const storeCart = carts.find((cart) => cart.id === data.id);
      if (storeCart && Number(storeCart.amountOrder) + Number(orderProdQty) > product.quantity) {
         toast.warning(
            t('cart.message.add.waringMaxQtyFromStore', {
               amount: Number(storeCart.amountOrder) + Number(orderProdQty),
            }),
         );
         return;
      }
      dispatch(addCart({ ...data, amountOrder: Number(orderProdQty) }));
      console.log('Data add cart: ', data);
      toast.success(t('cart.message.add.success', { name: data.name }));
   };

   useEffect(() => {
      ProductAPI.getOne(
         {
            params: {},
         },
         productId,
      )
         .then((res) => {
            if (res.data) {
               setProduct(res.data);
            }
         })
         .catch((e) => console.log(`Get product ${productId} failed `, e));

      ProductAPI.totalSoldByProductId({}, productId)
         .then((res) => {
            if (res.data) {
               setTotalSoldProduct(res.data);
            }
         })
         .catch((e) => console.log(`Get total sold product ${productId} failed `, e));

      ProductAPI.randomProducts({
         params: {
            id: productId,
            limit: constants_local.PRODUCT_ITEM_LIMIT,
         },
      })
         .then((res) => {
            if (res.data) {
               console.log('Random products ', res.data);
               setProductsRandom(res.data);
            }
         })
         .catch((e) => console.log(`Get random products failed `, e));
   }, [productId]);

   const calcStockProcess = () => {
      const totalProduct = totalSoldProduct + product.quantity;
      return (totalSoldProduct * 100) / totalProduct;
   };

   return (
      <div className={cx('wrapper')}>
         {product?.id ? (
            <div className={cx('single-product')}>
               <div className={cx('breadcrumb')}>
                  <ul className={cx('flex', 'items-center')}>
                     <li className={cx('breadcrumb-item')}>
                        <Link to={'/'}>{t('details.product.breadcrumb.stepOne')}</Link>
                     </li>
                     <li className={cx('breadcrumb-item')}>
                        <Link to={`${routes.category}/${product?.category?.id}`}>
                           {product?.category?.name.toLowerCase()}
                        </Link>
                     </li>
                     <li className={cx('breadcrumb-item')}>
                        <Link to={`/product/${product?.id}`}>{product.name.toLowerCase()}</Link>
                     </li>
                  </ul>
               </div>
               {/* custom-column */}
               <div className={cx('')}>
                  <div className={cx('products', 'one')}>
                     <div className={cx('flex')}>
                        <div className={cx('position-row', 'basis-2/4')}>
                           <div className={cx('flex', 'h-full')}>
                              <div className={cx('price')}>
                                 <span className={cx('discount')}>
                                    32%
                                    <br />
                                    OFF
                                 </span>
                              </div>
                              <div className={cx('big-image')}>
                                 <div className={cx('big-image-wrapper', 'swiper-wrapper')}>
                                    <div className={cx('image-show', 'swiper-slide')}>
                                       <a href="/">
                                          <Image src={images.thumbnail} />
                                       </a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className={cx('pl-[15px]', 'relative', 'basis-2/4')}>
                           <div className={cx('flex', 'flex-col')}>
                              <h1 className={cx('mini-text')}>{product.name}</h1>
                              <div className={cx('content')}>
                                 <div className={cx('rating', 'flex', 'my-8', 'gap-[10px]')}>
                                    <div className={cx('starts', 'mr-4')}>
                                       <FontAwesomeIcon icon={faStar} className={cx('icon-item')} />
                                       <FontAwesomeIcon icon={faStar} className={cx('icon-item')} />
                                       <FontAwesomeIcon icon={faStar} className={cx('icon-item')} />
                                       <FontAwesomeIcon icon={faStar} className={cx('icon-item')} />
                                       <FontAwesomeIcon icon={faStar} className={cx('icon-item')} />
                                    </div>
                                    <a href="/" className={cx('mini-text', 'mr-4')}>
                                       2.251 reviews
                                    </a>
                                    <a href="/" className={cx('add-review', 'mini-text')}>
                                       Add Your Review
                                    </a>
                                 </div>
                                 <div className={cx('stock-sku', 'my-10', 'flex', 'gap-[20px]', 'items-center')}>
                                    <span className={cx('available', 'mini-text')}>{product?.category?.name}</span>
                                    <span className={cx('sku', 'mini-text')}>PRD-{product.id}</span>
                                 </div>
                                 <div className={cx('price')}>
                                    <h3 className={cx('mini-text')}>{t('details.product.price')}</h3>
                                    <span className={cx('current')}>{formatCurrency('vi-VN', product.unitPrice)}</span>
                                 </div>
                                 <div className={cx('showcase-status', 'py-5')}>
                                    <div className={cx('wrapper')}>
                                       <p>
                                          {t('details.product.sold')}: <b>{totalSoldProduct}</b>
                                       </p>

                                       <p>
                                          {t('details.product.stock')}: <b>{product.quantity}</b>
                                       </p>
                                    </div>

                                    <div
                                       className={cx('showcase-status-bar')}
                                       style={{ '--stock-process': `${calcStockProcess()}%` }}
                                    ></div>
                                 </div>
                                 {/* <div className={cx('color')}>
                                    <p className={cx('mini-text', 'mb-2.5')}>{t('details.product.description')}</p>
                                    <div className={cx('descriptions', 'flex')}>
                                       <p className={cx('description-item', 'active')}>Product Description</p>
                                       <p className={cx('description-item')}>Product Description</p>
                                       {product?.description}
                                    </div>
                                 </div> */}

                                 <div className={cx('actions')}>
                                    <div className={cx('qty-control', 'flex', 'items-center')}>
                                       <button
                                          onClick={() =>
                                             setOrderProdQty((prevOrderQty) => {
                                                if (prevOrderQty - 1 <= 0) {
                                                   setIsValidOrder(false);
                                                } else {
                                                   setIsValidOrder(true);
                                                }
                                                return Number(prevOrderQty) - 1;
                                             })
                                          }
                                          className={cx('minus', 'circle')}
                                          style={{
                                             color: 'black',
                                          }}
                                       >
                                          -
                                       </button>
                                       <input
                                          value={orderProdQty}
                                          type="number"
                                          min={1}
                                          style={{
                                             color: 'black',
                                          }}
                                          onChange={(e) => handleChanageAmountFromInput(e.target.value)}
                                       />
                                       <button
                                          className={cx('plus', 'circle')}
                                          style={{
                                             color: 'black',
                                          }}
                                          onClick={() =>
                                             setOrderProdQty((prevOrderQty) => {
                                                if (prevOrderQty + 1 > product.quantity) {
                                                   setIsValidOrder(false);
                                                } else {
                                                   setIsValidOrder(true);
                                                }
                                                return Number(prevOrderQty) + 1;
                                             })
                                          }
                                       >
                                          +
                                       </button>
                                    </div>
                                    <div className={cx('button-cart')}>
                                       <button
                                          className={cx('secondary-button', !isValidOrder ? 'disabled' : '')}
                                          onClick={() => {
                                             handleAddCart(product);
                                          }}
                                          disabled={!isValidOrder}
                                       >
                                          {t('cart.addCart')}
                                       </button>
                                    </div>
                                 </div>
                                 {/* <div className={cx('wish-share')}>
                                    <ul className={cx('flex', 'items-center', 'second-links')}>
                                       <li>
                                          <a href="/">
                                             <span className={cx('icon-large')}>
                                                <FontAwesomeIcon icon={faHeart} />
                                             </span>
                                             <span>Wishlist</span>
                                          </a>
                                       </li>
                                       <li>
                                          <a href="/">
                                             <span className={cx('icon-large')}>
                                                <FontAwesomeIcon icon={faShare} />
                                             </span>
                                             <span>Share</span>
                                          </a>
                                       </li>
                                    </ul>
                                 </div> */}
                                 <div className={cx('description', 'custom-collapse')}>
                                    <ul>
                                       <li className={cx('has-child', 'expand')}>
                                          <p className={cx('icon-small')}>{t('details.product.infomation')}</p>
                                          <ul className={cx('content', 'js-content')}>
                                             <li>
                                                <span>{t('details.product.description')}</span>
                                                <span>{product.description.toLowerCase()}</span>
                                             </li>
                                          </ul>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         ) : (
            <div className={cx('no-result', 'mt-10')}>
               <p>{t('details.product.notFound')}</p>
               <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
         )}
         {/* RELATED PRODUCTS */}
         <div className={cx('related-product', 'flex', 'flex-col', 'justify-center', 'mt-[40px]')}>
            <div className={cx('related-heading')}>
               <h3 className={cx('title')}>{t('details.product.related')}</h3>
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
                  {productsRandom.map((item) => (
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

export default ProductDetails;
