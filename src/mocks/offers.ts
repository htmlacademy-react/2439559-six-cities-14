import { Offers } from "../types/types"


export function offersCityCard({}:Offers): JSX.Element  {
    return (
    [{
        img: [
            "img/apartment-01.jpg"
        ],
        isPremium: true,
        price: 120,
        title: "Beautiful &amp; luxurious studio at great location",
        type: "apartment",
        rating: 4.8,
        id: 1
    },

    {
        img: [
            "img/room.jpg"
        ],
        isPremium: true,
        price: 220,
        title: "Wood and stone place",
        type: "Apartment",
        rating: 4.8,
        id: 2
    },

    {
        img: [
            "img/apartment-02.jpg"
        ],
        isPremium: false,
        price: 132,
        title: "Canal View Prinsengracht",
        type: "Apartment",
        rating: 4.8,
        id: 3
    },

    {
        img: [
            "img/apartment-03.jpg"
        ],
        isPremium: true,
        price: 180,
        title: "Nice, cozy, warm big bed apartment",
        type: "Apartment",
        rating: 4.8,
        id: 4
    }]
    )
}