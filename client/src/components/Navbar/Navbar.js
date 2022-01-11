import React from "react";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'
import { toggleFalse } from "../../JS/actions/contact";


import './Navbar.css'
const Navbar = () => {
    const dispatch = useDispatch()
    return (
        <header>
            {/*contact list buttons */}
            <Link to='/'>
               <button className="appBtn">Contact List</button>
               </Link>
                 {/*add contact buttons */}
                 <Link to='/addContact'>
                 <button className="appBtn"
               onClick={() =>dispatch(toggleFalse())}
                 >Add Contact</button>
                 </Link>
        </header>
    )
}

export default Navbar