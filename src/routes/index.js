// COMPONENT NOT REQUIRED LOGIN
import Home from '~/pages/Home';
import Category from '~/pages/Category';
import ProductDetails from '~/pages/ProductDetails';
import Checkout from '~/pages/Checkout';
import OrderStatus from '~/pages/OrderStatus';
import SignUp from '~/pages/SignUp';
import { CheckoutStepLogin, CheckoutStepShipping, CheckoutStepPayment } from '~/pages/CheckoutStep';
// COMPONENT REQUIRED LOGIN
import Profile from '~/pages/Profile';
import RecoverPass from '~/pages/RecoverPassword';
import OrderHistory from '~/pages/OrderHistory';
import FavoriteProducts from '~/pages/FavoriteProducts';

// ROUTES NOT REQUIRED LOGIN
const publicRoutes = [
   { path: '/', component: Home },
   { path: '/category/:categoryId', component: Category },
   { path: '/product/:productId', component: ProductDetails },
   { path: '/checkout', component: Checkout },
   { path: '/checkout/login', component: CheckoutStepLogin },
   { path: '/checkout/shipping', component: CheckoutStepShipping },
   { path: '/checkout/payment', component: CheckoutStepPayment },
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
