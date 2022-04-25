import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../../types/types";

import Image from "next/image";
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '../../motion/animations';

const ProjectCard: FunctionComponent<{
  project: IProject;
  showDetail:null|number,
  setShowDetail:(id:null|number)=>void
}> = ({
  project: {
    id,
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
  },
  showDetail,
  setShowDetail
}) => {
    return (
      <div className="dark:bg-dark-300 hover:dark:bg-dark-100 bg-gray-200 p-2 text-let-100  rounded-lg overflow-y-auto">

        <Image
          src={image_path}
          alt={name} className="cursor-pointer"
          onClick={() => setShowDetail(id)}
          width="300"
          height="150"
          layout="responsive"
        />

        <p className="my-2 text-center text-base md:text-lg " >{name}</p>


        {
          showDetail === id && (
            <div className="sm:absolute md:top-0  left-0 grid z-10 p-2 rounded-lg md:p-10 dark:bg-dark-100 md:grid-cols-2 h-auto w-full gap-x-12 text-black bg-gray-100 dark:text-white">
              <motion.div variants={stagger} initial="initial" animate="animate">
                <motion.div variants={fadeInUp} className="border-4 border-gray-100 hidden md:block">
                  <Image
                    src={image_path}
                    alt={name}
                    layout="responsive"
                    height="150"
                    width="300"
                  />
                </motion.div>
                <motion.div variants={fadeInUp} className="flex justify-center my-4 space-x-3">
                  <a href={github_url} target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 hover:dark:bg-dev-200 space-x-3 text-lg text-dev border border-dev rounded-lg bg-gray-200 dark:bg-dark-200">
                    <AiFillGithub /> <span className="tracking-wide ">Github</span>
                  </a>
                 
                </motion.div>

              </motion.div>
              <motion.div variants={stagger} initial="initial" animate="animate">
                <motion.h2 variants={fadeInUp} className="mb-3 text-xl md:text-1xl  lg:text-3xl font-medium  tracking-wide text-let-100">{name}</motion.h2>
                <motion.h3 variants={fadeInUp} className="mb-3 font-medium tracking-wide text-let text-base md:text-lg lg:text-xl">{description}</motion.h3>
                <motion.div variants={fadeInUp} className="grid  grid-cols-12 gap-4 ">
                  {
                    key_techs.map(tech => <span className="rounded-lg mx-4 md:mx-0 col-span-6 sm:col-span-4 md:col-span-6 lg:col-span-4 xl:col-span-3 text-center flex justify-center items-center  tracking-wider border-2 border-let text-let-100 text-xs md:text-base lg:text-lg" key={tech}>{tech}</span>)
                  }
                </motion.div>
                <button
                  className="absolute top-3 right-3 rounded-full p-1 focus:outline-none bg-gray-200 dark:bg-dark-200 "
                  onClick={() => setShowDetail(null)}><MdClose size={30} /></button>
              </motion.div>
            </div>
          )

        }

      </div>
    )
  };

export default ProjectCard;