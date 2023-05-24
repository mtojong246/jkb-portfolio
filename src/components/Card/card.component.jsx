import './card.styles.scss';
import { Link } from 'react-router-dom';

const Card = ({ subtitle, title, description, date, time, org, img }) => {
    return (
      <Link to={`/${org}`} style={{ color: 'inherit', textDecoration: 'inherit'}} className='card-link'>
        <div className='card-container'>
          <img src={img} alt={title} loading='lazy'/>
          <p className='card-subtitle'>{subtitle}</p>
          <h2 className='card-title'>{title}</h2>
          <p className='card-description'>{description}</p>
          <p className='card-time'>{date} &#183; {time}</p>
        </div>
      </Link>
    )
}

export default Card;