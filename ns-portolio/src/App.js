import logo from './logo.svg';
import './App.css';
 import { Pillbar } from './components/Pillbar';
import {Banner} from './components/Banner'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
   <Pillbar />
   <Banner />
    </div>
  );
}

export default App;
