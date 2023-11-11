import { Offer } from "../../types/offer";
import { OfferCard } from "../offer-card/offer-card"; 

type Offer = {
    offers: Offer[];
  }

export default function OffersList({ props }: Offer ): JSX.Element {
    return (
        <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">312 places to stay in Amsterdam</b>
        <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={sum}>
            Popular
            <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
            </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex={sum}> Popular </li>
            <li className="places__option" tabIndex={sum}> Price: low to high </li>
            <li className="places__option" tabIndex={sum}> Price: high to low </li>
            <li className="places__option" tabIndex={sum}> Top rated first </li>
        </ul>
        </form>
        <div className="cities__places-list places__list tabs__content">

        offers.map(Offer => <OfferCard {...props} />)

        </div>
    </section>
    )
}