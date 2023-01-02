import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import Image from '~/components/reuse/Image';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
   return (
      <div className={cx('wrapper')}>
         <footer>
            <div className={cx('footer-category')}>
               <div className={cx('custom-container')}>
                  <h2 className={cx('footer-category-title')}>Brand directory</h2>

                  <div className={cx('footer-category-box')}>
                     <h3 className={cx('category-box-title')}>Fashion :</h3>

                     <Link to={'/'} className={cx('footer-category-link')}>
                        T-shirt
                     </Link>
                     <Link to={'/'} className={cx('footer-category-link')}>
                        Shirts
                     </Link>
                     <Link to={'/'} className={cx('footer-category-link')}>
                        shorts & jeans
                     </Link>
                     <Link to={'/'} className={cx('footer-category-link')}>
                        jacket
                     </Link>
                     <Link to={'/'} className={cx('footer-category-link')}>
                        dress & frock
                     </Link>
                     <Link to={'/'} className={cx('footer-category-link')}>
                        innerwear
                     </Link>
                     <Link to={'/'} className={cx('footer-category-link')}>
                        hosiery
                     </Link>
                  </div>

                  <div className={cx('footer-category-box')}>
                     <h3 className={cx('category-box-title')}>footwear :</h3>

                     <Link to={'/'} className={cx('footer-category-link')}>
                        sport
                     </Link>
                     <Link to={'/'} className={cx('footer-category-link')}>
                        formal
                     </Link>
                     <Link to={'/'} className={cx('footer-category-link')}>
                        Boots
                     </Link>
                     <Link to={'/'} className={cx('footer-category-link')}>
                        casual
                     </Link>
                     <Link to={'/'} className={cx('footer-category-link')}>
                        cowboy shoes
                     </Link>
                     <Link to={'/'} className={cx('footer-category-link')}>
                        safety shoes
                     </Link>
                     <Link to={'/'} className={cx('footer-category-link')}>
                        Party wear shoes
                     </Link>
                     <Link to={'/'} className={cx('footer-category-link')}>
                        Branded
                     </Link>
                     <Link to={'/'} className={cx('footer-category-link')}>
                        Firstcopy
                     </Link>
                     <Link to={'/'} className={cx('footer-category-link')}>
                        Long shoes
                     </Link>
                  </div>

                  <div className={cx('footer-category-box')}>
                     <h3 className={cx('category-box-title')}>jewellery :</h3>

                     <Link to={'/'} className={cx('footer-category-link')}>
                        Necklace
                     </Link>
                     <Link to={'/'} className={cx('footer-category-link')}>
                        Earrings
                     </Link>
                     <Link to={'/'} className={cx('footer-category-link')}>
                        Couple rings
                     </Link>
                     <Link to={'/'} className={cx('footer-category-link')}>
                        Pendants
                     </Link>
                     <Link to={'/'} className={cx('footer-category-link')}>
                        Crystal
                     </Link>
                     <Link to={'/'} className={cx('footer-category-link')}>
                        Bangles
                     </Link>
                     <Link to={'/'} className={cx('footer-category-link')}>
                        bracelets
                     </Link>
                     <Link to={'/'} className={cx('footer-category-link')}>
                        nosepin
                     </Link>
                     <Link to={'/'} className={cx('footer-category-link')}>
                        chain
                     </Link>
                     <Link to={'/'} className={cx('footer-category-link')}>
                        Earrings
                     </Link>
                     <Link to={'/'} className={cx('footer-category-link')}>
                        Couple rings
                     </Link>
                  </div>

                  <div className={cx('footer-category-box')}>
                     <h3 className={cx('category-box-title')}>cosmetics :</h3>

                     <Link to={'/'} className={cx('footer-category-link')}>
                        Shampoo
                     </Link>
                     <Link to={'/'} className={cx('footer-category-link')}>
                        Bodywash
                     </Link>
                     <Link to={'/'} className={cx('footer-category-link')}>
                        Facewash
                     </Link>
                     <Link to={'/'} className={cx('footer-category-link')}>
                        makeup kit
                     </Link>
                     <Link to={'/'} className={cx('footer-category-link')}>
                        liner
                     </Link>
                     <Link to={'/'} className={cx('footer-category-link')}>
                        lipstick
                     </Link>
                     <Link to={'/'} className={cx('footer-category-link')}>
                        prefume
                     </Link>
                     <Link to={'/'} className={cx('footer-category-link')}>
                        Body soap
                     </Link>
                     <Link to={'/'} className={cx('footer-category-link')}>
                        scrub
                     </Link>
                     <Link to={'/'} className={cx('footer-category-link')}>
                        hair gel
                     </Link>
                     <Link to={'/'} className={cx('footer-category-link')}>
                        hair colors
                     </Link>
                     <Link to={'/'} className={cx('footer-category-link')}>
                        hair dye
                     </Link>
                     <Link to={'/'} className={cx('footer-category-link')}>
                        sunscreen
                     </Link>
                     <Link to={'/'} className={cx('footer-category-link')}>
                        skin loson
                     </Link>
                     <Link to={'/'} className={cx('footer-category-link')}>
                        liner
                     </Link>
                     <Link to={'/'} className={cx('footer-category-link')}>
                        lipstick
                     </Link>
                  </div>
               </div>
            </div>

            <div className={cx('footer-nav')}>
               <div className={cx('custom-container')}>
                  <ul className={cx('footer-nav-list')}>
                     <li className={cx('footer-nav-item')}>
                        <h2 className={cx('nav-title')}>Popular Categories</h2>
                     </li>

                     <li className={cx('footer-nav-item')}>
                        <Link to={'/'} className={cx('footer-nav-link')}>
                           Fashion
                        </Link>
                     </li>

                     <li className={cx('footer-nav-item')}>
                        <Link to={'/'} className={cx('footer-nav-link')}>
                           Electronic
                        </Link>
                     </li>

                     <li className={cx('footer-nav-item')}>
                        <Link to={'/'} className={cx('footer-nav-link')}>
                           Cosmetic
                        </Link>
                     </li>

                     <li className={cx('footer-nav-item')}>
                        <Link to={'/'} className={cx('footer-nav-link')}>
                           Health
                        </Link>
                     </li>

                     <li className={cx('footer-nav-item')}>
                        <Link to={'/'} className={cx('footer-nav-link')}>
                           Watches
                        </Link>
                     </li>
                  </ul>

                  <ul className={cx('footer-nav-list')}>
                     <li className={cx('footer-nav-item')}>
                        <h2 className={cx('nav-title')}>Products</h2>
                     </li>

                     <li className={cx('footer-nav-item')}>
                        <Link to={'/'} className={cx('footer-nav-link')}>
                           Prices drop
                        </Link>
                     </li>

                     <li className={cx('footer-nav-item')}>
                        <Link to={'/'} className={cx('footer-nav-link')}>
                           New products
                        </Link>
                     </li>

                     <li className={cx('footer-nav-item')}>
                        <Link to={'/'} className={cx('footer-nav-link')}>
                           Best sales
                        </Link>
                     </li>

                     <li className={cx('footer-nav-item')}>
                        <Link to={'/'} className={cx('footer-nav-link')}>
                           Contact us
                        </Link>
                     </li>

                     <li className={cx('footer-nav-item')}>
                        <Link to={'/'} className={cx('footer-nav-link')}>
                           Sitemap
                        </Link>
                     </li>
                  </ul>

                  <ul className={cx('footer-nav-list')}>
                     <li className={cx('footer-nav-item')}>
                        <h2 className={cx('nav-title')}>Our Company</h2>
                     </li>

                     <li className={cx('footer-nav-item')}>
                        <Link to={'/'} className={cx('footer-nav-link')}>
                           Delivery
                        </Link>
                     </li>

                     <li className={cx('footer-nav-item')}>
                        <Link to={'/'} className={cx('footer-nav-link')}>
                           Legal Notice
                        </Link>
                     </li>

                     <li className={cx('footer-nav-item')}>
                        <Link to={'/'} className={cx('footer-nav-link')}>
                           Terms and conditions
                        </Link>
                     </li>

                     <li className={cx('footer-nav-item')}>
                        <Link to={'/'} className={cx('footer-nav-link')}>
                           About us
                        </Link>
                     </li>

                     <li className={cx('footer-nav-item')}>
                        <Link to={'/'} className={cx('footer-nav-link')}>
                           Secure payment
                        </Link>
                     </li>
                  </ul>

                  <ul className={cx('footer-nav-list')}>
                     <li className={cx('footer-nav-item')}>
                        <h2 className={cx('nav-title')}>Services</h2>
                     </li>

                     <li className={cx('footer-nav-item')}>
                        <Link to={'/'} className={cx('footer-nav-link')}>
                           Prices drop
                        </Link>
                     </li>

                     <li className={cx('footer-nav-item')}>
                        <Link to={'/'} className={cx('footer-nav-link')}>
                           New products
                        </Link>
                     </li>

                     <li className={cx('footer-nav-item')}>
                        <Link to={'/'} className={cx('footer-nav-link')}>
                           Best sales
                        </Link>
                     </li>

                     <li className={cx('footer-nav-item')}>
                        <Link to={'/'} className={cx('footer-nav-link')}>
                           Contact us
                        </Link>
                     </li>

                     <li className={cx('footer-nav-item')}>
                        <Link to={'/'} className={cx('footer-nav-link')}>
                           Sitemap
                        </Link>
                     </li>
                  </ul>

                  <ul className={cx('footer-nav-list')}>
                     <li className={cx('footer-nav-item')}>
                        <h2 className={cx('nav-title')}>Contact</h2>
                     </li>

                     <li className={cx('footer-nav-item', 'custom-flex')}>
                        <div className={cx('icon-box')}>
                           <FontAwesomeIcon icon={faLocationDot} />
                        </div>

                        <address className={cx('content')}>
                           419 State 414 Rte Beaver Dams, New York(NY), 14812, USA
                        </address>
                     </li>

                     <li className={cx('footer-nav-item', 'custom-flex')}>
                        <div className={cx('icon-box')}>
                           <FontAwesomeIcon icon={faPhone} />
                        </div>

                        <Link to={'/'} className={cx('footer-nav-link')}>
                           (607) 936-8058
                        </Link>
                     </li>

                     <li className={cx('footer-nav-item', 'custom-flex')}>
                        <div className={cx('icon-box')}>
                           <FontAwesomeIcon icon={faEnvelope} />
                        </div>

                        <Link to={'/'} className={cx('footer-nav-link')}>
                           example@gmail.com
                        </Link>
                     </li>
                  </ul>

                  <ul className={cx('footer-nav-list')}>
                     <li className={cx('footer-nav-item')}>
                        <h2 className={cx('nav-title')}>Follow Us</h2>
                     </li>

                     <li>
                        <ul className={cx('social-link')}>
                           <li className={cx('footer-nav-item')}>
                              <Link to={'/'} className={cx('footer-nav-link')}>
                                 <FontAwesomeIcon icon={faFacebook} />
                              </Link>
                           </li>

                           <li className={cx('footer-nav-item')}>
                              <Link to={'/'} className={cx('footer-nav-link')}>
                                 <FontAwesomeIcon icon={faTwitter} />
                              </Link>
                           </li>

                           <li className={cx('footer-nav-item')}>
                              <Link to={'/'} className={cx('footer-nav-link')}>
                                 <FontAwesomeIcon icon={faLinkedin} />
                              </Link>
                           </li>

                           <li className={cx('footer-nav-item')}>
                              <Link to={'/'} className={cx('footer-nav-link')}>
                                 <FontAwesomeIcon icon={faInstagram} />
                              </Link>
                           </li>
                        </ul>
                     </li>
                  </ul>
               </div>
            </div>

            <div className={cx('footer-bottom')}>
               <div className={cx('custom-container')}>
                  <Image src={images.payment} alt="payment method" className={cx('payment-img')} />

                  <p className={cx('copyright')}>
                     Copyright &copy; <Link to={'/'}>Anon</Link> all rights reserved.
                  </p>
               </div>
            </div>
         </footer>
      </div>
   );
}

export default Footer;
