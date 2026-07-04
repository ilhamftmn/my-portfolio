import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import profile from "../data/profile";
import profileImage from "../assets/poto_portfolio.png";

function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-slate-950 min-h-screen flex items-center py-24"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute w-96 h-96 bg-cyan-500/20 blur-[140px] rounded-full -top-20 -left-20"></div>

      <div className="pointer-events-none absolute w-96 h-96 bg-blue-700/20 blur-[140px] rounded-full bottom-0 right-0"></div>

      <div className="pointer-events-none absolute left-1/2 top-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[180px]"></div>

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.4fr_0.6fr] gap-12 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 font-semibold uppercase tracking-widest mb-4">
            Hello, I'm
          </p>

          <h1 className="text-6xl lg:text-7xl font-black text-white leading-tight">
            {profile.name}
          </h1>

          <h2 className="text-2xl text-slate-400 mt-4">
            {profile.role}
          </h2>

          <p className="text-slate-300 mt-8 leading-8 max-w-xl">
            {profile.description}
          </p>

          {/* BUTTON */}
          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-slate-700 bg-slate-900/50 text-white px-6 py-3 rounded-xl hover:bg-cyan-400 hover:text-slate-900 hover:border-cyan-400 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-slate-700 bg-slate-900/50 text-white px-6 py-3 rounded-xl hover:bg-cyan-400 hover:text-slate-900 hover:border-cyan-400 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
            >
              <FaLinkedin />
              LinkedIn
            </a>

          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 max-w-xl">

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-center hover:border-cyan-400 transition-all duration-300">
              <h3 className="text-4xl font-bold text-cyan-400">6</h3>
              <p className="text-slate-400 mt-2 text-sm">
                Months Experience
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-center hover:border-cyan-400 transition-all duration-300">
              <h3 className="text-4xl font-bold text-cyan-400">2</h3>
              <p className="text-slate-400 mt-2 text-sm">
                Projects Tested
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-center hover:border-cyan-400 transition-all duration-300">
              <h3 className="text-4xl font-bold text-cyan-400">20+</h3>
              <p className="text-slate-400 mt-2 text-sm">
                Bugs Reported
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-center hover:border-cyan-400 transition-all duration-300">
              <h3 className="text-4xl font-bold text-cyan-400">2</h3>
              <p className="text-slate-400 mt-2 text-sm">
                Certificates
              </p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:-mt-10"
        >
          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-cyan-400 blur-3xl opacity-20 scale-110"></div>

            <img
              src={profileImage}
              alt={profile.name}
              className="relative w-64 h-64 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.25)]"
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;