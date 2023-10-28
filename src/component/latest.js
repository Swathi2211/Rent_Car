import '../component/latest.css'
import lady from '../images/latest_blogs/lady_blue.jpg'
import blue from '../images/latest_blogs/blue_car.jpg'
import steer from '../images/latest_blogs/steering.jpg'

function Latest() {
    return (
        <div id="latest_main">
            <div id="write">
                <h1>Our Latest Blog</h1>
                <p>It is a long established fact that a reader will be distracted by the</p>
            </div>
            <div id="lat">
                <div class="latbox">
                    <p class="p1">04 Nov 2045</p>
                    <img src={lady} alt="none" width="420px" height="330px;" />
                    <h3>Vintage</h3>
                    <p class="p2">It is a long established fact that a reader will be distracted by the readable, The point
                        of using Loream</p>
                </div>
                <div class="latbox">
                    <p class="p1">04 Nov 2045</p>
                    <img src={steer} alt="none" width="420px" height="330px;" />
                    <h3>Vintage</h3>
                    <p class="p2">It is a long established fact that a reader will be distracted by the readable, The point
                        of using Loream</p>
                </div>
                <div class="latbox">
                    <p class="p1">04 Nov 2045</p>
                    <img src={blue} alt="none" width="420px" height="330px;" />
                    <h3>Vintage</h3>
                    <p class="p2">It is a long established fact that a reader will be distracted by the readable, The point
                        of using Loream</p>
                </div>
            </div>

        </div>
    )
}

export default Latest