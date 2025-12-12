export default function OrganizersSection() {
  const organizers = [
    {
      initials: 'HXH',
      name: 'Prof. Hiep Xuan Huynh',
      degree: 'Ph.D. (HDR)',
      affiliation: 'Can Tho University, Vietnam',
      email: 'hxhiep@ctu.edu.vn',
    },
    {
      initials: 'FG',
      name: 'Prof. Fabrice Guillet',
      degree: 'Ph.D. (HDR)',
      affiliation: 'Nantes University, France',
    },
    {
      initials: 'AHP',
      name: 'A/Prof. Anh Hoang Pham',
      degree: 'Ph.D.',
      affiliation: 'VNU-HCM University of Technology, Vietnam',
    },
    {
      initials: 'NTT',
      name: 'A/Prof. Ngan Thi Tran',
      degree: 'Ph.D.',
      affiliation: 'VNU International School, Vietnam',
    },
  ];

  return (
    <section id="organizers" className="mb-20 scroll-mt-24">

      <h2 className="text-3xl font-display font-bold mb-10 text-ctu-blue text-center">
        Workshop Organizers
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {organizers.map((org, idx) => (
          <div
            key={idx}
            className="
              bg-white p-6 rounded-xl border border-ctu-blue/20
              shadow-sm hover:shadow-md transition-shadow text-center
            "
          >
            {/* Avatar */}
            <div
              className="
                w-20 h-20 mx-auto mb-4 rounded-full
                bg-gradient-to-br from-ctu-blue to-ctu-cyan
                flex items-center justify-center
                text-white text-xl font-bold
              "
            >
              {org.initials}
            </div>

            {/* Name */}
            <h3 className="text-lg font-bold text-ctu-blue">
              {org.name}
            </h3>

            <p className="text-sm text-gray-700 mt-1">{org.degree}</p>
            <p className="text-sm text-gray-700">{org.affiliation}</p>

            {org.email && (
              <a
                href={`mailto:${org.email}`}
                className="mt-2 inline-block text-sm text-ctu-blue hover:text-ctu-cyan transition-colors"
              >
                {org.email}
              </a>
            )}
          </div>
        ))}
      </div>

    </section>
  );
}
