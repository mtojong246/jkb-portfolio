import './header.styles.scss';
import Logo from '../../icons/jkb-logo.png';

const Header = () => {
    return (
        <div className='header-outer-container'>
            <div className='header-inner-container'>
                <div className='logo'>
                    <img src={Logo} alt='jkb-logo' />
                </div>
                <p className='header-description'>
                    Hey 👋 I’m Jacob, a product designer from Raleigh NC, USA. This is where I write about my work. Thanks for visiting!
                </p>
            </div>
        </div>
    )
}

export default Header;