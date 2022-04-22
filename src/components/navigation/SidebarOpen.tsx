import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React, { Fragment, FunctionComponent } from 'react'
import { LinksHome, NavbarItens } from '../../helpers/data'
import Themes from '../theme/Theme'
import LinkItem from './LinkItem'
import NavItem from './NavItem'

const SidebarOpen: FunctionComponent<{
    sidebarOpen: boolean,
    closeModal: () => void,

}> = ({ sidebarOpen, closeModal }) => {

    return (

        <div className={`${sidebarOpen ? 'block' : 'hidden'} bg-dark-300 m-2 min-h-screen  w-5/6  top-0 fixed inset-0 flex z-40 md:hidden rounded-lg`} >
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
                <nav className="mt-10 flex flex-col justify-center items-center w-full h-4/6 text-4xl font-semibold  space-y-10">
                    {
                        NavbarItens.map((iten, index) => (<NavItem key={index} iten={iten} />))
                    }
                </nav>
                <div className="flex space-x-5">
                    {
                        LinksHome.map((iten, index) => (<LinkItem key={index} iten={iten} />))
                    }
                </div>


                <div className="absolute bottom-0 my-10 mx-10">
                    <Themes />
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
        </div>


    )
}

export default SidebarOpen