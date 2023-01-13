import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Payment.module.scss';
import ProgressCheckout from '~/components/reuse/ProgressCheckout';
import Image from '~/components/reuse/Image';
import images from '~/assets/images';
const cx = classNames.bind(styles);
function CheckoutStepPayment() {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('progress-bar-wrapper')}>
            <Link to={'#'} className={cx('view-cart')}>
               <span>Quay lại giỏ hàng</span>
            </Link>
            <ProgressCheckout />
         </div>
         <ul className={cx('checkout-steps')}>
            <li className={cx('checkout-step-login', 'step-item', 'no-active')}>
               <div className={cx('checkout-step-title', 'step-title-login')}>Đăng nhập</div>
               <div className={cx('is-finish-step')}>
                  <span data-bind="i18n: 'Not logged in yet'">Chưa đăng nhập</span>

                  <Link to={'/checkout/login'}>
                     <button data-bind="i18n: 'Login'">Đăng nhập</button>
                  </Link>
               </div>
            </li>
            <li className={cx('checkout-step-address', 'no-active', 'step-item')}>
               <div className={cx('checkout-step-title', 'step-title-address')}>Địa chỉ giao hàng</div>
               <div className={cx('address-ship-to')}>
                  <div className={cx('shipping-information-details')}>
                     <div className={cx('name')}>Loc Phan</div>
                     Dia Chi, Phường Điện Biên, Quận Ba Đình, Thành phố Hà Nội
                     <Link className={cx('phone')} to={'/'}>
                        0123456789
                     </Link>
                  </div>
                  <form data-bind="submit: navigateToBackStep" novalidate="novalidate">
                     <div className={cx('actions-toolbar')}>
                        <div className={cx('primary')}>
                           <button
                              data-role="opc-back"
                              type="submit"
                              className={cx('button', 'action', 'back-address', 'primary')}
                           >
                              <span>Thay đổi</span>
                           </button>
                        </div>
                     </div>
                  </form>
               </div>
            </li>
            <li className={cx('checkout-step-payment', 'active', 'step-item')}>
               <div className={cx('checkout-step-title', 'step-title-payment')}>Thanh toán</div>
               <div className={cx('step-content')}>
                  <form className={cx('form', 'payments')}>
                     <fieldset className={cx('fieldset')}>
                        <div className={cx('checkout-shipping-method')}>
                           <div className={cx('step-title')} data-role="title" data-bind="i18n: 'Shipping Methods'">
                              Phương thức vận chuyển
                           </div>
                           <table className={cx('table-checkout-shipping-method')}>
                              <tbody>
                                 <tr className={cx('row')}>
                                    <td className={cx('col', 'col-method')}>
                                       <input type="radio" className={cx('radio')} checked="true" />
                                    </td>
                                    <td className={cx('col', 'col-method')}>Giao Hang Tiet Kiem</td>
                                    <td className={cx('col', 'col-price')}>
                                       <span>0&nbsp;₫</span>
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                        <div className={cx('checkout-shipping-method')}>
                           <div className={cx('step-title')} data-role="title" data-bind="i18n: 'Shipping Methods'">
                              Phương thức thanh toán
                           </div>
                           <table className={cx('table-checkout-shipping-method')}>
                              <tbody>
                                 <tr className={cx('row')}>
                                    <td className={cx('col', 'col-method')}>
                                       <input
                                          type="radio"
                                          name="payment[method]"
                                          className={cx('radio')}
                                          checked="true"
                                       />
                                    </td>
                                    <td className={cx('col', 'col-method')}>Thanh toán khi nhận hàng</td>
                                 </tr>
                                 <tr className={cx('row')}>
                                    <td className={cx('col', 'col-method')}>
                                       <input type="radio" name="payment[method]" className={cx('radio')} />
                                    </td>
                                    <td className={cx('col', 'col-method')}>
                                       Thanh toán bằng thẻ ATM/Visa/Master/JCB/QRCode qua Payoo
                                       <div className={cx('payoo-redirect-message')}>
                                          <span data-bind="i18n: getDescription">
                                             Bạn sẽ chuyển sang cổng thanh toán Payoo để thanh toán
                                          </span>
                                       </div>
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                        <div className={cx('checkout-shipping-method')}>
                           <div className={cx('step-title')} data-role="title" data-bind="i18n: 'Shipping Methods'">
                              Ghi chú đơn hàng
                           </div>
                           <textarea className={cx('control-textarea')}></textarea>
                        </div>
                     </fieldset>
                  </form>
                  <div className={cx('payment-products')}>
                     <div className={cx('items-in-cart')}>
                        <div className={cx('title')}>
                           <strong>
                              <span>Sản phẩm</span>
                           </strong>
                        </div>
                        <div className={cx('minicart-items')}>
                           <div className={cx('minicart-items-wrapper')}>
                              <ul className={cx('minicart-items')}>
                                 {/* PRODUCT IN CART 1 */}
                                 <li className={cx('product-item')}>
                                    <div className={cx('product')}>
                                       <span className={cx('product-image-container')}>
                                          <Image src={images.thumbnail} alt="" />
                                       </span>
                                       <div className={cx('product-item-details')}>
                                          <div className={cx('product-item-inner')}>
                                             <strong className={cx('product-item-name')}>
                                                Đầm Midi Nữ Tay Ngắn Phối Túi Form Straight - 10F22DREW004
                                             </strong>
                                             <div className={cx('product-options')}>
                                                <dl className={cx('item-options')}>
                                                   <dt className={cx('label')}>MÀU</dt>
                                                   <dd className={cx('values')}>LIGHT GREEN</dd>
                                                </dl>
                                                <dl className={cx('item-options')}>
                                                   <dt className={cx('label')}>SIZE</dt>
                                                   <dd className={cx('values')}>S</dd>
                                                </dl>
                                                <div className={cx('details-qty')}>
                                                   <span className={cx('qty')}>SL</span>
                                                   <span className={cx('value')}>1</span>
                                                </div>
                                             </div>
                                             <div className={cx('subtotal')}>
                                                <span className={cx('price')}>579.000&nbsp;₫</span>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </li>
                                 {/* PRODUCT IN CART 2 */}
                                 {/* <li className={cx('product-item')}>
                                    <div className={cx('product')}>
                                       <span className={cx('product-image-container')}>
                                          <Image src={images.thumbnail} alt="" />
                                       </span>
                                       <div className={cx('product-item-details')}>
                                          <div className={cx('product-item-inner')}>
                                             <strong className={cx('product-item-name')}>
                                                Đầm Midi Nữ Tay Ngắn Phối Túi Form Straight - 10F22DREW004
                                             </strong>
                                             <div className={cx('product-options')}>
                                                <dl className={cx('item-options')}>
                                                   <dt className={cx('label')}>MÀU</dt>
                                                   <dd className={cx('values')}>LIGHT GREEN</dd>
                                                </dl>
                                                <dl className={cx('item-options')}>
                                                   <dt className={cx('label')}>SIZE</dt>
                                                   <dd className={cx('values')}>S</dd>
                                                </dl>
                                                <div className={cx('details-qty')}>
                                                   <span className={cx('qty')}>SL</span>
                                                   <span className={cx('value')}>1</span>
                                                </div>
                                             </div>
                                             <div className={cx('subtotal')}>
                                                <span className={cx('price')}>579.000&nbsp;₫</span>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </li> */}
                              </ul>
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
                                       <strong>NHẬP MÃ COUPON ƯU ĐÃI</strong>
                                    </div>
                                    <div className={cx('note')}>
                                       <span>Chỉ sử dụng 1 mã cho 1 đơn hàng</span>
                                    </div>
                                    <div className={cx('coupon-input')}>
                                       <div className={cx('field')}>
                                          <div className={cx('control')}>
                                             <input
                                                type="text"
                                                className={cx('input-text')}
                                                value=""
                                                placeholder="Nhập mã giảm giá"
                                             />
                                             <button className={cx('control-action')} value="Áp dụng" type="button">
                                                <span>Áp dụng</span>
                                             </button>
                                          </div>
                                       </div>
                                    </div>
                                 </form>
                              </div>
                           </div>
                        </div>
                        <div className={cx('cart-summary')}>
                           <strong className={cx('title')}>Tạm tính</strong>
                           <div className={cx('cart-totals')}>
                              <div className={cx('table-wrapper')}>
                                 <table className={cx('table-totals')}>
                                    <tbody>
                                       <tr className={cx('totals', 'qty')}>
                                          <th className={cx('mark')}>
                                             <span>Số lượng</span>
                                          </th>
                                          <td className={cx('amount')}>
                                             <span className={cx('price')}>1</span>
                                          </td>
                                       </tr>
                                       <tr className={cx('totals', 'sub')}>
                                          <th className={cx('mark')}>
                                             <span>Tạm tính</span>
                                          </th>
                                          <td className={cx('amount')}>
                                             <span className={cx('price')}>579.000&nbsp;₫</span>
                                          </td>
                                       </tr>
                                       <tr className={cx('totals', 'shipping')}>
                                          <th className={cx('mark', 'pb-totals')}>
                                             <span>Phí vận chuyển</span>
                                          </th>
                                          <td className={cx('amount', 'pb-totals')}>
                                             <span className={cx('price')}>0&nbsp;₫</span>
                                          </td>
                                       </tr>
                                       <tr className={cx('totals', 'grand')}>
                                          <th className={cx('mark', 'pt-totals')}>
                                             <span>Tổng số</span>
                                          </th>
                                          <td className={cx('amount', 'pt-totals')}>
                                             <strong>
                                                <span className={cx('price', 'text-3xl')}>579.000&nbsp;₫</span>
                                             </strong>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                           </div>
                           <button className={cx('cart-btn-checkout')}>
                              <span>Thanh toán</span>
                              <span>579.000&nbsp;₫</span>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </li>
         </ul>
      </div>
   );
}

export default CheckoutStepPayment;
