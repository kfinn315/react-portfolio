
export const AboutMe = ({ name }: { name: string }) => <div className="layout-grid-half">
    <div>
        <p>
            Hi! I'm <b>{name}</b>, a Frontend-focused Full Stack Developer with over 6 years of experience building scalable, user-friendly web applications.
        </p><p>
            I specialize in <b>React, JavaScript, and .NET Core</b>, creating responsive interfaces and integrating robust back-end systems. My work ranges from developing <b>data-driven platforms</b> for bioinformatics research to deploying enterprise-grade apps in the <b>cloud with Kubernetes and GCP</b>.
        </p><p>
            With a strong background in <b>REST APIs, performance optimization, and Agile collaboration</b>, I enjoy turning complex problems into clean, modern solutions that deliver real impact.
        </p><p>
            When I'm not coding, I'm exploring new technologies, sharpening my skills in <b>cloud and DevOps</b>, and working on side projects that bring fresh ideas to life.
        </p>
    </div>
    <div>
        <p>
            Curious to know more? Check-out my <a href="#projects"> projects</a>
        </p>
    </div>
</div>;
