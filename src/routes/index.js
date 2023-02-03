import routesConfig from '~/config/routes';
// PAGES NOT REQUIRED LOGIN
import Home from '~/pages/Home';
import Category from '~/pages/Category';
import ProductDetails from '~/pages/ProductDetails';
import SearchProduct from '~/pages/SearchProduct';
import Checkout from '~/pages/Checkout';
import OrderStatus from '~/pages/OrderStatus';
import SignUp from '~/pages/SignUp';
import { CheckoutStepLogin, CheckoutStepShipping, CheckoutStepPayment } from '~/pages/CheckoutStep';
// PAGES REQUIRED LOGIN
import Profile from '~/pages/Profile';
import RecoverPass from '~/pages/RecoverPassword';
import OrderHistory from '~/pages/OrderHistory';
import FavoriteProducts from '~/pages/FavoriteProducts';
import NewProducts from '~/pages/NewProducts';

// ROUTES NOT REQUIRED LOGIN
const publicRoutes = [
   { path: routesConfig.home, component: Home },
   { path: routesConfig.categoryDetails, component: Category },
   { path: routesConfig.productDetails, component: ProductDetails },
   { path: routesConfig.searchProduct, component: SearchProduct },
   { path: routesConfig.checkout, component: Checkout },
   { path: routesConfig.checkoutLogin, component: CheckoutStepLogin },
   { path: routesConfig.checkoutShipping, component: CheckoutStepShipping },
   { path: routesConfig.checkoutPayment, component: CheckoutStepPayment },
   { path: routesConfig.orderStatus, component: OrderStatus },
   { path: routesConfig.signup, component: SignUp, layout: null },
   { path: routesConfig.favoriteProducts, component: FavoriteProducts },
   { path: routesConfig.currentCreatedProducts, component: NewProducts },
];

// ROUTES REQUIRED LOGIN
const privateRoutes = [
   { path: '/profile/:type', component: Profile },
   { path: '/recoverpass', component: RecoverPass },
   { path: '/order/history', component: OrderHistory },
   { path: '/product/favorite', component: FavoriteProducts },
];

export { publicRoutes, privateRoutes };
