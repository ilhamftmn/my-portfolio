import skills from "../data/skills";
import {
  FaBug,
  FaDatabase,
  FaGitAlt,
  FaTools,
} from "react-icons/fa";

const icons = {
  "Manual Testing": <FaBug />,
  SQL: <FaDatabase />,
  MySQL: <FaDatabase />,
  Git: <FaGitAlt />,
};

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-cyan-400 uppercase tracking-widest font-semibold">
          Skills
        </p>

        <h2 className="text-4xl font-bold text-white mt-3">
          Technical Skills
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-14">

          {skills.map((skill) => (

            <div
              key={skill}
              className="bg-slate-800 rounded-2xl border border-slate-700 p-5 hover:border-cyan-400 transition"
            >

              <div className="text-cyan-400 text-2xl">

                {icons[skill] || <FaTools />}

              </div>

              <h3 className="text-white mt-4">

                {skill}

              </h3>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;