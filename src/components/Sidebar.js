import { Link } from "react-router-dom"
import { IoHomeOutline } from "react-icons/io5";
import { BsFloppy } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className = "side">
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

export default Sidebar