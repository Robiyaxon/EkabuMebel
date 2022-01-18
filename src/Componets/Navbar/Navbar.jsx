import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../css/Navbar/Navbar.css";
import img from "../../imgs/Rectangle 21.png"
function Navbar(props) {

  const [click, setClick] = useState(false);
 
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

   let maps = props.NavbarReselect.map((b) => (
    <li  key={b.id} className='nav-item' >
   <Link
    to={b.url} 
     className='nav-links'
     onClick={closeMobileMenu}
   >
    {b.name}
   </Link>
 </li>
  ));
  return (
    <div className="Navbar_1">
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className="navbar-logo"><img src={img} alt="" /></Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            
          {maps}
          </ul>
         
        </div>
      </nav>
    </div>
  );
}

export default Navbar;