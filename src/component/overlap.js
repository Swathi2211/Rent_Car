import bg1 from '../images/best_cars/car_red.png'
import '../component/overlap.css'

function Overlap() {
    return (
        <div class="overlap">
            <div id="overlap_start">
                <div id="left">
                    <label>Pick Up Location</label>
                    <input type="text" placeholder="acb" />

                    <label>Pick Up Date</label>

                    <input type="text" placeholder="01/01/2045" />
                </div>
                <div id="right">
                    <label>Drop Location</label>

                    <input type="text" placeholder="acb" />

                    <label>Return Date</label>

                    <input type="text" placeholder="01/01/2045" />
                </div>
                <div>
                    <button id="btnOverlap">Search</button>
                </div>
            </div>

            <div id="overlap_end">
                <img src={bg1} alt="none" />
            </div>
        </div>
    )
}

export default Overlap