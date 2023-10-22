import {Link} from 'react-router-dom';
import * as style from './not-found-sceen.css'

export default function NotFoundScreen(): JSX.Element {
  return (
    <section className="no-page">
      <h1 className='no-page_error'>Hmm... Page not found</h1>
      <img className='no-page_image' src='img/not-found-page.jpg' alt='Not found page image'/>
      <div className="no-page_contenet">
        <p>It seems that you are lost in a perpetual black hole. Let us help guide you out and get you back home.</p>
        <Link to="/" className="no-page__link">Go to main page</Link>
      </div>
    </section>
  );
}