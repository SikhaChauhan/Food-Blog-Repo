import React from 'react'
import Logo from '../../assets/Logo.png';
import { Link } from 'react-router-dom';

const DesktopNav = ({menuItems, Logo}) => {
  return (
    <div className='h-16 mt-10 flex justify-between items-center px-6 lg:px-12'>
        <a href='/'>
            <img className='h-30 w-40 ' src={Logo} alt='logo'/>
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
                <button className='text-secondary px-4 py-2 rounded'>Log In</button>
            </li>
            <li>
                <button className='text-secondary px-4 py-2 rounded'>Sign Up</button>
            </li>
        </ul>
        
    </div>
  )
}

export default DesktopNav
