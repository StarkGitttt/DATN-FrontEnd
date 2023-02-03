import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';

import classNames from 'classnames/bind';
import styles from './SignUp.module.scss';
import constants_local from '~/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { UserAPI } from '~/api/EcommerceApi';

const cx = classNames.bind(styles);

function SignUp() {
   const inputRef = useRef();
   const formik = useFormik({
      initialValues: {
         firstName: '',
         lastName: '',
         email: '',
         phone: '',
         password: '',
         passwordConfirmation: '',
      },
      validationSchema: Yup.object({
         firstName: Yup.string()
            .trim()
            .max(15, 'Vui lòng nhập dưới 15 kí tự')
            .required(constants_local.ERROR_REQUIRED_MESSAGE),
         lastName: Yup.string()
            .trim()
            .max(15, 'Vui lòng nhập dưới 15 kí tự')
            .required(constants_local.ERROR_REQUIRED_MESSAGE),
         email: Yup.string().trim().email('Email không hợp lệ').required(constants_local.ERROR_REQUIRED_MESSAGE),
         phone: Yup.string()
            .matches(/^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/im, 'Số điện thoại không hợp lệ')
            .required(constants_local.ERROR_REQUIRED_MESSAGE),
         password: Yup.string()
            .trim()
            .min(8, 'Vui lòng nhập tối thiểu 8 ký tự')
            .required(constants_local.ERROR_REQUIRED_MESSAGE),
         passwordConfirmation: Yup.string()
            .trim()
            .oneOf([Yup.ref('password'), null], 'Xác nhận mật khẩu không chính xác')
            .required(constants_local.ERROR_REQUIRED_MESSAGE),
      }),
      onSubmit: (values, { resetForm }) => {
         UserAPI.register(values)
            .then((res) => {
               if (res.data) {
                  console.log(res.data);
                  toast.success('Đăng ký tài khoản thành công!');
                  resetForm();
               }
            })
            .catch((e) => {
               if (e?.response?.data?.detailErrors?.email) {
                  toast.warning(e?.response?.data?.detailErrors?.email);
               }
               console.log('Register not success ', e);
            });
      },
      onReset: () => {
         inputRef.current.focus();
      },
   });

   return (
      <div>
         <div className={cx('page-wrapper', 'bg-gra-02', 'pt-[50px]', 'pb-[50px]')}>
            <Link to="/" className={cx('back-home')}>
               <FontAwesomeIcon icon={faCircleArrowLeft} />
               <h3>Quay lại trang chủ</h3>
            </Link>

            <div className={cx('wrapper', 'max-w-[680px]')}>
               <div className={cx('card', 'card-4')}>
                  <div className={cx('card-body')}>
                     <h2 className={cx('title')}>Đăng ký thành viên</h2>
                     <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
                        <div className={cx('row', 'row-space')}>
                           <div className={cx('col-12')}>
                              <div className={cx('input-group')}>
                                 <label className={cx('label')} htmlFor="lastName">
                                    Họ
                                 </label>
                                 <input
                                    className={cx('input--style-4')}
                                    ref={inputRef}
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.lastName}
                                 />
                                 {formik.touched.lastName && formik.errors.lastName ? (
                                    <span className="error-message">{formik.errors.lastName}</span>
                                 ) : null}
                              </div>
                           </div>
                        </div>
                        <div className={cx('row', 'row-space')}>
                           <div className={cx('col-12')}>
                              <div className={cx('input-group')}>
                                 <label className={cx('label')} htmlFor="firstName">
                                    Tên
                                 </label>
                                 <input
                                    className={cx('input--style-4')}
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.firstName}
                                 />
                                 {formik.touched.firstName && formik.errors.firstName ? (
                                    <span className="error-message">{formik.errors.firstName}</span>
                                 ) : null}
                              </div>
                           </div>
                        </div>
                        <div className={cx('row', 'row-space')}>
                           <div className={cx('col-12')}>
                              <div className={cx('input-group')}>
                                 <label className={cx('label')} htmlFor="email">
                                    Email
                                 </label>
                                 <input
                                    className={cx('input--style-4')}
                                    type="email"
                                    id="email"
                                    name="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                 />
                                 {formik.touched.email && formik.errors.email ? (
                                    <span className="error-message">{formik.errors.email}</span>
                                 ) : null}
                              </div>
                           </div>
                        </div>
                        <div className={cx('row', 'row-space')}>
                           <div className={cx('col-12')}>
                              <div className={cx('input-group')}>
                                 <label className={cx('label')} htmlFor="phone">
                                    Số điện thoại
                                 </label>
                                 <input
                                    className={cx('input--style-4')}
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.phone}
                                 />
                                 {formik.touched.phone && formik.errors.phone ? (
                                    <span className="error-message">{formik.errors.phone}</span>
                                 ) : null}
                              </div>
                           </div>
                        </div>
                        <div className={cx('row', 'row-space')}>
                           <div className={cx('col-12')}>
                              <div className={cx('input-group')}>
                                 <label className={cx('label')}>Mật khẩu</label>
                                 <input
                                    className={cx('input--style-4')}
                                    type="password"
                                    id="password"
                                    name="password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                    autoComplete="on"
                                 />
                                 {formik.touched.password && formik.errors.password ? (
                                    <span className="error-message">{formik.errors.password}</span>
                                 ) : null}
                              </div>
                           </div>
                        </div>
                        <div className={cx('row', 'row-space')}>
                           <div className={cx('col-12')}>
                              <div className={cx('input-group')}>
                                 <label className={cx('label')} htmlFor="passwordConfirmation">
                                    Nhập lại mật khẩu
                                 </label>
                                 <input
                                    className={cx('input--style-4')}
                                    type="password"
                                    id="passwordConfirmation"
                                    name="passwordConfirmation"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.passwordConfirmation}
                                    autoComplete="on"
                                 />
                                 {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation ? (
                                    <span className="error-message">{formik.errors.passwordConfirmation}</span>
                                 ) : null}
                              </div>
                           </div>
                        </div>
                        {/* <div className={cx('row', 'row-space')}>
                           <div className={cx('col-2')}>
                              <div className={cx('input-group')}>
                                 <label className={cx('label')}>Birthday</label>
                                 <div className={cx('input-group-icon')}>
                                    <input
                                       className={cx('input--style-4', 'js-datepicker')}
                                       type="date"
                                       name="birthday"
                                    />
                                 </div>
                              </div>
                           </div>
                           <div className={cx('col-2')}>
                              <div className={cx('input-group')}>
                                 <label className={cx('label')}>Gender</label>
                                 <div className={cx('pt-[10px]')}>
                                    <label className={cx('radio-container', 'mr-[45px]')} htmlFor="male">
                                       Male
                                       <input type="radio" checked="checked" name="gender" id="male" />
                                       <span className={cx('checkmark')}></span>
                                    </label>
                                    <label className={cx('radio-container')} htmlFor="female">
                                       Female
                                       <input type="radio" name="gender" id="female" />
                                       <span className={cx('checkmark')}></span>
                                    </label>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className={cx('input-group')}>
                           <label className={cx('label')}>Subject</label>
                           <div className={cx('rs-select2', 'js-select-simple', 'select--no-search')}>
                              <select name="subject" className={cx('select2-container')}>
                                 <option disabled="disabled" selected="selected">
                                    Choose option
                                 </option>
                                 <option>Subject 1</option>
                                 <option>Subject 2</option>
                                 <option>Subject 3</option>
                              </select>
                              <div className={cx('select-dropdown')}></div>
                           </div>
                        </div> */}
                        <div className={cx('pt-[15px]')}>
                           <button className={cx('btn', 'btn--radius-2', 'btn--blue')} type="submit">
                              Đăng ký
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
         {/* <ToastContainer /> */}
      </div>
   );
}

export default SignUp;
