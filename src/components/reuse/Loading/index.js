import ReactLoading from 'react-loading';
import classNames from 'classnames/bind';

import styles from './Loading.module.scss';
const cx = classNames.bind(styles);
function Loading({ loading = false, setLoading, type, color, width = 50, height = 50 }) {
   return (
      <>
         {loading && (
            <div className={cx('spiner-container')}>
               <ReactLoading type={type} color={color} width={width} height={height} />
            </div>
         )}
      </>
   );
}

export default Loading;
