import classNames from 'classnames/bind';
import styles from './ChangePassForm.module.scss';

const cx = classNames.bind(styles);

function ChangePassForm() {
   return <div className={cx('wrapper')}>Change Password Page</div>;
}

export default ChangePassForm;
