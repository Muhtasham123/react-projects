import Addjob  from './pages/Addjob'
import Editjob  from './pages/Editjob'
import Dashboard from './pages/Dashboard'
import Status from './pages/Status'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import {useState} from 'react'
import { FaBars } from "react-icons/fa6";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  const [isOpen,setIsOpen] = useState(false)

  return (
    <>
      <BrowserRouter>
      <ToastContainer/>
        <Navbar/>
        <button onClick={() => { setIsOpen(true) }} className="text-lg font-bold rounded-md flex items-center justify-center md:hidden absolute mt-25 ml-5 bg-black text-blue-300 p-2">
          <FaBars />
        </button>
        <Sidebar isOpen={isOpen} setIsOpen = {setIsOpen} />
        <div className='hide-scrollbar flex-col md:flex-row flex bg-gradient-to-l from-gray-600 to-white min-h-screen max-w-screen overflow-x-hidden p-5'>
          <Routes>
            <Route path = "/" element = {<Dashboard setIsOpen = {setIsOpen} />}/>
            <Route path="/add-job" element={<Addjob setIsOpen={setIsOpen} />}/>
            <Route path="/edit-job/:id" element={<Editjob setIsOpen={setIsOpen} />}/>
            <Route path="/status" element={<Status setIsOpen={setIsOpen} />} />
            <Route path="*" element={<Error setIsOpen={setIsOpen} />} />
          </Routes>
        </div> 
      </BrowserRouter>
    </>
  )
}

export default App
