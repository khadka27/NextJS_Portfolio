import AboutMeTable from "./AboutMeTable";
import AnimatedSection from "./AnimatedSection";

function About() {
  return (
    <div
      id="about"
      className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-900 py-10"
    >
      <main className="p-8">
        <section className="max-w-4xl mx-auto ">
          <AnimatedSection />
          <AboutMeTable />
        </section>
      </main>
    </div>
  );
}
export default About;
