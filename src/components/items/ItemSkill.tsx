import React, { FunctionComponent } from 'react'
import { Skill } from '../../types/types'

const ItemSkill: FunctionComponent<{
  skill: Skill
}> = ({ skill: {
  Icon,
  name
} }) => {
    return (
      <div className='flex flex-col justify-center items-center text-let hover:text-dev-100 cursor-default'>
        <Icon className='h-6 w-6 ' />
        <span className="text-lg font-medium tracking-widest">{name}</span>
      </div>
    )
  }

export default ItemSkill