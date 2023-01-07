import { useCallback, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './LoginForm.module.scss';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function LoginForm({ showForm, setShowForm }) {
   const formRef = useRef();
   const closeForm = (e) => {
      if (formRef.current === e.target) setShowForm(false);
   };

   const keyPress = useCallback(
      (e) => {
         if (e.key === 'Escape' && showForm) setShowForm(false);
      },
      [setShowForm, showForm],
   );
   useEffect(() => {
      document.addEventListener('keydown', keyPress);
      // call clean up func to clean event avoid out of memory;
      return () => document.removeEventListener('keydown', keyPress);
   }, [keyPress]);

   return (
      <>
         {showForm ? (
            <div className={cx('form-container')} ref={formRef} onClick={closeForm}>
               <div className={cx('form-wrap', 'pt-[25px]', 'pl-[25px]', 'pr-[25px]', 'pb-[14px]')}>
                  <form className={cx('login-form', 'validate-form')}>
                     <span className={cx('login-form-title', 'pb-[25px]')}>Login</span>
                     <FontAwesomeIcon
                        icon={faXmark}
                        className={cx('close-form')}
                        onClick={() => setShowForm(!showForm)}
                     />
                     <div
                        className={cx('wrap-input', 'validate-input', 'mb-[23px]')}
                        data-validate="Username is reauired"
                     >
                        <span className={cx('label-input')}>Username</span>
                        <input className={cx('input')} type="text" name="username" placeholder="Type your username" />
                        <span className={cx('focus-input')}></span>
                     </div>

                     <div className={cx('wrap-input', 'validate-input')} data-validate="Password is required">
                        <span className={cx('label-input')}>Password</span>
                        <input className={cx('input')} type="password" name="pass" placeholder="Type your password" />
                        <span className={cx('focus-input')}></span>
                     </div>

                     <div className={cx('text-right', 'pt-[10px]', 'pb-[17px]')}>
                        <Link to={'/'}>Forgot password?</Link>
                     </div>

                     <div className={cx('container-login-form-btn')}>
                        <div className={cx('wrap-login-form-btn')}>
                           <button className={cx('login-form-btn')}>Login</button>
                        </div>
                     </div>

                     <div className={cx('txt1', 'text-center', 'pt-[24px]', 'pb-[20px]')}>
                        <span>Or Login Using</span>
                     </div>

                     <div className={cx('flex', 'justify-center', 'items-center')}>
                        <Link to={'/'} className={cx('login-social-item', 'bg1')}>
                           <FontAwesomeIcon icon={faFacebook} />
                        </Link>

                        <Link to={'/'} className={cx('login-social-item', 'bg2')}>
                           <FontAwesomeIcon icon={faTwitter} />
                        </Link>

                        <Link to={'/'} className={cx('login-social-item', 'bg3')}>
                           <FontAwesomeIcon icon={faGoogle} />
                        </Link>
                     </div>

                     {/* <div className={cx('flex', 'flex-col', 'items-center', 'pt-[20px]')}>
                     <Link to={'/'} className={cx('primary-button')}>
                        Sign Up
                     </Link>
                  </div> */}
                  </form>
               </div>
            </div>
         ) : null}
      </>
   );
}

export default LoginForm;
