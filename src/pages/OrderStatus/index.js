import classNames from 'classnames/bind';
import styles from './OrderStatus.module.scss';
import Image from '~/components/reuse/Image';
import images from '~/assets/images';
const cx = classNames.bind(styles);

function OrderStatus() {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('container-oder')}>
            <div className={cx('left')}>
               <h3>Oder Details</h3>
               <Image src={images.thumbnail} alt="" className={cx('showcase-img')} width="75" height="75" />
               <span>
                  <p> Product Name</p> Iphone 14 Pro
               </span>
               <span>
                  {' '}
                  <p>Option/Mout</p> Blue: 10, Red: 4
               </span>

               <span>
                  <p>Date Oder</p>Jun 15, 2017
               </span>
               <span>
                  <p> Description</p>&nbsp;&nbsp; A magical new way to interact with iPhone. A vital new safety feature
                  designed to save lives. An innovative 48MP camera for mind-blowing detail. All powered by the ultimate
                  smartphone chip.
               </span>
            </div>
            <div className={cx('right')}>
               <h3>Tracking Oder</h3>

               <span>TOTAL: 20.000.000 VND</span>
               <h3>Status</h3>
            </div>
         </div>
      </div>
   );
}

export default OrderStatus;
