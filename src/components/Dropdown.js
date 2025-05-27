import { Link } from "react-router-dom"
import { IoHomeOutline } from "react-icons/io5";
import { BsFloppy } from "react-icons/bs"
import {useContext} from 'react'
import { AppContext } from '../ContextProvider'

const Dropdown = () => {
    const {isDroped} = useContext(AppContext)
  return (
    <div className = {`head-links ${isDroped ? "head-links-drop" : ""}`}>
          <section className = "font-w-s align hover-e">
            <Link to = "/" className = "t-d-none c-w">
              <IoHomeOutline style = {{marginRight:"4px"}}/>
              <span>Home</span>
            </Link>
          </section>
                  
          <section className = "font-w-s align hover-e">
            <Link to = "saved-recepies" className = "t-d-none c-w">
              <BsFloppy style = {{marginRight:"4px"}}/>
              <span>Saved Recipies</span>
            </Link>
          </section>
    </div>
  )
}

export default Dropdown