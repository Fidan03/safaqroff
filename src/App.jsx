
import { Adv } from "./components/advantages/Adv"
import { Nav } from "./components/nav/nav"
import { Services } from "./components/services/Services"
import "./App.css"
import Projects from "./components/Projects/Projects"





function App() {

  return (
      <div className="container">
            <div className="nav">
                  <Nav/>
            </div>

            <div className="cards">
                  <Projects/>
            </div>

            <div className="advContainer">
                  <Adv/>
            </div>

            <div className="servicesContainer">
                  <Services/>
            </div>
      </div>
    
  )
}
 
export default App
