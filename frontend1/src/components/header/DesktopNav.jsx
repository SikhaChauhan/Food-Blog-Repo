import React from 'react'
// import Logo from '../../assets/Logo.png';
import { Link } from 'react-router-dom';

const DesktopNav = ({menuItems, Logo}) => {
  return (
    <div className='flex items-center justify-between h-16 px-6 mt-10 lg:px-12'>
        <a href='/'>
            <img className='w-40 h-30 ' src={Logo} alt='logo'/>
        </a>
        <ul className='flex gap-7'>
            {
                menuItems?.map((menu,index) => (
                    <li key={index}>
                        <Link className='font-medium capitalize text-secondary' to={menu}>{menu}</Link>
                    </li>
                ))
            }
        </ul>

        {/* login and signup button */}
        <ul className='flex items-center gap-4 font-medium'>
            <li>
                <button className='px-4 py-2 rounded text-secondary'>Log In</button>
            </li>
            <li>
                <button className='px-4 py-2 rounded text-secondary'>Sign Up</button>
            </li>
        </ul>
        
    </div>
  )
}

export default DesktopNav
