import { Link } from "react-router-dom"
import { IoIosAddCircleOutline } from "react-icons/io"
import { MdDashboard } from "react-icons/md";
import { IoMdStats } from "react-icons/io";

const Navbar = () => {
  return (
    <header className = 'z-1 fixed'> 
        <nav className='fixed flex w-full h-20 bg-gradient-to-r from-gray-800 to-black p-4 justify-between'>
              <h1 className= 'font-bold text-4xl text-blue-300'>Jobify</h1>
              <ul className = "text-white font-semibold list-none hidden md:flex w-0.3 h-full space-x-2">
               
                <Link className="link" to="/">
                <MdDashboard className="size-8" />Dashboard</Link>
                
                  
                  <Link className="link" to="/add-job"><IoIosAddCircleOutline className = "size-8" />Add new job</Link>
                
            
                <Link className="link" to="/status">
                <IoMdStats className="size-8" />View stats</Link>
              </ul>
        </nav>
    </header>
  )
}

export default Navbar