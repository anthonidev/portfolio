import React from 'react'
import { FunctionComponent } from 'react';
import { Category } from '../../types/types';


export const NavItem:FunctionComponent<{ 
    value: Category | "all";
    handlerFilterCategory:Function ;
    active:string;
}> = ({ 
    value,
    handlerFilterCategory,
    active
 }) => {

    let className= `cursor-pointer hover:text-dev capitalize text-lg tracking-widest ${active===value?'text-dev':'text-let'}`
   
    return (
        <li onClick={()=>handlerFilterCategory(value)} className={className}>
            {value}
        </li>
    )
}


const ProjectsNavbar:FunctionComponent<{handlerFilterCategory:Function,active:string }> = (props) => {
    return (
        <div className="flex px-3 py-2 space-x-3 md:space-x-6 overflow-x-auto list-none " >
            <NavItem value='all' {...props}/>
            <NavItem value='react' {...props}/>
            <NavItem value='nextjs' {...props}/>
            <NavItem value='django' {...props}/>
            <NavItem value='postgresql' {...props}/>
        </div>
    )
}

export default ProjectsNavbar