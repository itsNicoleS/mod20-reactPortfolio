import logo from './logo.svg';
import './App.css';
import { Pillbar } from './components/Pillbar';
import { Banner } from './components/Banner';
import { skillRide } from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Pillbar />
      <Banner />
      <skillRide />
    </div>
  );
}

export default App;
