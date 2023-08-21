import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import './animate.css'

function Questions(props) {
    const [showContent, setShowContent] = useState(false)
    const [icon, setIcon] = useState(<IoIosArrowDown/>)

    const handleClick = () => {
        setShowContent(!showContent)
        showContent ? setIcon(<IoIosArrowDown/>) : setIcon(<IoIosArrowUp/>)
    }

    return (
        <div className=" pt-7 pb-4 relative">
            <div className="flex justify-between items-center font-bold cursor-pointer px-[30px] md:px-[40px] py-[30px] md:py-[40px] bg-[#FAFAFA]" onClick={handleClick}>
                <p> {props.question} </p>
                <button>{icon}</button>
            </div>
            <div className={showContent ? "animate__animated animate__fadeInDown animate__faster mt-5" : "hidden"}>
                {props.answer}
            </div>
        </div>
    )
}

export default Questions