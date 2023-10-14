import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import LoginAndPassword from './components/app/app';
import FavoritesScreen from './components/app/app';
import OfferScreen from './pages/offer-screen/offer-screen';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Settings = {
  sum : 0,
  email: "Oliver.conner@gmail.com",
  password: "12345678"
} as const;

root.render(
  <React.StrictMode>
    <App
      sum = {Settings.sum}
    />
    <LoginAndPassword
      email = {Settings.email}
      password = {Settings.password}
    />
    <FavoritesScreen />
    <OfferScreen/>
  </React.StrictMode>
);
