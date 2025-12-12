import PAKDD2026Block from "@/components/PAKDD2026Block";

export default function AboutSection() {
  const highlights = [
    'Invited keynote from leading experts in autonomous AI',
    'Industry panel on deployment challenges',
    'Interactive poster session for theory-practice discussions',
    'Best paper awards for theoretical and practical contributions',
    'Potential live demonstrations of autonomous systems'
  ];

  return (
    <section id="home" className="mb-20 scroll-mt-24">
      <div className="flex flex-col lg:flex-row gap-10">

        {/* Left: About the Workshop */}
        <div className="flex-1">

          <h2 className="text-3xl font-display font-bold mb-6 text-ctu-blue">
            About the Workshop
          </h2>

          <div className="space-y-4 text-lg leading-relaxed text-gray-800">
            <p>
              This workshop bridges the gap between theoretical advances and practical 
              implementations in Autonomous Machine Intelligence (AMI). Inspired by recent 
              breakthroughs including Meta's V-JEPA and Yann LeCun's vision of autonomous 
              intelligence, we bring together researchers and practitioners to discuss how 
              self-supervised learning, energy-based models, and predictive architectures 
              translate into deployable autonomous systems.
            </p>
            <p>
              AMI directly aligns with PAKDD's Theoretical Foundations and 
              Interdisciplinary Applications tracks. It demonstrates how autonomous systems 
              learn from data, extract actionable knowledge, and make decisions—core themes 
              of knowledge discovery.
            </p>
          </div>

          {/* Highlights box */}
          <div className="mt-8 p-6 bg-ctu-blue/10 border-l-4 border-ctu-blue rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-ctu-blue">
              Workshop Highlights
            </h3>

            <ul className="space-y-3">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-ctu-blue mr-2 font-bold">•</span>
                  <span className="text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Right: PAKDD Block */}
        <div className="lg:w-1/3 flex-shrink-0">
          <PAKDD2026Block />
        </div>

      </div>
    </section>
  );
}
