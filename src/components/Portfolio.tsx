import { LayoutSection } from './LayoutSection';
import { Skills } from './Skills';
import { SectionTitle } from './SectionTitle';
import { ContactSection } from './Contact';
import { Experience } from './Experience';
import { AboutMe } from './AboutMe';
import { Footer } from './Footer';
import { HeroSection } from './HeroSection';
import { Projects } from './Projects';
import { NavHeader } from './NavHeader';

export function Portfolio() {
    return (<>
        <nav>
            <NavHeader />
        </nav>
        <main>
            <LayoutSection highlighted heading id="intro" aria-describedby="intro-h1 intro-h2">
                <HeroSection />
            </LayoutSection>
            <LayoutSection highlighted short id="contact" aria-describedby="design">
                <ContactSection />
            </LayoutSection>
            {/* <div className="layout-section--highlighted layout-section--heading">
            </div> */}
            <LayoutSection id="about-me" aria-labelledby="heading-aboutme">
                <div className="container">
                    <SectionTitle name="About Me" />
                    <AboutMe name={"Kevin"} />
                </div>
            </LayoutSection>
            <LayoutSection id="projects" aria-labelledby="heading-projects">
                <div className="container">
                    <SectionTitle name="Projects" />
                    <Projects />
                </div>
            </LayoutSection>
            <LayoutSection id="skills" aria-labelledby="heading-skills">
                <div className="container">
                    <SectionTitle name="Skills" centered />
                    <Skills />
                </div>
            </LayoutSection>
            {/* <LayoutSection id="experience" aria-labelledby="heading-experience">
                <div className="container">
                    <SectionTitle name="Experience" centered />
                    <Experience />
                </div>
            </LayoutSection> */}
        </main>
        <footer>
            <div className="container">
                <div className="footer">
                    <Footer />

                </div>
            </div>
        </footer>
    </>);
}
