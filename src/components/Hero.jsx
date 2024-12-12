import React from 'react'
import { LuImport } from "react-icons/lu";
import parth from "../assets/parth1.webp"

const Hero = () => {
  return (
    <section className="">
        <div className='flex flex-col items-center justify-center'>
            <h1 className='mt-16 overflow-hidden text-[12vw] font-semibold uppercase leading-none'>
                PARTH <br/>
                GUPTA
            </h1>
            <div className='mt-8'>
                <a href="/ParthGupta_resume.pdf"   
                target='_blank'
                rel='noopner noreferrer'
                download
                className='flex items-center  rounded-xl bg-lime-300 p-2 px-3 font-sans font-semibold text-black text-lg hover:bg-lime-400'
                >
                    <span>RESUME</span>
                        <LuImport className = "ml-2"/>
                    
                </a>
            </div>
            {/* <div className='w-full'>
                <img src={parth} alt='Parth Gupta' className='mt-8 h-96 w-full object-cover'/>
            </div> */}
        </div>
    </section>
  )
}

export default Hero