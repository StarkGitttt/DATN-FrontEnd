import { useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';
import {
   faAngleDown,
   faArrowRight,
   faBarsStaggered,
   faCartShopping,
   faHeart,
   faSearch,
   faXmark,
} from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/reuse/Image';
import images from '~/assets/images';
import LoginForm from '~/components/reuse/LoginForm';

const cx = classNames.bind(styles);
function Header() {
   const [showCartMini, setShowCartMini] = useState(false);
   const [showLoginForm, setShowLoginForm] = useState(false);
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
                        <li onClick={() => setShowLoginForm(!showLoginForm)}>
                           <p>Sign in</p>
                        </li>
                        <li>
                           <Link to={'/'}>
                              My Account <FontAwesomeIcon icon={faAngleDown} />
                           </Link>
                           <ul className={cx('sub-menu')}>
                              <li>
                                 <Link to={'/profile/updateinfo'}>Update info</Link>
                              </li>
                              <li>
                                 <Link to={'/profile/changepass'}>Change password</Link>
                              </li>
                              <li>
                                 <Link to={'/'}>Logout</Link>
                              </li>
                           </ul>
                        </li>
                        <li>
                           <Link to={'/'}>Order Tracking</Link>
                        </li>
                        <li>
                           <Link to={'/'}>
                              USD <FontAwesomeIcon icon={faAngleDown} />
                           </Link>
                        </li>
                        <li>
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
                        </li>
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
                              <Link to={'/'}>Home</Link>
                           </li>
                           <li>
                              <Link to={'/'}>Shop</Link>
                           </li>
                           <li className={cx('has-child')}>
                              <Link to={'/'}>
                                 Women
                                 <div className={cx('flex', 'items-center', 'icon-small')}>
                                    <FontAwesomeIcon icon={faAngleDown} />
                                 </div>
                              </Link>
                              <div className={cx('mega')}>
                                 <div className={cx('mega-items')}>
                                    <div className={cx('flex', 'flex-col', 'gap-[1em]', 'flexcol')}>
                                       <div className={cx('row')}>
                                          <h4>Women's Clothing</h4>
                                          <ul>
                                             <li>
                                                <Link to={'/'}>Dresses</Link>
                                             </li>
                                             <li>
                                                <Link to={'/'}>Dresses</Link>
                                             </li>
                                             <li>
                                                <Link to={'/'}>Dresses</Link>
                                             </li>
                                             <li>
                                                <Link to={'/'}>Dresses</Link>
                                             </li>
                                             <li>
                                                <Link to={'/'}>Dresses</Link>
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                    <div className={cx('flex', 'flex-col', 'gap-[1em]', 'flexcol')}>
                                       <div className={cx('row')}>
                                          <h4>Jewelry</h4>
                                          <ul>
                                             <li>
                                                <Link to={'/'}>Dresses</Link>
                                             </li>
                                             <li>
                                                <Link to={'/'}>Dresses</Link>
                                             </li>
                                             <li>
                                                <Link to={'/'}>Dresses</Link>
                                             </li>
                                             <li>
                                                <Link to={'/'}>Dresses</Link>
                                             </li>
                                             <li>
                                                <Link to={'/'}>Dresses</Link>
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                    <div className={cx('flex', 'flex-col', 'gap-[1em]', 'flexcol')}>
                                       <div className={cx('row')}>
                                          <h4>Beauty</h4>
                                          <ul>
                                             <li>
                                                <Link to={'/'}>Dresses</Link>
                                             </li>
                                             <li>
                                                <Link to={'/'}>Dresses</Link>
                                             </li>
                                             <li>
                                                <Link to={'/'}>Dresses</Link>
                                             </li>
                                             <li>
                                                <Link to={'/'}>Dresses</Link>
                                             </li>
                                             <li>
                                                <Link to={'/'}>Dresses</Link>
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                    <div className={cx('flex', 'flex-col', 'gap-[1em]', 'flexcol')}>
                                       <div className={cx('row')}>
                                          <h4>Top brands</h4>
                                          <ul className={cx('women-brands', 'brands')}>
                                             <li>
                                                <Link to={'/'}>Nike</Link>
                                             </li>
                                             <li>
                                                <Link to={'/'}>Louis Vuitton</Link>
                                             </li>
                                             <li>
                                                <Link to={'/'}>Louis Vuitton</Link>
                                             </li>
                                             <li>
                                                <Link to={'/'}>Louis Vuitton</Link>
                                             </li>
                                             <li>
                                                <Link to={'/'}>Louis Vuitton</Link>
                                             </li>
                                          </ul>
                                          <Link to={'/'} className={cx('view-all', 'mt-[16px]')}>
                                             View all brands
                                             <FontAwesomeIcon icon={faArrowRight} />
                                          </Link>
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
                              <Link to={'/'}>Men</Link>
                           </li>
                           <li>
                              <Link to={'/'}>
                                 Sports
                                 <div className={cx('fly-item')}>
                                    <span>New!</span>
                                 </div>
                              </Link>
                           </li>
                        </ul>
                     </nav>
                  </div>
                  <div className={cx('right')}>
                     <ul className={cx('flex', 'items-center', 'second-links')}>
                        <li className={cx('mobile-hide')}>
                           <Link to={'/'}>
                              <div className={cx('icon-large', 'relative', 'flex', 'items-center')}>
                                 <FontAwesomeIcon icon={faHeart} />
                              </div>
                              <div className={cx('fly-item')}>
                                 <span className={cx('item-number')}>0</span>
                              </div>
                           </Link>
                        </li>
                        <li onClick={() => setShowCartMini(!showCartMini)}>
                           <Link to={'/'} className={cx('iscart')}>
                              <div className={cx('icon-large', 'relative', 'flex', 'items-center')}>
                                 <FontAwesomeIcon icon={faCartShopping} />
                                 <div className={cx('fly-item')}>
                                    <span className={cx('item-number')}>0</span>
                                 </div>
                              </div>
                              <div className={cx('icon-text')}>
                                 <div className={cx('mini-text')}>Total</div>
                                 <div className={cx('cart-total')}>$0.00</div>
                              </div>
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
                           <div className={cx('main-text')}>All Departments</div>
                           <div className={cx('mini-text', 'mobile-hide')}>Total 1050 Products</div>
                           <Link to={'/'} className={cx('dpt-trigger', 'mobie-hide')}>
                              <FontAwesomeIcon icon={faBarsStaggered} />
                           </Link>
                        </div>
                     </div>
                  </div>
                  <div className={cx('right')}>
                     <div className={cx('search-box')}>
                        <form action="" className={cx('search')}>
                           <span className={cx('icon-large', 'relative', 'flex', 'items-center')}>
                              <FontAwesomeIcon icon={faSearch} />
                           </span>
                           <input type={'search'} name="" id="" placeholder="Search for products" />
                           <button type="submit">Search</button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            {/* Cart mini */}
            <div>
               <div className={cx('shopping-cart', showCartMini ? styles.active : '')}>
                  <div className={cx('box')}>
                     <FontAwesomeIcon icon={faXmark} />
                     <div className={cx('box-img')}>
                        <Image src={images.thumbnail} alt="" />
                     </div>
                     <div className={cx('content')}>
                        <h3>Cây chùi nhà đa năng</h3>
                        <span className={cx('price')}>$4.99/-</span>
                        <span className={cx('quantity')}>qty : 1</span>
                     </div>
                  </div>
                  <div className={cx('box')}>
                     <FontAwesomeIcon icon={faXmark} />
                     <div className={cx('box-img')}>
                        <Image src={images.thumbnail} alt="" />
                     </div>
                     <div className={cx('content')}>
                        <h3>Cây chùi nhà đa năng</h3>
                        <span className={cx('price')}>$4.99/-</span>
                        <span className={cx('quantity')}>qty : 1</span>
                     </div>
                  </div>
                  <div className={cx('box')} alt="Cây chùi nhà đa năng">
                     <FontAwesomeIcon icon={faXmark} />
                     <div className={cx('box-img')}>
                        <Image src={images.thumbnail} alt="" />
                     </div>
                     <div className={cx('content')}>
                        <h3>Cây chùi nhà đa năng</h3>
                        <span className={cx('price')}>$4.99/-</span>
                        <span className={cx('quantity')}>qty : 1</span>
                     </div>
                  </div>
                  <div className={cx('total')}>
                     <h4 className="total-heading">Subtotal: </h4>
                     <h3 className="total-price">$1,622.95</h3>
                  </div>
                  <Link to={'/'} className={cx('btn')}>
                     Checkout
                  </Link>
                  <Link to={'/'} className={cx('btn')}>
                     View cart
                  </Link>
               </div>
            </div>
         </div>
         <LoginForm showForm={showLoginForm} setShowForm={setShowLoginForm} />
      </div>
   );
}

export default Header;
