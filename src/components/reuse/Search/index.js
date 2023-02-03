import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faCircleXmark,
   faSearch,
   faCircleNotch,
   faMagnifyingGlass,
   faAngleDown,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './Search.module.scss';
import SearchProductItem from '~/components/reuse/SearchProductItem';
import { useDebounce } from '~/hooks';
import { Wrapper as PopperWrapper } from '~/components/reuse/Popper';
import { ProductAPI } from '~/api/EcommerceApi';
import routesConfig from '~/config/routes';

const cx = classNames.bind(styles);

function Search() {
   const { t } = useTranslation();

   const [searchValue, setSearchValue] = useState('');
   const [searchResult, setSearchResult] = useState([]);
   const [showResult, setShowResult] = useState(true);
   const [loading, setLoading] = useState(false);
   const [nextPage, setNextPage] = useState(false);

   const inputRef = useRef();

   const handleClear = () => {
      setSearchValue('');
      inputRef.current.focus();
   };

   const handleHideResult = () => {
      setShowResult(false);
   };

   const handleChangeSearchValue = (e) => {
      const searchValue = e.target.value;
      if (!searchValue.startsWith(' ')) {
         setSearchValue(searchValue);
      }
   };

   const handleHideTippy = (e) => {
      if (!debouncedValue.trim()) {
         e.preventDefault();
      }
      setShowResult(false);
   };

   const debouncedValue = useDebounce(searchValue, 500);

   useEffect(() => {
      if (!debouncedValue.trim()) {
         setSearchResult([]);
         return;
      }

      setLoading(true);
      ProductAPI.searchProducts({
         params: {
            q: debouncedValue,
            type: 'less',
         },
      })
         .then((res) => {
            if (res.data) {
               setSearchResult(res.data.products);
               setLoading(false);
               setNextPage(res.data.nextPage);
            }
         })
         .catch((e) => {
            console.log('Search products error: ', e);
            setLoading(false);
         });
   }, [debouncedValue]);

   return (
      <div className={cx('search-box')}>
         <div className="tippy-index">
            <Tippy
               render={(attrs) => (
                  <motion.div
                     animate={{
                        opacity: showResult && !loading && (debouncedValue || searchResult.length > 0) ? 1 : 0,
                     }}
                     className={cx('search-result')}
                     tabIndex="-1"
                     {...attrs}
                  >
                     <PopperWrapper>
                        <h4 className={cx('search-title')}>{t('search.product.title')}</h4>
                        {searchResult.length > 0 ? (
                           <>
                              {searchResult.map((item) => (
                                 <SearchProductItem key={item?.id} data={item} setShowResult={setShowResult} />
                              ))}
                              {nextPage ? (
                                 <Link
                                    to={`${routesConfig.searchProduct}?q=${debouncedValue}&type=more`}
                                    className={cx('view-more')}
                                    onClick={handleHideTippy}
                                 >
                                    <p>{t('search.product.view')}</p>
                                    <FontAwesomeIcon icon={faAngleDown} />
                                 </Link>
                              ) : (
                                 ''
                              )}
                           </>
                        ) : (
                           <div>
                              {debouncedValue ? (
                                 <div className={cx('empty-product')}>
                                    <p>
                                       {t('search.product.notFound')} '<strong>{debouncedValue}</strong>'
                                    </p>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('icon-empty-product')} />
                                 </div>
                              ) : (
                                 ''
                              )}
                           </div>
                        )}
                     </PopperWrapper>
                  </motion.div>
               )}
               placement="bottom-end"
               visible={showResult && (debouncedValue || searchResult.length > 0)}
               interactive
               animation
               onClickOutside={handleHideResult}
            >
               <form action="" className={cx('search')}>
                  <span className={cx('icon-large', 'relative', 'flex', 'items-center')}>
                     <FontAwesomeIcon icon={faSearch} />
                  </span>
                  <input
                     ref={inputRef}
                     value={searchValue}
                     name=""
                     id=""
                     placeholder={t('search.product.placeholder')}
                     onChange={handleChangeSearchValue}
                     onFocus={() => setShowResult(true)}
                  />
                  {!!searchValue && !loading && (
                     <button className={cx('clear')} type="button" onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                     </button>
                  )}
                  {loading && <FontAwesomeIcon className={cx('loading')} icon={faCircleNotch} />}
                  <Link to={`${routesConfig.searchProduct}?q=${debouncedValue}&type=more`} onClick={handleHideTippy}>
                     <button type="submit">{t('search.product.button')}</button>
                  </Link>
               </form>
            </Tippy>
         </div>
      </div>
   );
}

export default Search;
