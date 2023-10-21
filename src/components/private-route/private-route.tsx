import { Navigate } from "react-router-dom";
import { AppRoute, AuthorizationStatus } from "../../const";

type PrivetRouteProps = {
    authorizationStatus: AuthorizationStatus;
    children: JSX.Element
}

 export default function PrivetRoute(props: PrivetRouteProps): JSX.Element {
    const {authorizationStatus, children} = props;

    return (
        authorizationStatus === AuthorizationStatus.Auth
            ? children : <Navigate to = {AppRoute.Login} />
    );
 }