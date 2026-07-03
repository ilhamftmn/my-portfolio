import experience from "../data/experience";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950 py-28 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <p className="text-cyan-400 uppercase tracking-widest font-semibold">
          Experience
        </p>

        <h2 className="text-4xl font-bold text-white mt-3 mb-20">
          My Journey
        </h2>

        <div className="relative border-l-2 border-slate-700 ml-4">

          {experience.map((item) => (

            <motion.div
              key={item.id}
              initial={{opacity:0,x:-50}}
              whileInView={{opacity:1,x:0}}
              transition={{duration:.6}}
              viewport={{once:true}}
              className="mb-16 ml-10 relative"
            >

              <div className="absolute -left-[56px] w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center text-slate-900">

                <FaBriefcase/>

              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300">

                <h3 className="text-2xl font-bold">

                  {item.position}

                </h3>

                <p className="text-cyan-400 mt-2">

                  {item.company}

                </p>

                <p className="text-slate-500 mt-1">

                  {item.period}

                </p>

                <p className="text-slate-300 leading-8 mt-6">

                  {item.description}

                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;