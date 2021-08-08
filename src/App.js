

import './styles/style.css'
import './components/Intro'
import Intro from './components/Intro'
import About from './components/About'
import ProjectContainer from './containers/ProjectContainer'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
     <Intro/>
     <About/>
     <ProjectContainer/>
     <Skills/>
     <Contact/>
    </div>
  );
}

export default App;
