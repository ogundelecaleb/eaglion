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
            <div className="flex justify-between items-center rounded-lg font-bold cursor-pointer px-[15px] md:px-[40px] py-[15px] md:py-[24px] bg-[#FAFAFA]" onClick={handleClick}>
                <p> {props.question} </p>
                <button>{icon}</button>
            </div>
            <div className={showContent ? " mt-5 px-[15px] md:px-[40px]" : "hidden"}>
                {props.answer}
            </div>
        </div>
    )
}

export default Questions