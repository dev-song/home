import VersionToggle from '@/components/shared/VersionToggle';

export default function InteractivePortfolio() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <nav className="fixed top-4 right-4 z-50">
        <VersionToggle />
      </nav>

      <main className="container mx-auto px-4 py-8">
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-green-400">
              &gt; INTERACTIVE_PORTFOLIO.EXE
            </h1>
            <p className="text-xl mb-8">3-Stage Immersive Experience</p>
            <div className="max-w-2xl mx-auto text-left">
              <p className="mb-4">$ Loading interactive experience...</p>
              <p className="mb-4">$ Initializing 3-stage journey:</p>
              <p className="mb-2 ml-4">├── Stage 1: JSON Data Display</p>
              <p className="mb-2 ml-4">├── Stage 2: CLI Terminal Experience</p>
              <p className="mb-4 ml-4">└── Stage 3: 3D Human Figure Visualization</p>
              <p className="text-green-300">$ Ready to begin interactive portfolio journey.</p>
            </div>

            <div className="mt-8">
              <button className="border border-green-400 px-6 py-2 rounded hover:bg-green-400 hover:text-black transition-colors">
                START EXPERIENCE
              </button>
            </div>
          </div>
        </section>

        {/* Placeholder for 3-stage experience */}
        <section className="py-16">
          <div className="text-center">
            <p className="text-green-300 mb-4">$ Interactive stages will be implemented here</p>
            <p className="text-gray-500">
              Stage 1: JSON Editor → Stage 2: Mathematical ASCII 3D → Stage 3: WebGL 3D Human
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}