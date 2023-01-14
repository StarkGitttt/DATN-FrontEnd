import classNames from 'classnames/bind';
import styles from './OrderHistory.module.scss';
const cx = classNames.bind(styles);

function OrderHistory() {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('container-history')}>
            <div className={cx('history-title')}>History Oders</div>
            <div className={cx('card-items')}>
               <table>
                  <thead>
                     <tr>
                        <th>Oders ID</th>
                        <th>Product Name</th>
                        <th>Net Amount</th>
                        <th>Processing</th>
                        <th>Order Date</th>
                        <th>Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td data-title="Column #1">#162728</td>

                        <td>Điện thoại Iphone 8</td>
                        <td data-title="Column #3">
                           <b>15.600.000</b>
                        </td>
                        <td data-title="Column #4">
                           <div className={cx('pendding')}>Pendding</div>
                        </td>
                        <td>Jun 15, 2017</td>
                        <td data-title="Column #5">
                           <button className={cx('btn-buy')}>Buy Again</button>
                           <button className={cx('btn-view')}>View Details</button>
                        </td>
                     </tr>
                     <tr>
                        <td data-title="Column #1">#162728</td>

                        <td>Điện thoại Iphone 8</td>
                        <td data-title="Column #3">
                           <b>15.600.000</b>
                        </td>
                        <td data-title="Column #4">
                           <div className={cx('faid')}>Faid</div>
                        </td>
                        <td>Jun 15, 2017</td>
                        <td data-title="Column #5">
                           <button className={cx('btn-buy')}>Buy Again</button>
                           <button className={cx('btn-view')}>View Details</button>
                        </td>
                     </tr>
                     <tr>
                        <td data-title="Column #1">#162728</td>

                        <td>Điện thoại Iphone 8</td>
                        <td data-title="Column #3">
                           <b>15.600.000</b>
                        </td>
                        <td data-title="Column #4">
                           <div className={cx('sucsess')}>Sucsess</div>
                        </td>
                        <td>Jun 15, 2017</td>
                        <td data-title="Column #5">
                           <button className={cx('btn-buy')}>Buy Again</button>
                           <button className={cx('btn-view')}>View Details</button>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
}

export default OrderHistory;
