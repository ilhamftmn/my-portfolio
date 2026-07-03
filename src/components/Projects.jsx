import { Link } from "react-router-dom";
import projects from "../data/projects";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaDatabase,
} from "react-icons/fa";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-900 py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-cyan-400 uppercase tracking-widest font-semibold">
          Projects
        </p>

        <h2 className="text-4xl font-bold text-white mt-3">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {projects.map((project) => (

            <motion.div
              key={project.id}
              whileHover={{ y: -8 }}
              transition={{ duration: .25 }}
              className="rounded-3xl bg-slate-950 border border-slate-800 overflow-hidden"
            >

              {/* Header */}

              <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-slate-900 flex items-center justify-center">

                <FaDatabase
                  className="text-7xl text-cyan-400"
                />

              </div>

              {/* Body */}

              <div className="p-8">

                <h3 className="text-2xl font-bold text-white">

                  {project.title}

                </h3>

                <p className="text-slate-400 leading-8 mt-5">

                  {project.description}

                </p>

                {/* Badge */}

                <div className="flex flex-wrap gap-3 mt-8">

                  {project.tech.map((item) => (

                    <span
                      key={item}
                      className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-cyan-400 text-sm"
                    >

                      {item}

                    </span>

                  ))}

                </div>

                {/* Button */}

                <div className="flex gap-4 mt-10">

                  <Link
                    to={`/project/${project.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                  >
                    Detail
                    <FaArrowRight className="text-sm" />
                  </Link>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;