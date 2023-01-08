import 'swiper/swiper-bundle.css';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { publicRoutes, privateRoutes } from './routes';
import { DefaultLayout } from './components/layouts';

function App() {
   /** ======= swiper ======= */
   SwiperCore.use([Autoplay, Pagination, Navigation]);
   /** ======= initial aos ======= */
   useEffect(() => {
      AOS.init();
      AOS.refresh();
   }, []);

   return (
      <Router>
         <div className="App">
            <Routes>
               {/* Public routes */}
               {publicRoutes.map((route) => {
                  const Page = route.component;
                  let Layout = DefaultLayout;

                  if (route.layout) {
                     Layout = route.layout;
                  } else if (route.layout === null) {
                     Layout = Fragment;
                  }

                  return (
                     <Route
                        key={route}
                        path={route.path}
                        element={
                           <Layout>
                              <Page />
                           </Layout>
                        }
                     />
                  );
               })}

               {/* Private routes */}
               {privateRoutes.map((route) => {
                  const Page = route.component;
                  let Layout = DefaultLayout;

                  if (route.layout) {
                     Layout = route.layout;
                  } else if (route.layout === null) {
                     Layout = Fragment;
                  }

                  return (
                     <Route
                        key={route}
                        path={route.path}
                        element={
                           <Layout>
                              <Page />
                           </Layout>
                        }
                     />
                  );
               })}
            </Routes>
         </div>
      </Router>
   );
}

export default App;
