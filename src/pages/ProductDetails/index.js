import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShare, faStar } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './ProductDetails.module.scss';
import images from '~/assets/images';
import Image from '~/components/reuse/Image';
import ProductCard from '~/components/reuse/ProductCard';
import 'swiper/css/bundle';

const cx = classNames.bind(styles);

function ProductDetails() {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('single-product')}>
            <div className={cx('breadcrumb')}>
               <ul className={cx('flex', 'items-center')}>
                  <li className={cx('breadcrumb-item')}>
                     <Link to={'/'}>Home</Link>
                  </li>
                  <li className={cx('breadcrumb-item')}>
                     <Link to={'/'}>Category name</Link>
                  </li>
                  <li className={cx('breadcrumb-item')}>Product</li>
               </ul>
            </div>
            {/* custom-column */}
            <div className={cx('')}>
               <div className={cx('products', 'one')}>
                  <div className={cx('flex')}>
                     <div className={cx('position-row', 'basis-2/4')}>
                        <div className={cx('flex', 'h-full')}>
                           <div className={cx('price')}>
                              <span className={cx('discount')}>
                                 32%
                                 <br />
                                 OFF
                              </span>
                           </div>
                           <div className={cx('big-image')}>
                              <div className={cx('big-image-wrapper', 'swiper-wrapper')}>
                                 <div className={cx('image-show', 'swiper-slide')}>
                                    <a href="/">
                                       <Image src={images.thumbnail} />
                                    </a>
                                 </div>
                              </div>
                           </div>
                           {/* <Swiper loop={true} autoHeight={true} allowSlideNext={true}>
                              <SwiperSlide>
                                 <div className={cx('big-image')}>
                                    <div className={cx('big-image-wrapper', 'swiper-wrapper')}>
                                       <div className={cx('image-show', 'swiper-slide')}>
                                          <a href="/">
                                             <Image src={images.thumbnail} />
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                 <div className={cx('big-image')}>
                                    <div className={cx('big-image-wrapper', 'swiper-wrapper')}>
                                       <div className={cx('image-show', 'swiper-slide')}>
                                          <a href="/">
                                             <Image src={images.thumbnail} />
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                 <div className={cx('big-image')}>
                                    <div className={cx('big-image-wrapper', 'swiper-wrapper')}>
                                       <div className={cx('image-show', 'swiper-slide')}>
                                          <a href="/">
                                             <Image src={images.thumbnail} />
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </SwiperSlide>
                           </Swiper> */}
                        </div>
                     </div>
                     <div className={cx('pl-[15px]', 'relative', 'basis-2/4')}>
                        <div className={cx('flex', 'flex-col')}>
                           <h1 className={cx('mini-text')}>Product Name</h1>
                           <div className={cx('content')}>
                              <div className={cx('rating', 'flex', 'my-8', 'gap-[10px]')}>
                                 <div className={cx('starts', 'mr-4')}>
                                    <FontAwesomeIcon icon={faStar} className={cx('icon-item')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('icon-item')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('icon-item')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('icon-item')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('icon-item')} />
                                 </div>
                                 <a href="/" className={cx('mini-text', 'mr-4')}>
                                    2.251 reviews
                                 </a>
                                 <a href="/" className={cx('add-review', 'mini-text')}>
                                    Add Your Review
                                 </a>
                              </div>
                              <div className={cx('stock-sku', 'my-10', 'flex', 'gap-[20px]', 'items-center')}>
                                 <span className={cx('available', 'mini-text')}>Category name</span>
                                 <span className={cx('sku', 'mini-text')}>PRD-Product Id</span>
                              </div>
                              <div className={cx('price')}>
                                 <h3 className={cx('mini-text')}>PRICE</h3>
                                 <span className={cx('current')}>100$</span>
                              </div>
                              <div className={cx('showcase-status', 'py-5')}>
                                 <div className={cx('wrapper')}>
                                    <p>
                                       already sold: <b>20</b>
                                    </p>

                                    <p>
                                       stock: <b>40</b>
                                    </p>
                                 </div>

                                 <div className={cx('showcase-status-bar')}></div>
                              </div>
                              <div className={cx('color')}>
                                 <p className={cx('mini-text', 'mb-2.5')}>Description</p>
                                 <div className={cx('descriptions', 'flex')}>
                                    <p className={cx('description-item', 'active')}>Product Description</p>
                                    <p className={cx('description-item')}>Product Description</p>
                                 </div>
                              </div>

                              <div className={cx('actions')}>
                                 <div className={cx('qty-control', 'flex', 'items-center')}>
                                    <button
                                       className={cx('minus', 'circle')}
                                       style={{
                                          color: 'black',
                                       }}
                                    >
                                       -
                                    </button>
                                    <input
                                       value={1}
                                       type="text"
                                       style={{
                                          color: 'black',
                                       }}
                                       onChange={() => {}}
                                    />
                                    <button
                                       className={cx('plus', 'circle')}
                                       style={{
                                          color: 'black',
                                       }}
                                    >
                                       +
                                    </button>
                                 </div>
                                 <div className={cx('button-cart')}>
                                    <button className="secondary-button">Add to cart</button>
                                 </div>
                              </div>
                              <div className={cx('wish-share')}>
                                 <ul className={cx('flex', 'items-center', 'second-links')}>
                                    <li>
                                       <a href="/">
                                          <span className={cx('icon-large')}>
                                             <FontAwesomeIcon icon={faHeart} />
                                          </span>
                                          <span>Wishlist</span>
                                       </a>
                                    </li>
                                    <li>
                                       <a href="/">
                                          <span className={cx('icon-large')}>
                                             <FontAwesomeIcon icon={faShare} />
                                          </span>
                                          <span>Share</span>
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                              {/* <div className={cx('description', 'custom-collapse')}>
                                 <ul>
                                    <li className={cx('has-child', 'expand')}>
                                       <p className={cx('icon-small')}>Information</p>
                                       <ul className={cx('content', 'js-content')}>
                                          <li>
                                             <span>Category</span>
                                             <span>Category name</span>
                                          </li>
                                          <li>
                                             <span>Quantity</span>
                                             <span>10</span>
                                          </li>
                                          <li>
                                             <span>Created Day</span>
                                             <span>01/08/2023</span>
                                          </li>
                                          <li>
                                             <span>Brands</span>
                                             <span>JZTR</span>
                                          </li>
                                       </ul>
                                    </li>
                                 </ul>
                              </div> */}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* RELATED PRODUCTS */}
         <div className={cx('related-product', 'flex', 'flex-col', 'justify-center', 'mt-[40px]')}>
            <div className={cx('related-heading')}>
               <h3 className={cx('title')}>Related Products</h3>
            </div>
            <div className={cx('related-list')}>
               {/* <div className={cx('product-grid')}> */}
               <Swiper
                  spaceBetween={25}
                  slidesPerView={5}
                  autoplay={{
                     delay: 5000,
                     pauseOnMouseEnter: true,
                     disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
               >
                  <SwiperSlide>
                     <ProductCard />
                  </SwiperSlide>
                  <SwiperSlide>
                     <ProductCard />
                  </SwiperSlide>
                  <SwiperSlide>
                     <ProductCard />
                  </SwiperSlide>
                  <SwiperSlide>
                     <ProductCard />
                  </SwiperSlide>
                  <SwiperSlide>
                     <ProductCard />
                  </SwiperSlide>
                  <SwiperSlide>
                     <ProductCard />
                  </SwiperSlide>
                  <SwiperSlide>
                     <ProductCard />
                  </SwiperSlide>
               </Swiper>
               {/* </div> */}
            </div>
         </div>
      </div>
   );
}

export default ProductDetails;
