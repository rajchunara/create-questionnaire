import React from 'react'

import { NavLink} from 'react-router-dom'

function Navbar(){
    return (
        <div >
            <nav >
                <div className="nav-wrapper z-depth-3 cyan darken-3">
                    <div className="container">
                    <a href="#" className="brand-logo">Create Questionnaire</a>
                    <ul className="right pages">
                        <li ><NavLink  to="/"> Editor </NavLink></li>
                        <li><NavLink to="/preview">Preview</NavLink></li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
    
}


export default Navbar;