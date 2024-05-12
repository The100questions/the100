import { json } from "@sveltejs/kit";

export const GET = async ({ fetch }) => {
  const resposne = await fetch(
    "https://run.mocky.io/v3/7766010c-dae2-46d6-b555-02e39e95859c"
  );
  const data = await resposne.json();
  return json(data);
};
