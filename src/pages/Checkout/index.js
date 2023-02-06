import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import classNames from 'classnames/bind';

import { plusOrMinusItemAmountCart, resetItemAmountCart, removeCart } from '~/features/user/userSlice';
import { formatCurrency } from '~/utils';
import routes from '~/config/routes';
import styles from './Checkout.module.scss';
import images from '~/assets/images';
import Image from '~/components/reuse/Image';
import Loading from '~/components/reuse/Loading';

const cx = classNames.bind(styles);

function Checkout() {
   const dispatch = useDispatch();
   const userInfo = useSelector((state) => state.user.userInfo);
   const userIdStep = useSelector((state) => state.user.userIdStep);
   const userAddressShipping = useSelector((state) => state.user.userAddressShipping);
   const carts = useSelector((state) => state.user.userCarts);
   // Translation
   const { t } = useTranslation();
   // Loading
   const [loading, setLoading] = useState(false);
   // Redirect url
   const naviagate = useNavigate();

   const handleRedirectUrl = () => {
      setLoading(true);
      setTimeout(() => {
         if (!userInfo?.id) {
            console.log('Id Step', userIdStep);
            if (!userIdStep || userIdStep === '@login') {
               naviagate(`${routes.checkout}/@login`);
            } else if (userIdStep === '@shipping') {
               naviagate(`${routes.checkout}/@shipping`);
            } else if (userIdStep === '@payment' && userAddressShipping?.id) {
               naviagate(`${routes.checkout}/@payment`);
            } else {
               naviagate(`${routes.checkout}/@login`);
            }
         } else {
            if (userAddressShipping?.id) {
               console.log('Step payment');
               naviagate(`${routes.checkout}/@payment`);
            } else if (userIdStep === '@shipping') {
               naviagate(`${routes.checkout}/@shipping`);
            } else if (userIdStep === '@payment' && userAddressShipping?.id) {
               naviagate(`${routes.checkout}/@payment`);
            } else {
               naviagate(`${routes.checkout}/@login`);
            }
         }
      }, 1500);
   };

   const calcTotalPriceCart = (accumulator, currentValue) => {
      return accumulator + currentValue.amountOrder * currentValue.unitPrice;
   };

   const calcTotalQuantityItems = (accumulator, currentValue) => {
      return accumulator + currentValue.amountOrder;
   };

   // Handle add amount item
   const handlePlushOrMinusAmountItem = (amount, cart) => {
      let quanity = Number(amount) + cart.amountOrder;
      let quantityStock = Number(cart.quantity);
      if (quanity > quantityStock) {
         toast.warning(t('cart.message.add.warningMaxQty', { amount: quantityStock }));
         return;
      }
      if (Number(cart.amountOrder) + Number(amount) <= 0) {
         toast.warning(t('cart.message.add.warningMinQty', { amount: 1 }));
         return;
      }
      dispatch(plusOrMinusItemAmountCart({ id: cart.id, amountOrder: Number(amount) }));
   };
   const handleChanAmountItemFromInput = (amount, cart) => {
      if (amount <= 0 || !amount) {
         return;
      }
      dispatch(resetItemAmountCart({ id: cart.id, amountOrder: Number(amount) }));
   };
   const handleBlurAmountItemFromInput = (amount, cart) => {
      let quantity = Number(cart.quantity);
      if (Number(amount) > quantity) {
         dispatch(resetItemAmountCart({ id: cart.id, amountOrder: quantity }));
      }
      if (Number(amount) < 0 || !amount) {
         dispatch(resetItemAmountCart({ id: cart.id, amountOrder: 1 }));
      }
   };
   // Handle remove item into carts
   const handleRemoveItemIntoCarts = (id) => {
      dispatch(removeCart(id));
   };
   return (
      <div className={cx('wrapper')}>
         {carts.length > 0 ? (
            <div className={cx('page-main')}>
               <div className={cx('page-title-wrapper')}>
                  <h1 className={cx('page-title')}>
                     <span className={cx('base')}>{t('checkout.cart')}</span>
                  </h1>
               </div>
               {/* <div className={cx('columns')}>
         <div className={cx('column', 'main')}>
            <div className={cx('cart-container')}>
               <form className={cx('form', 'form-cart')}>
                  <div className={cx('cart', 'table-wrapper')}>
                     <div className={cx('cart-count')}>5 sản phẩm </div>
                  </div>
               </form>
            </div>
         </div>
      </div> */}
               <div className={cx('page-content-wrapper', 'flex', 'flex-wrap')}>
                  <div className={cx('cart-list', 'pr-[60px]', 'flex', 'flex-col')}>
                     <div className={cx('cart-count')}>
                        {carts.length === 1
                           ? t('checkout.product', { amount: carts.length })
                           : t('checkout.products', { amount: carts.length })}
                     </div>
                     <div className={cx('cart-item')}>
                        <div className={cx('item-info')}>
                           {carts.map((item) => (
                              <div className={cx('item')} key={item?.id}>
                                 <div className={cx('item__content')}>
                                    <Link to={`/product/${item.id}`} className={cx('product-item-photo')}>
                                       <Image src={images.thumbnail} alt="" className={cx('product-image-photo')} />
                                    </Link>
                                    <div className={cx('product-item-details')}>
                                       <strong className={cx('product-item-name')}>
                                          <Link to={`/product/${item.id}`}>{item?.name}</Link>
                                       </strong>
                                       <div className={cx('item-options')}>
                                          <div className={cx('item-option')}>
                                             {t('checkout.description')}: {item?.description}
                                          </div>
                                          {/* <div className={cx('item-option')}>SIZE: S</div> */}
                                       </div>
                                       <div className={cx('item-qty')}>
                                          <div className={cx('control-qty')}>
                                             <Link
                                                to="#"
                                                className={cx('btn-number', 'minus')}
                                                onClick={() => {
                                                   handlePlushOrMinusAmountItem(-1, item);
                                                }}
                                             ></Link>
                                             <input
                                                type="number"
                                                onChange={(e) => handleChanAmountItemFromInput(e.target.value, item)}
                                                onBlur={(e) => handleBlurAmountItemFromInput(e.target.value, item)}
                                                className={cx('input-text-qty')}
                                                value={item?.amountOrder}
                                                max={item?.quantity}
                                             />
                                             <Link
                                                to="#"
                                                className={cx('btn-number', 'plus')}
                                                onClick={() => {
                                                   handlePlushOrMinusAmountItem(1, item);
                                                }}
                                             ></Link>
                                          </div>
                                       </div>
                                       <div className={cx('item-price')}>
                                          <span className={cx('price')}>
                                             {formatCurrency('vi-VN', item?.unitPrice * item?.amountOrder)}
                                          </span>
                                       </div>
                                       <div className={cx('item-actions')}>
                                          <Link
                                             to="#"
                                             className={cx('action-delete')}
                                             onClick={() => {
                                                console.log('abc');
                                                handleRemoveItemIntoCarts(item?.id);
                                             }}
                                          ></Link>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
                  <div className={cx('sidebar-main')}>
                     <div className={cx('cart-summary-coupon')}>
                        {/* BLOCK DISCOUNT 1 */}
                        <div className={cx('block-discount')}>
                           <div className={cx('content')}>
                              <form action="">
                                 <div className={cx('block-discount-title')}>
                                    <strong>{t('checkout.codePromotion.coupon.title')}</strong>
                                 </div>
                                 <div className={cx('note')}>
                                    <span>{t('checkout.codePromotion.coupon.condition')}</span>
                                 </div>
                                 <div className={cx('coupon-input')}>
                                    <div className={cx('field')}>
                                       <div className={cx('control')}>
                                          <input
                                             onChange={() => {}}
                                             type="text"
                                             className={cx('input-text')}
                                             value=""
                                             placeholder={t('checkout.codePromotion.coupon.placeholder')}
                                          />
                                          <button className={cx('control-action')} value="Áp dụng" type="button">
                                             <span>{t('checkout.codePromotion.coupon.button')}</span>
                                          </button>
                                       </div>
                                    </div>
                                 </div>
                              </form>
                           </div>
                        </div>
                        {/* BLOCK DISCOUNT 2 */}
                        <div className={cx('block-discount')}>
                           <div className={cx('content')}>
                              <form action="">
                                 <div className={cx('block-discount-title')}>
                                    <strong>{t('checkout.codePromotion.phone.title')}</strong>
                                    <span>({t('checkout.codePromotion.phone.optional')})</span>
                                 </div>
                                 <div className={cx('note', 'customer-vip')}>
                                    <Link to={'#'}>{t('checkout.codePromotion.phone.condition')}</Link>
                                 </div>
                                 <div className={cx('coupon-input')}>
                                    <div className={cx('field')}>
                                       <div className={cx('control')}>
                                          <input
                                             onChange={() => {}}
                                             type="text"
                                             className={cx('input-text')}
                                             value=""
                                             placeholder={t('checkout.codePromotion.phone.placeholder')}
                                          />
                                          <button className={cx('control-action')} value="Áp dụng" type="button">
                                             <span>{t('checkout.codePromotion.phone.button')}</span>
                                          </button>
                                       </div>
                                    </div>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                     <div className={cx('cart-summary')}>
                        <strong className={cx('title')}>{t('checkout.subTotal.title')}</strong>
                        <div className={cx('cart-totals')}>
                           <div className={cx('table-wrapper')}>
                              <table className={cx('table-totals')}>
                                 <tbody>
                                    <tr className={cx('totals', 'qty')}>
                                       <th className={cx('mark')}>
                                          <span>{t('checkout.subTotal.quantity')}</span>
                                       </th>
                                       <td className={cx('amount')}>
                                          <span className={cx('price')}>{carts.reduce(calcTotalQuantityItems, 0)}</span>
                                       </td>
                                    </tr>
                                    <tr className={cx('totals', 'sub')}>
                                       <th className={cx('mark')}>
                                          <span>{t('checkout.subTotal.title')}</span>
                                       </th>
                                       <td className={cx('amount')}>
                                          <span className={cx('price')}>
                                             {formatCurrency('vi-VN', carts.reduce(calcTotalPriceCart, 0))}
                                          </span>
                                       </td>
                                    </tr>
                                    <tr className={cx('totals', 'shipping')}>
                                       <th className={cx('mark', 'pb-totals')}>
                                          <span>{t('checkout.subTotal.transportFee')}</span>
                                       </th>
                                       <td className={cx('amount', 'pb-totals')}>
                                          <span className={cx('price')}>0&nbsp;₫</span>
                                       </td>
                                    </tr>
                                    <tr className={cx('totals', 'grand')}>
                                       <th className={cx('mark', 'pt-totals')}>
                                          <span>{t('checkout.subTotal.total')}</span>
                                       </th>
                                       <td className={cx('amount', 'pt-totals')}>
                                          <strong>
                                             <span className={cx('price', 'text-3xl')}>
                                                {formatCurrency('vi-VN', carts.reduce(calcTotalPriceCart, 0))}
                                             </span>
                                          </strong>
                                       </td>
                                    </tr>
                                 </tbody>
                              </table>
                           </div>
                        </div>
                        <button className={cx('cart-btn-checkout')} type="button" onClick={handleRedirectUrl}>
                           <span>{t('checkout.subTotal.payment')}</span>
                           <span>{formatCurrency('vi-VN', carts.reduce(calcTotalPriceCart, 0))}</span>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         ) : (
            <div className={cx('products-empty')}>
               <h3>{t('checkout.empty')}</h3>
               <FontAwesomeIcon icon={faCartShopping} />
            </div>
         )}
         <Loading
            loading={loading}
            setLoading={setLoading}
            type={'spin'}
            color={'#ff6b6b'}
            width={'3%'}
            height={'3%'}
         />
      </div>
   );
}

export default Checkout;
