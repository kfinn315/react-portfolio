import type { PropsWithChildren } from "react";

export function LayoutSection({ children, ...rest }: PropsWithChildren<unknown>) {
    return <section className="layout-section" {...rest}>
        {children}
    </section>
}