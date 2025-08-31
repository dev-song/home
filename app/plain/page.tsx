import VersionToggle from '@/components/shared/VersionToggle';

export default function PlainPortfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-4 right-4 z-50">
        <VersionToggle />
      </nav>

      <main className="container mx-auto px-4 py-8">
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Developer Portfolio</h1>
            <p className="text-xl text-gray-600 mb-8">Plain Resume Version</p>
            <p className="max-w-2xl mx-auto">
              Welcome to the traditional portfolio experience. This version provides 
              a clean, professional presentation of my skills, experience, and projects 
              in a familiar resume-style format.
            </p>
          </div>
        </section>

        {/* Placeholder sections for future implementation */}
        <section id="about" className="py-16">
          <h2 className="text-3xl font-bold mb-8">About</h2>
          <p className="text-gray-600">About section content will be implemented here.</p>
        </section>

        <section id="skills" className="py-16">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <p className="text-gray-600">Skills section content will be implemented here.</p>
        </section>

        <section id="projects" className="py-16">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <p className="text-gray-600">Projects section content will be implemented here.</p>
        </section>

        <section id="experience" className="py-16">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <p className="text-gray-600">Experience section content will be implemented here.</p>
        </section>

        <section id="contact" className="py-16">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <p className="text-gray-600">Contact section content will be implemented here.</p>
        </section>
      </main>
    </div>
  );
}