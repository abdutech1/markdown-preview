import React from 'react'
import { marked } from 'marked'

const Preview = ({preview,setIsPreview,setTextArea,text}) => {
  const handleMarkdown = () => {
    return {__html:marked.parse(text,{breaks:true})}
  }
  
  return (
     <div className='preview'>
      <div className='top'>
      <div>
        <i class="fa-solid fa-magnifying-glass"></i>
      <span style={{fontWeight:700}}>Preview</span>
      </div>
       <i onClick={() =>{
        setIsPreview(!preview)
       } } class="fa-solid fa-up-right-and-down-left-from-center"></i>
      </div>
        <div id='preview' className='preview-text' dangerouslySetInnerHTML={handleMarkdown()}>
          
        </div>
    </div>
  )
}

export default Preview