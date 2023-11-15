type Location = {
  latitude: number
  longitude: number
  zoom: number
  }

type City = {
  name: string
  location: Location
}

export type OfferListItem = {
  id: string
  title: string
  type: string
  price: number
  city: City
  location: Location
  isFavorite: boolean
  isPremium: boolean
  rating: number
  previewImage: string
};