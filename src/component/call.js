import './call.css'
import loc from '../images/request_call/location.png'
import call from '../images/request_call/call.png'
import mail from '../images/request_call/mail.png'
import fb from '../images/logos/fb.png'
import insta from '../images/logos/insta.png'
import link from '../images/logos/linkedin.png'
import twit from '../images/logos/twitter.png'


function Call() {
    return (
        <div id="calll">
            <div id="calblue"></div>
            <div id="call">


                <h1>Request A call back</h1>
                <div id="first">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Phone" />
                </div>
                <div id="second">
                    <input type="email" placeholder="Email id" />
                    <br />
                    <textarea cols="64" rows="3" placeholder="Message"></textarea>
                </div>
                <br />
                <button>SEND</button>
            </div>

            <div id="detail">
                <div class="boxd">
                    <div class="img">
                        <img src={loc} alt="none" width="60px;" />
                    </div>
                    <div class="p">
                        <p>Lorem ipsum dolor sit amet consec</p>
                    </div>
                </div>
                <div class="boxd">
                    <div class="img">
                        <img src={call} alt="none" width="60px;" />
                    </div>
                    <div class="p">
                        <p>(+12 123456789)</p>
                    </div>
                </div>
                <div class="boxd">
                    <div class="img">
                        <img src={mail} alt="none" width="60px;" />
                    </div>
                    <div class="p">
                        <p>mail@gmail.com</p>
                    </div>
                </div>
            </div>

            <nav id="navbar">
                <div>
                    <img src={fb} alt="none" />
                </div>
                <div>
                    <img src={twit} alt="none" />
                </div>
                <div>
                    <img src={link} alt="none" />
                </div>
                <div>
                    <img src={insta} alt="none" />
                </div>
            </nav>
        </div>
    )
}

export default Call