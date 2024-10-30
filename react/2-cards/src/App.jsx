import 'bulma/css/bulma.css';
import './App.css'
import { Course } from "./Course.jsx";
import Angular from './images/angular.jpg';
import Bootstrap from './images/bootstrap5.png';
import Ccsharp from './images/ccsharp.png';
import Kompleweb from './images/kompleweb.jpg';

function App() {

  return (
    <>
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarım</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={Angular}
                title="Angular"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto et officiis praesentium quia! Asperiores, beatae culpa debitis dolorem dolorum expedita facilis fugiat illo maxime omnis placeat quo repudiandae saepe suscipit!"/>
            </div>
            <div className="column">
              <Course
                image={Bootstrap}
                title="Bootstrap 5"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto et officiis praesentium quia! Asperiores, beatae culpa debitis dolorem dolorum expedita facilis fugiat illo maxime omnis placeat quo repudiandae saepe suscipit!"/>
            </div>

            <div className="column">
              <Course
                image={Ccsharp}
                title="Komple Web"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto et officiis praesentium quia! Asperiores, beatae culpa debitis dolorem dolorum expedita facilis fugiat illo maxime omnis placeat quo repudiandae saepe suscipit!"/>
            </div>

            <div className="column">
              <Course
                image={Kompleweb}
                title="Frontend"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto et officiis praesentium quia! Asperiores, beatae culpa debitis dolorem dolorum expedita facilis fugiat illo maxime omnis placeat quo repudiandae saepe suscipit!"/>
            </div>

          </div>
        </section>
      </div>
    </>
  )
}

export default App
