import './boxmid style/boxmid.css'


function BoxMid({img4}) {
    return (
        <main>
            <div className="boxmid container2 flex">
                <div className="img">
                    <img src={img4}/>
                </div>
                <div className="text">
                    <h2>Here we have a two line display.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </p>
                    <div className="btn">
                        <button>Link & Arrow  >  </button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default BoxMid;