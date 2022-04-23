import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { LinksHome } from '../../helpers/data';
import LinkItem from './LinkItem';
import { motion } from 'framer-motion';
import logoFile from '../../../public/assets/images/logo4.png'

const SideBar = () => {

    return (
        <div className="hidden md:flex md:w-32 md:flex-col md:fixed md:inset-y-0">
            <div className="flex flex-col flex-grow  border-gray-200  overflow-y-auto">

                <div className=" flex-grow flex flex-col">
                    <div className="relative bg-day-400 dark:bg-dark-500">
                        <div className="flex flex-col sm:flex-row sm:justify-around">
                            <div className="w-72 h-screen">
                                <div className="flex items-center justify-start mx-6 mt-10">
                                    <div
                                        className="  flex-shrink-0 flex items-center px-4">
                                        <Link href={'/'}>
                                            <motion.a className='cursor-pointer' whileTap={{ rotate: 90, scale: 0.75 }}  >
                                                <Image
                                                    className="h-8 w-auto sm:h-10"
                                                    src={logoFile}
                                                    height="70px"
                                                    width="70px"
                                                    layout="intrinsic"
                                                    alt='logo aton'
                                                    quality={100}
                                                />
                                            </motion.a>

                                        </Link>
                                    </div>

                                </div>

                                <div className="absolute bottom-0 my-10 mx-10">
                                    <div className='flex flex-col space-y-6   '>

                                        {
                                            LinksHome.map((iten, index) => (<LinkItem key={index} iten={iten} />))
                                        }

                                    </div>
                                    <div className=' lg:flex hidden bg-let rounded-lg w-1  justify-center items-center  h-40 ml-5 mt-2'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar