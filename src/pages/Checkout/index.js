import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Checkout.module.scss';
import images from '~/assets/images';
import Image from '~/components/reuse/Image';
import ProgressCheckout from '~/components/reuse/ProgressCheckout';
const cx = classNames.bind(styles);

function Checkout() {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('page-main')}>
            <div className={cx('page-title-wrapper')}>
               <h1 className={cx('page-title')}>
                  <span className={cx('base')}>Giỏ hàng</span>
               </h1>
            </div>
            {/* <div className={cx('columns')}>
               <div className={cx('column', 'main')}>
                  <div className={cx('cart-container')}>
                     <form className={cx('form', 'form-cart')}>
                        <div className={cx('cart', 'table-wrapper')}>
                           <div className={cx('cart-count')}>5 sản phẩm </div>
                        </div>
                     </form>
                  </div>
               </div>
            </div> */}
            <div className={cx('page-content-wrapper', 'flex', 'flex-wrap')}>
               <div className={cx('cart-list', 'pr-[60px]', 'flex', 'flex-col')}>
                  <div className={cx('cart-count')}>2 Product</div>
                  <div className={cx('cart-item')}>
                     <div className={cx('item-info')}>
                        {/* ITEM 1 */}
                        <div className={cx('item')}>
                           <div className={cx('item__content')}>
                              <Link to={'/'} className={cx('product-item-photo')}>
                                 <Image src={images.thumbnail} alt="" className={cx('product-image-photo')} />
                              </Link>
                              <div className={cx('product-item-details')}>
                                 <strong className={cx('product-item-name')}>
                                    <Link to={'/'}>Áo Thun Nam Tay Ngắn Trơn Form Fitted - 10S21TSH019CR2</Link>
                                 </strong>
                                 <div className={cx('item-options')}>
                                    <div className={cx('item-option')}>COLOR: LIGHT GREEN</div>
                                    <div className={cx('item-option')}>SIZE: S</div>
                                 </div>
                                 <div className={cx('item-qty')}>
                                    <div className={cx('control-qty')}>
                                       <Link to="#" className={cx('btn-number', 'minus')}></Link>
                                       <input onChange={() => {}} className={cx('input-text-qty')} value={1} />
                                       <Link to="#" className={cx('btn-number', 'plus')}></Link>
                                    </div>
                                 </div>
                                 <div className={cx('item-price')}>
                                    <span className={cx('price')}>579.000&nbsp;₫</span>
                                 </div>
                                 <div className={cx('item-actions')}>
                                    <Link to="#" className={cx('action-delete')}></Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                        {/* ITEM 2 */}
                        <div className={cx('item')}>
                           <div className={cx('item__content')}>
                              <Link to={'/'} className={cx('product-item-photo')}>
                                 <Image src={images.thumbnail} alt="" className={cx('product-image-photo')} />
                              </Link>
                              <div className={cx('product-item-details')}>
                                 <strong className={cx('product-item-name')}>
                                    <Link to={'/'}>Áo Thun Nam Tay Ngắn Trơn Form Fitted - 10S21TSH019CR2</Link>
                                 </strong>
                                 <div className={cx('item-options')}>
                                    <div className={cx('item-option')}>COLOR: LIGHT GREEN</div>
                                    <div className={cx('item-option')}>SIZE: S</div>
                                 </div>
                                 <div className={cx('item-qty')}>
                                    <div className={cx('control-qty')}>
                                       <Link to="#" className={cx('btn-number', 'minus')}></Link>
                                       <input onChange={() => {}} className={cx('input-text-qty')} value={1} />
                                       <Link to="#" className={cx('btn-number', 'plus')}></Link>
                                    </div>
                                 </div>
                                 <div className={cx('item-price')}>
                                    <span className={cx('price')}>579.000&nbsp;₫</span>
                                 </div>
                                 <div className={cx('item-actions')}>
                                    <Link to="#" className={cx('action-delete')}></Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                        {/* ITEM 3 */}
                        <div className={cx('item')}>
                           <div className={cx('item__content')}>
                              <Link to={'/'} className={cx('product-item-photo')}>
                                 <Image src={images.thumbnail} alt="" className={cx('product-image-photo')} />
                              </Link>
                              <div className={cx('product-item-details')}>
                                 <strong className={cx('product-item-name')}>
                                    <Link to={'/'}>Áo Thun Nam Tay Ngắn Trơn Form Fitted - 10S21TSH019CR2</Link>
                                 </strong>
                                 <div className={cx('item-options')}>
                                    <div className={cx('item-option')}>COLOR: LIGHT GREEN</div>
                                    <div className={cx('item-option')}>SIZE: S</div>
                                 </div>
                                 <div className={cx('item-qty')}>
                                    <div className={cx('control-qty')}>
                                       <Link to="#" className={cx('btn-number', 'minus')}></Link>
                                       <input onChange={() => {}} className={cx('input-text-qty')} value={1} />
                                       <Link to="#" className={cx('btn-number', 'plus')}></Link>
                                    </div>
                                 </div>
                                 <div className={cx('item-price')}>
                                    <span className={cx('price')}>579.000&nbsp;₫</span>
                                 </div>
                                 <div className={cx('item-actions')}>
                                    <Link to="#" className={cx('action-delete')}></Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                        {/* ITEM 4 */}
                        <div className={cx('item')}>
                           <div className={cx('item__content')}>
                              <Link to={'/'} className={cx('product-item-photo')}>
                                 <Image src={images.thumbnail} alt="" className={cx('product-image-photo')} />
                              </Link>
                              <div className={cx('product-item-details')}>
                                 <strong className={cx('product-item-name')}>
                                    <Link to={'/'}>Áo Thun Nam Tay Ngắn Trơn Form Fitted - 10S21TSH019CR2</Link>
                                 </strong>
                                 <div className={cx('item-options')}>
                                    <div className={cx('item-option')}>COLOR: LIGHT GREEN</div>
                                    <div className={cx('item-option')}>SIZE: S</div>
                                 </div>
                                 <div className={cx('item-qty')}>
                                    <div className={cx('control-qty')}>
                                       <Link to="#" className={cx('btn-number', 'minus')}></Link>
                                       <input onChange={() => {}} className={cx('input-text-qty')} value={1} />
                                       <Link to="#" className={cx('btn-number', 'plus')}></Link>
                                    </div>
                                 </div>
                                 <div className={cx('item-price')}>
                                    <span className={cx('price')}>579.000&nbsp;₫</span>
                                 </div>
                                 <div className={cx('item-actions')}>
                                    <Link to="#" className={cx('action-delete')}></Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className={cx('sidebar-main')}>
                  <div className={cx('cart-summary-coupon')}>
                     {/* BLOCK DISCOUNT 1 */}
                     <div className={cx('block-discount')}>
                        <div className={cx('content')}>
                           <form action="">
                              <div className={cx('block-discount-title')}>
                                 <strong>NHẬP MÃ COUPON ƯU ĐÃI</strong>
                              </div>
                              <div className={cx('note')}>
                                 <span>Chỉ sử dụng 1 mã cho 1 đơn hàng</span>
                              </div>
                              <div className={cx('coupon-input')}>
                                 <div className={cx('field')}>
                                    <div className={cx('control')}>
                                       <input
                                          type="text"
                                          className={cx('input-text')}
                                          value=""
                                          placeholder="Nhập mã giảm giá"
                                       />
                                       <button className={cx('control-action')} value="Áp dụng" type="button">
                                          <span>Áp dụng</span>
                                       </button>
                                    </div>
                                 </div>
                              </div>
                           </form>
                        </div>
                     </div>
                     {/* BLOCK DISCOUNT 2 */}
                     <div className={cx('block-discount')}>
                        <div className={cx('content')}>
                           <form action="">
                              <div className={cx('block-discount-title')}>
                                 <strong>NHẬP SỐ ĐIỆN THOẠI VIP</strong>
                                 <span> (Nếu có)</span>
                              </div>
                              <div className={cx('note', 'customer-vip')}>
                                 <Link to={'#'}>Chính sách khách hàng VIP</Link>
                              </div>
                              <div className={cx('coupon-input')}>
                                 <div className={cx('field')}>
                                    <div className={cx('control')}>
                                       <input
                                          type="text"
                                          className={cx('input-text')}
                                          value=""
                                          placeholder="Nhập số điện thoại"
                                       />
                                       <button className={cx('control-action')} value="Áp dụng" type="button">
                                          <span>Áp dụng</span>
                                       </button>
                                    </div>
                                 </div>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
                  <div className={cx('cart-summary')}>
                     <strong className={cx('title')}>Tạm tính</strong>
                     <div className={cx('cart-totals')}>
                        <div className={cx('table-wrapper')}>
                           <table className={cx('table-totals')}>
                              <tbody>
                                 <tr className={cx('totals', 'qty')}>
                                    <th className={cx('mark')}>
                                       <span>Số lượng</span>
                                    </th>
                                    <td className={cx('amount')}>
                                       <span className={cx('price')}>1</span>
                                    </td>
                                 </tr>
                                 <tr className={cx('totals', 'sub')}>
                                    <th className={cx('mark')}>
                                       <span>Tạm tính</span>
                                    </th>
                                    <td className={cx('amount')}>
                                       <span className={cx('price')}>579.000&nbsp;₫</span>
                                    </td>
                                 </tr>
                                 <tr className={cx('totals', 'shipping')}>
                                    <th className={cx('mark', 'pb-totals')}>
                                       <span>Phí vận chuyển</span>
                                    </th>
                                    <td className={cx('amount', 'pb-totals')}>
                                       <span className={cx('price')}>0&nbsp;₫</span>
                                    </td>
                                 </tr>
                                 <tr className={cx('totals', 'grand')}>
                                    <th className={cx('mark', 'pt-totals')}>
                                       <span>Tổng số</span>
                                    </th>
                                    <td className={cx('amount', 'pt-totals')}>
                                       <strong>
                                          <span className={cx('price', 'text-3xl')}>579.000&nbsp;₫</span>
                                       </strong>
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </div>
                     <button className={cx('cart-btn-checkout')}>
                        <span>Thanh toán</span>
                        <span>579.000&nbsp;₫</span>
                     </button>
                  </div>
               </div>
            </div>
         </div>
         <ProgressCheckout />
      </div>
   );
}

export default Checkout;
