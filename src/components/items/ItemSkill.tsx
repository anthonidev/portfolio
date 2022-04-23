import React, { FunctionComponent, useEffect } from 'react'
import { Skill } from '../../types/types'
import { useState } from 'react';
import { motion } from 'framer-motion';

const ItemSkill: FunctionComponent<{
  skill: Skill
}> = ({ skill: {
  Icon,
  name,
  color
} }) => {

    const [colorHover, setColorHover] = useState<string>("")
    const red = "hover:text-red-500"
    const black = "hover:text-dark-400"
    const yellow = "hover:text-yellow-500"
    const blue = "hover:text-blue-500"
    const sky = "hover:text-sky-500"
    const orange = "hover:text-orange-500"
    const green = "hover:text-green-500"
    const violet = "hover:text-violet-500"
    useEffect(() => {
      if (color === "red") setColorHover(red)
      if (color === "black") setColorHover(black)
      if (color === "yellow") setColorHover(yellow)
      if (color === "sky") setColorHover(sky)
      if (color === "orange") setColorHover(orange)
      if (color === "blue") setColorHover(blue)
      if (color === "violet") setColorHover(violet)
      if (color === "green") setColorHover(green)
    }, [colorHover])

    console.log(colorHover);


    return (
      <motion.div drag
        dragConstraints={{ top: -150, right: 150, bottom: 150, left: -300}}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        dragElastic={0.5}
        whileTap={{ cursor: "grabbing" }} className={`flex flex-col justify-center items-center text-let  ${colorHover} cursor-grabbing `}>
        <Icon className={`h-7 w-7  `} />
        <span className="text-lg font-medium tracking-widest">{name}</span>
      </motion.div>
    )
  }

export default ItemSkill