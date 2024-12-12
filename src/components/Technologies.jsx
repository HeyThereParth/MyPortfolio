import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiMysql } from "react-icons/si";


const Technologies = () => {
  return (
    <section id="technologies" className="pt-8">
    <h2 className="m-10 text-center text-3xl lg:text-8xl">Tech Stack</h2>
    <div className="flex flex-wrap items-center justify-center gap-8 m-10 px-24">
      <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-105 transition-all hover:shadow-md">
      <FaHtml5 className="text-3xl
      lg:text-5xl "/>
      </div>
      <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-105 transition-all hover:shadow-md">
      <FaCss3Alt className="text-3xl
      lg:text-5xl"/>
      </div>
      <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-105 transition-all hover:shadow-md">
      <FaJsSquare className="text-3xl
      lg:text-5xl"/>
      </div>
      <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-105 transition-all hover:shadow-md">
      <FaBootstrap className="text-3xl
      lg:text-5xl"/>
      </div>
      <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-105 transition-all hover:shadow-md">
      <RiTailwindCssFill className="text-3xl
      lg:text-5xl"/>
      </div>
      <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-105 transition-all hover:shadow-md">
      <DiMongodb className="text-3xl
      lg:text-5xl"/>
      </div>
      <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-105 transition-all hover:shadow-md">
      <SiExpress className="text-3xl
      lg:text-5xl"/>
      </div>
      <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-105 transition-all hover:shadow-md">
      <SiMysql className="text-3xl
      lg:text-5xl"/>
      </div>
      <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-105 transition-all hover:shadow-md">
      <FaNode className="text-3xl
      lg:text-5xl"/>
      </div>
      <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-105 transition-all hover:shadow-md">
      <FaPython className="text-3xl
      lg:text-5xl"/>
      </div>
      </div>
      <h2 className="m-10 text-center text-3xl lg:text-8xl">Tools</h2>
      <div className="flex flex-wrap items-center justify-center gap-8 m-10 px-12">
      <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-105 transition-all hover:shadow-md">
      <FaGitAlt className="text-3xl
      lg:text-5xl"/>
      </div>
      <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-105 transition-all hover:shadow-md">
      <FaGithub className="text-3xl
      lg:text-5xl"/>
      </div>
      <div className="rounded-2xl border-4 border-neutral-800 p-4 hover:scale-105 transition-all hover:shadow-md">
      <VscVscode className="text-3xl
      lg:text-5xl"/>
      </div>
      </div>
    
    </section>
  )
}

export default Technologies