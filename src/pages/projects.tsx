import React, { useState } from 'react'
import Layout from '../components/layout/Layout'
import { Category } from '../types/types';
import { projects as projectsData } from '../helpers/data'
import { motion } from 'framer-motion';
import ProjectsNavbar from '../components/items/ProjectsNavbar';
import { fadeInUp, routeAnimation, stagger } from '../motion/animations';
import ProjectCard from '../components/items/ProjectCard';

const projects = () => {
    const [projects, setProjects] = useState(projectsData);
    const [active, setActive] = useState("all");

    const [showDetail, setShowDetail] = useState<number | null>(null)


    const handlerFilterCategory = (category: Category | "all") => {

        if (category === "all") {
            setProjects(projectsData);
            setActive(category);
            return;
        }

        const newArray = projectsData.filter((project) =>
            project.category.includes(category)
        );
        setProjects(newArray);
        setActive(category);
    };
    return (
        <Layout content='Projects Anthoni Portocarrero Rodriguez' title='Projects | AnthoniDev' >
            <div className="relative max-w-7xl container mx-auto  overflow-hidden px-6">
                <div className=" ">
                    <motion.div variants={routeAnimation} initial="initial" animate="animate" exit="exit" className="px-5 py-2 overflow-y-scroll" >
                        <ProjectsNavbar handlerFilterCategory={handlerFilterCategory} active={active} />

                        <motion.div variants={stagger} initial="initial" animate="animate" className="grid  grid-cols-12 gap-4 my-3 relative ">

                            {
                                projects.map(project => (
                                    <motion.div variants={fadeInUp} className="col-span-12 sm:col-span-6  lg:col-span-4 " key={project.name}>
                                        <ProjectCard project={project} showDetail={showDetail} setShowDetail={setShowDetail} />
                                    </motion.div >
                                ))
                            }
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </Layout>
    )
}


export default projects