import Main from '../src/component/main'
import Menu from '../src/component/menu_bar'
import Overlap from '../src/component/overlap'
import FavCar from './component/fav_car'
import About from './component/about'
import Best from './component/best_car'
import Latest from './component/latest'
import Choose from './component/choose'
import Customer from './component/customer'
import Call from './component/call'
import Copy from './component/copy'
import './App.css'

function App(){
  return (
    <div>
      <Menu />
      <Main />
      <Overlap />
      <FavCar />
      <About />
      <Best />
      <Latest />
      <Choose />
      <Customer />
      <Call />
      <Copy />
    </div>
  )
}

export default App