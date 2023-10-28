import '../component/best_car.css'
import brown from '../images/best_cars/car_brown.png'
import red from '../images/best_cars/r-2.png'
import yellow from '../images/best_cars/truck_yellow.png'
import grey from '../images/best_cars/jeep_grey.png'

function Best() {
    return (
        <div id="best_main">
            <div id="btop">
                <div>
                    <h1>Our Best Cars</h1>
                    <p>It is a long established fact that a reader will be distracted by the</p>
                </div>

                <div>
                    <button>Book Now</button>
                </div>
            </div>
            <div id="blue"></div>

            <div id="best">
                <div class="row">
                    <div class="box">
                        <img src={yellow} alt="none" />
                        <button>Rent $200</button>
                    </div>
                    <div class="box">
                        <img src={red} alt="none" width="299px" height="134px" />
                        <br />
                        <button>Rent $200</button>
                    </div>
                    <div class="box">
                        <img src={brown} alt="none" width="299px" height="134px" />
                        <button>Rent $200</button>
                    </div>
                </div>
                <div class="row">
                    <div class="box">
                        <img src={grey} alt="none" width="299px" height="134px" />
                        <button>Rent $200</button>
                    </div>
                    <div class="box">
                        <img src={brown} alt="none" width="299px" height="134px" />
                        <button>Rent $200</button>
                    </div>
                    <div class="box">
                        <img src={grey} alt="none" width="299px" height="134px" />
                        <button>Rent $200</button>
                    </div>
                </div>

                <div class="row">
                    <div class="box">
                        <img src={grey} alt="none" width="299px" height="134px" />
                        <button>Rent $200</button>
                    </div>
                    <div class="box">
                        <img src={brown} alt="none" width="299px" height="134px" />
                        <button>Rent $200</button>
                    </div>
                    <div class="box">
                        <img src={grey} alt="none" width="299px" height="134px" />
                        <button>Rent $200</button>
                    </div>
                </div>
                <button id="btnb">See More</button>
            </div>
        </div>
    )
}

export default Best