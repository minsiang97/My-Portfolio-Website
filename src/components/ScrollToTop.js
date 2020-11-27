import React, {useState, useEffect} from 'react'
import {useWindowScroll} from 'react-use'
import {ChevronUp} from 'react-bootstrap-icons'
import './ScrollToTop.css'

const ScrollToTop = () => {
    const {y : pageYOffset} = useWindowScroll()
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (pageYOffset > 4200){
            setVisible(true)
        } else {
            setVisible(false)
        }
    })

    const scrollTop = () => window.scrollTo({top:0, behavior:"smooth"})

    if(!visible){
        return false
    }

    
    
    return (
        <div className="scroll-to-top cursor-pointer">
            <ChevronUp onClick={()=> scrollTop()} className="arrow" fill="white" height="20" width="20"/>
        </div>
        
    )
}

export default ScrollToTop