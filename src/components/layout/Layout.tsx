import React, { useEffect, useState } from 'react'
import Head from "next/head";
import { MenuIcon } from '@heroicons/react/outline';
import SideBar from '../navigation/Sidebar';
import NavItem from '../navigation/NavItem';
import { NavbarItens } from '../../helpers/data';
import SidebarOpen from '../navigation/SidebarOpen';
import { Html } from 'next/document';
type Props = {
    title: string,
    content: string,
    children: (JSX.Element | null),
}
const Layout: React.FC<Props> = ({ title, content, children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    function closeModal() {
        setSidebarOpen(false)
    }



    function openModal() {

        setSidebarOpen(true)
    }
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={content} />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
                <link href="https://fonts.googleapis.com/css2?family=Aleo:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet" />
            </Head>
            <div className='bg-dark '>
                <SideBar />
                <div className="md:pl-36 flex flex-col flex-1 min-h-screen ">
                    <div className="sticky top-0 z-10 flex-shrink-0 flex h-16  bg-day-600  shadow-inner  rounded-xl m-4">
                        <button
                            type="button"
                            className="px-4 border-gray-200 text-gray-500 focus:outline-none hover:text-white  md:hidden"
                            onClick={openModal}
                        >
                            <MenuIcon className='h-8 w-8' />
                            <span className="sr-only">Open navbar</span>
                        </button>
                        <div className=" hidden  flex-1 md:flex items-center justify-end mr-5 md:mr-24  space-x-2">
                            {
                                NavbarItens.map((iten, index) => (<NavItem key={index} iten={iten} />))
                            }

                        </div>
                    </div>

                    <main className={`flex-1 ${sidebarOpen&&"opacity-20"}`}>
                        {children}

                    </main>

                </div>



            </div>
            <SidebarOpen sidebarOpen={sidebarOpen} closeModal={closeModal} />
        </>
    )
}



export default Layout