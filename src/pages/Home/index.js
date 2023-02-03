import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
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
   faTag,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import 'swiper/css/bundle';

import styles from './Home.module.scss';
import Image from '~/components/reuse/Image';
import ProductCard from '~/components/reuse/ProductCard';
import images from '~/assets/images';
import { CategoryAPI, ProductAPI } from '~/api/EcommerceApi';
import routesConfig from '~/config/routes';
import { formatCurrency } from '~/utils';
import constants_local from '~/constants';

const cx = classNames.bind(styles);
function Home() {
   const { t } = useTranslation();

   const [active, setAcitve] = useState(false);
   const [categories, setCategories] = useState([]);
   const [sellingCategories, setSellingCategories] = useState([]);
   const [newProducts, setNewProducts] = useState([]);
   const [dealTodayProducts, setDealTodayProducts] = useState([]);
   const [bestSellerProducts, setBestSellerProducts] = useState([]);
   const [suggestionProducts, setSuggestionProducts] = useState([]);
   // const calcSoldProduct = async (productId) => {
   //    try {
   //       const res = await ProductAPI.totalSoldByProductId({}, productId);
   //       if (res.data) {
   //          console.log('Response', res);
   //          console.log('Calc sold product', res.data);
   //          // return res.data;
   //       }
   //    } catch (e) {
   //       console.log(`Get total sold product ${productId} failed `, e);
   //    }
   //    return 1;
   // };

   // GET CATEGORIES
   const calcStockProcess = (product) => {
      const totalProduct = product.totalSoldProduct + product.quantity;
      return (product.totalSoldProduct * 100) / totalProduct;
   };

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
      // Category selling
      CategoryAPI.getSelling({
         params: {
            page: 1,
            limit: 3,
         },
      })
         .then((res) => {
            if (res.data) {
               setSellingCategories(res.data);
            }
         })
         .catch((e) => {
            console.log(`Get selling categories failed: ${e}`);
         });

      // New products
      ProductAPI.getNewProducts()
         .then((res) => {
            if (res.data) {
               setNewProducts(res.data);
            }
         })
         .catch((e) => {
            console.log(`Get new products failed `, e);
         });
      // Get products deal of day
      ProductAPI.getDealOfDay()
         .then((res) => {
            if (res.data) {
               setDealTodayProducts(res.data);
            }
         })
         .catch((e) => {
            console.log('Get products deal of day failed', e);
         });
      // Get best seller products
      ProductAPI.getBestSeller()
         .then((res) => {
            if (res.data) {
               setBestSellerProducts(res.data);
            }
         })
         .catch((e) => {
            console.log('Get best seller products failed: ', e);
         });
      // Get suggestion products
      ProductAPI.getBestSeller({
         params: {
            limit: constants_local.PRODUCT_ITEM_LIMIT,
         },
      })
         .then((res) => {
            if (res.data) {
               setSuggestionProducts(res.data);
            }
         })
         .catch((e) => {
            console.log('Get suggestion products: ', e);
         });
   }, []);
   return (
      <div className={cx('wrapper')}>
         {/* <!--- DPT-MENU ---> */}
         <div className={cx('dpt-menu')}>
            <ul className={cx('second-links', 'relative')}>
               {/* <li className={cx('has-child', 'beauty')}>
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
                <li>
                  <Link to={'/'} className={cx('flex', 'menu-title')}>
                     <div className={cx('icon-large', 'relative', 'flex', 'items-center')}>
                        <FontAwesomeIcon icon={faBattery} />
                     </div>
                     Best Seller
                  </Link>
               </li>  */}
               {categories.slice(0, Math.min(categories.length, 10)).map((category) => (
                  <li key={category?.id}>
                     <Link to={`${routesConfig.category}/${category?.id}`} className={cx('flex', 'menu-title')}>
                        <div className={cx('icon-large', 'relative', 'flex', 'items-center')}>
                           <FontAwesomeIcon icon={faTag} />
                        </div>
                        {category?.name}
                     </Link>
                  </li>
               ))}
            </ul>
         </div>

         {/* <!--- SLIDER ---> */}
         <div className={cx('slider')}>
            <div className={cx('slider-wrapper')}>
               <div className={cx('myslider')}>
                  <Swiper modules={[Pagination]} spaceBetween={50} slidesPerView={1} pagination={{ clickable: true }}>
                     {sellingCategories.map((item) => (
                        <SwiperSlide key={item?.id}>
                           <div className={cx('slide')}>
                              <div className={cx('item')}>
                                 <div className={cx('image', 'object-cover')}>
                                    <Image src={item?.image ? item?.image : images.thumbnail} alt="" />
                                 </div>
                                 <div className={cx('text-content', 'flex', 'flex-col')}>
                                    <h4>{item?.name}</h4>
                                    <h2>
                                       <span>{t('home.swipper.category.searchDiscover')}</span>
                                       <br />
                                       <span>{t('home.swipper.category.selling')}</span>
                                    </h2>
                                    <Link to={`${routesConfig.category}/${item?.id}`} className={cx('primary-button')}>
                                       {t('home.swipper.category.detail')}
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        </SwiperSlide>
                     ))}
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
                  {categories.map((category) => (
                     <div className={cx('category-item')} key={category?.id}>
                        <div className={cx('category-img-box')}>
                           <Image
                              src={category?.image ? category?.image : images.brandAsus}
                              alt="dress & frock"
                              width="50"
                           />
                        </div>

                        <div className={cx('category-content-box')}>
                           <div className={cx('category-content-flex')}>
                              <h3 className={cx('category-item-title')}>{category?.name}</h3>

                              <p className={cx('category-item-amount')}>({category?.quantityProduct})</p>
                           </div>

                           <Link to={`${routesConfig.category}/${category?.id}`} className={cx('category-btn')}>
                              {t('home.swipper.category.all')}
                           </Link>
                        </div>
                     </div>
                  ))}
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
                        <h2 className={cx('sidebar-title')}>{t('home.sidebar.suggestion')}</h2>

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

                                 <p className={cx('menu-title')}>{t('home.sidebar.product.title')}</p>
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
                              {suggestionProducts.map((item) => (
                                 <li className={cx('sidebar-submenu-category')} key={item.id}>
                                    <Link to={`product/${item.id}`} className={cx('sidebar-submenu-title')}>
                                       <p className={cx('product-name')}>{item.name.toLowerCase()}</p>
                                       <data value="300" className={cx('stock')} title="Available Stock">
                                          {item.quantity}
                                       </data>
                                    </Link>
                                 </li>
                              ))}
                           </ul>
                        </li>
                     </ul>
                  </div>
                  <div className={cx('product-showcase')}>
                     <h3 className={cx('showcase-heading')}>{t('home.sidebar.seller.title')}</h3>
                     <div className={cx('showcase-wrapper')}>
                        <div className={cx('showcase-container')}>
                           {bestSellerProducts.map((item) => (
                              <div className={cx('showcase')} key={item.id}>
                                 <Link to={`product/${item.id}`} className={cx('showcase-img-box')}>
                                    <Image
                                       src={item.image ? item.image : images.thumbnail}
                                       alt=""
                                       className={cx('showcase-img')}
                                       width="75"
                                       height="75"
                                    />
                                 </Link>
                                 <div className={cx('showcase-content')}>
                                    <Link to={`product/${item.id}`}>
                                       <h4 className={cx('showcase-title')}>{item.name}</h4>
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
                                       <p className={cx('price')}>{formatCurrency('vi-VN', item.unitPrice)}</p>
                                    </div>
                                 </div>
                              </div>
                           ))}
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
                     <h2 className={cx('title')}>{t('home.deal.product.title')}</h2>

                     <div className={cx('showcase-wrapper', 'has-scrollbar')}>
                        {dealTodayProducts.map((product) => (
                           <div className={cx('showcase-container')} key={product?.id}>
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

                                    <Link to={`/product/${product?.id}`}>
                                       <h3 className={cx('showcase-title')}>{product?.name}</h3>
                                    </Link>

                                    <p className={cx('showcase-desc')}>{product?.description}</p>

                                    <div className={cx('price-box')}>
                                       <p className={cx('price')}>{formatCurrency('vi-VN', product?.unitPrice)}</p>

                                       <del>$200.00</del>
                                    </div>

                                    <button className={cx('add-cart-btn')}>{t('cart.addCart')}</button>

                                    <div className={cx('showcase-status')}>
                                       <div className={cx('wrapper')}>
                                          <p>
                                             {t('home.deal.product.sold')}: <b>{product?.totalSoldProduct}</b>
                                          </p>

                                          <p>
                                             {t('home.deal.product.stock')}: <b>{product?.quantity}</b>
                                          </p>
                                       </div>

                                       <div
                                          className={cx('showcase-status-bar')}
                                          style={{ '--stock-process': `${calcStockProcess(product)}%` }}
                                       ></div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
                  {/* 
                        PRODUCT GRID
                  */}
                  <div className={cx('product-main')}>
                     <h2 className={cx('title')}>{t('home.content.product.new')}</h2>
                     <div className={cx('product-grid')}>
                        {newProducts.map((item) => {
                           return <ProductCard key={item.id} data={item} />;
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
