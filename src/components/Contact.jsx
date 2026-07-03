import profile from "../data/profile";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 py-24 px-6"
    >
      <div className="max-w-3xl mx-auto text-center">

        <p className="text-cyan-400 uppercase tracking-widest font-semibold">
          Contact
        </p>

        <h2 className="text-4xl font-bold text-white mt-3">
          Let's Work Together
        </h2>

        <p className="text-slate-400 mt-8 leading-8">
          Saya terbuka untuk peluang kerja, kolaborasi maupun diskusi mengenai Quality Assurance dan Software Testing.
        </p>

        <div className="mt-10">

          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
            className="bg-cyan-500 text-black px-8 py-4 rounded-xl font-bold hover:bg-cyan-400 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Send Email
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;