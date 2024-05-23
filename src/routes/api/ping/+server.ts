import { json } from "@sveltejs/kit";

export const GET = () => json({ message: "Hello World" });
