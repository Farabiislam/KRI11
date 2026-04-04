import Hero from '../components/hero';
import About from '../components/about';
import Experience from '../components/experience';
import Projects from '../components/projects';
import Articles from '../components/articles';
import Contact from '../components/contact';
import CompetitiveProgramming from '@/components/CompetitiveProgramming';
//import Navigation from '../components/navigation';
export default async function Portfolio() {
  return (
    <div className="bg-[#222222] text-white font-mono ">
      {/* <Navigation /> */}
      <Hero />
      <About />
      <CompetitiveProgramming />
      {/* <Experience /> */}
      <Projects />
      <Articles />
      <Contact />
    </div>
  );
}
