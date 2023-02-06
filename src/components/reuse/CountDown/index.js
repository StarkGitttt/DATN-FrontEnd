import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Countdown from 'react-countdown';
import classNames from 'classnames/bind';

import { toast } from 'react-toastify';
import { OrderAPI } from '~/api/EcommerceApi';
import { removeAllCartItem, removeQRInfo } from '~/features/user/userSlice';
import styles from './CountDown.module.scss';
import Image from '../Image';

const cx = classNames.bind(styles);

function CountDown({ time, completedMessage, redirectUrl = '/' }) {
   const { t } = useTranslation();

   const qrInfo = useSelector((state) => state.user.userQRInfo);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const timerId = useRef();
   const handleRedirecUrl = (redirectUrl) => {
      navigate(redirectUrl);
   };
   useEffect(() => {
      window.scrollTo(0, 0);
      if (qrInfo?.qrCode) {
         let status = 3;
         timerId.current = setInterval(() => {
            if (status !== 0) {
               OrderAPI.findById({
                  params: {
                     id: qrInfo?.order?.id,
                  },
               })
                  .then((res) => {
                     if (res.data) {
                        status = res.data?.status;
                        console.log('Status order', status);
                        console.log('Call API find order', res.data);
                     }
                  })
                  .catch((e) => {
                     console.log('Find product failed ', e);
                  });
            } else {
               clearInterval(timerId.current);
               toast.success(t('checkout.step.payment.paySuccess'));
               dispatch(removeQRInfo());
               dispatch(removeAllCartItem());
               console.log('Clear interval');
               handleRedirecUrl(redirectUrl);
            }
         }, 5000);
      }
      return () => clearInterval(timerId);
      // eslint-disable-next-line
   }, []);

   const renderer = ({ hours, minutes, seconds, completed }) => {
      if (completed) {
         // Render a completed state
         if (qrInfo?.qrCode) {
            toast.warning(t('checkout.step.payment.expiryQR'));
         }
         clearInterval(timerId.current);
         navigate(redirectUrl);
         dispatch(removeAllCartItem());
      } else {
         // Render a countdown
         return (
            <div className={cx('countdown-container')}>
               <h3 className={cx('countdown-item', 'hours')}>{hours >= 10 ? hours : `0${hours}`}</h3>
               <span className={cx('dot')}>:</span>
               <h3 className={cx('countdown-item', 'minutes')}>{minutes >= 10 ? minutes : `0${minutes}`}</h3>
               <span className={cx('dot')}>:</span>
               <h3 className={cx('countdown-item', 'seconds')}>{seconds >= 10 ? seconds : `0${seconds}`}</h3>
            </div>
         );
      }
   };
   return (
      <div className={cx('wrapper')}>
         {qrInfo?.qrCode && (
            <div className={cx('qr-code')}>
               <h3 className={cx('title')}>{t('checkout.step.payment.yourQR')}</h3>
               <Image src={qrInfo?.qrCode} alt="qr-code" className={cx('qr-image')} />
            </div>
         )}
         <h3 className={cx('success')}>{completedMessage}: </h3>
         <Countdown date={time} renderer={renderer} />,
      </div>
   );
}

export default CountDown;
