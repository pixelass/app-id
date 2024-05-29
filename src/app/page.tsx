import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import clsx from "clsx";

export function tw([style]: TemplateStringsArray) {
	return style.replaceAll(/\s+/g, " ").trim();
}

function Button({
	children,
	type = "button",
	ref,
	className,
	...rest
}: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
	return (
		<button
			ref={ref}
			type={type}
			className={clsx(
				className,
				tw`
					py-2 px-4

					bg-gray-500 text-gray-50

					hover:bg-gray-600
					focus:bg-gray-600

					active:bg-gray-700
			`
			)}
			{...rest}
		>
			{children}
		</button>
	);
}

export default function Home() {
	return (
		<main>
			<Button>Click me</Button>
			<button>Click me</button>
		</main>
	);
}
