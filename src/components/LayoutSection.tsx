import type { PropsWithChildren } from "react";

export function LayoutSection({ children, highlighted, short, ...rest }: PropsWithChildren<{ highlighted: boolean, short: boolean }>) {
    return <section className={`layout-section${highlighted ? " layout-section--highlighted" : ""}${short ? " layout-section--short" : ""}`} {...rest}>
        {children}
    </section >
}