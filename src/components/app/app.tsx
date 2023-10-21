import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Layout } from '../components/layout' Надо подумать, что туда внести.
import MainScreen from '../pages/main-screen/main-screen';
import LoginPassword from '../pages/login-screen/login-screen';
import FavoritesScreen from '../pages/favorites-screen/favorites-screen';
import OfferScreen from '../pages/offer-screen/offer-screen';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivetRoute from '../private-route/private-route';

type MainScreenProps = {
  sum: number;
};

type LoginPasswordProps = {
  email: string,
  password: string;
};

export default function App({ sum }: MainScreenProps) : JSX.Element{
  return (
    <BrowserRouter>
        <Routes>
            <Route path={AppRoute.Root} element = { <MainScreen sum={ sum } /> } >
              <Route path={AppRoute.Error404} element = { <NotFoundScreen /> } />
              <Route path={AppRoute.Login} element = { 
                <PrivetRoute
                  authorizationStatus={AuthorizationStatus.NoAuth}  
                >
                  <LoginPassword { email, password } /> 
                </PrivetRoute>
                }
              />
              <Route path={AppRoute.Favorites} element = { <FavoritesScreen/> } />
              <Route path={AppRoute.Offer} element = { <OfferScreen /> } />
            </Route>
        </Routes>
    </BrowserRouter>
  ); 
}
 