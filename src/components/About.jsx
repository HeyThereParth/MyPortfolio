import { ABOUT } from "../constants/index.jsx"
import parth from "../assets/parth2.jpg";

const About = () => {
  return (
    <section id="about" className="px-8">
        <h2 className="m-10 text-center text-3xl lg:text-8xl">About Me</h2>
        <div className=" flex justify-center flex-wrap">
            {/* <p className="m-8 max-w-6xl text-3xl lg:text-6xl">{ABOUT}</p> */}
            <div className="w-1/2 lg:w-1/4 lg:p-8">
            <div className="flex items-center justify-center hover:scale-[102%] transition-all hover:shadow-md cursor-pointer">
              <img src={parth} alt="" className="rounded-xl shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]" />
            </div>
          
            </div>
            <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
              <p className="my-2 max-w-xl py-20 text-xl">{ABOUT}</p>
            </div>
            </div>
        </div>
    </section>
  )
}

export default About