export enum AppRoute {
    Login = '/login',
    Favorites = '/favorites',
    Offer = '/offer/:id',
    Root = '/',
    Error404 = '*'
  }

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
    Login = 'LOGIN'
  } 