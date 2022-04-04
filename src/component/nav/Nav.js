import {useState} from 'react';
import './nav style/nav.css'

function Nav({image}) {
    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(!active)
        console.log(active)
    }

    return (
        <nav>
            <div className="nav-container">
                <div className="nav_div">
                    <div 
                    className=
                    {active === true ? 'item_div' : 'none'}
                    >
                        <ul className='item'>
                            <li>Navigation 1</li>
                            <li>Navigation 2</li>
                            <li>Navigation 3</li>
                        </ul>
                        <ul className='item'>
                            <li>Navigation 4</li>
                            <li>Navigation 5</li>
                            <li>Navigation 6</li>
                        </ul>
                    </div>
                </div>
                <div onClick={handleClick} className="menu-nav">
                    <img src={image} alt="gallery-icon"/>
                </div>
            </div>
        </nav>
    );
}

export default Nav;