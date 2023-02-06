import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import classNames from 'classnames/bind';

import styles from './Login.module.scss';
import ProgressCheckout from '~/components/reuse/ProgressCheckout';
import Loading from '../../Loading';
import routes from '~/config/routes';
import constants_local from '~/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { UserAPI } from '~/api/EcommerceApi';
import { initialFavoriteProduct, addUserInfo, updateCurrentCheckoutStep } from '~/features/user/userSlice';

const cx = classNames.bind(styles);

function CheckoutStepLogin() {
   const { t } = useTranslation();
   const [showPassword, setShowPassword] = useState(false);
   const [loading, setLoading] = useState();
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const handleRedirectUrl = (path, delay = 0) => {
      if (delay > 0) {
         setLoading(true);
      }
      setTimeout(() => {
         dispatch(updateCurrentCheckoutStep('@shipping'));
         navigate(path);
      }, delay);
   };

   // Handle validate form
   const formik = useFormik({
      initialValues: {
         email: '',
         password: '',
      },
      validationSchema: Yup.object({
         email: Yup.string().required(constants_local.ERROR_REQUIRED_MESSAGE),
         password: Yup.string()
            .min(8, t('form.login.invalidPasswordLength', { length: 8 }))
            .required(constants_local.ERROR_REQUIRED_MESSAGE),
      }),
      onSubmit: (values, { resetForm }) => {
         setLoading(true);
         setTimeout(() => {
            UserAPI.login(values)
               .then((res) => {
                  if (res.data) {
                     // Set token to localstorage
                     localStorage.setItem('auth_token', res.data);
                     resetForm();
                     // Get info user from token
                     const fetchUserInfo = async () =>
                        await UserAPI.info()
                           .then((res) => {
                              if (res.data) {
                                 dispatch(addUserInfo(res.data));
                                 console.log('User info', res.data);
                              }
                           })
                           .catch((e) => {
                              console.log('Get user info failed', e);
                           });
                     fetchUserInfo();
                     // Get favorite products
                     const fetchFavoriteProducts = async () =>
                        await UserAPI.favoriteProducts()
                           .then((res) => {
                              if (res.data) {
                                 console.log('Favorite products: ', res.data?.content);
                                 dispatch(initialFavoriteProduct(res.data?.content));
                              }
                           })
                           .catch((e) => {
                              console.log('Get favorite products failed ', e);
                           });
                     fetchFavoriteProducts();
                     toast.success(t('form.login.success'));
                     dispatch(updateCurrentCheckoutStep('@shipping'));
                     handleRedirectUrl(`${routes.checkout}/@shipping`);
                  }
               })
               .catch((e) => {
                  if (e?.response?.data?.message) {
                     toast.warning(e?.response?.data?.message);
                  }
                  console.log('Login failed', e);
                  setLoading(false);
               });
         }, 500);
      },
   });

   return (
      <div className={cx('wrapper')}>
         <div className={cx('progress-bar-wrapper')}>
            <Link to={'/checkout'} className={cx('view-cart')}>
               <span>{t('checkout.step.progress.back')}</span>
            </Link>
            <ProgressCheckout />
         </div>
         <ul className={cx('checkout-steps')}>
            <li className={cx('checkout-step-login', 'step-item')}>
               <div className={cx('checkout-step-title', 'step-title-login')}>{t('checkout.step.login.title')}</div>
               <div className={cx('login-container')}>
                  <div className={cx('block', 'block-customer-login')}>
                     <div className={cx('block-title')}>
                        <h3>
                           <span>{t('checkout.step.login.title')}</span>
                        </h3>
                        <span>
                           <span>{t('checkout.step.login.member')}</span>
                           <br />
                           <span>{t('checkout.step.login.subTitle')}</span>
                        </span>
                     </div>
                     <form
                        className={cx('form', 'checkout-form-login')}
                        onSubmit={formik.handleSubmit}
                        onReset={formik.handleReset}
                     >
                        <fieldset className={cx('fieldset')}>
                           <div className={cx('field', 'required')}>
                              <label className={cx('label')}>
                                 <span data-bind="i18n: 'Email/ Telephone'">
                                    {t('checkout.step.login.labelUsername')}
                                 </span>
                              </label>
                              <div className={cx('control', '_with-tooltip')}>
                                 <input
                                    className={cx('input-text')}
                                    id="email"
                                    name="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    placeholder={t('form.login.placeholderUsername')}
                                 />
                              </div>
                              {formik.touched.email && formik.errors.email ? (
                                 <span className="error-message">{formik.errors.email}</span>
                              ) : null}
                           </div>
                           <div className={cx('field', 'required')}>
                              <label className={cx('label')}>
                                 <span data-bind="i18n: 'Email/ Telephone'">
                                    {t('checkout.step.login.labelPassword')}
                                 </span>
                              </label>
                              <div className={cx('control', '_with-tooltip')}>
                                 <div className={cx('control-icon', 'relative')}>
                                    <input
                                       className={cx('input-text')}
                                       type={showPassword ? 'text' : 'password'}
                                       id="password"
                                       name="password"
                                       placeholder={t('form.login.placeholderPassword')}
                                       onChange={formik.handleChange}
                                       onBlur={formik.handleBlur}
                                       value={formik.values.password}
                                       autoComplete="on"
                                    />
                                    {formik.values.password.length > 0 && (
                                       <FontAwesomeIcon
                                          icon={showPassword ? faEye : faEyeSlash}
                                          className={cx('show-password')}
                                          onClick={() => setShowPassword(!showPassword)}
                                       />
                                    )}
                                 </div>
                                 {formik.touched.password && formik.errors.password ? (
                                    <span className="error-message">{formik.errors.password}</span>
                                 ) : null}
                              </div>
                              <div className={cx('actions-toolbar')}>
                                 <div className={cx('secondary-container')}>
                                    <Link
                                       to={'/'}
                                       className={cx('action', 'remind', 'open_modal_forgot_password_checkout')}
                                    >
                                       <span data-bind="i18n: 'Forgot password?'">
                                          {t('checkout.step.login.forgotPassword')}?
                                       </span>
                                    </Link>
                                 </div>
                                 <div className={cx('primary-container')}>
                                    <button
                                       type="submit"
                                       className={cx('action-login', 'primary')}
                                       data-action="checkout-method-login"
                                    >
                                       <span data-bind="i18n: 'Login'">{t('checkout.step.login.button')}</span>
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
                           <span>{t('checkout.step.login.option.title')}</span>
                        </h3>
                        <span>
                           <span>{t('checkout.step.login.option.subTitleWelcome')}</span>
                           <br />
                           <span>{t('checkout.step.login.option.subTitleOrder')}</span>
                        </span>
                     </div>
                     <div className={cx('primary-container')}>
                        <button
                           type="button"
                           className={cx('action-login', 'primary')}
                           data-action="checkout-method-login"
                           onClick={() => handleRedirectUrl(`${routes.checkout}/@shipping`, 1000)}
                        >
                           <span data-bind="i18n: 'Login'">{t('checkout.step.login.option.button')}</span>
                        </button>
                     </div>
                  </div>
               </div>
            </li>
            <li className={cx('checkout-step-address', 'no-active', 'step-item')}>
               <div className={cx('checkout-step-title', 'step-title-address')}>
                  {t('checkout.step.shipping.title')}
               </div>
            </li>
            <li className={cx('checkout-step-payment', 'no-active', 'step-item')}>
               <div className={cx('checkout-step-title', 'step-title-payment')}>{t('checkout.step.payment.title')}</div>
            </li>
         </ul>
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

export default CheckoutStepLogin;
