import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from '../components/layout/Layout'
import { fadeInUp, imagesUp, routeAnimation, stagger } from '../motion/animations'
import { motion } from 'framer-motion';

const Home: NextPage = () => {

  return (
    <Layout content='Anthoni Portocarrero Rodriguez' title='Anthoni Dev'>
      <motion.div variants={routeAnimation} initial="initial" animate="animate" exit="exit" className="relative   overflow-hidden">
        <motion.div variants={stagger} initial="initial" animate="animate">


          <div className="max-w-7xl container mx-auto px-6 flex lg:flex-row flex-col  lg:space-x-20 lg:mt-16 xl:mt-32 ">
            <motion.div variants={imagesUp} className='xl:w-1/2 xl:mt-16 lg:w-full lg:mt-24'>
              <Image
                className=""
                src={"/assets/images/developer.png"}
                layout="responsive"
                height="128px"
                width="128px"
                alt='logo aton'
                quality={100}
              />
            </motion.div>
            <div className='flex flex-col space-y-4 '>
              <motion.h3 variants={fadeInUp} className='font-medium text-dev-100 text-lg md:text-2xl tracking-widest' >Hi, my name is</motion.h3>
              <motion.h1 variants={fadeInUp} className='text-3xl md:text-5xl lg:text-7xl text-let-100 ' >Anthoni Portocarrero.</motion.h1>
              <motion.h1 variants={fadeInUp} className='text-4xl md:text-6xl lg:text-8xl text-let ' >I build things for the web.</motion.h1>
              <motion.div variants={fadeInUp} className="hidden xl:block">
                <h4 className='text-xl md:text-1xl  lg:text-3xl text-let tracking-widest max-w-2xl' >
                  I am software engineer who specializes in creating interactive websites using <span className='text-yellow-400'>python</span>  and <span className='text-dev'>javascript</span>.</h4>
                <div className='flex justify-around mb-3'>
                  <motion.div whileHover={{ scale: 0.9 }} className='border-dev border-2 rounded-lg mt-6 hover:bg-dev-200 '>
                    <button onClick={() => window.open("mailto:softwaretoni21@gmail.com")} className='px-7 py-4 '><span className='text-dev tracking-widest text-lg '>Contact me</span> </button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 0.9 }} className='border-dev border-2 rounded-lg mt-6 hover:bg-dev-200 '>
                    <a href="/assets/files/CV_Anthoni_Portocarrero_Rodriguez.pdf" target="_blank" rel="noopener noreferrer"
                      download="CV_Anthoni_Portocarrero_Rodriguez.pdf" className='px-7 py-4 h-full w-full flex justify-center items-center '><span className='text-dev tracking-widest text-lg '>Download CV</span> </a>
                  </motion.div>
                </div>
              </motion.div>


            </div>


          </div>
          <div className='block xl:hidden mx-4'>
            <h4 className='text-xl md:text-1xl  lg:text-3xl text-let tracking-widest max-w-2xl' >
              I am a software engineer who specializes in creating interactive websites using <span className='text-yellow-400'>python</span>  and <span className='text-dev'>javascript</span>.</h4>
            <div className='flex justify-around mb-3'>
              <motion.div whileHover={{ scale: 0.9 }} className='border-dev border-2 rounded-lg mt-6 hover:bg-dev-200 '>
                <button onClick={() => window.open("mailto:softwaretoni21@gmail.com")}  className='px-7 py-4 '><span className='text-dev tracking-widest text-lg '>Contact me</span> </button>
              </motion.div>
              <motion.div whileHover={{ scale: 0.9 }} className='border-dev border-2 rounded-lg mt-6 hover:bg-dev-200  '>
                <a className='px-7 py-4 h-full w-full flex justify-center items-center' href="/assets/files/CV_Anthoni_Portocarrero_Rodriguez.pdf"
                      download="CV_Anthoni_Portocarrero_Rodriguez.pdf"><span className='text-dev tracking-widest text-lg ' >Download CV</span> </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

    </Layout>
  )
}

export default Home
