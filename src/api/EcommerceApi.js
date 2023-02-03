import axiosClient from './ClientAxios';
/* USER */
export const UserAPI = {
   login: (params = {}) => {
      const url = `public/users/login`;
      return axiosClient.post(url, params);
   },
   register: (params = {}) => {
      const url = `public/users/register`;
      return axiosClient.post(url, params);
   },
   info: (params = {}) => {
      const url = `user/users`;
      return axiosClient.get(url, params);
   },
   favoriteProducts: (params = {}) => {
      const url = `user/favorites`;
      return axiosClient.get(url, params);
   },
   addOrRemoveFavProd: (params = {}) => {
      const url = `user/favorites`;
      return axiosClient.post(url, params);
   },
};
/* PRODUCT API  */
export const ProductAPI = {
   getOne: (params = {}, id) => {
      const url = `public/products/${id}`;
      return axiosClient.get(url, params);
   },
   totalSoldByProductId: (params = {}, id) => {
      const url = `public/products/sold/${id}`;
      return axiosClient.get(url, params);
   },
   getTotals: (params = {}) => {
      const url = `public/products/totals`;
      return axiosClient.get(url, params);
   },
   searchProducts: (params = {}) => {
      const url = `public/products/search`;
      return axiosClient.get(url, params);
   },
   randomProducts: (params = {}) => {
      const url = `public/products/random`;
      return axiosClient.get(url, params);
   },
   getNewProducts: (params = {}) => {
      const url = `public/products/new`;
      return axiosClient.get(url, params);
   },
   getDealOfDay: (params = {}) => {
      const url = `public/products/selling/today`;
      return axiosClient.get(url, params);
   },
   getBestSeller: (params = {}) => {
      const url = `public/products/best/seller`;
      return axiosClient.get(url, params);
   },
   getCurrentCreated: (params = {}) => {
      const url = `public/products/current/created`;
      return axiosClient.get(url, params);
   },
};
/* CATEGORY API */
export const CategoryAPI = {
   getOne: (params = {}, id) => {
      const url = `public/categories/${id}`;
      return axiosClient.get(url, params);
   },
   getAll: (params = {}) => {
      const url = `public/categories`;
      return axiosClient.get(url, params);
   },
   getSelling: (params = {}) => {
      const url = `public/categories/selling`;
      return axiosClient.get(url, params);
   },
};
/* BRAND API */
export const BrandAPI = {
   getAll: (params = {}) => {
      const url = 'public/brands/index';
      return axiosClient.get(url, params);
   },
};
