import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Layout } from '../components/layout' Надо подумать, что туда внести.
import MainScreen from '../pages/main-screen/main-screen';
import LoginPassword from '../pages/login-screen/login-screen';
import FavoritesScreen from '../pages/favorites-screen/favorites-screen';
import OfferScreen from '../pages/offer-screen/offer-screen';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import { AppRoute, AuthorizationStatus } from '../const';
import PrivateRoute from '../components/private-route/private-route';
import { OfferListItem } from '../types/offer';

type AppsListProps = {
    offers: OfferListItem[];
  }

export default function App({ offers }: AppsListProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainScreen Offers={offers} />}>
          <Route path={AppRoute.Error404} element={<NotFoundScreen />} />
          <Route path={AppRoute.Login} element={<LoginPassword />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <FavoritesScreen />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Offer} element={<OfferScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
