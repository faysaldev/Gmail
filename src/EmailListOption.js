import React from 'react'

function EmailListOption({active,Icon,title,color}) {
    return (
        <div className={`emailList__option ${active && "emaillist__active"}`}
        style={{borderBottom: `3px solid ${color}`,
        color: `${active && color}`
        
        }}
        >
        <Icon />
        <h4>{title}</h4>  
        </div>
    )
}

export default EmailListOption
