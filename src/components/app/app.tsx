import LoginPassword from '../../pages/login-screen/login-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';

type MainScreenProps = {
    sum : number
}

type LoginPasswordProps = {
    email : boolean & string,
    password : boolean & string
  }

export default function App({ sum }: MainScreenProps, 
    {email , password}: LoginPasswordProps) {
    return (
        <>
            <MainScreen sum={ sum } />
            <LoginPassword
                email={ email }
                password={ password } />
            <FavoritesScreen />
            <OfferScreen/>
        </>
    )
}