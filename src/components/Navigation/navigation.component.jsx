import './navigation.styles.scss';
import LinkedIn from '../../icons/linkedin.svg';
import Dribble from '../../icons/dribbble.svg';
import Instagram from '../../icons/instagram.svg';
import MenuDropdown from '../Menu-Dropdown/menu-dropdown.component';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/footer.component';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => setDropdown(!dropdown);

    return (
      <>
        <div className='navigation-outer-container'>
          <div className='navigation-inner-container'>
            <div id="nav-icon" onClick={toggleDropdown} className={`${dropdown ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul className='main-nav'>
              <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit'}}><li>Home</li></Link>
              <Link to='/about' style={{ color: 'inherit', textDecoration: 'inherit'}}><li>About</li></Link>
            </ul>
            <ul className='secondary-nav'>
              <a href='https://www.linkedin.com/in/jkbgg/' target='_blank' rel='noreferrer' style={{ color: 'inherit', textDecoration: 'inherit'}}><li><img src={LinkedIn} alt='linkedin'/></li></a>
              <a href='https://dribbble.com/jkbgg' target='_blank' rel='noreferrer' style={{ color: 'inherit', textDecoration: 'inherit'}}><li><img src={Dribble} alt='dribble' /></li></a>
              <a href='https://www.instagram.com/jkbafk' target='_blank' rel='noreferrer' style={{ color: 'inherit', textDecoration: 'inherit'}}><li><img src={Instagram} alt='instagram' /></li></a>
            </ul>
          </div>
        </div>
        {dropdown && <MenuDropdown toggleDropdown={toggleDropdown}/>}
        <Outlet />
        <Footer />
      </>
    )
}

export default Navigation;