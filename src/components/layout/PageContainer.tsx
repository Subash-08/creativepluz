import { cn } from "@/lib/utils";

interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    width?: "default" | "full" | "narrow";
}

export default function PageContainer({
    children,
    className,
    width = "default",
    ...props
}: PageContainerProps) {
    return (
        <div
            className={cn(
                "mx-auto px-4 sm:px-6 lg:px-8",
                width === "default" && "max-w-7xl",
                width === "narrow" && "max-w-4xl",
                width === "full" && "max-w-[1920px]",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
