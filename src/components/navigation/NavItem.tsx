import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FunctionComponent } from 'react'
import { NavbarIten } from '../../types/types'
import { motion } from 'framer-motion';

const NavItem: FunctionComponent<{ iten: NavbarIten }> = ({ iten: {
    name,
    to,
    Icon
} }) => {
    const { pathname } = useRouter()
    const noSelect = ' text-let-100  border-let '
    const select = 'text-dev  border-dev  '



    return (
        <>
            <div className='w-full block md:hidden'>
                <Link href={to}>
                    <a>
                        <motion.div whileTap={{ scale: 0.85 }} whileHover={{scale:1.10}} className={`flex justify-between mx-6  hover:text-dev ${pathname === to ? select : noSelect} border-2 p-2  rounded-lg hover:border-dev `}>
                            <Icon className='h-8 w-8 ' />
                            <span className=' text-2xl tracking-widest' >{name}</span>
                        </motion.div>
                    </a>

                </Link>
            </div>
            <div className='md:block hidden'>
                <Link href={to}>
                    <a>
                        <motion.div whileTap={{ scale: 0.85 }}  whileHover={{scale:1.10}} className={`flex justify-center mx-2  hover:text-dev  ${pathname === to ? select : noSelect} border-b-2 p-2   hover:border-dev `}>
                            <span className=' text-xl tracking-widest' >{name}</span>
                        </motion.div>
                    </a>

                </Link>
            </div>
        </>
    )
}

export default NavItem