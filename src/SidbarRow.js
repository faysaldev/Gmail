import React from 'react'

function SidbarRow({active,Icon,title,number}) {
    return (
        <div className={`sidbarRow ${active && 'active'}`}>
            <Icon />
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    )
}

export default SidbarRow
