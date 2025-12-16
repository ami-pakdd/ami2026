import PAKDD2026Block from "@/components/PAKDD2026Block";

export default function SubmissionSection() {
  const SUBMISSION_LINK = "https://cmt3.research.microsoft.com/AMI2026";

  const sections = [
    {
      title: "Submission System",
      content: (
        <>
          All papers must be electronically submitted via the official Microsoft CMT portal:{" "}
          <a
            href={SUBMISSION_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ctu-blue hover:text-ctu-cyan"
          >
            {SUBMISSION_LINK}
          </a>
        </>
      ),
    },
    {
      title: "How to Submit",
      content: (
        <>
          Authors must create a CMT account and upload their anonymized PDF manuscript
          following the Springer LNCS/LNAI template. Detailed submission instructions are
          available here:{" "}
          <a
            href="https://cmt3.research.microsoft.com/docs/help/author/author-submission-form.html"
            target="_blank"
            className="text-ctu-blue hover:text-ctu-cyan"
          >
            https://cmt3.research.microsoft.com/docs/help/author/author-submission-form.html
          </a>
        </>
      ),
    },

    {
      title: "Acknowledgment",
      content: (
        <>
          The Microsoft CMT service was used for managing the peer-reviewing process for
          this conference. This service was provided for free by Microsoft and they bore
          all expenses, including costs for Azure cloud services as well as for software
          development and support.
        </>
      ),
    },
    {
      title: "Author Kit",
      content: (
        <>
          Authors must follow the Springer LNCS/LNAI manuscript guidelines.
          Download the Author Kit here:{" "}
          <a
            href="https://pakdd2026.org/authors-kit"
            target="_blank"
            className="text-ctu-blue hover:text-ctu-cyan"
          >
            https://pakdd2026.org/authors-kit
          </a>
        </>
      ),
    },

    {
      title: "Paper Format Requirements",
      content: (
        <>
          Submitted papers must be written in English and include an abstract of no more
          than 200 words.
          <ul className="list-disc ml-6 mt-2">
            <li>Long papers: <strong>8–12 pages</strong></li>
            <li>Short papers: <strong>4–6 pages</strong></li>
            <li>Demo papers: <strong>2–4 pages</strong></li>
          </ul>
          Page limits include references and appendices.
        </>
      ),
    },

    {
      title: "Review Process",
      content:
        "All submissions will undergo double-blind peer review based on originality, technical quality, relevance, significance, and clarity.",
    },
    {
      title: "Registration Requirement",
      content:
        "For each accepted paper, at least one author must register, attend the workshop, and present the paper in person.",
    },
    {
      title: "Publication",
      content: (
        <>
          Accepted papers will be published with Springer as part of the PAKDD 2026
          workshop proceedings.
          <br />
          Additional details on publication will be shared after the submission deadline.
        </>
      ),
    },
    // {
    //   title: "Camera-Ready Instructions",
    //   content: (
    //     <>
    //       Final accepted papers must follow the camera-ready guidelines provided by PAKDD 2026:{" "}
    //       <a
    //         href="https://pakdd2026.org/camera-ready/workshop"
    //         target="_blank"
    //         className="text-ctu-blue hover:text-ctu-cyan"
    //       >
    //         https://pakdd2026.org/camera-ready/workshop
    //       </a>
    //     </>
    //   ),
    // },
  ];

  return (
    <section id="submission" className="mb-20 scroll-mt-24">

      <h2 className="text-3xl font-display font-bold mb-10 text-ctu-blue text-center">
        Submission Guidelines
      </h2>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl border border-ctu-blue/20 shadow-sm">
        <div className="space-y-8">
          {sections.map((item, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-bold text-ctu-blue mb-2">{item.title}</h3>
              <div className="text-gray-800 leading-relaxed">{item.content}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={SUBMISSION_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block px-8 py-3 rounded-xl
              bg-ctu-blue text-white font-semibold
              hover:bg-ctu-cyan transition-all
            "
          >
            Submit Your Paper
          </a>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-10 bg-ctu-blue/5 p-6 rounded-xl border-l-4 border-ctu-blue">
        <p className="text-ctu-blue font-semibold text-lg mb-2">
          Important Notes
        </p>
        <ul className="space-y-2 text-gray-800">
          <li>• At least one author must present the accepted paper in person.</li>
          <li>• Papers that exceed the page limit will be desk-rejected.</li>
          <li>• Submissions violating anonymity rules will be rejected.</li>
          <li>• All deadlines follow 23:59 PST (UTC−8).</li>
        </ul>
      </div>
    </section>
  );
}
