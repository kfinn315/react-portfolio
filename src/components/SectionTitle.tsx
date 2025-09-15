export const SectionTitle = ({ name }: { name: string; }) => {
    const formattedName = name.toLowerCase().replace(' ', '');
    return <h2 id={"heading-" + formattedName} className="title--sm layout-section-title">
        {name}
    </h2>;
};
