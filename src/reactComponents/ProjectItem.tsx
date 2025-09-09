import type { PropsWithChildren } from "react";

export function ProjectItem({ children, ...rest }: PropsWithChildren<unknown>) {
    return (
        <div className="project" {...rest}>
            {children}
        </div>
    );
}