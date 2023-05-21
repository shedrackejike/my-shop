import {BrowserRouter, Route, Routes} from "react-router-dom";

//pages
import { Home ,Notfound} from './pages';

//components
import { Cart, Nav } from './Components';

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cart' element={<Cart />} />
        <Route path='*' element={<Notfound/>}/>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
