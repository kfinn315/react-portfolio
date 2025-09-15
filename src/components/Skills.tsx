
export const Skills = () => {
    const skillsTags: Record<string, string[]> = {
        "Languages": ["C#",
            "JavaScript",
            "Typescript"
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
            "React"
        ]
    };
    return <ul className='tag-groups'>{Object.entries(skillsTags).map(([name, items]) => {
        return <li className='tag-group'>
            <h3 className='title'>
                {name}
            </h3>
            <ul className="tags">
                {items.map((tag: string, index: number) => {
                    return <li key={index} className="tag">{tag}</li>;
                })}
            </ul>
        </li>;
    })}
    </ul>;
};
