import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Select, Space } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faArrowRight,
   faBarsStaggered,
   faCaretDown,
   faCaretUp,
   faCartShopping,
   faFlagUsa,
   faXmark,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import { BrandAPI, CategoryAPI, ProductAPI } from '~/api/EcommerceApi';
import constants_local from '~/constants';
import routesConfig from '~/config/routes';
import styles from './Header.module.scss';
import Image from '~/components/reuse/Image';
import images from '~/assets/images';
import LoginForm from '~/components/reuse/LoginForm';
import Search from '~/components/reuse/Search';
import { removeUserInfo, removeCart } from '~/features/user/userSlice';
import { formatCurrency } from '~/utils';

const cx = classNames.bind(styles);

function Header() {
   const { t, i18n } = useTranslation();
   const handleChange = (value) => {
      i18n.changeLanguage(value);
   };
   const userInfo = useSelector((state) => state.user.userInfo);
   const carts = useSelector((state) => state.user.userCarts);
   const dispatch = useDispatch();

   const [showManageAccount, setShowManageAccount] = useState(false);
   const [showManageOrder, setShowManageOrder] = useState(false);
   const [showCartMini, setShowCartMini] = useState(false);
   const [showLoginForm, setShowLoginForm] = useState(false);
   const [showMega, setShowMega] = useState(false);
   const [categories, setCategories] = useState([]);
   const [brands, setBrands] = useState([]);
   const [totalsProduct, setTotalsProduct] = useState(0);

   const handleShowMega = () => {
      setShowMega(!showMega);
   };

   // Handle remove item into carts
   const handleRemoveItemIntoCarts = (id) => {
      dispatch(removeCart(id));
   };

   const calcTotalPriceCart = (accumulator, currentValue) => {
      return accumulator + currentValue.amountOrder * currentValue.unitPrice;
   };

   // GET CATEGORIES, BRANDS
   useEffect(() => {
      // Category
      CategoryAPI.getAll()
         .then((res) => {
            if (res.data) {
               setCategories(res.data);
            }
         })
         .catch((e) => {
            console.log(`Get categories failed: ${e}`);
         });
      // Brand
      BrandAPI.getAll()
         .then((res) => {
            if (res.data) {
               setBrands(res.data);
            }
         })
         .catch((e) => {
            console.log(`Get brands failed: ${e}`);
         });
      // Count product
      ProductAPI.getTotals()
         .then((res) => {
            if (res.data) {
               setTotalsProduct(res.data.productTotal);
            }
         })
         .catch((e) => {
            console.log(`Count product failed: ${e}`);
         });
   }, []);
   return (
      <div className={cx('wrapper')}>
         <div className={cx('header')}>
            {/* header-top */}
            <div className={cx('header-top', 'mobile-hide', 'padding-content')}>
               <div className={cx('flex', 'items-center', 'justify-between', 'leading-[42px]')}>
                  <div className={cx('left')}>
                     <ul className={cx('flex', 'items-center', 'main-links')}>
                        <li>
                           <Link to={'/'}>Blog</Link>
                        </li>
                        <li>
                           <Link to={'/'}>Featured Products</Link>
                        </li>
                        <li>
                           <Link to={'/'}>WishList</Link>
                        </li>
                     </ul>
                  </div>
                  <div className={cx('right')}>
                     <ul className={cx('flex', 'items-center', 'main-links')}>
                        {!userInfo?.id && (
                           <li onClick={() => setShowLoginForm(!showLoginForm)}>
                              <p>{t('header.login')}</p>
                           </li>
                        )}

                        {userInfo?.id && (
                           <li>
                              <Link
                                 to={'#'}
                                 className="flex gap-2"
                                 onClick={() => setShowManageAccount(!showManageAccount)}
                              >
                                 <p>{t('header.manageAccount.title')}</p>
                                 {showManageAccount ? (
                                    <FontAwesomeIcon icon={faCaretUp} />
                                 ) : (
                                    <FontAwesomeIcon icon={faCaretDown} />
                                 )}
                              </Link>
                              <ul className={cx('sub-menu', showManageAccount ? 'show-sub-menu' : null)}>
                                 <li>
                                    <Link to={'/profile/updateinfo'}>{t('header.manageAccount.update')}</Link>
                                 </li>
                                 <li>
                                    <Link to={'/profile/changepass'}>{t('header.manageAccount.changePassword')}</Link>
                                 </li>
                                 <li>
                                    <Link to={'#'} onClick={() => dispatch(removeUserInfo())}>
                                       {t('header.manageAccount.logout')}
                                    </Link>
                                 </li>
                              </ul>
                           </li>
                        )}
                        {/* Management Order */}
                        {userInfo?.id && (
                           <li>
                              <Link
                                 to={'#'}
                                 className="flex gap-2"
                                 onClick={() => setShowManageOrder(!showManageOrder)}
                              >
                                 <p>{t('header.order.management.title')}</p>
                                 {showManageOrder ? (
                                    <FontAwesomeIcon icon={faCaretUp} />
                                 ) : (
                                    <FontAwesomeIcon icon={faCaretDown} />
                                 )}
                              </Link>
                              <ul className={cx('sub-menu', showManageOrder ? 'show-sub-menu' : null)}>
                                 <li>
                                    <Link to={'/'}>{t('header.order.management.subOrderPending')}</Link>
                                 </li>
                                 <li>
                                    <Link to={'/'}>{t('header.order.management.subOrderHistory')}</Link>
                                 </li>
                              </ul>
                           </li>
                        )}
                        {/* FAVORITE PRODUCTS */}
                        {userInfo?.id && (
                           <li>
                              <Link to={'/favorite/products'}>{t('header.favoriteProduct')}</Link>
                           </li>
                        )}
                        {!userInfo?.id && (
                           <li>
                              <Link to={'/'}>{t('header.order.tracking')}</Link>
                           </li>
                        )}
                        <li>
                           <Space wrap>
                              <Select
                                 defaultValue="en"
                                 style={{
                                    width: 120,
                                 }}
                                 onChange={handleChange}
                                 options={[
                                    {
                                       value: 'en',
                                       label: 'English',
                                    },
                                    {
                                       value: 'vn',
                                       label: 'Vietnam',
                                    },
                                 ]}
                                 menuItemSelectedIcon={
                                    <span className={cx('flag-icon')}>
                                       <FontAwesomeIcon icon={faFlagUsa} />
                                    </span>
                                 }
                              />
                           </Space>
                        </li>
                        {/* <li>
                           <Link to={'/'}>
                              English <FontAwesomeIcon icon={faAngleDown} />
                           </Link>
                           <ul>
                              <li className={cx('current')}>
                                 <Link to={'/'}>English</Link>
                              </li>
                              <li>
                                 <Link to={'/'}>German</Link>
                              </li>
                              <li>
                                 <Link to={'/'}>Spanish</Link>
                              </li>
                              <li>
                                 <Link to={'/'}>Bahasa</Link>
                              </li>
                           </ul>
                        </li> */}
                     </ul>
                  </div>
               </div>
            </div>
            {/* header-nav */}
            <div className={cx('padding-content', 'header-nav')}>
               <div className={cx('flex', 'items-center')}>
                  <Link to={'/'} className={cx('trigger', 'desktop-hide')}>
                     <FontAwesomeIcon icon={faBarsStaggered} />
                  </Link>
                  <div className={cx('left', 'flex', 'items-center')}>
                     <div className={cx('logo')}>
                        <Link to={'/'}>
                           <span className={cx('circle')}></span>.Store
                        </Link>
                     </div>
                     <nav className={cx('mobile-hide')}>
                        <ul className={cx('flex', 'items-center', 'second-links', 'leading-[100px]')}>
                           <li>
                              <Link to={'/'}>{t('header.home')}</Link>
                           </li>
                           <li className={cx('has-child')}>
                              <Link to={'#'} onClick={handleShowMega}>
                                 {t('header.category')}
                                 <div className={cx('flex', 'items-center', 'icon-small')}>
                                    {showMega ? (
                                       <FontAwesomeIcon icon={faCaretUp} />
                                    ) : (
                                       <FontAwesomeIcon icon={faCaretDown} />
                                    )}
                                 </div>
                              </Link>
                              <div className={cx('mega', showMega ? 'show-mega' : '')}>
                                 <div className={cx('mega-items')}>
                                    {/* Đồ gia dụng 1 */}
                                    <div className={cx('flex', 'flex-col', 'gap-[1em]', 'flexcol')}>
                                       <div className={cx('row')}>
                                          <h4>Đồ gia dụng</h4>
                                          <ul>
                                             {categories
                                                .slice(0, constants_local.CATEGORY_ITEM_LIMIT_NAV)
                                                .map((category) => (
                                                   <li key={category?.id} onClick={handleShowMega}>
                                                      <Link to={`${routesConfig.category}/${category?.id}`}>
                                                         {category?.name}
                                                      </Link>
                                                   </li>
                                                ))}
                                          </ul>
                                       </div>
                                    </div>
                                    {/* Đồ gia dụng 2 */}
                                    <div className={cx('flex', 'flex-col', 'gap-[1em]', 'flexcol')}>
                                       <div className={cx('row')}>
                                          <h4>Đồ gia dụng</h4>
                                          <ul>
                                             {categories
                                                .slice(3, constants_local.CATEGORY_ITEM_LIMIT_NAV * 2)
                                                .map((category) => (
                                                   <li key={category?.id} onClick={handleShowMega}>
                                                      <Link to={`${routesConfig.category}/${category?.id}`}>
                                                         {category?.name}
                                                      </Link>
                                                   </li>
                                                ))}
                                          </ul>
                                       </div>
                                    </div>
                                    {/* Đồ gia dụng 3 */}
                                    <div className={cx('flex', 'flex-col', 'gap-[1em]', 'flexcol')}>
                                       <div className={cx('row')}>
                                          <h4>Đồ gia dụng</h4>
                                          <ul>
                                             {categories
                                                .slice(
                                                   6,
                                                   Math.min(
                                                      categories.length,
                                                      constants_local.CATEGORY_ITEM_LIMIT_NAV * 3,
                                                   ),
                                                )
                                                .map((category) => (
                                                   <li key={category?.id} onClick={handleShowMega}>
                                                      <Link to={`${routesConfig.category}/${category?.id}`}>
                                                         {category?.name}
                                                      </Link>
                                                   </li>
                                                ))}
                                          </ul>
                                       </div>
                                    </div>
                                    {/* Nhãn hiệu */}
                                    <div className={cx('flex', 'flex-col', 'gap-[1em]', 'flexcol')}>
                                       <div className={cx('row')}>
                                          <h4>Nhãn hiệu</h4>
                                          <ul className={cx('women-brands', 'brands')}>
                                             {brands
                                                .slice(0, Math.min(brands.length, constants_local.BRAND_ITEM_LIMIT_NAV))
                                                .map((brand) => (
                                                   <li key={brand?.id}>
                                                      <Link to={'/'}>{brand?.name}</Link>
                                                   </li>
                                                ))}
                                          </ul>
                                          {brands.length > constants_local.BRAND_ITEM_LIMIT_NAV ? (
                                             <Link to={'/'} className={cx('view-all', 'mt-[16px]')}>
                                                Xem tất cả
                                                <FontAwesomeIcon icon={faArrowRight} />
                                             </Link>
                                          ) : (
                                             ''
                                          )}
                                       </div>
                                    </div>
                                    <div className={cx('flex', 'flex-col', 'gap-[1em]', 'flexcol', 'products')}>
                                       <div className={cx('row', 'relative')}>
                                          <div className={cx('media')}>
                                             <div className={cx('thumbnail', 'object-cover')}>
                                                <Link to={'/'}>
                                                   <Image src={images.thumbnail} alt="" />
                                                </Link>
                                             </div>
                                          </div>
                                          <div className={cx('text-content')}>
                                             <h4>Most wanted!</h4>
                                             <Link to={'/'} className={'primary-button'}>
                                                Order now
                                             </Link>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </li>
                           <li>
                              <Link to={routesConfig.currentCreatedProducts}>
                                 {t('header.product')}
                                 <div className={cx('fly-item')}>
                                    <span>New!</span>
                                 </div>
                              </Link>
                           </li>
                           <li>
                              <Link to={'/'}>{t('header.support')}</Link>
                           </li>
                           <li>
                              <Link to={'/'}>{t('header.introduction')}</Link>
                           </li>
                        </ul>
                     </nav>
                  </div>
                  <div className={cx('right')}>
                     <ul className={cx('flex', 'items-center', 'second-links')}>
                        {/* <li className={cx('mobile-hide')}>
                           <Link to={'/'}>
                              <div className={cx('icon-large', 'relative', 'flex', 'items-center')}>
                                 <FontAwesomeIcon icon={faHeart} />
                              </div>
                              <div className={cx('fly-item')}>
                                 <span className={cx('item-number')}>0</span>
                              </div>
                           </Link>
                        </li> */}
                        <li onClick={() => setShowCartMini(!showCartMini)}>
                           <Link to={'#'} className={cx('iscart')}>
                              <div className={cx('icon-large', 'relative', 'flex', 'items-center')}>
                                 <FontAwesomeIcon icon={faCartShopping} />
                                 {carts.length > 0 && (
                                    <div className={cx('fly-item')}>
                                       <span className={cx('item-number')}>{carts.length}</span>
                                    </div>
                                 )}
                              </div>
                              {/* <div className={cx('icon-text')}>
                                 <div className={cx('mini-text')}>Total</div>
                                 <div className={cx('cart-total')}>$0.00</div>
                              </div> */}
                           </Link>
                           {/* <div className={cx('mini-cart')}>
                              <div className={cx('content')}>
                                 <div className={cx('cart-head')}>5 items in cart</div>
                                 <div className={cx('cart-body')}>
                                    <ul className={cx('products', 'mini')}>
                                       <li className={cx('item', 'flex')}>
                                          <div className={cx('thumbnail', 'object-cover')}>
                                             <Link to={'/'}>
                                                <Image src={images.thumbnail} />
                                             </Link>
                                          </div>
                                          <div className={cx('item-content')}>
                                             <p>
                                                <Link to={'/'}>Dimmable Ceiling Light Modern</Link>
                                             </p>
                                             <span className={cx('price')}>
                                                <span>$279.09</span>
                                                <span className={cx('fly-item')}>
                                                   <span>2x</span>
                                                </span>
                                             </span>
                                          </div>
                                          <Link to={'/'} classNames="item-remove">
                                             <FontAwesomeIcon icon={faXmark} />
                                          </Link>
                                       </li>
                                       </ul>
                                       </div>
                                       </div>
                                    </div> */}
                        </li>
                        {userInfo?.id && (
                           <li className={cx('relative', 'avatar-container')}>
                              <div className={cx('avatar-box')}>
                                 <p className={cx('avatar-name')}>LP</p>
                              </div>
                           </li>
                        )}
                     </ul>
                  </div>
               </div>
            </div>
            {/* header-main */}
            <div className={cx('header-main', 'mobile-hide')}>
               <div className={cx('flex', 'items-center')}>
                  <div className={cx('left')}>
                     <div className={cx('dpt-cat')}>
                        <div className={cx('dpt-head')}>
                           <div className={cx('main-text')}>{t('header.product')}</div>
                           <div className={cx('mini-text', 'mobile-hide')}>
                              {t('header.total')} {totalsProduct} {t('header.product').toLowerCase()}
                           </div>
                           <Link to={'/'} className={cx('dpt-trigger', 'mobie-hide')}>
                              <FontAwesomeIcon icon={faBarsStaggered} />
                           </Link>
                        </div>
                     </div>
                  </div>
                  <div className={cx('right')}>
                     {/* Search product */}
                     <Search />
                  </div>
               </div>
            </div>
            {/* Cart mini */}
            <div>
               <div className={cx('shopping-cart', showCartMini ? styles.active : '')}>
                  <div className={cx('box-container')}>
                     {carts.length > 0 ? (
                        carts.map((item) => (
                           <div className={cx('box')} key={item.id}>
                              <FontAwesomeIcon icon={faXmark} onClick={() => handleRemoveItemIntoCarts(item.id)} />
                              <div className={cx('box-img')}>
                                 <Image src={images.thumbnail} alt="" />
                              </div>
                              <div className={cx('content')}>
                                 <h3>{item?.name}</h3>
                                 <span className={cx('price')}>{formatCurrency('vi-VN', item?.unitPrice)} -</span>
                                 <span className={cx('quantity')}>
                                    {t('cart.quantity')} : {item?.amountOrder}
                                 </span>
                              </div>
                           </div>
                        ))
                     ) : (
                        <div className={cx('cart-empty')}>
                           <p>{t('cart.empty')}</p>
                           <FontAwesomeIcon icon={faCartShopping} />
                        </div>
                     )}
                  </div>
                  {carts.length > 0 ? (
                     <>
                        <div className={cx('total')}>
                           <h4 className="total-heading">{t('cart.subTotal')}: </h4>
                           <h3 className="total-price">
                              {formatCurrency('vi-VN', carts.reduce(calcTotalPriceCart, 0))}
                           </h3>
                        </div>
                        <Link to={routesConfig.checkout} className={cx('btn')} onClick={() => setShowCartMini(false)}>
                           Checkout
                        </Link>
                     </>
                  ) : null}
               </div>
            </div>
         </div>
         <LoginForm showForm={showLoginForm} setShowForm={setShowLoginForm} />
      </div>
   );
}

export default Header;
