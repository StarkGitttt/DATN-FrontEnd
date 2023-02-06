import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './ProgressCheckout.module.scss';

const cx = classNames.bind(styles);

function ProgressCheckout() {
   const { t } = useTranslation();
   const idStep = useSelector((state) => state.user.userIdStep);
   return (
      <div className={cx('wrapper')}>
         <section className={cx('progress-checkout-container')}>
            <ul className={cx('progress-step-list')}>
               <li className={cx('progress-step-item', idStep === '@login' ? 'current-item' : null)}>
                  <span className={cx('progress-count')}>1</span>
                  <span className={cx('progress-label')}>{t('checkout.step.progress.login')}</span>
               </li>
               <li className={cx('progress-step-item', idStep === '@shipping' ? 'current-item' : null)}>
                  <span className={cx('progress-count')}>2</span>
                  <span className={cx('progress-label')}>{t('checkout.step.progress.shipping')}</span>
               </li>
               <li className={cx('progress-step-item', idStep === '@payment' ? 'current-item' : null)}>
                  <span className={cx('progress-count')}>3</span>
                  <span className={cx('progress-label')}>{t('checkout.step.progress.payment')}</span>
               </li>
            </ul>
         </section>
      </div>
   );
}

export default ProgressCheckout;
