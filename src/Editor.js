import React, { useState } from 'react'

const Editor = ({textArea,setTextArea,text,setText}) => {
   
  const handleChange = (e) => {
    setText(e.target.value)
  }
  return (
    <div className='editor'>
      <div className='top'>
       <i class="fa-brands fa-markdown"></i>
       <i onClick={() =>{
         setTextArea(!textArea)
         
       }} class="fa-solid fa-up-right-and-down-left-from-center"></i>
      </div>
        <div className='text-area'>
          <textarea onChange={handleChange} id='editor' rows={`${textArea ? '33' : '8'}`} value={text}>
          
        </textarea>
        </div>
    </div>
  )
}

export default Editor