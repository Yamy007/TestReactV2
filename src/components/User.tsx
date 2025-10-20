import React, { useState, useRef, useEffect } from 'react'
import { useAppSelector } from '../hooks/reduxHooks'
import "./style.css"
export const User = () => {
  const modalRef = useRef<HTMLDivElement>(null)
  const [isOpen ,setOpen] = useState(false)

  useEffect(()=>{
    const handelMouseDown = (e:MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node )){
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handelMouseDown )
  },[isOpen])

  return (


    <div>
     {!isOpen && <button onClick={()=>setOpen(true)} >render</button>}
     {isOpen &&  <div  className="block" ref={modalRef}>open modal windows
      <input placeholder='some text'/>
      <button>on click</button>
      <button onClick={()=> setOpen(false)}>Close</button>
      </div>}
    </div>
  )
}
