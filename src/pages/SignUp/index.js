import classNames from 'classnames/bind';
import styles from './SignUp.module.scss';

const cx = classNames.bind(styles);

function SignUp() {
   return (
      <div>
         <div className={cx('page-wrapper', 'bg-gra-02', 'pt-[130px]', 'pb-[100px]')}>
            <div className={cx('wrapper', 'max-w-[680px]')}>
               <div className={cx('card', 'card-4')}>
                  <div className={cx('card-body')}>
                     <h2 className={cx('title')}>Registration Form</h2>
                     <form method="POST">
                        <div className={cx('row', 'row-space')}>
                           <div className={cx('col-2')}>
                              <div className={cx('input-group')}>
                                 <label className={cx('label')}>first name</label>
                                 <input className={cx('input--style-4')} type="text" name="first_name" />
                              </div>
                           </div>
                           <div className={cx('col-2')}>
                              <div className={cx('input-group')}>
                                 <label className={cx('label')}>last name</label>
                                 <input className={cx('input--style-4')} type="text" name="last_name" />
                              </div>
                           </div>
                        </div>
                        <div className={cx('row', 'row-space')}>
                           <div className={cx('col-2')}>
                              <div className={cx('input-group')}>
                                 <label className={cx('label')}>Birthday</label>
                                 <div className={cx('input-group-icon')}>
                                    <input
                                       className={cx('input--style-4', 'js-datepicker')}
                                       type="date"
                                       name="birthday"
                                    />
                                 </div>
                              </div>
                           </div>
                           <div className={cx('col-2')}>
                              <div className={cx('input-group')}>
                                 <label className={cx('label')}>Gender</label>
                                 <div className={cx('pt-[10px]')}>
                                    <label className={cx('radio-container', 'mr-[45px]')} htmlFor="male">
                                       Male
                                       <input type="radio" checked="checked" name="gender" id="male" />
                                       <span className={cx('checkmark')}></span>
                                    </label>
                                    <label className={cx('radio-container')} htmlFor="female">
                                       Female
                                       <input type="radio" name="gender" id="female" />
                                       <span className={cx('checkmark')}></span>
                                    </label>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className={cx('row', 'row-space')}>
                           <div className={cx('col-2')}>
                              <div className={cx('input-group')}>
                                 <label className={cx('label')}>Email</label>
                                 <input className={cx('input--style-4')} type="email" name="email" />
                              </div>
                           </div>
                           <div className={cx('col-2')}>
                              <div className={cx('input-group')}>
                                 <label className={cx('label')}>Phone Number</label>
                                 <input className={cx('input--style-4')} type="text" name="phone" />
                              </div>
                           </div>
                        </div>
                        <div className={cx('input-group')}>
                           <label className={cx('label')}>Subject</label>
                           <div className={cx('rs-select2', 'js-select-simple', 'select--no-search')}>
                              <select name="subject" className={cx('select2-container')}>
                                 <option disabled="disabled" selected="selected">
                                    Choose option
                                 </option>
                                 <option>Subject 1</option>
                                 <option>Subject 2</option>
                                 <option>Subject 3</option>
                              </select>
                              <div className={cx('select-dropdown')}></div>
                           </div>
                        </div>
                        <div className={cx('pt-[15px]')}>
                           <button className={cx('btn', 'btn--radius-2', 'btn--blue')} type="submit">
                              Submit
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default SignUp;
