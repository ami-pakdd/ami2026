export default function OrganizersSection() {
  const organizers = [
    {
      avatar: 'hxhiep_avt.jpg',
      name: 'Prof. Hiep Xuan Huynh',
      degree: 'Ph.D. (HDR)',
      affiliation: 'Can Tho University, Vietnam',
      email: 'hxhiep@ctu.edu.vn',
    },
    {
      avatar: 'FG',
      name: 'Prof. Fabrice Guillet',
      degree: 'Ph.D. (HDR)',
      affiliation: 'Nantes University, France',
    },
    {
      avatar: 'anhpham_avt.jpg',
      name: 'A/Prof. Anh Hoang Pham',
      degree: 'Ph.D.',
      affiliation: 'VNU-HCM University of Technology, Vietnam',
    },
    {
      avatar: 'ngantt_avt.jpg',
      name: 'A/Prof. Ngan Thi Tran',
      degree: 'Ph.D.',
      affiliation: 'VNU International School, Vietnam',
    },
  ];

  const isImage = (value) => {
    return /\.(jpg|jpeg|png|webp|gif)$/i.test(value);
  };

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
                overflow-hidden
              "
            >
              {isImage(org.avatar) ? (
                <img
                  src={`${org.avatar}`}
                  alt={org.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span>{org.avatar}</span>
              )}
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
