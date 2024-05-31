import { cn } from "@/lib/utils";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export type CommonProperties<E = HTMLDivElement> = DetailedHTMLProps<HTMLAttributes<E>, E>;

export function Card({ className, ref, ...rest }: CommonProperties) {
	return (
		<div
			ref={ref}
			className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}
			{...rest}
		/>
	);
}

export function CardHeader({ className, ref, ...rest }: CommonProperties) {
	return (
		<header ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...rest} />
	);
}

export function CardTitle({ className, ref, ...rest }: CommonProperties<HTMLParagraphElement>) {
	return (
		<h3
			ref={ref}
			className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
			{...rest}
		/>
	);
}

export function CardDescription({
	className,
	ref,
	...rest
}: CommonProperties<HTMLParagraphElement>) {
	return <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...rest} />;
}

export function CardContent({ className, ref, ...rest }: CommonProperties) {
	return <div ref={ref} className={cn("p-6 pt-0", className)} {...rest} />;
}

export function CardFooter({ className, ref, ...rest }: CommonProperties) {
	return <footer ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...rest} />;
}
