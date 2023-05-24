import './card.styles.scss';
import { Link } from 'react-router-dom';

const Card = ({ subtitle, title, description, date, time, org }) => {
    return (
      <Link to={`/${org}`} style={{ color: 'inherit', textDecoration: 'inherit'}} className='card-link'>
        <div className='card-container'>
          <img src='https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png' alt='project' />
          <p className='card-subtitle'>{subtitle}</p>
          <h2 className='card-title'>{title}</h2>
          <p className='card-description'>{description}</p>
          <p className='card-time'>{date} &#183; {time}</p>
        </div>
      </Link>
    )
}

export default Card;