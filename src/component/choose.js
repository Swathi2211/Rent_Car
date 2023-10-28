import percent from '../images/why_choose_us/percent.png'
import car from '../images/why_choose_us/car.png'
import security from '../images/why_choose_us/security.png'
import headphone from '../images/why_choose_us/headphone.png'
import '../component/choose.css'

function Choose() {
    return (
        <div id="choose">
            <div id="ctitle">
                <h1>Why choose Us</h1>
                <p>It is a long established fact that a reader will be distracted by the</p>
            </div>
            <div id="cblue"></div>
            <div id="blocks">
                <div class="blbox">
                    <img src={percent} alt="none" />
                        <h3>Low Rent</h3>
                </div>
                <div class="blbox">
                    <img src={car} alt="none" />
                        <h3>Fast Car</h3>
                </div>
                <div class="blbox">
                    <img src={security} alt="none" />
                        <h3>Safe Car</h3>
                </div>
                <div class="blbox">
                    <img src={headphone} alt="none" />
                        <h3>Quick Support</h3>
                </div>
            </div>
            <button id="btnc">Read More</button>
        </div>
    )
}

export default Choose