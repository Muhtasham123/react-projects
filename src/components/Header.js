import { FaBars } from "react-icons/fa";
import {useContext} from 'react'
import { AppContext } from '../ContextProvider'

const Header = () => {
  const {setIsDroped,isDroped} = useContext(AppContext)
  const drop = (e)=>{
      setIsDroped(!isDroped)
  }

  return (
    <header className = "head c-w">
        <button onClick = {drop} className = "drop-btn">
          <FaBars />
        </button>
        <h2>Recipe Finder</h2>
    </header>
  )
}

export default Header