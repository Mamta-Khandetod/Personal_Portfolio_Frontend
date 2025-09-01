import { Award, EllipsisVertical, HomeIcon, LayoutList, SquareLibrary, User, X } from 'lucide-react';
import React, { useState } from 'react';

export default function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const handleScrollOnClick = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
    }

    const onClickMenuButton = (value) => {
        setIsMobileMenuOpen(value);
    }

    return (
        <div className='grid grid-cols-2 py-5 items-center'>
            <div onClick={() => handleScrollOnClick('home')} className='text-2xl text-blue-300 font-bold cursor-pointer'>
                PortFolio
            </div>
            <div className='text-white  justify-between font-medium  items-center text-sm hidden lg:flex'>
                <TabOption title={'HOME'} onClick={handleScrollOnClick} id={'home'} />
                <TabOption title={'ABOUT ME'} onClick={handleScrollOnClick} id={'aboutMe'} />
                <TabOption title={'SKILLS'} onClick={handleScrollOnClick} id={'skills'} />
                <TabOption title={'EXPERIENCE'} onClick={handleScrollOnClick} id={'experience'} />
                <TabOption title={'PROJECTS'} onClick={handleScrollOnClick} id={'projects'} />
                <div>
                    <button
                        className=' p-3 rounded-md text-sm bg-gradient-to-r from-blue-400 to-indigo-700 hover:bg-blue-300'
                        onClick={() => handleScrollOnClick('contact')}
                    >
                        CONTACT
                    </button>
                </div>
            </div>
            <div className='flex justify-end lg:hidden '>
                {isMobileMenuOpen ?
                    <div>

                        <div className='relative'>
                            <div className='absolute flex flex-col gap-3 right-3 top-10  h-fit px-4 py-2 font-bold text-blue-200 bg-blue-950 rounded-xl animate-fadeInUp'>
                                <div className='flex gap-2 items-stretch'>
                                    <HomeIcon size={20} />
                                    <TabOption title={'Home'} onClick={handleScrollOnClick} id={'home'} />
                                </div>
                                <div className='flex gap-2 items-stretch'>
                                    <User size={20} />
                                    <TabOption title={'About me'} onClick={handleScrollOnClick} id={'aboutMe'} />
                                </div>
                                <div className='flex gap-2 items-stretch'>
                                    <Award size={20} />
                                    <TabOption title={'Skills'} onClick={handleScrollOnClick} id={'skills'} />
                                </div>
                                <div className='flex gap-2 items-stretch'>
                                    <SquareLibrary size={20} />
                                    <TabOption title={'Experience'} onClick={handleScrollOnClick} id={'experience'} />
                                </div>
                                <div className='flex gap-2 items-stretch'>
                                    <LayoutList size={20} />
                                    <TabOption title={'Projects'} onClick={handleScrollOnClick} id={'projects'} />
                                </div>

                            </div>
                            <button
                                onClick={()=>onClickMenuButton(false)}
                                className={`p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300 ${isMobileMenuOpen ? 'hamburger-active' : ''}`}
                                aria-label="Toggle menu"
                            >
                                <X className='text-white' />
                            </button>
                        </div>
                    </div>
                    :
                    <button
                        onClick={()=>onClickMenuButton(true)}
                        className={`p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300 ${isMobileMenuOpen ? 'hamburger-active' : ''}`}
                        aria-label="Toggle menu"
                    >
                        <EllipsisVertical className='text-white' />
                        {/* <div className=" relative ">
                        <span className="hamburger-line line1 absolute top-0 left-0 w-5 h-0.5 bg-white block"></span>
                        <span className="hamburger-line line2 absolute top-1.5 left-0 w-5 h-0.5 bg-white block"></span>
                        <span className="hamburger-line line3 absolute top-3 left-0 w-5 h-0.5 bg-white block"></span>
                        </div> */}
                    </button>
                }
            </div>
        </div>
    )
}

function TabOption({ title, onClick, id }) {
    return (
        <div className='hover:text-blue-400 cursor-pointer' onClick={() => onClick(id)}>{title}</div>
    )
}

