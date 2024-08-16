import AboutMeTable from "./AboutMeTable";
import AnimatedSection from "./AnimatedSection";

function About() {
  return (
    <div
      id="about"
      className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <main className="p-8">
        <section className="max-w-4xl mx-auto">
          <AnimatedSection />
          <AboutMeTable />
        </section>
      </main>
    </div>
  );
}
export default About;
