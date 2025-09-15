export const SectionTitle = ({ name, centered = false }: { name: string; centered?: boolean }) => {
    const formattedName = name.toLowerCase().replace(' ', '');
    return <h2 id={"heading-" + formattedName} className={`title--sm layout-section-title ${centered ? "layout-section-title--center" : ""}`}>
        {name}
    </h2>;
};
