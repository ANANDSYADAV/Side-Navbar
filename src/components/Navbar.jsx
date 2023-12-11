import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { SidebarData } from './SidebarData.jsx';
import './Navbar.css'
import { IconContext } from 'react-icons/lib';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <IconContext.Provider value={{ color: 'white' }}>
            <div className='navbar'>
                <Link to='#' className='menu-bar'>
                    <FaBars onClick={showSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? 'sidemenu active' : 'sidemenu'}>
                <ul className='menu-itemholder' onClick={showSidebar}>
                    <li className='menu-toggle'>
                        <Link to='#' className='menu-bar'>
                            <IoClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    <item.icon />
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar