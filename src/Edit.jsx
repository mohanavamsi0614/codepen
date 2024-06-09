import React, { useState } from 'react'
function Edit(props){
    const {displayName,value,onchange} = props
        return(
        <div className='complier'>
        <div className='title'>{displayName}</div>
        <textarea contentEditable={true} className='code' onChange={(e)=>{onchange(e.target.value)}}>{value}</textarea>
    </div>
    )

}
export default Edit;