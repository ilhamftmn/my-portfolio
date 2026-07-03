import { useState } from "react"
import Navbar from "../components/Navbar";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";


import {
    FaArrowLeft,
    FaCheckCircle,
    FaLaptopCode,
} from "react-icons/fa";

function ProjectDetail() {

    const { slug } = useParams();

    const project = projects.find(
        item => item.slug === slug
    );

    const [selectedImage, setSelectedImage] = useState(
        project?.screenshots?.[0]
    );

    if (!project) {
        return (
            <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">

                Project tidak ditemukan

            </div>
        );
    }

    return (
        <>
            <Navbar />


            <section className="bg-slate-950 min-h-screen py-20 px-6">

                <div className="max-w-5xl mx-auto">

                    <Link
                        to="/"
                        className="inline-flex mt-4 items-center gap-1 text-cyan-400 hover:gap-3 transition-all"
                    >

                        <FaArrowLeft />

                        Back

                    </Link>

                    {/* Screenshot Gallery */}

                    <div className="mt-10">

                        <img
                            src={selectedImage.image}
                            alt={selectedImage.title}
                            className="w-full h-[500px] object-contain bg-slate-900 rounded-3xl border border-slate-800"
                        />

                        <p className="text-center text-slate-400 mt-3">
                            {selectedImage.title}
                        </p>

                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">

                        {project.screenshots.map((shot) => (

                            <button
                                key={shot.title}
                                onClick={() => setSelectedImage(shot)}
                                className={`rounded-xl overflow-hidden border-2 transition-all duration-300

      ${selectedImage.title === shot.title
                                        ? "border-cyan-400"
                                        : "border-slate-800 hover:border-cyan-500"
                                    }`}
                            >

                                <img
                                    src={shot.image}
                                    alt={shot.title}
                                    className="h-28 w-full object-cover"
                                />

                            </button>

                        ))}

                    </div>

                    <h1 className="text-5xl font-black text-white mt-10">

                        {project.title}

                    </h1>

                    <p className="text-cyan-400 mt-3">

                        {project.role}

                    </p>

                    <p className="text-slate-300 leading-8 mt-8">

                        {project.overview}

                    </p>

                    <div className="flex flex-wrap gap-3 mt-10">

                        {project.tech.map(item => (

                            <span
                                key={item}
                                className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-cyan-400"
                            >

                                {item}

                            </span>

                        ))}

                    </div>

                    <div className="mt-16">

                        <h2 className="text-3xl font-bold text-white flex items-center gap-3">

                            <FaLaptopCode />

                            Responsibilities

                        </h2>

                        <div className="space-y-5 mt-8">

                            {project.responsibilities.map(item => (

                                <div
                                    key={item}
                                    className="flex gap-4 items-start bg-slate-900 border border-slate-800 rounded-xl p-5"
                                >

                                    <FaCheckCircle
                                        className="text-cyan-400 mt-1"
                                    />

                                    <p className="text-slate-300">

                                        {item}

                                    </p>

                                </div>

                            ))}

                        </div>

                    </div>

                    <div className="mt-16">

                        <h2 className="text-3xl font-bold text-white">

                            Key Kontributions

                        </h2>

                        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mt-6">

                            <p className="text-slate-300 leading-8">

                                {project.key_contributions}

                            </p>

                        </div>

                    </div>

                </div>

            </section>
        </>

    );

}

export default ProjectDetail;