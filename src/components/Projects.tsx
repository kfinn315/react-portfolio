import sunburst from '../assets/sunburst.png';
import "../styles/projects.css";

export const Projects = () => {

    return <div className='projects'>
        {sunburstProject}
        {ghostProject}
        {ghostProject}
        {ghostProject}
    </div>;
}

const sunburstProject = <button className='project-item hover-effect' onClick={() => { window.open("https://kfinn315.github.io/ReactSunburst", "_child"); }}>
    <img src={sunburst} width="300" height="300" alt="Sunburst app" className="project-screenshot" />
    <h3 className="title">React Sunburst</h3>
    <p className="text">
        A Sunburst Chart built using Typescript, React, D3.js.
    </p>
</button>;

const ghostProject = <div className='project-item'></div>;