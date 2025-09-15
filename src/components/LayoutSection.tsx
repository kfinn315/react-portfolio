import type { HTMLAttributes, PropsWithChildren } from "react";

export function LayoutSection({ children, highlighted, short, ...rest }: PropsWithChildren<HTMLAttributes<HTMLElement> & { highlighted?: boolean, short?: boolean }>) {
    return <section className={`layout-section${highlighted ? " layout-section--highlighted" : ""}${short ? " layout-section--short" : ""}`} {...rest}>
        {children}
    </section >
}