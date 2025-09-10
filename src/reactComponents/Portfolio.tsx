import { LayoutSection } from './LayoutSectiion';
import { Skills } from './Skills';
import { SectionTitle } from './SectionTitle';
import { ContactSection } from './Contact';
import { Experience } from './Experience';
import { AboutMe } from './AboutMe';
import { Footer } from './Footer';
import { HeroSection } from './HeroSection';
import { Projects } from './Projects';

export function Portfolio() {
    return (<>
        <main>
            <div className="layout-section--highlighted layout-section--heading">
                <LayoutSection id="intro" className="layout-section " aria-describedby="intro-h1 intro-h2">
                    <HeroSection />
                </LayoutSection>
                <LayoutSection id="contact" aria-describedby="design">
                    <ContactSection />
                </LayoutSection>
            </div>
            <LayoutSection id="about-me" aria-labelledby="heading-aboutme">
                <div className="container">
                    <SectionTitle name="About Me" />
                    <AboutMe />
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
                    <SectionTitle name="Skills" />
                    <Skills />
                </div>
            </LayoutSection>
            <LayoutSection id="experience" aria-labelledby="heading-experience">
                <div className="container">
                    <SectionTitle name="Experience" />
                    <Experience />
                </div>
            </LayoutSection>
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
