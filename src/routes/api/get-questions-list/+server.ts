import { json } from "@sveltejs/kit";

export const GET = async ({ fetch, request }) => {
  const resposne = await fetch(
    "https://run.mocky.io/v3/70a2b0a0-4bbf-4a9e-a991-0b55ff1c9ba1"
  );
  const data = await resposne.json();
  return json(data);
};
