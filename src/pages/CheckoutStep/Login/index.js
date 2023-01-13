import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import ProgressCheckout from '~/components/reuse/ProgressCheckout';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function CheckoutStepLogin() {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('progress-bar-wrapper')}>
            <Link to={'#'} className={cx('view-cart')}>
               <span>Quay lại giỏ hàng</span>
            </Link>
            <ProgressCheckout />
         </div>
         <ul className={cx('checkout-steps')}>
            <li className={cx('checkout-step-login', 'step-item')}>
               <div className={cx('checkout-step-title', 'step-title-login')}>Đăng nhập</div>
               <div className={cx('login-container')}>
                  <div className={cx('block', 'block-customer-login')}>
                     <div className={cx('block-title')}>
                        <h3>
                           <span>Đăng nhập</span>
                        </h3>
                        <span>
                           <span>Đăng nhập thành viên Routine</span>
                           <br />
                           <span>để nhận nhiều những chương trình ưu đãi hấp dẫn</span>
                        </span>
                     </div>
                     <form className={cx('form', 'checkout-form-login')}>
                        <fieldset className={cx('fieldset')}>
                           <div className={cx('field', 'required')}>
                              <label className={cx('label')}>
                                 <span data-bind="i18n: 'Email/ Telephone'">Email/ Số điện thoại</span>
                              </label>
                              <div className={cx('control', '_with-tooltip')}>
                                 <input
                                    className={cx('input-text')}
                                    type="text"
                                    name="username"
                                    data-validate="{required:true, 'validate-email-telephone':true}"
                                    id="checkout-login-email"
                                 />
                              </div>
                           </div>
                           <div className={cx('field', 'required')}>
                              <label className={cx('label')}>
                                 <span data-bind="i18n: 'Email/ Telephone'">Mật khẩu</span>
                              </label>
                              <div className={cx('control', '_with-tooltip')}>
                                 <input
                                    className={cx('input-text')}
                                    type="text"
                                    name="password"
                                    data-validate="{required:true, 'validate-email-telephone':true}"
                                    id="checkout-login-email"
                                 />
                              </div>
                              <div className={cx('actions-toolbar')}>
                                 <div className={cx('secondary-container')}>
                                    <Link
                                       to={'/'}
                                       className={cx('action', 'remind', 'open_modal_forgot_password_checkout')}
                                    >
                                       <span data-bind="i18n: 'Forgot password?'">Quên mật khẩu?</span>
                                    </Link>
                                 </div>
                                 <div className={cx('primary-container')}>
                                    <button
                                       type="submit"
                                       className={cx('action-login', 'primary')}
                                       data-action="checkout-method-login"
                                    >
                                       <span data-bind="i18n: 'Login'">Đăng nhập</span>
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </fieldset>
                     </form>
                  </div>
                  <div className={cx('block', 'block-new-customer')}>
                     <div className={cx('block-title')}>
                        <h3>
                           <span>Mua hàng không cần đăng nhập</span>
                        </h3>
                        <span>
                           <span>Chào mừng! Bạn không cần tạo tài khoản</span>
                           <br />
                           <span>để đặt hàng</span>
                        </span>
                     </div>
                     <div className={cx('primary-container')}>
                        <Link to={'/checkout/shipping'}>
                           <button
                              type="submit"
                              className={cx('action-login', 'primary')}
                              data-action="checkout-method-login"
                           >
                              <span data-bind="i18n: 'Login'">XÁC NHẬN MUA HÀNG KHÔNG ĐĂNG NHẬP</span>
                           </button>
                        </Link>
                     </div>
                  </div>
               </div>
            </li>
            <li className={cx('checkout-step-address', 'no-active', 'step-item')}>
               <div className={cx('checkout-step-title', 'step-title-address')}>Địa chỉ giao hàng</div>
            </li>
            <li className={cx('checkout-step-payment', 'no-active', 'step-item')}>
               <div className={cx('checkout-step-title', 'step-title-payment')}>Thanh toán</div>
            </li>
         </ul>
      </div>
   );
}

export default CheckoutStepLogin;
