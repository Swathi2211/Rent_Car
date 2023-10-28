import '../component/customer.css'
import women from '../images/what_is_say_cust/women.png'
import whiteWom from '../images/what_is_say_cust/women-white.png'
import WhiteMen from '../images/what_is_say_cust/men-white.png'
import men from '../images/what_is_say_cust/men.png'


function Customer() {
    return (
        <div id="customer">
            <div id="cutitle">
                <h1>What is say Customer</h1>
                <p>It is a long established fact that a reader will be distracted by the</p>
            </div>
            <div id="container">
                <div class="cubox">
                    It is a long established fact that a reader will be distracted by the readable content of a page when
                    looking at its layout. The point of using Lorem. It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point of using Lorem.
                </div>
                <div class="cubox">
                    It is a long established fact that a reader will be distracted by the readable content of a page when
                    looking at its layout. The point of using Lorem. It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point of using Lorem.
                </div>
                <div class="cubox">
                    It is a long established fact that a reader will be distracted by the readable content of a page when
                    looking at its layout. The point of using Lorem. It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point of using Lorem.
                </div>
            </div>

            <div id="establish">
                <div class="est">
                    <div>
                        <img src={women} alt="none" />
                    </div>
                    <h3>Established</h3>
                    <p>by the readable</p>
                </div>
                <div class="est">
                    <div>
                        <img src={men} alt="none" />
                    </div>
                    <h3>Established</h3>
                    <p>by the readable</p>
                </div>
                <div class="est">
                    <div>
                        <img src={women} alt="none" onmouseover="changeImage({WhiteWom})"/>
                    </div>
                    <h3>Established</h3>
                    <p>by the readable</p>
                </div>
            </div>

        </div>
    )
}

export default Customer