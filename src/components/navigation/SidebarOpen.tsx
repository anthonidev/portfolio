import { XIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React, { FunctionComponent } from 'react'
import { LinksHome, NavbarItens } from '../../helpers/data'
import Themes from '../theme/Theme'
import LinkItem from './LinkItem'
import NavItem from './NavItem'
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '../../motion/animations'

const SidebarOpen: FunctionComponent<{
    closeModal: () => void,

}> = ({ closeModal }) => {

    return (

        <motion.div animate={{ x: [-150, 0], opacity: [0, 1], }}
            transition={{ duration: 0.4, type: 'spring', delay: 0.1 }} className={` bg-dark-300 m-2 min-h-screen  w-5/6  top-0 fixed inset-0 flex z-40 md:hidden rounded-lg`} >
            <div className="relative flex-1 flex flex-col items-center  w-full mt-5 ">
                <div className="dark:hidden flex-shrink-0 flex items-center px-4 ">
                    <Image
                        className="h-8 w-auto sm:h-10"
                        src={"/assets/images/logo4.png"}

                        height="70px"
                        width="70px"
                        layout="intrinsic"
                        alt='logo aton'
                        quality={100}
                    />
                </div>
                <div className="hidden dark:flex flex-shrink-0  items-center px-4">
                    <Image
                        className="h-8 w-auto sm:h-10"
                        src={"/assets/images/logo4.png"}

                        height="70px"
                        width="70px"
                        layout="intrinsic"
                        alt='logo aton'
                        quality={100}
                    />
                </div>
                <motion.nav variants={stagger} initial="initial" animate="animate" className="mt-10 flex flex-col justify-center items-center w-full h-4/6 text-4xl font-semibold  space-y-10">
                    {
                        NavbarItens.map((iten, index) => (
                            <motion.div variants={fadeInUp} key={index} className="w-full">
                                <NavItem iten={iten} />
                            </motion.div>
                        ))
                    }
                </motion.nav>
                <div className=" space-x-5 absolute bottom-0 my-10 mx-10 hidden md:flex">
                    {
                        LinksHome.map((iten, index) => (<LinkItem key={index} iten={iten} />))
                    }
                </div>



            </div>
            <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset bg-dark-300 focus:ring-white"
                    onClick={closeModal}
                >
                    <span className="sr-only">Close navbar</span>
                    <XIcon className="h-6 w-6 text-white hover:text-dev-100" aria-hidden="true" />
                </button>
            </div>
        </motion.div>


    )
}

export default SidebarOpen