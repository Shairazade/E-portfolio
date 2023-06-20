import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='navigation'>
            <NavLink to='/contact' className="navigation_contact headline">
                Contactez-moi
            </NavLink>
            
        </nav>
    );
};

export default Navigation;