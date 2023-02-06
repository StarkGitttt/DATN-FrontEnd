import routesConfig from '~/config/routes';
// PAGES NOT REQUIRED LOGIN
import Home from '~/pages/Home';
import Category from '~/pages/Category';
import ProductDetails from '~/pages/ProductDetails';
import SearchProduct from '~/pages/SearchProduct';
import Checkout from '~/pages/Checkout';
import SignUp from '~/pages/SignUp';
import OrderDetails from '~/pages/OrderDetails';
import CheckoutStep from '~/pages/CheckoutStep';
import OrderTracking from '~/pages/OrderTracking';

// PAGES REQUIRED LOGIN
import { HistoryOrder, PendingOrder, CancelOrder } from '~/pages/OrderStatus';
import Profile from '~/pages/Profile';
import RecoverPass from '~/pages/RecoverPassword';
import FavoriteProducts from '~/pages/FavoriteProducts';
import NewProducts from '~/pages/NewProducts';

// ROUTES NOT REQUIRED LOGIN
const publicRoutes = [
   { path: routesConfig.home, component: Home },
   { path: routesConfig.categoryDetails, component: Category },
   { path: routesConfig.productDetails, component: ProductDetails },
   { path: routesConfig.searchProduct, component: SearchProduct },
   { path: routesConfig.checkout, component: Checkout },
   { path: routesConfig.checkoutStep, component: CheckoutStep },
   { path: routesConfig.signup, component: SignUp, layout: null },
   { path: routesConfig.favoriteProducts, component: FavoriteProducts },
   { path: routesConfig.currentCreatedProducts, component: NewProducts },
   { path: routesConfig.orderTracking, component: OrderTracking },
];

// ROUTES REQUIRED LOGIN
const privateRoutes = [
   { path: '/profile/:type', component: Profile },
   { path: '/recoverpass', component: RecoverPass },
   { path: '/product/favorite', component: FavoriteProducts },
   { path: routesConfig.orderSuccess, component: HistoryOrder },
   { path: routesConfig.orderPending, component: PendingOrder },
   { path: routesConfig.orderCancel, component: CancelOrder },
   { path: `${routesConfig.orderDetails}/:idOrder`, component: OrderDetails },
];

export { publicRoutes, privateRoutes };
