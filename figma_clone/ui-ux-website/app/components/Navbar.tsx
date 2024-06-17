import Image from '@/node_modules/next/image'
import React from 'react'
import Logo from "../../public/assets/Logo.svg"
import User from "../../public/assets/User.svg"
import Menu from "../../public/assets/Menu.svg"




const Navbar = () => {
  return (
     <nav className='flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto'>
       <div>
           <Image
             src={Logo}
             alt=""
            />
       </div>
       
    <div className='flex gap-x-5'>
        <div className='flex items-center gap-x-2'>
           <Image
           src={User}
           alt="User Profile"
           />
           <span className='hidden font-medium text-[#36485C] lg:block'>Sign in</span>
        </div>
        <div>
            <Image
            src={Menu}
            alt="User Profile"
            className='lg:hidden'
             />
        </div>
    </div>
     </nav>
  )
}

export default Navbar