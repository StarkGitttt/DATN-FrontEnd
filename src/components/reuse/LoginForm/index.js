import { Link } from 'react-router-dom';
import { useCallback, useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEye, faEyeSlash, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import { initialFavoriteProduct, addUserInfo } from '~/features/user/userSlice';
import { UserAPI } from '~/api/EcommerceApi';
import styles from './LoginForm.module.scss';
import constants_local from '~/constants';
import Loading from '../Loading';
import GenCodeForm from '../GenCodeForm';

const cx = classNames.bind(styles);

function LoginForm({ showForm, setShowForm }) {
   const { t } = useTranslation();

   // Handle add User Info
   const dispatch = useDispatch();

   const [loading, setLoading] = useState(false);
   const [showPassword, setShowPassword] = useState(false);
   const [showFormResetPw, setShowFormResetPw] = useState(false);
   const formRef = useRef();
   const closeForm = (e) => {
      if (formRef.current === e.target) setShowForm(false);
   };

   const keyPress = useCallback(
      (e) => {
         if (e.key === 'Escape' && showForm) setShowForm(false);
      },
      [setShowForm, showForm],
   );

   useEffect(() => {
      document.addEventListener('keydown', keyPress);
      // call clean up func to clean event avoid out of memory;
      return () => document.removeEventListener('keydown', keyPress);
   }, [keyPress]);

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
                     setShowForm(false);
                     toast.success(t('form.login.success'));
                     // Get info user from token
                     UserAPI.info()
                        .then((res) => {
                           if (res.data) {
                              dispatch(addUserInfo(res.data));
                              console.log('User info', res.data);
                           }
                        })
                        .catch((e) => {
                           console.log('Get user info failed', e);
                        });
                     UserAPI.favoriteProducts()
                        .then((res) => {
                           if (res.data) {
                              console.log('Favorite products: ', res.data?.content);
                              dispatch(initialFavoriteProduct(res.data?.content));
                           }
                        })
                        .catch((e) => {
                           console.log('Get favorite products failed ', e);
                        });
                     setLoading(false);
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
      <>
         {showForm ? (
            <div className={cx('form-container')} ref={formRef} onClick={closeForm}>
               <div className={cx('form-wrap', 'pt-[25px]', 'pl-[25px]', 'pr-[25px]', 'pb-[14px]')}>
                  <form
                     className={cx('login-form', 'validate-form')}
                     onSubmit={formik.handleSubmit}
                     onReset={formik.handleReset}
                  >
                     <span className={cx('login-form-title', 'pb-[25px]')}>{t('form.login.title')}</span>
                     <FontAwesomeIcon
                        icon={faXmark}
                        className={cx('close-form')}
                        onClick={() => setShowForm(!showForm)}
                     />
                     <div className={cx('form-control')}>
                        <div className={cx('wrap-input', 'validate-input')} data-validate="Username is reauired">
                           <span className={cx('label-input')}>{t('form.login.fieldUsername')}</span>
                           <input
                              className={cx('input')}
                              id="email"
                              name="email"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              type="text"
                              placeholder="Type your username"
                              value={formik.values.email}
                           />
                           <span className={cx('focus-input')}></span>
                        </div>
                        {formik.touched.email && formik.errors.email ? (
                           <span className="error-message">{formik.errors.email}</span>
                        ) : null}
                     </div>

                     <div className={cx('form-control')}>
                        <div className={cx('wrap-input', 'validate-input')} data-validate="Password is required">
                           <span className={cx('label-input')}>{t('form.login.fieldPassword')}</span>
                           <input
                              className={cx('input')}
                              id="password"
                              name="password"
                              type={showPassword ? 'text' : 'password'}
                              placeholder="Type your password"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.password}
                              autoComplete="on"
                           />
                           <span className={cx('focus-input')}></span>
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

                     <div className={cx('flex', 'justify-between', 'pb-[25px]')}>
                        <Link to={'/signup'}>{t('form.login.registerMember')}</Link>
                        <p
                           onClick={() => {
                              setShowFormResetPw(!showFormResetPw);
                              setShowForm(!showForm);
                           }}
                           className="cursor-pointer"
                        >
                           {t('form.login.forgotPass')}
                        </p>
                        {/* <Link to={'/'}>{t('form.login.forgotPass')}</Link> */}
                     </div>

                     <div className={cx('container-login-form-btn')}>
                        <div className={cx('wrap-login-form-btn')}>
                           <button className={cx('login-form-btn')} type="submit">
                              {t('form.login.title')}
                           </button>
                        </div>
                     </div>

                     <div className={cx('txt1', 'text-center', 'pt-[15px]', 'pb-[15px]')}>
                        <span>{t('form.login.social')}</span>
                     </div>

                     <div className={cx('flex', 'justify-center', 'items-center')}>
                        <Link to={'/'} className={cx('login-social-item', 'bg1')}>
                           <FontAwesomeIcon icon={faFacebook} />
                        </Link>

                        <Link to={'/'} className={cx('login-social-item', 'bg2')}>
                           <FontAwesomeIcon icon={faTwitter} />
                        </Link>

                        <Link to={'/'} className={cx('login-social-item', 'bg3')}>
                           <FontAwesomeIcon icon={faGoogle} />
                        </Link>
                     </div>

                     {/* <div className={cx('flex', 'flex-col', 'items-center', 'pt-[20px]')}>
                     <Link to={'/'} className={cx('primary-button')}>
                        Sign Up
                     </Link>
                  </div> */}
                  </form>
               </div>
               <ToastContainer />
               <Loading
                  loading={loading}
                  setLoading={setLoading}
                  type={'spin'}
                  color={'#ff6b6b'}
                  width={'3%'}
                  height={'3%'}
               />
            </div>
         ) : null}
         <GenCodeForm showForm={showFormResetPw} setShowForm={setShowFormResetPw} />
      </>
   );
}

export default LoginForm;
