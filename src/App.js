//importing component
import Header from "./component/header/Header"
import BoxMid from "./component/boxmid/BoxMid"
import PreFooter from "./component/prefooter/PreFooter"
import Footer from "./component/footer/Footer"
import Box from "./component/box/Box"
import './app.css'


//importing imgs
import img1 from './img/img1.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'
import img4 from './img/img4.png'
import fb from './img/fb.png'
import twitter from './img/twittr.png'
import ig from './img/ig.png'
import link from './img/linkdin.png'

function App(){
    return (
        <div className="app">
            <Header/>
            <Box 
                img1={img1} 
                img2={img2} 
                img3={img3}
            />
            <BoxMid 
                img4={img4}
            /> 
            <PreFooter/> 
            <Footer 
                fb={fb}
                twitter={twitter}
                ig={ig}
                link={link}
            />
        </div>
    );
}
 
export default App;