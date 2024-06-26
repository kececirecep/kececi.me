import React from 'react'

import { IoLogoReact, IoLogoHtml5, IoLogoCss3 } from "react-icons/io5";
import { DiJavascript1 } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap, FaSass } from "react-icons/fa";
import { MdWorkspaces } from "react-icons/md";
 
import { useSelector } from 'react-redux';

const Skills = () => {
    let language = useSelector(state => state.language.language)

    return (
        <div className='container max-w-[1200px] mx-auto bg-white dark:bg-gray-800 dark:text-white py-6 px-2 md:px-32 rounded'>
            <h2 className='text-2xl font-medium syne mb-4 flex items-center gap-2'><MdWorkspaces size={18} /> {language === "tr" ? "Beceriler" : "Skills"}</h2>
            <div className='flex md:flex-row flex-col items-start md:items-center justify-between'>
                <span className='flex items-center justify-start gap-2 py-2 text-xl text-gray-600 dark:text-white'><IoLogoReact />React</span>
                <span className='flex items-center justify-start gap-2 py-2 text-xl text-gray-600 dark:text-white'><DiJavascript1 />Javascript</span>
                <span className='flex items-center justify-start gap-2 py-2 text-xl text-gray-600 dark:text-white'><IoLogoCss3 />CSS3</span>
                <span className='flex items-center justify-start gap-2 py-2 text-xl text-gray-600 dark:text-white'><RiTailwindCssFill />Tailwind Css</span>
                <span className='flex items-center justify-start gap-2 py-2 text-xl text-gray-600 dark:text-white'><FaBootstrap />Bootstrap 5</span>
                <span className='flex items-center justify-start gap-2 py-2 text-xl text-gray-600 dark:text-white'><FaSass />Sass</span>
            </div>
        </div>
    )
}

export default Skills