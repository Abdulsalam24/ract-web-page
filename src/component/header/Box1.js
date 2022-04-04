function Box1() {
    return (
        <div className="box1-container">
            <div className="container">
                <div className="box1 container">
                    <div className="box1-text">
                        <h2>Here we have a two line display box</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                        </p>
                        <div className="box1-btn">
                            <button className="btn">Button Text</button>
                        </div>
                    </div>
                    <div className="box1-page">
                        <ul className="box1-list flex">
                            <li>
                                <a href="">Active Tab</a>
                            </li>
                            <li>
                                <a href="">Hovered Tab</a>
                            </li>
                            <li>
                                <a href="">3Inactive Tab</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Box1;