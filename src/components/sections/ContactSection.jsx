export default function ContactSection() {
  return (
    <section id="contact" className="mb-20 scroll-mt-24">

      {/* Title */}
      <h2 className="text-3xl font-display font-bold mb-10 text-ctu-blue text-center">
        Contact Information
      </h2>

      {/* Box của Contact */}
      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl border border-ctu-blue/20 shadow-sm text-center">
        <p className="text-lg text-gray-800 mb-3">
          For inquiries or additional information, please contact:
        </p>

        <p className="text-xl font-bold text-ctu-blue mb-1">
          Prof. Hiep Xuan Huynh
        </p>

        <a
          href="mailto:hxhiep@ctu.edu.vn"
          className="text-lg text-ctu-blue hover:text-ctu-cyan transition-colors"
        >
          hxhiep@ctu.edu.vn
        </a>

        <div className="mt-6 text-sm text-gray-700">
          <p>Workshop Website:</p>
          <a
            href="https://ami-pakdd.github.io/ami2026"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ctu-blue hover:text-ctu-cyan"
          >
            https://ami-pakdd.github.io/ami2026
          </a>
        </div>
      </div>
    </section>
  );
}
