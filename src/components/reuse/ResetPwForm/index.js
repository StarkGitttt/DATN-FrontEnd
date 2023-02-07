import * as Yup from 'yup';
import { useCallback, useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { faEye, faEyeSlash, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import { updateCodeGetPass } from '~/features/user/userSlice';
import { UserAPI } from '~/api/EcommerceApi';
import styles from './ResetPwForm.module.scss';
import Loading from '../Loading';

const cx = classNames.bind(styles);

function ResetPwForm({ showForm, setShowForm }) {
   const { t } = useTranslation();

   const userCodeGetPass = useSelector((state) => state.user.userCodeGetPass);
   const dispatch = useDispatch();

   const [loading, setLoading] = useState(false);
   const [showPassword, setShowPassword] = useState(false);
   const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
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
         password: '',
         passwordConfirmation: '',
         code: '',
      },
      validationSchema: Yup.object({
         password: Yup.string()
            .min(6, t('form.login.invalidPasswordLength', { length: 6 }))
            .required(t('form.resetPassword.invalidRequired')),
         passwordConfirmation: Yup.string()
            .trim()
            .oneOf([Yup.ref('password'), null], t('form.resetPassword.invalidConfirmPw'))
            .required(t('form.resetPassword.invalidRequired')),
         code: Yup.string()
            // .oneOf([Yup.ref('codeStoreIgnore'), null], t('form.resetPassword.invalidCode'))
            .required(t('form.resetPassword.invalidRequired')),
      }),
      onSubmit: async (values, { resetForm }) => {
         setLoading(true);
         await new Promise((r) => setTimeout(r, 1000));

         if (values.code !== userCodeGetPass.code) {
            toast.warning(t('form.resetPassword.invalidCode'));
            setLoading(false);
         } else {
            console.log('Values chanpass', values);
            UserAPI.changePassFromCode({
               ...values,
               phone: userCodeGetPass.phone,
               code: Number(values.code),
            })
               .then((res) => {
                  if (!res.data) {
                     dispatch(
                        updateCodeGetPass({
                           phone: '',
                           code: '',
                        }),
                     );
                     toast.success(t('form.resetPassword.success'));
                     setLoading(false);
                     resetForm();
                     console.log(res.data);
                     setShowForm(false);
                  }
               })
               .catch((e) => {
                  toast.error(e);
                  setLoading(false);
                  console.log(`Change password failed code (${values.code}) `, e);
               });
         }
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
                     <span className={cx('login-form-title', 'pb-[25px]')}>{t('form.resetPassword.title')}</span>
                     <FontAwesomeIcon
                        icon={faXmark}
                        className={cx('close-form')}
                        onClick={() => setShowForm(!showForm)}
                     />

                     <div className={cx('form-control')}>
                        <div className={cx('wrap-input', 'validate-input')} data-validate="Password is required">
                           <span className={cx('label-input')}>{t('form.resetPassword.fieldPassword')}</span>
                           <input
                              className={cx('input')}
                              id="password"
                              name="password"
                              type={showPassword ? 'text' : 'password'}
                              placeholder={t('form.resetPassword.placeholderPassword')}
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
                     <div className={cx('form-control')}>
                        <div className={cx('wrap-input', 'validate-input')} data-validate="Password is required">
                           <span className={cx('label-input')}>{t('form.resetPassword.fieldConfirmPassword')}</span>
                           <input
                              className={cx('input')}
                              id="passwordConfirmation"
                              name="passwordConfirmation"
                              type={showPasswordConfirm ? 'text' : 'password'}
                              placeholder={t('form.resetPassword.placeholderPassword')}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.passwordConfirmation}
                              autoComplete="on"
                           />
                           <span className={cx('focus-input')}></span>
                           {formik.values.passwordConfirmation.length > 0 && (
                              <FontAwesomeIcon
                                 icon={showPasswordConfirm ? faEye : faEyeSlash}
                                 className={cx('show-password')}
                                 onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
                              />
                           )}
                        </div>
                        {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation ? (
                           <span className="error-message">{formik.errors.passwordConfirmation}</span>
                        ) : null}
                     </div>
                     <div className={cx('form-control')}>
                        <div className={cx('wrap-input', 'validate-input')} data-validate="Password is required">
                           <span className={cx('label-input')}>{t('form.resetPassword.fieldCode')}</span>
                           <input
                              className={cx('input')}
                              id="code"
                              name="code"
                              placeholder={t('form.resetPassword.placeholderCode')}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.code}
                              autoComplete="on"
                           />
                           <span className={cx('focus-input')}></span>
                        </div>
                        {formik.touched.code && formik.errors.code ? (
                           <span className="error-message">{formik.errors.code}</span>
                        ) : null}
                     </div>
                     <div className={cx('container-login-form-btn')}>
                        <div className={cx('wrap-login-form-btn')}>
                           <button className={cx('login-form-btn')} type="submit">
                              {t('form.resetPassword.buttonChangePassword')}
                           </button>
                        </div>
                     </div>
                  </form>
               </div>
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
      </>
   );
}

export default ResetPwForm;
