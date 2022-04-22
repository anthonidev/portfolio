import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from '../components/layout/Layout'
import LinkItem from '../components/navigation/LinkItem'
import { LinksHome } from '../helpers/data'

const Home: NextPage = () => {
  return (
    <Layout content='Anthoni Portocarrero Rodriguez' title='Anthoni Dev'>
      <div className="relative   overflow-hidden">
        <div className="max-w-7xl container mx-auto px-6 flex lg:flex-row flex-col  lg:space-x-20 lg:mt-16 xl:mt-32 ">
          <div className='xl:w-1/2 xl:mt-16 lg:w-full lg:mt-24'>
            <Image
              className=""
              src={"/assets/images/developer.png"}
              layout="responsive"
              height="128px"
              width="128px"
              alt='logo aton'
              quality={100}
            />
          </div>
          <div className='flex flex-col space-y-4 '>
            <h3 className='font-medium text-dev-100 text-lg md:text-2xl tracking-widest' >Hi, my name is</h3>
            <h1 className='text-3xl md:text-5xl lg:text-7xl text-let-100 ' >Anthoni Potocarrero.</h1>
            <h1 className='text-4xl md:text-6xl lg:text-8xl text-let ' >I build things for the web.</h1>
            <div className="hidden xl:block">
              <h4 className='text-xl md:text-1xl  lg:text-3xl text-let tracking-widest max-w-2xl' >
                I am a software engineer who specializes in creating interactive websites using <span className='text-yellow-400'>python</span>  and <span className='text-dev'>javascript</span>.</h4>
              <div className='flex justify-around mb-3'>
                <div className='border-dev border-2 rounded-lg mt-6 hover:bg-dev-200 '>
                  <button className='px-7 py-4 '><span className='text-dev tracking-widest text-lg '>Contact me</span> </button>
                </div>
                <div className='border-dev border-2 rounded-lg mt-6 hover:bg-dev-200 '>
                  <button className='px-7 py-4 '><span className='text-dev tracking-widest text-lg '>Download CV</span> </button>
                </div>
              </div>
            </div>


          </div>


        </div>
        <div className='block xl:hidden'>
          <h4 className='text-xl md:text-1xl  lg:text-3xl text-let tracking-widest max-w-2xl' >
            I am a software engineer who specializes in creating interactive websites using <span className='text-yellow-400'>python</span>  and <span className='text-dev'>javascript</span>.</h4>
          <div className='flex justify-around mb-3'>
            <div className='border-dev border-2 rounded-lg mt-6 hover:bg-dev-200 '>
              <button className='px-7 py-4 '><span className='text-dev tracking-widest text-lg '>Contact me</span> </button>
            </div>
            <div className='border-dev border-2 rounded-lg mt-6 hover:bg-dev-200 '>
              <button className='px-7 py-4 '><span className='text-dev tracking-widest text-lg '>Download CV</span> </button>
            </div>
          </div>
        </div>

      </div>

    </Layout>
  )
}

export default Home
