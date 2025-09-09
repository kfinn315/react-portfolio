import sunburst from '../assets/sunburst.png';
import { ProjectItem } from "./ProjectItem";
import "../components/projects.css";

export const Projects = () => <div className='projects'>
    <ProjectItem>
        <a href="https://kfinn315.github.io/ReactSunburst"><img src={sunburst} width="300"
            height="300" alt="Sunburst app" className="project-screenshot" />
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
    </ProjectItem>
</div>;
