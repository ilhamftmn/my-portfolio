import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profile from "../data/profile";

function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 py-10">
            <div className="max-w-6xl mx-auto px-6">

                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    <div>

                        <h2 className="text-2xl font-bold text-white">
                            {profile.name}
                        </h2>

                        <p className="text-slate-400 mt-2">
                            {profile.role}
                        </p>

                    </div>

                    <div className="flex gap-6 text-2xl text-slate-400">

                        <a href={profile.github}
                            target="_blank">
                            <FaGithub />
                        </a>

                        <a href={profile.linkedin}
                            target="_blank">
                            <FaLinkedin />
                        </a>

                        <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
                            target="_blank"
                            rel="noopener noreferrer">
                            <FaEnvelope />
                        </a>

                    </div>

                </div>

                <p className="text-center text-slate-500 mt-10">
                    © 2026 {profile.name}. All rights reserved.
                </p>

            </div>
        </footer>
    );
}

export default Footer;