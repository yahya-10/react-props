import React from 'react'

const Image = (props) => {
    return (
        <div>
            <img src={props.children} alt='' style={{height:400, width:250}}/>
        </div>
    )
}

export default Image
