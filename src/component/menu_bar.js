import '../component/menu_bar.css'
import bg from '../images/best_cars/car_red.png'

function Menu() {
    return (

        <div class="menu">
            <div id="first">
                <p>Rent4u</p>
            </div>
            <div id="last">
                <p>Login</p>
                <div class="menu_btn">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div class="but1">
                <button class="left_arrow">
                    <i class="arrow left"></i>
                </button>
            </div>
            <div class="but2">
                <button class="left_arrow">
                    <i class="arrow right"></i>
                </button>
            </div>

            <div class="content">
                <p>RENT CAR EXPERTS SERVICE</p>
                <button id="btnm">CONTACT US</button>
            </div>
        </div>

    )
}

export default Menu