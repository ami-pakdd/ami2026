export default function PAKDD2026Block() {
  return (
    <div className="rounded-xl overflow-hidden border border-ctu-blue/20 shadow-md bg-white">
      <img
        src="pakdd2026-logo.png"
        alt="PAKDD 2026 Logo"
        className="w-full h-auto"
      />

      <div className="p-5 text-center bg-white">
        <h3 className="font-bold text-xl text-ctu-blue mb-1">
          PAKDD 2026
        </h3>
        <p className="text-gray-700 text-sm">Hong Kong • 9–12 June</p>

        <a
          href="https://www.pakdd2026.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-ctu-blue font-semibold hover:text-ctu-cyan transition-colors"
        >
          Visit PAKDD Website →
        </a>
      </div>
    </div>
  );
}
