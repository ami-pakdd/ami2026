export default function SponsorsSection() {
  // Sponsor data (tạm thời rỗng — TBA)
  const sponsors = {
    organized: [
      {
        name: "PAKDD",
        url: "https://pakdd2026.org/",
        logo: "pakdd2026-logo.png",
      },
      {
        name: "Can Tho University",
        url: "https://www.ctu.edu.vn/",
        logo: "CTU_logo.png",        
      }
    ],
    partner: [
      {
        name: "Can Tho University",
        url: "https://www.ctu.edu.vn/",
        logo: "CTU_logo.png",
      },
      {
        name: "Nantes Université",
        url: "https://www.univ-nantes.fr/nantes-universite-accueil",
        logo: "Logotype_Nantes-U_noir-72dpi.png",
      },
      {
        name: "VNU-HCM University of Technology",
        url: "https://hcmut.edu.vn/en",
        logo: "01_logobachkhoasang.png",
      },
      {
        name: "VNU International School",
        url: "https://www.is.vnu.edu.vn/en/",
        logo: "VNU_IS_logo.png",
      }
    ],
    diamond: [
    ],
    gold: [
    ],
    silver: [
    ],
    bronze: [
    ],
    publication: [
      {
        name: "Springer",
        url: "https://www.springer.com/",
        logo: "springer.svg",
      }
    ]
  };

  const renderTier = (title, items) => (
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-center text-ctu-blue mb-4">
        {title}
      </h3>

      <div className="h-px w-full bg-ctu-blue/20 mb-6" />

      {items.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-10">
          {items.map((sp, idx) => (
            <a
              key={idx}
              href={sp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform hover:scale-105"
            >
              <img
                src={sp.logo}
                alt={sp.name}
                className="h-20 w-auto max-h-24 object-contain"
              />
            </a>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 italic">
          To be announced
        </p>
      )}
    </div>
  );

  return (
    <section
      id="sponsors"
      className="mb-20 scroll-mt-24"
    >
      {/* <h2 className="text-3xl font-bold text-center text-ctu-blue mb-12">
        Sponsors
      </h2> */}

      <div className="container mx-auto px-4 md:px-8">
        {renderTier("Organized By", sponsors.organized)}
        {renderTier("Official Partners", sponsors.partner)}
        {/* {renderTier("Diamond Sponsors", sponsors.diamond)}
        {renderTier("Gold Sponsors", sponsors.gold)}
        {renderTier("Silver Sponsors", sponsors.silver)}
        {renderTier("Bronze Sponsors", sponsors.bronze)} */}
        {renderTier("Publication", sponsors.publication)}
      </div>
    </section>
  );
}
