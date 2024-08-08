import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import { RiCloseCircleFill } from "react-icons/ri";

const MobileNav = ({menuItems, Logo, onClose, onOpen, hideLeft}) => {
  return (
    <div className='h-16 flex justify-between items-center px-6 lg:px-12'>
        <a href='/'>
            <img className='h-20 w-30 mt-12' src={Logo} alt='logo'/>
        </a>
        <button onClick={onOpen} className='border border-primary rounded'>
            <FaBars className='w-7 h-7'/>
        </button>

        <div className={`transition-all w-full h-full fixed bg-primary z-50 top-0 ${hideLeft} flex justify-center items-center`}>
            <button onClick={onClose} className='absolute right-8 top-32'>
                <RiCloseCircleFill className='w-7 h-7' />
            </button>

            <div>
                <ul className='flex flex-col gap-7'>
                    {
                        menuItems?.map((menu,index) => (
                            <li key={index}>
                                <Link className='font-medium capitalize text-secondary' to={menu}>{menu}</Link>
                            </li>
                        ))
                    }
                </ul>

                <ul className='flex items-center gap-9 font-medium mt-10 flex-col'>
                    <li>
                        <button className='text-secondary px-4 py-2 rounded border mr-2'>Log In</button>
                    </li>
                    <li>
                        <button className='text-secondary px-4 py-2 rounded border mr-2'>Sign Up</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default MobileNav
