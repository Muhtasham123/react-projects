import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Save from './pages/Save';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Error from './pages/Error';
import RecipeDetails from './pages/RecipeDetails'
import Dropdown from './components/Dropdown';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      
      <Header/>
      <ToastContainer/>
      <Dropdown/>
      <Sidebar/>
      <Routes>
        <Route path = "/" element = {<Home/>}></Route>
        <Route path = "/saved-recepies" element = {<Save/>}></Route>
        <Route path = "/recipe-details/:id" element = {<RecipeDetails/>}></Route>
        <Route path = "*" element = {<Error/>}></Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
