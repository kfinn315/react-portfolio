import hero from '../assets/hero.jpeg';
import "../styles/intro.css";

export const HeroSection = () => {
    const name = "Kevin Finn";
    const position = "Web Developer";

    return <div className="container">
        <div id="hero" className='intro-col1'>
            <img id="intro-hero" className="img img--circle img--transparent-border" src={hero}
                width="400" height="400" />
            <div></div>
        </div>
        <div className='intro-col2'>
            <h1 id="title" className="title--lg title--intro">{name}</h1>
            <h2 id="subtitle" className="title--lg title--intro">{position}</h2>
            <h3 id="motto" className="subtitle title--intro-md">
                Bring your ideas to life with
                <strong> modern technology</strong>.
            </h3>
        </div>
    </div >;
}