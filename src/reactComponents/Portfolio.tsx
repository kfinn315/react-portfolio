import hero from '../assets/hero.jpeg';
import logo from '../assets/logo.svg';
import sunburst from '../assets/sunburst.png';
import { PortfolioItem } from './PortfolioItem';
import { LayoutSection } from './LayoutSectiion';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export function Portfolio() {
    const skillsTags: Record<string, string[]> = {
        "Languages": ["C#",
            "JavaScript",
            "Typescript"
        ],
        "Platforms": [".NET Core",
            "MySQL",
            "Google Cloud",
        ],
        "Frameworks": [
            "Kubernetes",
            "HTML",
            "CSS",
            "React"]
    }

    const AboutMe = () => <div className="layout-grid-half">
        <div>
            <p>
                A <b>Software Developer</b> living in North Carolina, with over a decade of experience creating web and mobile applications.
            </p>
            <p>
                I began my career building Android and iOS mobile apps, later transitioning to web apps with .NET Core.
            </p>
            <p>
                My expertise is in C#, Javascript/Typescript, HTML and CSS, MySQL, and ReactJS. I also have skills in Docker, Kubernetes and Google Cloud Platform.
            </p>
        </div>
        <div>
            <p>
                Curious to know more? Check-out my&nbsp;<a href="#projects">projects</a>
            </p>
        </div>
    </div>;

    const ProjectItems = () => <div>
        <PortfolioItem>
            <a href="https://kfinn315.github.io/ReactSunburst"><img src={sunburst} width="300"
                height="300" alt="Sunburst app" className="portfolio-screenshot" />
            </a>
            <div>
                <h3 className="title">React Sunburst</h3>
                <p className="text">
                    A Sunburst Chart built using:
                </p>
                <ul className='tags'>
                    <li className='tag'>Typescript</li>
                    <li className='tag'>React</li>
                    <li className='tag'>D3.js</li>
                </ul>
                <a href="https://github.com/kfinn315/ReactSunburst" className="btn btn--line"
                    target="_blank">Repository</a>
                <a href="https://kfinn315.github.io/ReactSunburst" className="btn btn--line"
                    target="_blank">Demo</a>
            </div>
        </PortfolioItem>
    </div>;

    const Skills = () => <ul className='tag-groups'>{
        Object.entries(skillsTags).map(([name, items]) => {
            return <li className='tag-group'>
                <h3 className='title'>
                    {name}
                </h3>
                <ul className="tags">
                    {items.map((tag: string, index: number) => {
                        return <li key={index} className="tag">{tag}</li>
                    })}
                </ul>
            </li>
        })
    }
    </ul>

    const ContactSection = () => <div className="container">
        <div id="location" className='text--contact contact-cell contact-icon'><LocationOnOutlinedIcon className="text--vertical-bottom" /></div>
        <h3 className='title--contact-heading contact-heading text-left'>Location</h3>
        <p className="text--contact contact-cell text-left">North Carolina, USA</p>
        <div id="phone" className='text--contact contact-cell contact-icon'><LocalPhoneOutlinedIcon className="text--vertical-bottom" /></div>
        <h3 className='title--contact-heading contact-heading'>Phone</h3>
        <a className="text--contact contact-cell" href="tel:xxx-xxx-xxxx">xxx-xxx-xxxx</a>
        <h3 className='title--contact-heading contact-heading'>Drop your message</h3>
        <a className="text--contact contact-cell" href="email:email@address.com">email@address.com</a>
        <div id="email" className='text--contact contact-cell contact-icon'><DraftsOutlinedIcon className="text--vertical-bottom" /></div>
    </div>

    const Footer = () => <div className="side">
        <img src={logo} alt="Kevin Finn logo" width="45" height="43" />
        <p className="footer-text text--sm">
            &copy; 2025 Kevin Finn All rights reserved.
        </p>
    </div>;

    const IntroSection = () => <div className="container">
        <div id="hero">
            <img id="intro-hero" className="img img--circle img--transparent-border" src={hero}
                width="400" height="400" />
            <div></div>
        </div>
        <h1 id="title" className="title--lg title--intro">Kevin Finn</h1>
        <h2 id="subtitle" className="title--lg title--intro">Web Developer</h2>
        <h3 id="motto" className="title--secondary title--intro title--intro-md">
            Bring your ideas to life with
            <strong> modern technology</strong>.
        </h3>
    </div >;

    const Experience = () => <div>
        <p>
            AMPEL BioSolutions. Charlottesville, VA
        </p>
        <p>
            Hypur, Scottsdale, AZ
        </p>
    </div>

    return (<>
        <main>
            <div className="layout-section--highlighted layout-section--heading">
                <LayoutSection id="intro" className="layout-section " aria-describedby="intro-h1 intro-h2">
                    <IntroSection />
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
                    <ProjectItems />
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

const SectionTitle = ({ name }: { name: string }) => {
    const formattedName = name.toLowerCase().replace(' ', '');
    return <h2 id={"heading-" + formattedName} className="title--sm layout-section-title">
        {name}
    </h2>
}