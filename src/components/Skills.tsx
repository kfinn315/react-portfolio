export const Skills = () => {
    const skillsTags: Record<string, string[]> = {
        "Languages": [
            "C#",
            "JavaScript",
            "Typescript",
            "SQL"
        ],
        "Platforms": [
            ".NET Core",
            "MySQL",
            "Google Cloud",
        ],
        "Frameworks": [
            "Kubernetes",
            "HTML",
            "CSS",
            "React",
            "Git"
        ]
    };
    function classFor(category: string) {
        let className = "";
        switch (category) {
            case "Languages": className = "tag-language"; break;
            case "Platforms": className = "tag-platform"; break;
            case "Frameworks": className = "tag-framework"; break;
        }

        return className;
    }

    return <ul className='tags'>{Object.entries(skillsTags).map(([category, items]) => {
        return <>{items.map((tag: string) => {
            return <li key={tag} className={`tag tag--font hover-effect ${classFor(category)}`}>{tag}</li>;
        })}</>;
    })}
    </ul>;
};
