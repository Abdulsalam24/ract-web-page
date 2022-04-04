import './footer style/footer.css'

function Footer({fb, twitter, ig, link}) {
    return (
        <footer className='container2'>
            <hr/>
            <div className="flex footer">
                <div className="footer-item">
                    <h3>Contact Us</h3>
                    <p>
                        Floor 5, 12-14 Grey Street, Newcastle upon Tyne, NE1 6TE</p>
                    <p>
                        Tel: 0111 212 8111 admin@horizonthemes.co.uk
                    </p>
                </div>
                <ul className="footer-item">
                    <h3>Services</h3>
                    <li>
                        <a href="">Service One</a>
                    </li>
                    <li>
                        <a href="">Specialist Service Two</a>
                    </li>
                    <li>
                        <a href="">Specialist Three</a>
                    </li>
                    <li>
                        <a href="">Specialist Service Four</a>
                    </li>
                    <li>
                        <a href="">Service Five</a>
                    </li>
                </ul>
                <ul className="footer-item">
                    <h3>Resources</h3>
                    <li>
                        <a href="">Resource One</a>
                    </li>
                    <li>
                        <a href="">Resource Link Two</a>
                    </li>
                    <li>
                        <a href="">Resource Three</a>
                    </li>
                </ul>
                <div className="footer-item">
                    <div className="icon flex">
                        <img src={ig} alt=""/>
                        <img src={twitter} alt=""/>
                        <img src={link} alt=""/>
                        <img src={fb} alt=""/>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="foot flex">
                <ul className="foot-left">
                    <li>© Horizon</li>
                    <li>Company No. 199899939</li>
                    <li>VAT No. 199899939</li>
                </ul>
                <ul className="foot-right">
                    <li>Cookies Policy</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;