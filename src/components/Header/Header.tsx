import React from 'react'
import Logo from "../../../public/images/images.jpg"
import { RxHamburgerMenu } from "react-icons/rx";
import { MdLanguage } from "react-icons/md";
import Image from 'next/image';
import { CiSettings } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";


type HeaderProps = {
    toggleMenu: () => void,
    toggleAccMenu: () => void
    openAccMenu?: boolean;
    openMenu?: boolean;
}

const Header = ({ toggleMenu, toggleAccMenu, openAccMenu, openMenu }: HeaderProps) => {
    return (
        <>
            {/* Header */}
            <div className={`bg-[#fff] py-4 px-4 flex items-center justify-between z-10 w-full ${openMenu ? "absolute lg:fixed top-0" : "fixed"} ${openAccMenu ? "absolute lg:fixed top-0" : "fixed"}`}>
                <div className='flex items-center gap-12'>
                    <div className='hidden lg:flex items-center'>
                        <Image src={Logo} alt="Logo" width={60} height={30} />
                        <h1 className='text-3xl'><b>pay</b>dece</h1>
                    </div>
                    <RxHamburgerMenu onClick={toggleMenu} className='h-10 text-[40px] cursor-pointer rounded-lg bg-[#d4ebfc] text-[#2196f3] hover:bg-[#2196f3] hover:text-white p-2 transition-all duration-500' />
                </div>
                <div className='flex items-center gap-2 lg:gap-6'>
                    <button className="bg-[#d4ebfc] text-[#2196f3] px-4 py-1 rounded-lg flex items-center gap-2"><MdLanguage className='text-[20px]' /> IS</button>
                    <button className="bg-[#d4ebfc] font-semibold px-4 py-1 rounded-lg">Connect Wallet</button>
                    <button className='flex gap-2 bg-[#d4ebfc] text-[#2196f3] p-3 rounded-full hover:text-white hover:bg-blue-500 transition-all duration-500' onClick={toggleAccMenu}>
                        <IoMdContact size={22} />
                        <CiSettings size={22} />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Header