import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
   faCaretRight,
   faBattery,
   faPlus,
   faRectangleXmark,
   faMinus,
   faStar,
   faShip,
   faRocket,
   faPhone,
   faReply,
   faTicket,
   faStarHalfStroke,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Image from '~/components/reuse/Image';
import ProductCard from '~/components/reuse/ProductCard';
import images from '~/assets/images';
import 'swiper/css/bundle';

const cx = classNames.bind(styles);
function Home() {
   const [active, setAcitve] = useState(false);

   return (
      <div className={cx('wrapper')}>
         {/* <!--- DPT-MENU ---> */}
         <div className={cx('dpt-menu')}>
            <ul className={cx('second-links', 'relative')}>
               <li className={cx('has-child', 'beauty')}>
                  <Link to={'/'} className={cx('flex', 'menu-title')}>
                     <div className={cx('icon-large', 'relative', 'flex', 'items-center')}>
                        <FontAwesomeIcon icon={faBattery} />
                     </div>
                     Beauty
                     <div className={cx('flex', 'items-center', 'icon-small')}>
                        <FontAwesomeIcon icon={faCaretRight} />
                     </div>
                  </Link>
                  <ul>
                     <li>
                        <Link to={'/'}>Makeup</Link>
                     </li>
                     <li>
                        <Link to={'/'}>Skin Care</Link>
                     </li>
                     <li>
                        <Link to={'/'}>Fragrance</Link>
                     </li>
                     <li>
                        <Link to={'/'}>Foot & Hand Care</Link>
                     </li>
                     <li>
                        <Link to={'/'}>Tools & Accessories</Link>
                     </li>
                     <li>
                        <Link to={'/'}>Shave & Hair Removal</Link>
                     </li>
                     <li>
                        <Link to={'/'}>Personal Care</Link>
                     </li>
                     <li>
                        <Link to={'/'}>Hair Care</Link>
                     </li>
                  </ul>
               </li>
               <li className={cx('has-child', 'electric')}>
                  <Link to={'/'} className={cx('flex', 'menu-title')}>
                     <div className={cx('icon-large', 'relative', 'flex', 'items-center')}>
                        <FontAwesomeIcon icon={faBattery} />
                     </div>
                     Electronic
                     <div className={cx('flex', 'items-center', 'icon-small')}>
                        <FontAwesomeIcon icon={faCaretRight} />
                     </div>
                  </Link>
                  <ul>
                     <li>
                        <Link to={'/'}>Makeup</Link>
                     </li>
                     <li>
                        <Link to={'/'}>Skin Care</Link>
                     </li>
                     <li>
                        <Link to={'/'}>Fragrance</Link>
                     </li>
                     <li>
                        <Link to={'/'}>Foot & Hand Care</Link>
                     </li>
                     <li>
                        <Link to={'/'}>Tools & Accessories</Link>
                     </li>
                     <li>
                        <Link to={'/'}>Shave & Hair Removal</Link>
                     </li>
                     <li>
                        <Link to={'/'}>Personal Care</Link>
                     </li>
                     <li>
                        <Link to={'/'}>Hair Care</Link>
                     </li>
                  </ul>
               </li>
               <li className={cx('has-child', 'fashion')}>
                  <Link to={'/'} className={cx('flex', 'menu-title')}>
                     <div className={cx('icon-large', 'relative', 'flex', 'items-center')}>
                        <FontAwesomeIcon icon={faBattery} />
                     </div>
                     Women's Fashion
                     <div className={cx('flex', 'items-center', 'icon-small')}>
                        <FontAwesomeIcon icon={faCaretRight} />
                     </div>
                  </Link>
                  <ul>
                     <li>
                        <Link to={'/'}>Makeup</Link>
                     </li>
                     <li>
                        <Link to={'/'}>Skin Care</Link>
                     </li>
                     <li>
                        <Link to={'/'}>Fragrance</Link>
                     </li>
                     <li>
                        <Link to={'/'}>Foot & Hand Care</Link>
                     </li>
                     <li>
                        <Link to={'/'}>Tools & Accessories</Link>
                     </li>
                  </ul>
               </li>
               <li>
                  <Link to={'/'} className={cx('flex', 'menu-title')}>
                     <div className={cx('icon-large', 'relative', 'flex', 'items-center')}>
                        <FontAwesomeIcon icon={faBattery} />
                     </div>
                     Girl's Fashion
                  </Link>
               </li>
               <li>
                  <Link to={'/'} className={cx('flex', 'menu-title')}>
                     <div className={cx('icon-large', 'relative', 'flex', 'items-center')}>
                        <FontAwesomeIcon icon={faBattery} />
                     </div>
                     Boy's Fashion
                  </Link>
               </li>
               <li>
                  <Link to={'/'} className={cx('flex', 'menu-title')}>
                     <div className={cx('icon-large', 'relative', 'flex', 'items-center')}>
                        <FontAwesomeIcon icon={faBattery} />
                     </div>
                     Health & Household
                  </Link>
               </li>
               <li className={cx('has-child', 'homekit')}>
                  <Link to={'/'} className={cx('flex', 'menu-title')}>
                     <div className={cx('icon-large', 'relative', 'flex', 'items-center')}>
                        <FontAwesomeIcon icon={faBattery} />
                     </div>
                     Home & Kitchen
                     <div className={cx('flex', 'items-center', 'icon-small')}>
                        <FontAwesomeIcon icon={faCaretRight} />
                     </div>
                  </Link>
                  <div className={cx('mega')}>
                     <div className={cx('flex', 'flex-col')}>
                        <div className={cx('row')}>
                           <h4>
                              <Link to={'/'}>Kitchen & Dining</Link>
                           </h4>
                           <ul>
                              <li>
                                 <Link to={'/'}>Kitchen</Link>
                              </li>
                              <li>
                                 <Link to={'/'}>Dining Room</Link>
                              </li>
                              <li>
                                 <Link to={'/'}>Pantry</Link>
                              </li>
                              <li>
                                 <Link to={'/'}>Great Room</Link>
                              </li>
                              <li>
                                 <Link to={'/'}>Breakfast Nook</Link>
                              </li>
                           </ul>
                        </div>
                        <div className={cx('row')}>
                           <h4>
                              <Link to={'/'}>Living</Link>
                           </h4>
                           <ul>
                              <li>
                                 <Link to={'/'}>Living Room</Link>
                              </li>
                              <li>
                                 <Link to={'/'}>Family Room</Link>
                              </li>
                              <li>
                                 <Link to={'/'}>Sunroom</Link>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </li>
               <li>
                  <Link to={'/'} className={cx('flex', 'menu-title')}>
                     <div className={cx('icon-large', 'relative', 'flex', 'items-center')}>
                        <FontAwesomeIcon icon={faBattery} />
                     </div>
                     Pet Supplies
                  </Link>
               </li>
               <li>
                  <Link to={'/'} className={cx('flex', 'menu-title')}>
                     <div className={cx('icon-large', 'relative', 'flex', 'items-center')}>
                        <FontAwesomeIcon icon={faBattery} />
                     </div>
                     Sports
                  </Link>
               </li>
               <li>
                  <Link to={'/'} className={cx('flex', 'menu-title')}>
                     <div className={cx('icon-large', 'relative', 'flex', 'items-center')}>
                        <FontAwesomeIcon icon={faBattery} />
                     </div>
                     Best Seller
                  </Link>
               </li>
            </ul>
         </div>

         {/* <!--- SLIDER ---> */}
         <div className={cx('slider')}>
            <div className={cx('slider-wrapper')}>
               <div className={cx('myslider')}>
                  <Swiper modules={[Pagination]} spaceBetween={50} slidesPerView={1} pagination={{ clickable: true }}>
                     <SwiperSlide>
                        <div className={cx('slide')}>
                           <div className={cx('item')}>
                              <div className={cx('image', 'object-cover')}>
                                 <Image src={images.thumbnail} alt="" />
                              </div>
                              <div className={cx('text-content', 'flex', 'flex-col')}>
                                 <h4>Shoes Fashion</h4>
                                 <h2>
                                    <span>Come and Get it</span>
                                    <br />
                                    <span>Brand New Shoes</span>
                                 </h2>
                                 <Link to={'/'} className={cx('primary-button')}>
                                    Shop Now
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <div className={cx('slide')}>
                           <div className={cx('item')}>
                              <div className={cx('image', 'object-cover')}>
                                 <Image src={images.thumbnail} alt="" />
                              </div>
                              <div className={cx('text-content', 'flex', 'flex-col')}>
                                 <h4>Shoes Fashion</h4>
                                 <h2>
                                    <span>Come and Get it</span>
                                    <br />
                                    <span>Brand New Shoes</span>
                                 </h2>
                                 <Link to={'/'} className={cx('primary-button')}>
                                    Shop Now
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                        <div className={cx('slide')}>
                           <div className={cx('item')}>
                              <div className={cx('image', 'object-cover')}>
                                 <Image src={images.thumbnail} alt="" />
                              </div>
                              <div className={cx('text-content', 'flex', 'flex-col')}>
                                 <h4>Shoes Fashion</h4>
                                 <h2>
                                    <span>Come and Get it</span>
                                    <br />
                                    <span>Brand New Shoes</span>
                                 </h2>
                                 <Link to={'/'} className={cx('primary-button')}>
                                    Shop Now
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </SwiperSlide>
                  </Swiper>
               </div>
            </div>
         </div>

         {/* <!--- BRANDS ---> */}
         <div className={cx('brands')}>
            <div className={cx('flex', 'flex-wrap', 'items-center', 'justify-around')}>
               <div className={cx('item')}>
                  <Link to={'/'}>
                     <Image src={images.brandZara} alt="" />
                  </Link>
               </div>
               <div className={cx('item')}>
                  <Link to={'/'}>
                     <Image src={images.brandAsus} alt="" />
                  </Link>
               </div>
               <div className={cx('item')}>
                  <Link to={'/'}>
                     <Image src={images.brandDng} alt="" />
                  </Link>
               </div>
               <div className={cx('item')}>
                  <Link to={'/'}>
                     <Image src={images.brandHurley} alt="" />
                  </Link>
               </div>
               <div className={cx('item')}>
                  <Link to={'/'}>
                     <Image src={images.brandOppo} alt="" />
                  </Link>
               </div>
               <div className={cx('item')}>
                  <Link to={'/'}>
                     <Image src={images.brandSamsung} alt="" />
                  </Link>
               </div>
            </div>
         </div>

         {/* <!--- CATEGORY ---> */}
         <div className={cx('category')}>
            <div>
               <div className={cx('category-item-container', 'has-scrollbar')}>
                  <div className={cx('category-item')}>
                     <div className={cx('category-img-box')}>
                        <Image src={images.brandAsus} alt="dress & frock" width="50" />
                     </div>

                     <div className={cx('category-content-box')}>
                        <div className={cx('category-content-flex')}>
                           <h3 className={cx('category-item-title')}>Dress & frock</h3>

                           <p className={cx('category-item-amount')}>(53)</p>
                        </div>

                        <Link to={'/'} className={cx('category-btn')}>
                           Show all
                        </Link>
                     </div>
                  </div>

                  <div className={cx('category-item')}>
                     <div className={cx('category-img-box')}>
                        <Image src={images.brandAsus} alt="winter wear" width="50" />
                     </div>

                     <div className={cx('category-content-box')}>
                        <div className={cx('category-content-flex')}>
                           <h3 className={cx('category-item-title')}>Winter wear</h3>

                           <p className={cx('category-item-amount')}>(58)</p>
                        </div>

                        <Link to={'/'} className={cx('category-btn')}>
                           Show all
                        </Link>
                     </div>
                  </div>

                  <div className={cx('category-item')}>
                     <div className={cx('category-img-box')}>
                        <Image src={images.brandAsus} alt="glasses & lens" width="50" />
                     </div>

                     <div className={cx('category-content-box')}>
                        <div className={cx('category-content-flex')}>
                           <h3 className={cx('category-item-title')}>Glasses & lens</h3>

                           <p className={cx('category-item-amount')}>(68)</p>
                        </div>

                        <Link to={'/'} className={cx('category-btn')}>
                           Show all
                        </Link>
                     </div>
                  </div>

                  <div className={cx('category-item')}>
                     <div className={cx('category-img-box')}>
                        <Image src={images.brandAsus} alt="shorts & jeans" width="50" />
                     </div>

                     <div className={cx('category-content-box')}>
                        <div className={cx('category-content-flex')}>
                           <h3 className={cx('category-item-title')}>Shorts & jeans</h3>

                           <p className={cx('category-item-amount')}>(84)</p>
                        </div>

                        <Link to={'/'} className={cx('category-btn')}>
                           Show all
                        </Link>
                     </div>
                  </div>

                  <div className={cx('category-item')}>
                     <div className={cx('category-img-box')}>
                        <Image src={images.brandAsus} alt="t-shirts" width="50" />
                     </div>

                     <div className={cx('category-content-box')}>
                        <div className={cx('category-content-flex')}>
                           <h3 className={cx('category-item-title')}>T-shirts</h3>

                           <p className={cx('category-item-amount')}>(35)</p>
                        </div>

                        <Link to={'/'} className={cx('category-btn')}>
                           Show all
                        </Link>
                     </div>
                  </div>

                  <div className={cx('category-item')}>
                     <div className={cx('category-img-box')}>
                        <Image src={images.brandAsus} alt="jacket" width="50" />
                     </div>

                     <div className={cx('category-content-box')}>
                        <div className={cx('category-content-flex')}>
                           <h3 className={cx('category-item-title')}>Jacket</h3>

                           <p className={cx('category-item-amount')}>(16)</p>
                        </div>

                        <Link to={'/'} className={cx('category-btn')}>
                           Show all
                        </Link>
                     </div>
                  </div>

                  <div className={cx('category-item')}>
                     <div className={cx('category-img-box')}>
                        <Image src={images.brandAsus} alt="watch" width="50" />
                     </div>

                     <div className={cx('category-content-box')}>
                        <div className={cx('category-content-flex')}>
                           <h3 className={cx('category-item-title')}>Watch</h3>

                           <p className={cx('category-item-amount')}>(27)</p>
                        </div>

                        <Link to={'/'} className={cx('category-btn')}>
                           Show all
                        </Link>
                     </div>
                  </div>

                  <div className={cx('category-item')}>
                     <div className={cx('category-img-box')}>
                        <Image src={images.brandAsus} alt="hat & caps" width="50" />
                     </div>

                     <div className={cx('category-content-box')}>
                        <div className={cx('category-content-flex')}>
                           <h3 className={cx('category-item-title')}>Hat & caps</h3>

                           <p className={cx('category-item-amount')}>(39)</p>
                        </div>

                        <Link to={'/'} className={cx('category-btn')}>
                           Show all
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* <!--- PRODUCT ---> */}
         <div className={cx('product-container')}>
            <div className={cx('custom-container')}>
               {/* ---- Sidebar ---- */}
               <div className={cx('sidebar', 'has-crollbar')} data-mobie-menu>
                  <div className={cx('sidebar-category')}>
                     <div className={cx('sidebar-top')}>
                        <h2 className={cx('sidebar-title')}>Category</h2>

                        <button className={cx('sidebar-close-btn')} data-mobile-menu-close-btn>
                           <FontAwesomeIcon icon={faRectangleXmark} />
                        </button>
                     </div>

                     <ul className={cx('sidebar-menu-category-list')}>
                        <li
                           className={cx('sidebar-menu-category')}
                           onClick={() => {
                              setAcitve(!active);
                           }}
                        >
                           <button
                              className={cx('sidebar-accordion-menu', active ? styles.active : '')}
                              data-accordion-btn
                           >
                              <div className={cx('menu-title-flex')}>
                                 <Image
                                    src={images.thumbnail}
                                    alt="clothes"
                                    width="20"
                                    height="20"
                                    className={cx('menu-title-img')}
                                 />

                                 <p className={cx('menu-title')}>Clothes</p>
                              </div>

                              <div>
                                 <FontAwesomeIcon
                                    icon={faPlus}
                                    name="add-outline"
                                    className={cx('add-icon')}
                                 ></FontAwesomeIcon>
                                 <FontAwesomeIcon icon={faMinus} className={cx('remove-icon')}></FontAwesomeIcon>
                              </div>
                           </button>

                           <ul
                              className={cx('sidebar-submenu-category-list', active ? styles.active : '')}
                              data-accordion
                           >
                              <li className={cx('sidebar-submenu-category')}>
                                 <Link to={'/'} className={cx('sidebar-submenu-title')}>
                                    <p className={cx('product-name')}>Shirt</p>
                                    <data value="300" className={cx('stock')} title="Available Stock">
                                       300
                                    </data>
                                 </Link>
                              </li>

                              <li className={cx('sidebar-submenu-category')}>
                                 <Link to={'/'} className={cx('sidebar-submenu-title')}>
                                    <p className={cx('product-name')}>shorts & jeans</p>
                                    <data value="60" className={cx('stock')} title="Available Stock">
                                       60
                                    </data>
                                 </Link>
                              </li>

                              <li className={cx('sidebar-submenu-category')}>
                                 <Link to={'/'} className={cx('sidebar-submenu-title')}>
                                    <p className={cx('product-name')}>jacket</p>
                                    <data value="50" className={cx('stock')} title="Available Stock">
                                       50
                                    </data>
                                 </Link>
                              </li>

                              <li className={cx('sidebar-submenu-category')}>
                                 <Link to={'/'} className={cx('sidebar-submenu-title')}>
                                    <p className={cx('product-name')}>dress & frock</p>
                                    <data value="87" className={cx('stock')} title="Available Stock">
                                       87
                                    </data>
                                 </Link>
                              </li>
                           </ul>
                        </li>

                        <li
                           className={cx('sidebar-menu-category')}
                           onClick={() => {
                              setAcitve(!active);
                           }}
                        >
                           <button
                              className={cx('sidebar-accordion-menu', active ? styles.active : '')}
                              data-accordion-btn
                           >
                              <div className={cx('menu-title-flex')}>
                                 <Image
                                    src={images.thumbnail}
                                    alt="clothes"
                                    width="20"
                                    height="20"
                                    className={cx('menu-title-img')}
                                 />

                                 <p className={cx('menu-title')}>Clothes</p>
                              </div>

                              <div>
                                 <FontAwesomeIcon
                                    icon={faPlus}
                                    name="add-outline"
                                    className={cx('add-icon')}
                                 ></FontAwesomeIcon>
                                 <FontAwesomeIcon icon={faMinus} className={cx('remove-icon')}></FontAwesomeIcon>
                              </div>
                           </button>

                           <ul
                              className={cx('sidebar-submenu-category-list', active ? styles.active : '')}
                              data-accordion
                           >
                              <li className={cx('sidebar-submenu-category')}>
                                 <Link to={'/'} className={cx('sidebar-submenu-title')}>
                                    <p className={cx('product-name')}>Shirt</p>
                                    <data value="300" className={cx('stock')} title="Available Stock">
                                       300
                                    </data>
                                 </Link>
                              </li>

                              <li className={cx('sidebar-submenu-category')}>
                                 <Link to={'/'} className={cx('sidebar-submenu-title')}>
                                    <p className={cx('product-name')}>shorts & jeans</p>
                                    <data value="60" className={cx('stock')} title="Available Stock">
                                       60
                                    </data>
                                 </Link>
                              </li>

                              <li className={cx('sidebar-submenu-category')}>
                                 <Link to={'/'} className={cx('sidebar-submenu-title')}>
                                    <p className={cx('product-name')}>jacket</p>
                                    <data value="50" className={cx('stock')} title="Available Stock">
                                       50
                                    </data>
                                 </Link>
                              </li>

                              <li className={cx('sidebar-submenu-category')}>
                                 <Link to={'/'} className={cx('sidebar-submenu-title')}>
                                    <p className={cx('product-name')}>dress & frock</p>
                                    <data value="87" className={cx('stock')} title="Available Stock">
                                       87
                                    </data>
                                 </Link>
                              </li>
                           </ul>
                        </li>
                     </ul>
                  </div>
                  <div className={cx('product-showcase')}>
                     <h3 className={cx('showcase-heading')}>best sellers</h3>
                     <div className={cx('showcase-wrapper')}>
                        <div className={cx('showcase-container')}>
                           <div className={cx('showcase')}>
                              <Link to={'/'} className={cx('showcase-img-box')}>
                                 <Image
                                    src={images.thumbnail}
                                    alt=""
                                    className={cx('showcase-img')}
                                    width="75"
                                    height="75"
                                 />
                              </Link>
                              <div className={cx('showcase-content')}>
                                 <Link to={'/'}>
                                    <h4 className={cx('showcase-title')}>baby fabric shoes</h4>
                                 </Link>
                                 <div className={cx('showcase-rating')}>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                 </div>
                                 <div className={cx('price-box')}>
                                    <del>$5.00</del>
                                    <p className={cx('price')}>$4.00</p>
                                 </div>
                              </div>
                           </div>
                           <div className={cx('showcase')}>
                              <Link to={'/'} className={cx('showcase-img-box')}>
                                 <Image
                                    src={images.thumbnail}
                                    alt=""
                                    className={cx('showcase-img')}
                                    width="75"
                                    height="75"
                                 />
                              </Link>
                              <div className={cx('showcase-content')}>
                                 <Link to={'/'}>
                                    <h4 className={cx('showcase-title')}>baby fabric shoes</h4>
                                 </Link>
                                 <div className={cx('showcase-rating')}>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                 </div>
                                 <div className={cx('price-box')}>
                                    <del>$5.00</del>
                                    <p className={cx('price')}>$4.00</p>
                                 </div>
                              </div>
                           </div>
                           <div className={cx('showcase')}>
                              <Link to={'/'} className={cx('showcase-img-box')}>
                                 <Image
                                    src={images.thumbnail}
                                    alt=""
                                    className={cx('showcase-img')}
                                    width="75"
                                    height="75"
                                 />
                              </Link>
                              <div className={cx('showcase-content')}>
                                 <Link to={'/'}>
                                    <h4 className={cx('showcase-title')}>baby fabric shoes</h4>
                                 </Link>
                                 <div className={cx('showcase-rating')}>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                 </div>
                                 <div className={cx('price-box')}>
                                    <del>$5.00</del>
                                    <p className={cx('price')}>$4.00</p>
                                 </div>
                              </div>
                           </div>
                           <div className={cx('showcase')}>
                              <Link to={'/'} className={cx('showcase-img-box')}>
                                 <Image
                                    src={images.thumbnail}
                                    alt=""
                                    className={cx('showcase-img')}
                                    width="75"
                                    height="75"
                                 />
                              </Link>
                              <div className={cx('showcase-content')}>
                                 <Link to={'/'}>
                                    <h4 className={cx('showcase-title')}>baby fabric shoes</h4>
                                 </Link>
                                 <div className={cx('showcase-rating')}>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                 </div>
                                 <div className={cx('price-box')}>
                                    <del>$5.00</del>
                                    <p className={cx('price')}>$4.00</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               {/* Product box */}
               <div className={cx('product-box')}>
                  {/* 
                        PRODUCT FEATURED
                  */}
                  <div className={cx('product-featured')}>
                     <h2 className={cx('title')}>Deal of the day</h2>

                     <div className={cx('showcase-wrapper', 'has-scrollbar')}>
                        <div className={cx('showcase-container')}>
                           <div className={cx('showcase')}>
                              <div className={cx('showcase-banner')}>
                                 <Image
                                    src={images.thumbnail}
                                    alt="shampoo, conditioner & facewash packs"
                                    className={cx('showcase-img')}
                                 />
                              </div>

                              <div className={cx('showcase-content')}>
                                 <div className={cx('showcase-rating')}>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStarHalfStroke} />
                                 </div>

                                 <Link to={'/'}>
                                    <h3 className={cx('showcase-title')}>shampoo, conditioner & facewash packs</h3>
                                 </Link>

                                 <p className={cx('showcase-desc')}>
                                    Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet consectetur
                                    Lorem ipsum dolor
                                 </p>

                                 <div className={cx('price-box')}>
                                    <p className={cx('price')}>$150.00</p>

                                    <del>$200.00</del>
                                 </div>

                                 <button className={cx('add-cart-btn')}>add to cart</button>

                                 <div className={cx('showcase-status')}>
                                    <div className={cx('wrapper')}>
                                       <p>
                                          already sold: <b>20</b>
                                       </p>

                                       <p>
                                          available: <b>40</b>
                                       </p>
                                    </div>

                                    <div className={cx('showcase-status-bar')}></div>
                                 </div>

                                 <div className={cx('countdown-box')}>
                                    <p className={cx('countdown-desc')}>Hurry Up! Offer ends in:</p>

                                    <div className={cx('countdown')}>
                                       <div className={cx('countdown-content')}>
                                          <p className={cx('display-number')}>360</p>

                                          <p className={cx('display-text')}>Days</p>
                                       </div>

                                       <div className={cx('countdown-content')}>
                                          <p className={cx('display-number')}>24</p>
                                          <p className={cx('display-text')}>Hours</p>
                                       </div>

                                       <div className={cx('countdown-content')}>
                                          <p className={cx('display-number')}>59</p>
                                          <p className={cx('display-text')}>Min</p>
                                       </div>

                                       <div className={cx('countdown-content')}>
                                          <p className={cx('display-number')}>00</p>
                                          <p className={cx('display-text')}>Sec</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className={cx('showcase-container')}>
                           <div className={cx('showcase')}>
                              <div className={cx('showcase-banner')}>
                                 <Image
                                    src={images.thumbnail}
                                    alt="shampoo, conditioner & facewash packs"
                                    className={cx('showcase-img')}
                                 />
                              </div>

                              <div className={cx('showcase-content')}>
                                 <div className={cx('showcase-rating')}>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStarHalfStroke} />
                                 </div>

                                 <Link to={'/'}>
                                    <h3 className={cx('showcase-title')}>shampoo, conditioner & facewash packs</h3>
                                 </Link>

                                 <p className={cx('showcase-desc')}>
                                    Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet consectetur
                                    Lorem ipsum dolor
                                 </p>

                                 <div className={cx('price-box')}>
                                    <p className={cx('price')}>$150.00</p>

                                    <del>$200.00</del>
                                 </div>

                                 <button className={cx('add-cart-btn')}>add to cart</button>

                                 <div className={cx('showcase-status')}>
                                    <div className={cx('wrapper')}>
                                       <p>
                                          already sold: <b>20</b>
                                       </p>

                                       <p>
                                          available: <b>40</b>
                                       </p>
                                    </div>

                                    <div className={cx('showcase-status-bar')}></div>
                                 </div>

                                 <div className={cx('countdown-box')}>
                                    <p className={cx('countdown-desc')}>Hurry Up! Offer ends in:</p>

                                    <div className={cx('countdown')}>
                                       <div className={cx('countdown-content')}>
                                          <p className={cx('display-number')}>360</p>

                                          <p className={cx('display-text')}>Days</p>
                                       </div>

                                       <div className={cx('countdown-content')}>
                                          <p className={cx('display-number')}>24</p>
                                          <p className={cx('display-text')}>Hours</p>
                                       </div>

                                       <div className={cx('countdown-content')}>
                                          <p className={cx('display-number')}>59</p>
                                          <p className={cx('display-text')}>Min</p>
                                       </div>

                                       <div className={cx('countdown-content')}>
                                          <p className={cx('display-number')}>00</p>
                                          <p className={cx('display-text')}>Sec</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* 
                        PRODUCT GRID
                  */}
                  <div className={cx('product-main')}>
                     <h2 className={cx('title')}>New Products</h2>
                     <div className={cx('product-grid')}>
                        {['', '', '', '', '', '', '', ''].map((element, index) => {
                           return <ProductCard key={index} />;
                        })}
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* <!--- TESTIMONIALS, CTA & SERVICE ---> */}
         <div className={cx('custom-container')}>
            <div className={cx('testimonials-box')}>
               {/* <!--- TESTIMONIALS --> */}
               <div className={cx('testimonial')}>
                  <h2 className={cx('title')}>testimonial</h2>

                  <div className={cx('testimonial-card')}>
                     <Image
                        src={images.thumbnail}
                        alt="alan doe"
                        className={cx('testimonial-banner')}
                        width="80"
                        height="80"
                     />

                     <p className={cx('testimonial-name')}>Alan Doe</p>

                     <p className={cx('testimonial-title')}>CEO & Founder Invision</p>

                     <Image src={images.thumbnail} alt="quotation" className={cx('quotation-img')} width="26" />

                     <p className={cx('testimonial-desc')}>
                        Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet.
                     </p>
                  </div>
               </div>

               {/* <!--- CTA --> */}
               <div className={cx('cta-container')}>
                  <Image src={images.thumbnail} alt="summer collection" className={cx('cta-banner')} />

                  <Link to={'/'} className={cx('cta-content')}>
                     <p className={cx('discount')}>25% Discount</p>

                     <h2 className={cx('cta-title')}>Summer collection</h2>

                     <p className={cx('cta-text')}>Starting @ $10</p>

                     <button className={cx('cta-btn')}>Shop now</button>
                  </Link>
               </div>

               {/* <!--- SERVICE --> */}
               <div className={cx('service')}>
                  <h2 className={cx('title')}>Our Services</h2>

                  <div className={cx('service-container')}>
                     <Link to={'/'} className={cx('service-item')}>
                        <div className={cx('service-icon')}>
                           <FontAwesomeIcon icon={faShip} />
                        </div>

                        <div className={cx('service-content')}>
                           <h3 className={cx('service-title')}>Worldwide Delivery</h3>
                           <p className={cx('service-desc')}>For Order Over $100</p>
                        </div>
                     </Link>

                     <Link to={'/'} className={cx('service-item')}>
                        <div className={cx('service-icon')}>
                           <FontAwesomeIcon icon={faRocket} />
                        </div>

                        <div className={cx('service-content')}>
                           <h3 className={cx('service-title')}>Next Day delivery</h3>
                           <p className={cx('service-desc')}>UK Orders Only</p>
                        </div>
                     </Link>

                     <Link to={'/'} className={cx('service-item')}>
                        <div className={cx('service-icon')}>
                           <FontAwesomeIcon icon={faPhone} />
                        </div>

                        <div className={cx('service-content')}>
                           <h3 className={cx('service-title')}>Best Online Support</h3>
                           <p className={cx('service-desc')}>Hours: 8AM - 11PM</p>
                        </div>
                     </Link>

                     <Link to={'/'} className={cx('service-item')}>
                        <div className={cx('service-icon')}>
                           <FontAwesomeIcon icon={faReply} />
                        </div>

                        <div className={cx('service-content')}>
                           <h3 className={cx('service-title')}>Return Policy</h3>
                           <p className={cx('service-desc')}>Easy & Free Return</p>
                        </div>
                     </Link>

                     <Link to={'/'} className={cx('service-item')}>
                        <div className={cx('service-icon')}>
                           <FontAwesomeIcon icon={faTicket} />
                        </div>

                        <div className={cx('service-content')}>
                           <h3 className={cx('service-title')}>30% money back</h3>
                           <p className={cx('service-desc')}>For Order Over $100</p>
                        </div>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Home;
