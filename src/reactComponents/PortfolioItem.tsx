import type { PropsWithChildren } from "react";

export function PortfolioItem({ children, ...rest }: PropsWithChildren<unknown>) {
    return (
        <div className="portfolio" {...rest}>
            {children}
        </div>
    );
}