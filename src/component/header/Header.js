import Box1 from './Box1';
import './header style/header.css';
import Nav from "../nav/Nav"
import image from '../nav/nav-img/Vector.png'

function Header() {
    return (
        <header>
            <div
                className="welcome-container"
                style={{
                    backgroundImage: "url(/img.png)",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}>
                <Nav image={image}/>
                <div className="container">
                    <div className="welcome">
                        <div className="welcome-text">
                            <h2>Here we have a two line display intro.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </p>
                            <div className="welcome-btn">
                                <button className="btn">Link & Arrow &gt;</button>
                            </div>
                        </div>
                        <div className="welcome-page">
                            <ul className="welcome-list flex">
                                <li>
                                    <a href="">1. Innovation Partner</a>
                                </li>
                                <li>
                                    <a href="">2. Top Class Team</a>
                                </li>
                                <li>
                                    <a href="">3. Corporate Solutions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="thumbnail"></div>
            </div>
            <Box1/>
        </header>
    );
}

export default Header;