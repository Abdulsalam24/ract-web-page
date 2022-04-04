import './box style/box.css'

function Box({img1, img2, img3}) {
    return (

        <div className="box-container container2">
            <div className="box flex">
                <div className="item">
                    <div className="img">
                        <img src={img1} alt="img1"/>
                    </div>
                    <div className="text">
                        <h3>This is a wide container title stretching two lines.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </p>
                        <div className="btn">
                            <button>Link & Arrow ></button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="img">
                        <img src={img2} alt="img2"/>
                    </div>
                    <div className="text">
                        <h3>This is a wide container title stretching two lines.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </p>
                        <div className="btn">
                            <button>Link & Arrow ></button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="img">
                        <img src={img3} alt="img3"/>
                    </div>
                    <div className="text">
                        <h3>This is a wide container title stretching two lines.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </p>
                        <div className="btn">
                            <button>Link & Arrow ></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Box;