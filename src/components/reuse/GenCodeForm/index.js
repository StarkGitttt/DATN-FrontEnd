import { useCallback, useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import { updateCodeGetPass } from '~/features/user/userSlice';
import { UserAPI } from '~/api/EcommerceApi';
import styles from './GenCode.module.scss';
import constants_local from '~/constants';
import Loading from '../Loading';
import ResetPasswordForm from '../ResetPwForm';

const cx = classNames.bind(styles);

function GenCodeForm({ showForm, setShowForm }) {
   const { t } = useTranslation();

   const dispatch = useDispatch();

   const [loading, setLoading] = useState(false);
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
         phone: '',
      },
      validationSchema: Yup.object({
         phone: Yup.string()
            .matches(
               /^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/im,
               t('form.shipping.message.error.invalidPhone'),
            )
            .required(constants_local.ERROR_REQUIRED_MESSAGE),
      }),
      onSubmit: async (values, { resetForm }) => {
         setLoading(true);
         await new Promise((r) => setTimeout(r, 1000));
         UserAPI.genCodeGetPass(values)
            .then((res) => {
               if (res.data) {
                  console.log('Code generate: ', res.data);
                  dispatch(
                     updateCodeGetPass({
                        ...values,
                        code: res.data + '',
                     }),
                  );
                  toast.success(t('form.getCode.success', values));
                  setLoading(false);
                  setShowForm(false);
                  setShowFormResetPw(true);
               }
            })
            .catch((e) => {
               setLoading(false);
               toast.warning(e.response?.data?.message);
               console.log('Generate code failed ', e);
            });
         resetForm();
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
                           <span className={cx('label-input')}>{t('form.getCode.fieldPhone')}</span>
                           <input
                              className={cx('input')}
                              id="phone"
                              name="phone"
                              placeholder={t('form.getCode.placeholderPhone')}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.phone}
                              autoComplete="on"
                           />
                           <span className={cx('focus-input')}></span>
                        </div>
                        {formik.touched.phone && formik.errors.phone ? (
                           <span className="error-message">{formik.errors.phone}</span>
                        ) : null}
                     </div>

                     <div className={cx('container-login-form-btn')}>
                        <div className={cx('wrap-login-form-btn')}>
                           <button className={cx('login-form-btn')} type="submit">
                              {t('form.resetPassword.button')}
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
         <ResetPasswordForm showForm={showFormResetPw} setShowForm={setShowFormResetPw} />
      </>
   );
}

export default GenCodeForm;
