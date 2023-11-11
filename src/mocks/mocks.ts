import { Offer } from '../types/offer';
import { DESCRIPTIONS, CITIES, IMAGES, TYPES, TITLES } from '../const';

export function OffersCityCard({}: Offer): JSX.Element {
  return {
      bedrooms: 3,
      city: {
        location: {
          latitude: 52.370216,
          longitude: 4.895168,
          zoom: 10,
        },
        name: { CITIES },
      },
      description: { DESCRIPTIONS },
      goods: ['Heating'],
      host: {
        avatarUrl: 'img/1.png', // Здесь те же самые картинки вставлять?
        id: 3,
        isPro: true,
        name: 'Angelina',
      },
      id: 1,
      images: { IMAGES },
      isFavorite: true,
      isPremium: false,
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
      maxAdults: 4,
      previewImage: 'img/1.png', // Здесь те же самые картинки вставлять?
      price: 120,
      rating: 4.8,
      title: { TITLES },
      type: { TYPES },
  }
}