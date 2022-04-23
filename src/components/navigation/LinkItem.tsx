import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import { LinkIten } from '../../types/types'

const LinkItem: FunctionComponent<{ iten: LinkIten }> = ({ iten: {
    name,
    to,
    Icon
} }) => {

    return (
        <div>
            <Link href={to}>
                <a  ><Icon className={`w-12 h-12 text-let hover:text-dev `} /></a>
            </Link>
        </div>
    )
}

export default LinkItem