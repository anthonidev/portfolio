import Image from 'next/image'
import React from 'react'
import Layout from '../components/layout/Layout'
import { framework, languages, tools } from '../helpers/data'
import ItemSkill from '../components/items/ItemSkill';

const skills = () => {
    return (
        <Layout content='Skills Anthoni Portocarrero Rodriguez' title='Skills | AnthoniDev' >
            <div className="relative max-w-7xl container mx-auto  overflow-hidden px-6">
                <div className="  flex lg:flex-row flex-col  lg:space-x-20 lg:mt-16 xl:mt-20 ">
                    <div className="flex flex-col space-y-6">
                        <h2 className='text-3xl md:text-5xl text-let-100'>My Skills</h2>
                        <h4 className='text-xl md:text-1xl  lg:text-3xl text-let tracking-widest max-w-2xl'>I am passionate about using cutting-edge technologies. These are the tools I am most familiar with and build things every day.
                        </h4>
                        <Image
                            className=""
                            src={"/assets/images/contructor.png"}
                            layout="responsive"
                            height="120px"
                            width="128px"
                            alt='logo aton'
                            quality={40}
                        />
                    </div>
                    <div className='xl:w-1/2 xl:mt-16 lg:w-full lg:mt-24 border-b-4 p-3  border-r-4 border-dev'>
                        <h2 className='text-xl md:text-1xl  lg:text-3xl  tracking-widest max-w-2xl my-10 text-let-100'>Languages</h2>
                        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                            {
                                languages.map((skill, index) => (
                                    <ItemSkill skill={skill} key={index} />
                                ))
                            }
                        </div>
                        <h2 className='text-xl md:text-1xl  lg:text-3xl  tracking-widest max-w-2xl my-10 text-let-100'>Frameworks and Libraries</h2>
                        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                            {
                                framework.map((skill, index) => (
                                    <ItemSkill skill={skill} key={index} />
                                ))
                            }
                        </div>
                        <h2 className='text-xl md:text-1xl  lg:text-3xl  tracking-widest max-w-2xl my-10 text-let-100'>Tools</h2>
                        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                            {
                                tools.map((skill, index) => (
                                    <ItemSkill skill={skill} key={index} />
                                ))
                            }
                        </div>

                    </div>


                </div>

            </div>
        </Layout>
    )
}

export default skills