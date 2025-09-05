import hero from '../assets/hero.jpeg';
import logo from '../assets/logo.svg';
import sunburst from '../assets/sunburst.png';
import { PortfolioItem } from './PortfolioItem';
import { LayoutSection } from './LayoutSectiion';

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

    const aboutMe = <div className="layout-grid-half">
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

    const projectItems = <div>
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

    const skills = <ul className='tag-groups'>{
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

    const contactSection = <div className="container">
        <div id="design">
            <h3>Location</h3>
            <p className="contact-text-sm">North Carolina, USA</p>
        </div>
        <div id="phone">
            <h3>Phone</h3>
            <a className="contact-text-sm" href="tel:xxx-xxx-xxxx">xxx-xxx-xxxx</a>
        </div>
        <div id="email">
            <h3>Drop your message</h3>
            <a className="contact-text-sm" href="email:email@address.com">email@address.com</a>
        </div>
        <div id="icon"><img /></div>
    </div>

    const footer = <div className="side">
        <img src={logo} alt="Kevin Finn logo" width="45" height="43" />
        <p className="footer-text text--sm">
            &copy; 2025 Kevin Finn All rights reserved.
        </p>
    </div>;

    const introSection = <div className="container">
        <div className="intro-col1">
            <img id="intro-hero" className="img img--circle img--transparent-border" src={hero}
                width="400" height="400" />
            <div></div>
        </div>
        <div className="intro-col2">
            <h1 className="title--intro">Kevin Finn<br />Web Developer</h1>
            <h2 className="title--intro-md">
                Bringing your idea to life with&nbsp;
                <strong>modern technology</strong>.
            </h2>
        </div>
    </div>;

    const experience = <div>
        <p>
            AMPEL BioSolutions. Charlottesville, VA
        </p>
        <p>
            Hypur, Scottsdale, AZ
        </p>
    </div>

    return (<>
        <main>
            <div className="layout-section--highlighted">
                <LayoutSection id="intro" className="layout-section " aria-describedby="intro-h1 intro-h2">
                    {introSection}
                </LayoutSection>
                <LayoutSection id="contact" aria-describedby="design">
                    {contactSection}
                </LayoutSection>
            </div>
            <LayoutSection id="about-me" aria-labelledby="heading-aboutme">
                <div className="container">
                    <SectionTitle name="About Me" />
                    {aboutMe}
                </div>
            </LayoutSection>
            <LayoutSection id="projects" aria-labelledby="heading-projects">
                <div className="container">
                    <SectionTitle name="Projects" />
                    {projectItems}
                </div>
            </LayoutSection>
            <LayoutSection id="skills" aria-labelledby="heading-skills">
                <div className="container">
                    <SectionTitle name="Skills" />
                    {skills}
                </div>
            </LayoutSection>
            <LayoutSection id="experience" aria-labelledby="heading-experience">
                <div className="container">
                    <SectionTitle name="Experience" />
                    {experience}
                </div>
            </LayoutSection>
        </main>
        <footer>
            <div className="container">
                <div className="footer">
                    {footer}
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