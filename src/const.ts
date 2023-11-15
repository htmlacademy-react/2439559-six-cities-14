export const DESCRIPTIONS = [
  'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
  "This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.",
  'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
  'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
  'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
];

export const TYPES = ['apartment', 'room', 'house', 'hotel'];

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const TITLES = [
  'Beautiful & luxurious studio at great location',
  'Nice, cozy, warm big bed apartment',
  'Amazing and Extremely Central Flat',
  'Waterfront with extraordinary view',
];

export const IMAGES = [
  'https://14.react.pages.academy/static/offer/20.jpg',
  'https://14.react.pages.academy/static/offer/1.jpg',
  'https://14.react.pages.academy/static/offer/15.jpg',
  'https://14.react.pages.academy/static/offer/17.jpg',
  'https://14.react.pages.academy/static/offer/11.jpg',
  'https://14.react.pages.academy/static/offer/6.jpg',
  'https://14.react.pages.academy/static/offer/4.jpg',
  'https://14.react.pages.academy/static/offer/5.jpg',
  'https://14.react.pages.academy/static/offer/13.jpg',
  'https://14.react.pages.academy/static/offer/12.jpg',
  'https://14.react.pages.academy/static/offer/9.jpg',
  'https://14.react.pages.academy/static/offer/2.jpg',
  'https://14.react.pages.academy/static/offer/8.jpg',
  'https://14.react.pages.academy/static/offer/19.jpg',
];

export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  Root = '/',
  Error404 = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
  Login = 'LOGIN',
}
