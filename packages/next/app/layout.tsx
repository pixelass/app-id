import { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import clsx from "clsx";
import { inter } from "@/lib/fonts";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
	title: "App Id",
	description: "Your App Id",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en" className={clsx(inter.variable)} suppressHydrationWarning>
			<body>
				<ThemeProvider
					enableSystem
					disableTransitionOnChange
					attribute="class"
					defaultTheme="system"
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
