export default function TopicsSection() {
  const topics = [
    {
      title: 'Theoretical Foundations',
      items: [
        'Self-supervised learning and world models',
        'Energy-based models and latent variables',
        'JEPA and predictive architectures',
        'Contrastive learning methods',
      ],
    },
    {
      title: 'System Architectures',
      items: [
        'Perception-planning-action cycles',
        'Multimodal fusion techniques',
        'Hierarchical representations',
        'Video understanding systems',
      ],
    },
    {
      title: 'Practical Applications',
      items: [
        'Autonomous robotics and embodied AI',
        'Autonomous vehicles and transportation',
        'Industrial automation',
        'Medical robotics and healthcare',
      ],
    },
  ];

  return (
    <section id="topics" className="mb-20 scroll-mt-24">

      <h2 className="text-3xl font-display font-bold mb-10 text-ctu-blue text-center">
        Topics of Interest
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {topics.map((topic, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl border border-ctu-blue/20 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-bold mb-4 text-ctu-blue">
              {topic.title}
            </h3>

            <ul className="space-y-2">
              {topic.items.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-start text-gray-800">
                  <span className="text-ctu-cyan mr-2">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </section>
  );
}
