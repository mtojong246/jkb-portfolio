import './menu-dropdown.styles.scss';
import LinkedIn from '../../icons/linkedin.svg';
import Dribble from '../../icons/dribbble.svg';
import Instagram from '../../icons/instagram.svg';
import { Link } from 'react-router-dom';

const MenuDropdown = ({ toggleDropdown }) => {
    return (
        <div className='menu-dropdown-container growDown'>
            <ul className='dropdown-nav'>
                <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={toggleDropdown}><li>Home</li></Link>
                <Link to='/about' style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={toggleDropdown}><li>About</li></Link>
            </ul>
            <ul className='dropdown-logos'>
                <a href='https://www.linkedin.com/in/jkbgg/' target='_blank' rel='noreferrer' style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={toggleDropdown}><li><img src={LinkedIn} alt='linkedin'/></li></a>
                <a href='https://dribbble.com/jkbgg' target='_blank' rel='noreferrer' style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={toggleDropdown}><li><img src={Dribble} alt='dribble' /></li></a>
                <a href='https://www.instagram.com/jkbafk' target='_blank' rel='noreferrer' style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={toggleDropdown}><li><img src={Instagram} alt='instagram' /></li></a>
            </ul>
        </div>
    )
}

export default MenuDropdown;