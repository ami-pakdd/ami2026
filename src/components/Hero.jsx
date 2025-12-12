export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-white to-ctu-blue/5"
    >
      {/* Decorative gradient blob */}
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-ctu-blue/20 rounded-full blur-3xl"></div>
      <div className="absolute top-40 -right-20 w-[350px] h-[350px] bg-ctu-cyan/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-8 py-24">
        <div className="max-w-4xl">

          <h1 className="text-4xl md:text-6xl font-display font-bold text-ctu-blue mb-4">
            AMI-PAKDD 2026
          </h1>

          <p className="text-xl md:text-2xl font-semibold text-ctu-blue/90">
            Workshop on Autonomous Machine Intelligence
          </p>

          <p className="text-xl md:text-2xl font-semibold text-ctu-blue/90 mb-6">
            From Theory to Practice
          </p>

          <div className="space-y-1 text-lg text-ctu-blue/80 font-medium">
            <p>June 9, 2026 • Hong Kong, China</p>
            <p>Co-located with PAKDD 2026</p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex gap-4">
            <a
              href="#submission"
              className="px-6 py-3 bg-ctu-blue text-white font-semibold rounded-xl hover:bg-ctu-cyan transition-all"
            >
              Submit Paper
            </a>

            <a
              href="#topics"
              className="px-6 py-3 border border-ctu-blue text-ctu-blue font-semibold rounded-xl hover:bg-ctu-blue hover:text-white transition-all"
            >
              View Topics
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
