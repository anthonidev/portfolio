import Image from 'next/image'
import React from 'react'
import Layout from '../components/layout/Layout'
import { motion } from 'framer-motion';
import { fadeInUp, imagesUp, routeAnimation, stagger } from '../motion/animations';
import contactmeFile from '../../public/assets/images/contactme.png'

const contact = () => {
    return (
        <Layout content='Contact Anthoni Portocarrero Rodriguez' title='Contact | AnthoniDev' >
            <motion.div variants={routeAnimation} initial="initial" animate="animate" exit="exit" >
                <motion.div variants={stagger} initial="initial" animate="animate">
                <div className="relative max-w-7xl container mx-auto flex flex-col lg:flex-row  overflow-hidden px-6 ">
                    <motion.div variants={imagesUp} className='  xl:w-1/2 xl:mt-16 lg:w-full lg:mt-24'>
                        <Image
                            className=""
                            src={contactmeFile}
                            layout="responsive"
                            height="128px"
                            width="128px"
                            alt='logo aton'
                            priority

                            quality={100}
                        />
                    </motion.div>
                    <div className='flex flex-col space-y-8 '>
                        <motion.h1 variants={fadeInUp} className='text-3xl md:text-5xl lg:text-7xl text-let-100 lg:mt-16 xl:mt-32' >Wanna reach out?</motion.h1>
                        <motion.div variants={fadeInUp} className="">
                            <h4 className='text-xl md:text-1xl  lg:text-3xl text-let tracking-widest max-w-2xl' >
                                Feel free to drop me a message if you have some interesting offer or if you want to say hello me</h4>
                            <div className='flex flex-col space-y-5 mt-4'>
                                <h3 className='font-medium text-dev text-lg md:text-2xl tracking-widest' >➤  softwaretoni21@gmail.com</h3>

                                <h3 className='font-medium text-dev text-lg md:text-2xl tracking-widest' >➤  +51 958-920-823</h3>

                            </div>
                        </motion.div>


                        <motion.div variants={fadeInUp} className='flex justify-start mb-3'>
                            <div className='border-dev border-2 rounded-lg mt-6 hover:bg-dev-200 '>
                                <button onClick={() => window.open("mailto:softwaretoni21@gmail.com")}  className='px-7 py-4 '><span className='text-dev tracking-widest text-xl '>send me a message

                                </span> </button>
                            </div>

                        </motion.div>

                    </div>
                    <motion.h3 variants={fadeInUp} className='hidden md:block lg:hidden font-medium text-dev-100 text-lg md:text-2xl tracking-normal absolute bottom-10 right-10' >Designed & Crafted by Anthoni © 2022</motion.h3>


                </div>
                <motion.h3 variants={fadeInUp} className='block lg:block md:hidden  font-medium text-dev-100 text-lg md:text-2xl tracking-normal absolute bottom-10 right-10' >Designed & Crafted by Anthoni © 2022</motion.h3>
                </motion.div>
            </motion.div>
        </Layout>
    )
}

export default contact