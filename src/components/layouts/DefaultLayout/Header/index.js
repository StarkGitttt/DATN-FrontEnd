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
} from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/reuse/Image';
import images from '~/assets/images';

const cx = classNames.bind(styles);
function Header() {
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
                        <li>
                           <Link to={'/'}>Sign Up</Link>
                        </li>
                        <li>
                           <Link to={'/'}>My Account</Link>
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
                        <li>
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
         </div>
      </div>
   );
}

export default Header;
