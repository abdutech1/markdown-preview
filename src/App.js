import { useState } from 'react'
import Editor from './Editor'
import Preview from './Preview'

const App = () => {
   const defaultMarkdown = `
# Welcome to my Markdown Previewer!

## Sub-heading example

You can find more info at [Google](https://www.google.com).

Inline code example: \`console.log("Hello World");\`

\`\`\`javascript
function greet(name) {
  return "Hello, " + name + "!";
}
\`\`\`

- List item 1
- List item 2
  - Nested list item

> This is a blockquote.



**Bolded text example**
`;
  const [text,setText] = useState(defaultMarkdown)
    const [isPreview,setIsPreview]  = useState(false)
  const [isTextarea,setIsTextArea]  = useState(false)
    
  return (
    <div className='wrapper'>
       {!isPreview && <Editor 
       textArea={isTextarea} 
       setTextArea={setIsTextArea}
       preview={isPreview}
       setIsPreview={setIsPreview}
       text={text}
       setText={setText}
       />}
       
       {!isTextarea &&  <Preview 
       preview={isPreview} 
       setIsPreview={setIsPreview}
       textArea={isTextarea}
       setTextArea={setIsTextArea}
       text={text}
       />
       }
       <h3 style={{textAlign:'end',marginTop:'20px'}}>Abdulkadir Akmel</h3>
       <h5 style={{textAlign:'end'}}>2025</h5>
    </div>
  )
}

export default App