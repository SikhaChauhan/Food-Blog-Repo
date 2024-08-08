import React, { useState } from 'react';
import DesktopNav from './DesktopNav';
import Logo from '../../assets/Logo.png';
import MobileNav from '../MobileNav';

const Header = () => {
    const [hideLeft, setHideLeft] = useState('-left-[1000px]');
    const menuItems = ["recipes", "about", "contact"];

    const onOpen = () => {
        setHideLeft("left-0");
    }

    const onClose = () => {
        setHideLeft("-left-[1000px]");
    }

    return (
        <>
            <div className='max-[900px]:hidden'>
                {/* also pass logo after menuItems as Logo={} */}
                <DesktopNav menuItems={menuItems} Logo={Logo}/>
            </div>
            <div className='min-[900px]:hidden'>
                <MobileNav menuItems={menuItems} Logo={Logo} onClose={onClose} hideLeft={hideLeft} onOpen={onOpen}/>
            </div>
        </>
    );
}

export default Header;
