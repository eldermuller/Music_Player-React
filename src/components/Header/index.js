import Logo from '../../assets/logo.svg';
import ProfilePhoto from '../../assets/profile.jpg';
import './style.css';

function Header() {
    return (
        <div className='header'>
            <img
                src={Logo}
                alt="Logo"
                className='img-logo'
            />
            <div className='info-profile'>
                <img
                    src={ProfilePhoto}
                    alt="Profile photo"
                    className='img-profile'
                />
                <strong>Bem vindo, Élder.</strong>
            </div>

        </div>
    )
}

export default Header;
