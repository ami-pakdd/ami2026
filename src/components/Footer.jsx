export default function Footer() {
  return (
    <footer className="bg-white border-t border-ctu-blue/20 mt-20">
      <div className="container mx-auto py-10 px-4">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Left */}
          <div className="text-center md:text-left max-w-md">
            <p className="text-2xl font-bold text-ctu-blue mb-2">
              AMI-PAKDD 2026
            </p>
            <p className="text-ctu-blue/80 text-sm">
              Workshop on Autonomous Machine Intelligence: From Theory to Practice
            </p>
            <p className="text-ctu-blue/80 text-sm">
              June 9, 2026 • Hong Kong, China
            </p>
          </div>

          {/* Right */}
          <div className="text-center md:text-right max-w-md">
            <p className="text-ctu-blue/60 mb-1 text-sm">Part of</p>

            <a
              href="https://www.pakdd2026.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold text-ctu-blue hover:text-ctu-cyan transition-colors"
            >
              PAKDD 2026
            </a>

            <p className="text-ctu-blue/70 text-sm leading-snug mt-1">
              The 30th Pacific-Asia Conference on Knowledge<br />
              Discovery and Data Mining
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-4 border-t border-ctu-blue/20 text-center text-sm text-ctu-blue/60">
          <p>© 2026 AMI-PAKDD Workshop. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
