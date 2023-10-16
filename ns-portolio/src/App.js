import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Mynavbar } from './components/Mynavbar';
import { Banner } from './components/Banner';
import { skillRide } from './components/Skills';
import { Projects } from './components/Projects';




function App() {
  return (
    <div className="App">
      <Mynavbar />
      <Banner />
      <skillRide />
      <Projects />
    </div>
  );
}

export default App;
