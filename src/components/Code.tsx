'use client'
import {FC,useEffect,useState} from 'react'
import {Highlight,themes} from "prism-react-renderer";
// import {Highlight, themes} from 'prism-react-renderer'
// import { type Language }from 'prism-react-renderer'
import { useTheme } from 'next-themes'






const darkTheme =themes.nightOwl
const lightTheme =themes.nightOwlLight

interface codeProps{
    code:string
    show:boolean
    language:string
    animationDelay?:number
    animated?:boolean
}


const Code:FC<codeProps>=({code,show,language,animationDelay,animated})=>{
    const {theme:applicationTheme}=useTheme()
    const [text,setTaxt]=useState(animated?'':code)
    useEffect(()=>{
        if(show && animated){
           let i=0
           setTimeout(()=>{
            const interValid=setInterval(()=>{
                setTaxt(code.slice(0,i))
                i++
                if(i>code.length){
                    clearInterval(interValid)
                }
            },15)
            return ()=>clearInterval(interValid)
           },animationDelay || 15)
        }
    },[code,show,animated,animationDelay])

    //number of line
    const lines=text.split(/\r\n|\r|\n/).length
    const theme=applicationTheme==='light'?lightTheme:darkTheme


    return <Highlight code={text} language={language} theme={theme}>
        {({className,tokens,getLineProps,getTokenProps})=><pre className={className+'translate-all w-fit bg-transparent duration-100 py-0 no-scrollbar'}
          style={{
            maxHeight:show? lines * 24 : 0,
            opacity:show ? 1:0
          }}

        >
          {tokens.map((line,i)=>{
            //eslint-disable-next-line no-unused-vars
            const {key,...rest}=getLineProps({line,key:i})
            return (
                <div
                  key={`line-${i}`}
                  style={{position:'relative'}}
                  {...rest}
                >
                  {line.map((token,index)=>{
                    //eslint-disable-next-line no-unused-vars
                    const {key,...props}=getTokenProps({token,i})
                    return <span key={index} {...props}></span>
                  })}

                </div>
            )
          })}  
            </pre>}
    </Highlight>
}

export default Code