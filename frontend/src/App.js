import AllProject from './components/read';
import AddProject from './components/create';
import UpdateProject from './components/update';
import NavBar from './components/bar';
import EMS from './components/system';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar data-testid= "hehe" className = "App" />
      <Routes className = 'myroutes' >
        <Route path="/" element={<EMS /> } />
        <Route path="all" element={<AllProject /> } />
        <Route path="/add" element={<AddProject />} />
        <Route path="/edit/:id" element={<UpdateProject />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;