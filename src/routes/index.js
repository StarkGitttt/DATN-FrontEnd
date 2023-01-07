// COMPONENT NOT REQUIRED LOGIN
import Home from '~/pages/Home';
import Products from '~/pages/Products';
import ProductDetails from '~/pages/ProductDetails';
import Checkout from '~/pages/Checkout';
import OrderStatus from '~/pages/OrderStatus';
import SignUp from '~/pages/SignUp';

// COMPONENT REQUIRED LOGIN
import Profile from '~/pages/Profile';
import RecoverPass from '~/pages/RecoverPassword';
import OrderHistory from '~/pages/OrderHistory';
import FavoriteProducts from '~/pages/FavoriteProducts';

// ROUTES NOT REQUIRED LOGIN
const publicRoutes = [
   { path: '/', component: Home },
   { path: '/products', component: Products },
   { path: '/product/:productId', component: ProductDetails },
   { path: '/checkout', component: Checkout },
   { path: '/order/status', component: OrderStatus },
   { path: '/signup', component: SignUp, layout: null },
];

// ROUTES REQUIRED LOGIN
const privateRoutes = [
   { path: '/profile/:type', component: Profile },
   { path: '/recoverpass', component: RecoverPass },
   { path: '/order/history', component: OrderHistory },
   { path: '/product/favorite', component: FavoriteProducts },
];

export { publicRoutes, privateRoutes };
