import './Header.css';
import headerImg from '../images/app-display-header.svg';

function Header() {
    return (
        <>
            <div className="header">
                <div className="header-container">
                    <div className="header-text-container">
                        <h1>V o l t o f o l d</h1>
                    </div>
                    <div className="header-img-container">
                        <img src={ headerImg } alt="app-display-header"/>
                    </div>
                    <div className="scroll-container">
                        <p>Scroll To Learn More</p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Header;