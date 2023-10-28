import '../component/fav_car.css'
import fbrown from '../images/fav_cars/brown_car.png'
import fred from '../images/fav_cars/red_car2.png'
import fyellow from '../images/fav_cars/yellow_car.png'


function FavCar() {
    return (
        <div id="fmain">
            <p class="h">Better Way For Find Your Favourite Cars</p>
            <p class="p1">It is a long established fact that a reader will be distracted by the readable</p>

            <div class="cards">
                <div class="car">
                    <img src={fbrown} alt="none" />
                    <h2>Choose Your Car</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when</p>
                    <button>Read More</button>
                </div>
                <div class="car">
                    <img src={fred} alt="none" />
                    <h2>Choose Your Car</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when</p>
                    <button>Read More</button>
                </div>
                <div class="car">
                    <img src={fyellow} alt="none" />
                    <h2>Choose Your Car</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when</p>
                    <button>Read More</button>
                </div>
            </div>

        </div>
    )
}

export default FavCar