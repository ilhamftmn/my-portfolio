function Certificates() {

    const certificates = [
        {
            title: "Quality Assurance Automation Tester",
            issuer: "Kementerian Ketenagakerjaan Republik Indonesia (Kemnaker)",
            year: "2026"
        },
        {
            title: "Manual Testing",
            issuer: "MySkill",
            year: "2025"
        }
    ];

    return (

        <section className="bg-slate-900 py-24 px-6">

            <div className="max-w-6xl mx-auto">

                <p className="text-cyan-400 uppercase tracking-widest font-semibold">
                    Certificates
                </p>

                <h2 className="text-4xl font-bold text-white mt-3">
                    Courses & Certifications
                </h2>

                <div className="grid md:grid-cols-3 gap-6 mt-14">

                    {certificates.map((item, index) => (

                        <div
                            key={index}
                            className="bg-slate-800 rounded-2xl border border-slate-700 p-6 hover:border-cyan-400 transition"
                        >

                            <h3 className="text-xl font-semibold text-white">
                                {item.title}
                            </h3>

                            <p className="text-slate-400 mt-3">
                                {item.issuer}
                            </p>

                            <p className="text-cyan-400 mt-6">
                                {item.year}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    )

}

export default Certificates;