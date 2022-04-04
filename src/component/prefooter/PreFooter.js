import { useState } from "react";
import Number from "./Number";
import './prefooter style/prefooter.css'


function PreFooter() {
    const [text , setText] = useState('')
    const [email , setEmail] = useState('')
    const [info , setInfo] = useState([])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setInfo(
            [
                { name : text , email : email , id : Math.random() * 0.5}
            ]
        )
    }

    console.log(text,email,info)
    return (
        <section className="prefooter container">
            <Number/>
            <form onSubmit={handleSubmit}>
                <div className="email login">
                    <h4>Email Address</h4>
                    <input 
                    type="text"
                    onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className="text login">
                    <h4>Your Name</h4>
                    <input 
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="topic login">
                    <h4>Choose a topic</h4>
                    <input type="text" />
                </div>
                <div className="textarea login">
                    <h4>Message</h4>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div className="btn">
                    <button>Button Text</button>
                </div>
                <div className="testing">
                    <p>{text}</p>
                    <p>{email}</p>
                    <p>{info}</p>
                </div>
                {info.map((item) => {
                    <div key={item.id}>
                        <p>this is your name : {item.name}</p>
                        <p>this is your email : {item.email}</p>
                    </div>
                })}
            </form>
        </section>
    );
}
 
export default PreFooter;