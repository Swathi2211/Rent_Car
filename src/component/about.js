import a1 from '../images/fav_cars/red_car2.png'
import '../component/about.css'

function About() {
    return (
        <div id="about">
            <div id="labout">
                <img src={a1} alt="none"/>
                    <div id="f1"></div>
                    <div id="s2"></div>

            </div>
            <div id="rabout">
                <h1>About Our Cars</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                <button>Read More</button>
            </div>
        </div>
    )
}

export default About