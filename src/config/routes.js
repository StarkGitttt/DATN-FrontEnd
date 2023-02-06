const routes = {
   home: '/',
   category: '/category',
   categoryDetails: '/category/:categoryId',
   productDetails: '/product/:productId',
   searchProduct: '/search/products',
   favoriteProducts: '/favorite/products',
   currentCreatedProducts: '/products/new',
   checkout: '/checkout',
   checkoutStep: '/checkout/:step',
   checkoutLogin: '/checkout/temp/login',
   checkoutShipping: '/checkout/temp/shipping',
   checkoutPayment: '/checkout/temp/payment',
   signup: '/signup',
   orderPending: '/order/pending',
   orderCancel: '/order/cancel',
   orderSuccess: '/order/history',
   orderDetails: '/order/details',
   orderTracking: '/order/tracking',
};

export default routes;
