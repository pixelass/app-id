import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
	return (
		<main>
			<Card className="w-[350px]">
				<CardHeader>
					<CardTitle>A Card</CardTitle>
					<CardDescription>Section your content</CardDescription>
				</CardHeader>
				<CardContent>
					<Input />
				</CardContent>
				<CardFooter className="flex justify-between">
					<Button variant="secondary" size="sm">
						Secondary
					</Button>
					<Button variant="default" size="sm">
						Default
					</Button>
				</CardFooter>
			</Card>
		</main>
	);
}
