
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Brteakfast from './compunant/Breakfast/Brteakfast';
import Dinner from './compunant/Dinner/Dinner';
import Header from './compunant/Header/Header';
import Home from './compunant/Home/Home';
import Lance from './compunant/Lance/Lance';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route path="breakfast" element={<Brteakfast></Brteakfast>}>
          </Route>
          <Route path="lance" element={<Lance></Lance>}></Route>
          <Route path="dinner" element={<Dinner></Dinner>}></Route>
        </Route>
      </Routes>
      
      
    </div>
  );
}

export default App;
