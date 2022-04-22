import Image from 'next/image'
import React from 'react'
import Layout from '../components/layout/Layout'

const about = () => {
    return (
        <Layout content='About Anthoni Portocarrero Rodriguez' title='About | AnthoniDev' >
            <div className="relative max-w-7xl container mx-auto  overflow-hidden px-6">
                <div className="  flex lg:flex-row flex-col  lg:space-x-20 lg:mt-16 xl:mt-20 ">
                    <div className='xl:w-1/2 xl:mt-16 lg:w-full lg:mt-24 border-t-4 p-3  border-l-4 border-dev'>
                        <Image
                            className=""
                            src={"/assets/images/casualStudent.png"}
                            layout="responsive"
                            height="120px"
                            width="128px"
                            alt='logo aton'
                            quality={40}
                        />
                    </div>
                    <div className="flex flex-col space-y-6">
                        <h3 className='font-medium text-dev-100 text-lg md:text-2xl tracking-widest'>Who I am   </h3>
                        <h2 className='text-3xl md:text-5xl text-let-100'>About Me  🇵🇪</h2>
                        <h4 className='text-xl md:text-1xl  lg:text-3xl text-let tracking-widest max-w-2xl'>My name is Anthoni Portocarrero, I am currently a student in the ninth cycle of Software Engineering.  I define myself as an enthusiastic and applied person in what he does, I love and respect my profession.
                            I like to learn new technologies and development methods, I offer the best of me in each experience.
                        </h4>
                        <div className="hidden xl:block">
                            <h4 className='text-xl md:text-1xl  lg:text-3xl text-let tracking-widest max-w-2xl'>I enjoy creating high-quality software products with a complex logic behind it.
                            </h4>
                            <h4 className='text-xl md:text-1xl  lg:text-3xl text-let tracking-widest max-w-2xl'>My technology stack includes React, TypeScript ,NextJs and Django Rest Framework.
                            </h4>
                        </div>
                    </div>

                </div>
                <div className='flex xl:hidden flex-col'>
                    <h4 className='text-xl md:text-1xl my-2 lg:text-3xl text-let tracking-widest '>I enjoy creating high-quality software products with a complex logic behind it.
                    </h4>
                    <h4 className='text-xl md:text-1xl  lg:text-3xl text-let tracking-widest '>My technology stack includes React, TypeScript ,NextJs and Django Rest Framework.
                    </h4>
                </div>
            </div>


        </Layout>
    )
}

export default about