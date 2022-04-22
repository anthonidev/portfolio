import React from 'react'

import Link from 'next/link';
import Image from 'next/image';
import Themes from '../theme/Theme';
import { LinksHome } from '../../helpers/data';
import LinkItem from './LinkItem';

const SideBar = () => {

    return (
        <div className="hidden md:flex md:w-32 md:flex-col md:fixed md:inset-y-0">
            <div className="flex flex-col flex-grow  border-gray-200  overflow-y-auto">

                <div className=" flex-grow flex flex-col">
                    <div className="relative bg-day-400 dark:bg-dark-500">
                        <div className="flex flex-col sm:flex-row sm:justify-around">
                            <div className="w-72 h-screen">
                                <div className="flex items-center justify-start mx-6 mt-10">
                                    <div className="dark:hidden  flex-shrink-0 flex items-center px-4">
                                        <Link href={'/'}>
                                            <a >
                                                <Image
                                                    className="h-8 w-auto sm:h-10"
                                                    src={"/assets/images/logo4.png"}
                                                    height="70px"
                                                    width="70px"
                                                    layout="intrinsic"
                                                    alt='logo aton'
                                                    quality={100}
                                                />
                                            </a>

                                        </Link>
                                    </div>
                                    <div className="hidden cursor-pointer dark:flex flex-shrink-0  items-center px-4">
                                        <Link href={'/'}>
                                            <a >
                                                <Image
                                                    className="h-8 w-auto sm:h-10"
                                                    src={"/assets/images/logo4.png"}
                                                    height="70px"
                                                    width="70px"
                                                    layout="intrinsic"
                                                    alt='logo aton'
                                                    quality={100}
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="absolute bottom-0 my-10 mx-10">
                                    <div className='flex flex-col space-y-6   '>

                                        {
                                            LinksHome.map((iten, index) => (<LinkItem key={index} iten={iten} />))
                                        }

                                    </div>
                                    <div className='bg-let rounded-lg w-1 flex justify-center items-center  h-40 ml-5 mt-2'></div>
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