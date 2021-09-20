import React from 'react';
import './Header.css';

const Header = () => {
    return (
        // <span onClick={() => window.scroll(0,0)} className='header'>🎬 Dambo Hub 🎥</span>
        <div className='header'>
            <h4 onClick={() => window.scroll(0,0)} className='header_title'>Dambo Tube</h4>
            <img onClick={() => window.scroll(0,0)} className='header_img' src="https://cdn.dribbble.com/users/801484/screenshots/2661136/kgdribble.png?compress=1&resize=400x300" />
        </div>
    )
}

export default Header;
