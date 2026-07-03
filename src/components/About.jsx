import profile from "../data/profile";
import { FaUser, FaMapMarkerAlt, FaEnvelope, FaGraduationCap } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="bg-slate-900 py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <p className="text-cyan-400 uppercase tracking-widest font-semibold">
          About Me
        </p>

        <h2 className="text-4xl font-bold text-white mt-3">
          Get to Know Me
        </h2>

        <div className="mt-14">

          {/* Left */}
          <div className="space-y-6">

            {profile.aboutme.map((text, index) => (

              <p
                key={index}
                className="text-slate-300 leading-8"
              >
                {text}
              </p>

            ))}

          </div>

          {/* Right */}
          <div className="grid grid-cols-4 pt-6 gap-5">

            <div className="bg-slate-800 rounded-2xl p-5 h-fit border border-slate-700 hover:border-cyan-400 transition">
              <FaUser className="text-cyan-400 text-2xl mb-4" />
              <p className="text-slate-400 text-sm">Name</p>
              <h3 className="text-white font-semibold mt-2">
                {profile.name}
              </h3>
            </div>

            <div className="bg-slate-800 rounded-2xl p-5 h-fit border border-slate-700 hover:border-cyan-400 transition">
              <FaGraduationCap className="text-cyan-400 text-2xl mb-4" />
              <p className="text-slate-400 text-sm">Education</p>
              <h3 className="text-white font-semibold mt-2">
                Universitas Banten Jaya
              </h3>
            </div>

            <div className="bg-slate-800 rounded-2xl p-5 h-fit border border-slate-700 hover:border-cyan-400 transition">
              <FaMapMarkerAlt className="text-cyan-400 text-2xl mb-4" />
              <p className="text-slate-400 text-sm">Location</p>
              <h3 className="text-white font-semibold mt-2">
                {profile.location}
              </h3>
            </div>

            <div className="bg-slate-800 rounded-2xl p-5 h-fit border border-slate-700 hover:border-cyan-400 transition">
              <FaEnvelope className="text-cyan-400 text-2xl mb-4" />
              <p className="text-slate-400 text-sm">Email</p>
              <h3 className="text-white font-semibold mt-2 break-all">
                {profile.email}
              </h3>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;