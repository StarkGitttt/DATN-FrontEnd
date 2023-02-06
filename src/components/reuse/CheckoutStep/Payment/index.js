import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import classNames from 'classnames/bind';

import { updateCurrentCheckoutStep, updateQRInfo } from '~/features/user/userSlice';
import { formatCurrency, toOrder } from '~/utils';
import { OrderAPI } from '~/api/EcommerceApi';
import { toast } from 'react-toastify';
import styles from './Payment.module.scss';
import Image from '~/components/reuse/Image';
import images from '~/assets/images';
import routes from '~/config/routes';
import CountDown from '../../CountDown';
import ProgressCheckout from '~/components/reuse/ProgressCheckout';
import Loading from '../../Loading';

const cx = classNames.bind(styles);

function CheckoutStepPayment() {
   const { t } = useTranslation();

   // Loading
   const [loading, setLoading] = useState(false);
   const [showCountdown, setShowCountdown] = useState(false);
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const userInfo = useSelector((state) => state.user.userInfo);
   const userAddressShipping = useSelector((state) => state.user.userAddressShipping);
   const carts = useSelector((state) => state.user.userCarts);
   // Handle validate form
   const formik = useFormik({
      initialValues: {
         shippingMethod: '0',
         note: '',
      },
      onSubmit: async (values) => {
         setLoading(true);
         await new Promise((r) => setTimeout(r, 500));
         const order = toOrder(carts, userAddressShipping?.id, values.note);
         console.log('Create order', order);
         if (values.shippingMethod === '1' && !userInfo?.id) {
            toast.warning(t('checkout.step.payment.notLogin'));
            setLoading(false);
            return;
         }
         if (values.shippingMethod === '1') {
            OrderAPI.createOrderMomoPayment(order)
               .then((res) => {
                  if (res.data) {
                     console.log('Order response: ', res.data);
                     toast.success(t('checkout.step.payment.success'));
                     setShowCountdown(true);
                     setLoading(false);
                     dispatch(updateCurrentCheckoutStep('@login'));
                     dispatch(updateQRInfo(res.data));
                  }
               })
               .catch((e) => {
                  setLoading(false);
                  console.log('Create order failed', e);
               });
         } else {
            OrderAPI.createOrderDirectPayment(order)
               .then((res) => {
                  if (res.data) {
                     console.log('Order response: ', res.data);
                     toast.success(t('checkout.step.payment.success'));
                     setShowCountdown(true);
                     setLoading(false);
                     dispatch(updateCurrentCheckoutStep('@login'));
                  }
               })
               .catch((e) => {
                  setLoading(false);
                  console.log('Create order failed', e);
               });
         }
      },
   });

   const calcTotalPriceCart = (accumulator, currentValue) => {
      return accumulator + currentValue.amountOrder * currentValue.unitPrice;
   };

   const calcTotalQuantityItems = (accumulator, currentValue) => {
      return accumulator + currentValue.amountOrder;
   };

   return (
      <>
         {!showCountdown && (
            <div className={cx('wrapper')}>
               <div className={cx('progress-bar-wrapper')}>
                  <Link to={'/checkout'} className={cx('view-cart')}>
                     <span>{t('checkout.step.progress.back')}</span>
                  </Link>
                  <ProgressCheckout />
               </div>
               <ul className={cx('checkout-steps')}>
                  <li className={cx('checkout-step-login', 'step-item', 'no-active')}>
                     <div className={cx('checkout-step-title', 'step-title-login')}>
                        {userInfo?.id ? `${userInfo?.firstName} ${userInfo?.lastName}` : t('checkout.step.login.title')}
                     </div>
                     <div className={cx('is-finish-step')}>
                        <span data-bind="i18n: 'Not logged in yet'">
                           {userInfo?.id ? `${userInfo?.email}` : t('checkout.step.login.notLogin')}
                        </span>
                        {!userInfo?.id && (
                           <button onClick={() => navigate(`${routes.checkout}/@login`)}>
                              {t('checkout.step.login.title')}
                           </button>
                        )}
                     </div>
                  </li>
                  <li className={cx('checkout-step-address', 'no-active', 'step-item')}>
                     <div className={cx('checkout-step-title', 'step-title-address')}>
                        {t('checkout.step.shipping.title')}
                     </div>
                     <div className={cx('address-ship-to')}>
                        <div className={cx('shipping-information-details')}>
                           <div className={cx('name')}>
                              {userAddressShipping &&
                                 `${userAddressShipping?.lastName} ${userAddressShipping?.firstName}`}
                           </div>
                           {userAddressShipping &&
                              `${userAddressShipping?.appartmentNo}, ${userAddressShipping?.ward}, ${userAddressShipping?.district}, ${userAddressShipping?.province}`}
                           <Link className={cx('phone')} to={'/'}>
                              {userAddressShipping && `${userAddressShipping?.phone}`}
                           </Link>
                        </div>
                        {/* <form data-bind="submit: navigateToBackStep" novalidate="novalidate"> */}
                        <div className={cx('actions-toolbar')}>
                           <div className={cx('primary')}>
                              <button
                                 data-role="opc-back"
                                 type="button"
                                 className={cx('button', 'action', 'back-address', 'primary')}
                                 onClick={() => navigate(`${routes.checkout}/@shipping`)}
                              >
                                 <span>{t('checkout.step.payment.change')}</span>
                              </button>
                           </div>
                        </div>
                        {/* </form> */}
                     </div>
                  </li>
                  <li className={cx('checkout-step-payment', 'active', 'step-item')}>
                     <div className={cx('checkout-step-title', 'step-title-payment')}>
                        {t('checkout.step.payment.title')}
                     </div>
                     <div className={cx('step-content')}>
                        <form
                           className={cx('form', 'payments')}
                           onSubmit={formik.handleSubmit}
                           onReset={formik.handleReset}
                        >
                           <fieldset className={cx('fieldset')}>
                              <div className={cx('checkout-shipping-method')}>
                                 <div
                                    className={cx('step-title')}
                                    data-role="title"
                                    data-bind="i18n: 'Shipping Methods'"
                                 >
                                    {t('checkout.step.payment.title')}
                                 </div>
                                 <table className={cx('table-checkout-shipping-method')}>
                                    <tbody>
                                       <tr className={cx('row')}>
                                          <td className={cx('col', 'col-method')}>
                                             <input
                                                type="radio"
                                                className={cx('radio')}
                                                defaultChecked
                                                name="radioo"
                                                onChange={() => {}}
                                             />
                                          </td>
                                          <td className={cx('col', 'col-method')}>
                                             {t('checkout.step.payment.economicalDelivery')}
                                          </td>
                                          <td className={cx('col', 'col-price')}>
                                             <span>0&nbsp;₫</span>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                              <div className={cx('checkout-shipping-method')}>
                                 <div
                                    className={cx('step-title')}
                                    data-role="title"
                                    data-bind="i18n: 'Shipping Methods'"
                                 >
                                    {t('checkout.step.payment.methodShipping')}
                                 </div>
                                 <table className={cx('table-checkout-shipping-method')}>
                                    <tbody>
                                       <tr className={cx('row')}>
                                          <td className={cx('col', 'col-method')}>
                                             <input
                                                type="radio"
                                                name="shippingMethod"
                                                id="shippingMethodOne"
                                                value={'0'}
                                                className={cx('radio')}
                                                defaultChecked
                                                onChange={formik.handleChange}
                                             />
                                          </td>
                                          <td className={cx('col', 'col-method')}>
                                             <label htmlFor="shippingMethodOne">
                                                {t('checkout.step.payment.optionShipping.optionOne')}
                                             </label>
                                          </td>
                                       </tr>
                                       <tr className={cx('row')}>
                                          <td className={cx('col', 'col-method')}>
                                             <input
                                                type="radio"
                                                id="shippingMethodTwo"
                                                name="shippingMethod"
                                                value={'1'}
                                                className={cx('radio')}
                                                onChange={formik.handleChange}
                                             />
                                          </td>
                                          <td className={cx('col', 'col-method')}>
                                             <label htmlFor="shippingMethodTwo">
                                                {t('checkout.step.payment.optionShipping.optionTwo')}
                                             </label>

                                             <div className={cx('payoo-redirect-message')}>
                                                <span>
                                                   {t('checkout.step.payment.optionShipping.optionTwoSuggestion')}
                                                </span>
                                             </div>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                              <div className={cx('checkout-shipping-method')}>
                                 <div
                                    className={cx('step-title')}
                                    data-role="title"
                                    data-bind="i18n: 'Shipping Methods'"
                                 >
                                    {t('checkout.step.payment.note')}
                                 </div>
                                 <input
                                    className={cx('control-textarea')}
                                    name="note"
                                    onChange={formik.handleChange}
                                    value={formik.values.note}
                                 ></input>
                              </div>
                           </fieldset>

                           <div className={cx('payment-products')}>
                              <div className={cx('items-in-cart')}>
                                 <div className={cx('title')}>
                                    <strong>
                                       <span>{t('home.sidebar.product.title')}</span>
                                    </strong>
                                 </div>
                                 <div className={cx('minicart-items')}>
                                    <div className={cx('minicart-items-wrapper')}>
                                       <ul className={cx('minicart-items')}>
                                          {/* PRODUCT IN CART 1 */}
                                          {carts &&
                                             carts.map((cart) => (
                                                <li className={cx('product-item')} key={cart?.id}>
                                                   <div className={cx('product')}>
                                                      <span className={cx('product-image-container')}>
                                                         <Image src={images.thumbnail} alt="" />
                                                      </span>
                                                      <div className={cx('product-item-details')}>
                                                         <div className={cx('product-item-inner')}>
                                                            <strong className={cx('product-item-name')}>
                                                               {cart?.name}
                                                            </strong>
                                                            <div className={cx('product-options')}>
                                                               {/* <dl className={cx('item-options')}>
                                                 <dt className={cx('label')}>{t('checkout.description')}</dt>
                                                 <dd className={cx('values')}>
                                                    LIGHT GREEN
                                                 </dd>
                                              </dl> */}
                                                               <div className={cx('details-qty')}>
                                                                  <div className={cx('qty-box')}>
                                                                     <span className={cx('qty')}>
                                                                        {t('cart.quantity')}
                                                                     </span>
                                                                     <span className={cx('value')}>
                                                                        {cart?.amountOrder}
                                                                     </span>
                                                                  </div>
                                                                  <div className={cx('total')}>
                                                                     <span className={cx('price')}>
                                                                        {formatCurrency(
                                                                           'vi-VN',
                                                                           cart?.amountOrder * cart?.unitPrice,
                                                                        )}
                                                                     </span>
                                                                  </div>
                                                               </div>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </li>
                                             ))}
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                              <div className={cx('sidebar-main')}>
                                 <div className={cx('cart-summary-coupon')}>
                                    {/* BLOCK DISCOUNT 1 */}
                                    <div className={cx('block-discount')}>
                                       <div className={cx('content')}>
                                          <div>
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
                                                         type="text"
                                                         className={cx('input-text')}
                                                         value=""
                                                         placeholder={t('checkout.codePromotion.coupon.placeholder')}
                                                         onChange={() => {}}
                                                      />
                                                      <button
                                                         className={cx('control-action')}
                                                         value="Áp dụng"
                                                         type="button"
                                                      >
                                                         <span>{t('checkout.codePromotion.coupon.button')}</span>
                                                      </button>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
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
                                                      <span className={cx('price')}>
                                                         {carts.reduce(calcTotalQuantityItems, 0)}
                                                      </span>
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
                                                            {formatCurrency(
                                                               'vi-VN',
                                                               carts.reduce(calcTotalPriceCart, 0),
                                                            )}
                                                         </span>
                                                      </strong>
                                                   </td>
                                                </tr>
                                             </tbody>
                                          </table>
                                       </div>
                                    </div>
                                    <button className={cx('cart-btn-checkout')} type="submit">
                                       <span>{t('checkout.subTotal.payment')}</span>
                                       <span>{formatCurrency('vi-VN', carts.reduce(calcTotalPriceCart, 0))}</span>
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </form>
                     </div>
                  </li>
               </ul>
            </div>
         )}
         {showCountdown && (
            <CountDown
               time={formik.values.shippingMethod === '0' ? Date.now() + 180000 : Date.now() + 180000}
               completedMessage={
                  formik.values.shippingMethod === '0'
                     ? t('checkout.countdown.success')
                     : t('checkout.step.payment.expMomo')
               }
            />
         )}
         <Loading
            loading={loading}
            setLoading={setLoading}
            type={'spin'}
            color={'#ff6b6b'}
            width={'3%'}
            height={'3%'}
         />
      </>
   );
}

export default CheckoutStepPayment;
