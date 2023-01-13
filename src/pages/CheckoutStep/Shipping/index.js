import classNames from 'classnames/bind';
import styles from './Shipping.module.scss';
import ProgressCheckout from '~/components/reuse/ProgressCheckout';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function CheckoutStepShipping() {
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
            <li className={cx('checkout-step-address', 'step-item', 'active')}>
               <div className={cx('checkout-step-title', 'step-title-address')}>Địa chỉ giao hàng</div>
               <div className={cx('step-content')}>
                  <div className={cx('checkout-step-address-right')}>
                     <h3>
                        <span>Thêm địa chỉ giao hàng</span>
                     </h3>
                     <form className={cx('form', 'form-shipping-address')}>
                        <div className={cx('fieldset', 'address')}>
                           {/* LAST NAME */}
                           <div
                              className={cx('field', '_required')}
                              data-bind="visible: visible, attr: {'name': element.dataScope}, css: additionalClasses"
                              name="shippingAddress.lastname"
                           >
                              <label className={cx('label')} data-bind="attr: { for: element.uid }" for="WPAI42W">
                                 <span data-bind="i18n: element.label">Họ</span>
                              </label>

                              <div className={cx('control')} data-bind="css: {'_with-tooltip': element.tooltip}">
                                 <input
                                    className={cx('input-text')}
                                    type="text"
                                    name="lastname"
                                    placeholder="Họ người nhận hàng"
                                    aria-required="true"
                                    aria-invalid="false"
                                    id="WPAI42W"
                                 />
                              </div>
                           </div>
                           {/* FIRST NAME */}
                           <div
                              className={cx('field', '_required')}
                              data-bind="visible: visible, attr: {'name': element.dataScope}, css: additionalClasses"
                              name="shippingAddress.lastname"
                           >
                              <label className={cx('label')} data-bind="attr: { for: element.uid }" for="WPAI42W">
                                 <span data-bind="i18n: element.label">Họ</span>
                              </label>

                              <div className={cx('control')} data-bind="css: {'_with-tooltip': element.tooltip}">
                                 <input
                                    className={cx('input-text')}
                                    type="text"
                                    name="lastname"
                                    placeholder="Họ người nhận hàng"
                                    aria-required="true"
                                    aria-invalid="false"
                                    id="WPAI42W"
                                 />
                              </div>
                           </div>
                           {/* PROVINCE/CITY */}
                           <div
                              className={cx('field', '_required')}
                              data-bind="visible: visible, attr: {'name': element.dataScope}, css: additionalClasses"
                              name="shippingAddress.lastname"
                           >
                              <label className={cx('label')} data-bind="attr: { for: element.uid }" for="WPAI42W">
                                 <span data-bind="i18n: element.label">Tỉnh/Thành phố</span>
                              </label>

                              <div className={cx('control')} data-bind="css: {'_with-tooltip': element.tooltip}">
                                 <select className={cx('select')} name="" id="">
                                    <option data-title="Chọn thành phố" value="">
                                       Chọn thành phố
                                    </option>
                                    <option data-title="Thành phố Hà Nội" value="2">
                                       Thành phố Hà Nội
                                    </option>
                                    <option data-title="Thành phố Hồ Chí Minh" value="1">
                                       Thành phố Hồ Chí Minh
                                    </option>
                                    <option data-title="Thành phố Đà Nẵng" value="3">
                                       Thành phố Đà Nẵng
                                    </option>
                                 </select>
                              </div>
                           </div>
                           {/* PHONE */}
                           <div
                              className={cx('field', '_required')}
                              data-bind="visible: visible, attr: {'name': element.dataScope}, css: additionalClasses"
                              name="shippingAddress.lastname"
                           >
                              <label className={cx('label')} data-bind="attr: { for: element.uid }" for="WPAI42W">
                                 <span data-bind="i18n: element.label">Số điện thoại</span>
                              </label>

                              <div className={cx('control')} data-bind="css: {'_with-tooltip': element.tooltip}">
                                 <input
                                    className={cx('input-text')}
                                    type="text"
                                    name="lastname"
                                    placeholder="Họ người nhận hàng"
                                    aria-required="true"
                                    aria-invalid="false"
                                    id="WPAI42W"
                                 />
                              </div>
                           </div>
                           {/* EMAIL */}
                           <div
                              className={cx('field')}
                              data-bind="visible: visible, attr: {'name': element.dataScope}, css: additionalClasses"
                              name="shippingAddress.lastname"
                           >
                              <label className={cx('label')} data-bind="attr: { for: element.uid }" for="WPAI42W">
                                 <span data-bind="i18n: element.label">Email</span>
                              </label>

                              <div className={cx('control')} data-bind="css: {'_with-tooltip': element.tooltip}">
                                 <input
                                    className={cx('input-text')}
                                    type="text"
                                    name="lastname"
                                    placeholder="Họ người nhận hàng"
                                    aria-required="true"
                                    aria-invalid="false"
                                    id="WPAI42W"
                                 />
                              </div>
                           </div>
                           {/* DISTRICT */}
                           <div
                              className={cx('field', '_required')}
                              data-bind="visible: visible, attr: {'name': element.dataScope}, css: additionalClasses"
                              name="shippingAddress.lastname"
                           >
                              <label className={cx('label')} data-bind="attr: { for: element.uid }" for="WPAI42W">
                                 <span data-bind="i18n: element.label">Chọn quận/huyện</span>
                              </label>

                              <div className={cx('control')} data-bind="css: {'_with-tooltip': element.tooltip}">
                                 <select className={cx('select')} name="" id="">
                                    <option data-title="Chọn thành phố" value="">
                                       Chọn quận/huyện
                                    </option>
                                    <option data-title="Thành phố Hà Nội" value="2">
                                       Thành phố Hà Nội
                                    </option>
                                    <option data-title="Thành phố Hồ Chí Minh" value="1">
                                       Thành phố Hồ Chí Minh
                                    </option>
                                    <option data-title="Thành phố Đà Nẵng" value="3">
                                       Thành phố Đà Nẵng
                                    </option>
                                 </select>
                              </div>
                           </div>
                           {/* ADDRESS */}
                           <div
                              className={cx('field', 'w-[505px]')}
                              data-bind="visible: visible, attr: {'name': element.dataScope}, css: additionalClasses"
                              name="shippingAddress.lastname"
                           >
                              <label className={cx('label')} data-bind="attr: { for: element.uid }" for="WPAI42W">
                                 <span data-bind="i18n: element.label">Địa chỉ</span>
                              </label>

                              <div className={cx('control')} data-bind="css: {'_with-tooltip': element.tooltip}">
                                 <input
                                    className={cx('input-text')}
                                    type="text"
                                    name="lastname"
                                    placeholder="Họ người nhận hàng"
                                    aria-required="true"
                                    aria-invalid="false"
                                    id="WPAI42W"
                                 />
                              </div>
                           </div>
                           {/* WARD */}
                           <div
                              className={cx('field', '_required')}
                              data-bind="visible: visible, attr: {'name': element.dataScope}, css: additionalClasses"
                              name="shippingAddress.lastname"
                           >
                              <label className={cx('label')} data-bind="attr: { for: element.uid }" for="WPAI42W">
                                 <span data-bind="i18n: element.label">Phường/Xã</span>
                              </label>

                              <div className={cx('control')} data-bind="css: {'_with-tooltip': element.tooltip}">
                                 <select className={cx('select')} name="" id="">
                                    <option data-title="Chọn thành phố" value="">
                                       Chọn phường/xã
                                    </option>
                                    <option data-title="Thành phố Hà Nội" value="2">
                                       Thành phố Hà Nội
                                    </option>
                                    <option data-title="Thành phố Hồ Chí Minh" value="1">
                                       Thành phố Hồ Chí Minh
                                    </option>
                                    <option data-title="Thành phố Đà Nẵng" value="3">
                                       Thành phố Đà Nẵng
                                    </option>
                                 </select>
                              </div>
                           </div>
                           {/* SUBMIT */}
                           <div className={cx('actions-toolbar', 'mt-[15px]')} id="shipping-method-buttons-container">
                              <div className={cx('primary-container')}>
                                 <button
                                    data-role="opc-continue"
                                    type="submit"
                                    className={cx('action-address', 'primary', 'disabled')}
                                    id="submit-shipping-address"
                                    disabled
                                 >
                                    <span data-bind="i18n: 'Confirm delivery to this address'">
                                       Xác nhận giao đến địa chỉ này
                                    </span>
                                 </button>
                              </div>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
            </li>
            <li className={cx('checkout-step-payment', 'no-active', 'step-item')}>
               <div className={cx('checkout-step-title', 'step-title-payment')}>Thanh toán</div>
            </li>
         </ul>
      </div>
   );
}

export default CheckoutStepShipping;
