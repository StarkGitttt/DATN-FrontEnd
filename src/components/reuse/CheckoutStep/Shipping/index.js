import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames/bind';

import { AddressAPI, LocationAPI } from '~/api/EcommerceApi';
import { updateAddressShipping } from '~/features/user/userSlice';
import styles from './Shipping.module.scss';
import routes from '~/config/routes';
import ProgressCheckout from '~/components/reuse/ProgressCheckout';
import Loading from '../../Loading';

const cx = classNames.bind(styles);

function CheckoutStepShipping() {
   const { t } = useTranslation();
   const userInfo = useSelector((state) => state.user.userInfo);
   const addressShipping = useSelector((state) => state.user.userAddressShipping);
   const dispatch = useDispatch();
   // Handle validate form
   const formik = useFormik({
      initialValues: {
         firstName: addressShipping?.firstName || userInfo?.firstName || '',
         lastName: addressShipping?.lastName || userInfo?.lastName || '',
         phone: addressShipping?.phone || userInfo?.phone || '',
         email: addressShipping?.email || userInfo?.email || '',
         province: '',
         district: '',
         ward: '',
         appartmentNo: addressShipping?.appartmentNo || '',
      },
      validationSchema: Yup.object({
         firstName: Yup.string().required(t('form.shipping.message.error.required')),
         lastName: Yup.string().required(t('form.shipping.message.error.required')),
         phone: Yup.string()
            .matches(
               /^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/im,
               t('form.shipping.message.error.invalidPhone'),
            )
            .required(t('form.shipping.message.error.required')),
         email: Yup.string()
            .trim()
            .email(t('form.shipping.message.error.invalidEmail'))
            .required(t('form.shipping.message.error.required')),
         province: Yup.string().required(t('form.shipping.message.error.invalidProvince')),
         district: Yup.string().required(t('form.shipping.message.error.invalidDistrict')),
         ward: Yup.string().required(t('form.shipping.message.error.invalidCommune')),
         appartmentNo: Yup.string().required(t('form.shipping.message.error.required')),
      }),
      onSubmit: (values) => {
         let idProvinceCurrent = values.province;
         let idDistrictCurrent = values.district;
         const provinceFind = provinces.find((province) => province?.code === idProvinceCurrent);
         const districtFind = districts.find((district) => district?.code === idDistrictCurrent);
         if (provinceFind && districtFind) {
            values = {
               ...values,
               province: provinceFind?.name_with_type,
               district: districtFind?.name_with_type,
            };
         }
         AddressAPI.addShippingAddress(values)
            .then((res) => {
               if (res.data) {
                  console.log('Shipping address response', res.data);
                  const subPhone = `0${res.data?.phone.trim().substring(2)}`;
                  const resShippingAddress = res.data;
                  resShippingAddress.phone = subPhone;
                  dispatch(
                     updateAddressShipping({
                        ...values,
                        ...addressShipping,
                        ...resShippingAddress,
                     }),
                  );
                  navigate(`${routes.checkout}/@payment`);
               }
            })
            .catch((e) => {
               console.log('Add shipping address failed', e);
               setLoading(false);
            });
      },
   });

   const [loading, setLoading] = useState(false);
   const [provinces, setProvinces] = useState([]);
   const [districts, setDistricts] = useState([]);
   const [wards, setWards] = useState([]);
   const navigate = useNavigate();

   const handleFetchProvices = async () =>
      await LocationAPI.getProvinces({
         params: {
            limit: -1,
         },
      })
         .then((res) => {
            if (res.data) {
               setProvinces(res?.data?.data);
            }
         })
         .catch((e) => {
            console.log('Get provinces failed: ', e);
         });
   const handleFetchDistricts = async (idProvince) =>
      await LocationAPI.getDistrictByIdProvince({
         params: {
            provinceCode: idProvince,
         },
      })
         .then((res) => {
            if (res.data) {
               setDistricts(res.data?.data);
            }
         })
         .catch((e) => {
            console.log('Get districts failed', e);
         });
   const handleFetchWards = async (idDistrict) =>
      await LocationAPI.getWardsByIdDistrict({
         params: {
            districtCode: idDistrict,
         },
      })
         .then((res) => {
            if (res.data) {
               setWards(res.data?.data);
            }
         })
         .catch((e) => {
            console.log('Get wards failed', e);
         });

   useEffect(() => {
      let idProvince = formik.values.province;
      let idDistrict = formik.values.district;
      if (!idProvince || provinces.length <= 0) {
         handleFetchProvices();
      }
      if (idProvince) {
         handleFetchDistricts(idProvince);
      } else {
         setDistricts([]);
      }
      if (idProvince && idDistrict) {
         handleFetchWards(idDistrict);
      } else {
         setWards([]);
      }
   }, [formik.values.province, provinces.length, formik.values.district]);

   return (
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
                     <button data-bind="i18n: 'Login'" onClick={() => navigate(`${routes.checkout}/@login`)}>
                        {t('checkout.step.login.title')}
                     </button>
                  )}
               </div>
            </li>
            <li className={cx('checkout-step-address', 'step-item', 'active')}>
               <div className={cx('checkout-step-title', 'step-title-address')}>
                  {t('checkout.step.shipping.title')}
               </div>
               <div className={cx('step-content')}>
                  <div className={cx('checkout-step-address-right')}>
                     <h3>
                        <span>{t('checkout.step.shipping.addAddress')}</span>
                     </h3>
                     <form
                        className={cx('form', 'form-shipping-address')}
                        onSubmit={formik.handleSubmit}
                        onReset={formik.handleReset}
                     >
                        <div className={cx('fieldset', 'address')}>
                           {/* LAST NAME */}
                           <div className={cx('field', '_required')}>
                              <label className={cx('label')} htmlFor="lastName">
                                 <span>{t('checkout.step.shipping.fieldFirsname')}</span>
                              </label>

                              <div className={cx('control')} data-bind="css: {'_with-tooltip': element.tooltip}">
                                 <input
                                    className={cx('input-text')}
                                    name="lastName"
                                    id="lastName"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.lastName}
                                    placeholder={t('checkout.step.shipping.placeholderFirsname')}
                                 />
                                 {formik.touched.lastName && formik.errors.lastName ? (
                                    <span className="error-message">{formik.errors.lastName}</span>
                                 ) : null}
                              </div>
                           </div>
                           {/* FIRST NAME */}
                           <div
                              className={cx('field', '_required')}
                              data-bind="visible: visible, attr: {'name': element.dataScope}, css: additionalClasses"
                              name="shippingAddress.lastname"
                           >
                              <label className={cx('label')} htmlFor="firstName">
                                 <span>{t('checkout.step.shipping.fieldLastname')}</span>
                              </label>

                              <div className={cx('control')} data-bind="css: {'_with-tooltip': element.tooltip}">
                                 <input
                                    className={cx('input-text')}
                                    name="firstName"
                                    id="firstName"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.firstName}
                                    placeholder={t('checkout.step.shipping.placeholderLastname')}
                                 />
                                 {formik.touched.firstName && formik.errors.firstName ? (
                                    <span className="error-message">{formik.errors.firstName}</span>
                                 ) : null}
                              </div>
                           </div>
                           {/* PHONE */}
                           <div className={cx('field', '_required')}>
                              <label className={cx('label')} htmlFor="phone">
                                 <span>{t('checkout.step.shipping.fieldPhoneNumber')}</span>
                              </label>

                              <div className={cx('control')}>
                                 <input
                                    className={cx('input-text')}
                                    name="phone"
                                    id="phone"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.phone}
                                    placeholder={t('checkout.step.shipping.placeholderPhoneNumber')}
                                 />
                                 {formik.touched.phone && formik.errors.phone ? (
                                    <span className="error-message">{formik.errors.phone}</span>
                                 ) : null}
                              </div>
                           </div>
                           {/* EMAIL */}
                           <div className={cx('field')}>
                              <label className={cx('label')}>
                                 <span>{t('checkout.step.shipping.fieldEmail')}</span>
                              </label>

                              <div className={cx('control')}>
                                 <input
                                    className={cx('input-text')}
                                    name="email"
                                    id="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    placeholder={t('checkout.step.shipping.placeholderEmail')}
                                 />
                                 {formik.touched.email && formik.errors.email ? (
                                    <span className="error-message">{formik.errors.email}</span>
                                 ) : null}
                              </div>
                           </div>
                           {/* PROVINCE/CITY */}
                           <div className={cx('field', '_required')}>
                              <label className={cx('label')}>
                                 <span>{t('checkout.step.shipping.fieldProvince')}</span>
                              </label>

                              <div className={cx('control')}>
                                 <select
                                    className={cx('select')}
                                    name="province"
                                    id="province"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.province}
                                 >
                                    <option data-title="Chọn thành phố" value="">
                                       {t('checkout.step.shipping.chooseProvince')}
                                    </option>
                                    {provinces &&
                                       provinces.map((province) => (
                                          <option title={province?.name} value={province?.code} key={province?.code}>
                                             {province?.name}
                                          </option>
                                       ))}
                                 </select>
                                 {formik.touched.province && formik.errors.province ? (
                                    <span className="error-message">{formik.errors.province}</span>
                                 ) : null}
                              </div>
                           </div>
                           {/* DISTRICT */}
                           <div className={cx('field', '_required')}>
                              <label className={cx('label')} htmlFor="district">
                                 <span>{t('checkout.step.shipping.fielddDistrict')}</span>
                              </label>

                              <div className={cx('control')}>
                                 <select
                                    className={cx('select')}
                                    name="district"
                                    id="district"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.district}
                                 >
                                    <option data-title="Chọn thành phố" value="">
                                       {t('checkout.step.shipping.chooseDistrict')}
                                    </option>
                                    {districts &&
                                       districts.map((district) => (
                                          <option
                                             title={district?.name_with_type}
                                             value={district?.code}
                                             key={district?.code}
                                          >
                                             {district?.name_with_type}
                                          </option>
                                       ))}
                                 </select>
                                 {formik.touched.district && formik.errors.district ? (
                                    <span className="error-message">{formik.errors.district}</span>
                                 ) : null}
                              </div>
                           </div>
                           {/* WARD */}
                           <div className={cx('field', '_required')}>
                              <label className={cx('label')} htmlFor="ward">
                                 <span>{t('checkout.step.shipping.fieldCommune')}</span>
                              </label>

                              <div className={cx('control')}>
                                 <select
                                    className={cx('select')}
                                    name="ward"
                                    id="ward"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.ward}
                                 >
                                    <option data-title="Chọn thành phố" value="">
                                       {t('checkout.step.shipping.chooseCommune')}
                                    </option>
                                    {wards &&
                                       wards.map((ward) => (
                                          <option
                                             title={ward?.name_with_type}
                                             value={ward?.name_with_type}
                                             key={ward?.code}
                                          >
                                             {ward?.name_with_type}
                                          </option>
                                       ))}
                                 </select>
                                 {formik.touched.ward && formik.errors.ward ? (
                                    <span className="error-message">{formik.errors.ward}</span>
                                 ) : null}
                              </div>
                           </div>
                           {/* ADDRESS */}
                           <div className={cx('field', 'w-[505px]')}>
                              <label className={cx('label')} htmlFor="apprtmentNo">
                                 <span>{t('checkout.step.shipping.fieldAddress')}</span>
                              </label>

                              <div className={cx('control')}>
                                 <input
                                    className={cx('input-text')}
                                    name="appartmentNo"
                                    id="appartmentNo"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.appartmentNo}
                                    placeholder={t('checkout.step.shipping.placeholderAddress')}
                                 />
                                 {formik.touched.appartmentNo && formik.errors.appartmentNo ? (
                                    <span className="error-message">{formik.errors.appartmentNo}</span>
                                 ) : null}
                              </div>
                           </div>
                           {/* SUBMIT */}
                           <div className={cx('actions-toolbar', 'mt-[15px]')}>
                              <div className={cx('primary-container')}>
                                 <button type="submit" className={cx('action-address', 'primary')}>
                                    <span>{t('checkout.step.shipping.button')}</span>
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

export default CheckoutStepShipping;
