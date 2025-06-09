import { Link } from 'react-router-dom'
import { IoIosAddCircleOutline } from "react-icons/io"
import { MdDashboard } from "react-icons/md";
import { IoMdStats } from "react-icons/io";
import { FaBars } from "react-icons/fa6";

const Sidebar = ({isOpen,setIsOpen}) => {
  return (
    <aside className =  {`${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden w-1/2 min-h-screen transition-all duration-500 fixed bg-gradient-to-r from-gray-800 to-black text-white z-1`}>
      <div className = "flex w-full p-4 justify-end">
        <button onClick={() => { setIsOpen(false) }} className="text-lg font-bold rounded-md flex items-center justify-center md:hidden bg-black text-blue-300 p-2"><FaBars /></button>
      </div>
      <Link to = '/' className = "p-4 flex items-center">
        <MdDashboard className="size-8" />
        Dashboard
      </Link>

      <Link to='/add-job' className="p-4 flex items-center">
        <IoIosAddCircleOutline className="size-8" />
        Add Job
      </Link>

      <Link to='/status' className="p-4 flex items-center">
        <IoMdStats className="size-8" />
        View stats
      </Link>

    </aside>
  )
}

export default Sidebar