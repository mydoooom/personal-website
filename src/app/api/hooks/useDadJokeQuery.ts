import { useQuery } from "@tanstack/react-query";

async function fetchDadJoke() {
  return await (
    await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json", // This is crucial!
      },
    })
  ).json();
}

export function useDadJokeQuery() {
  return useQuery({
    queryKey: ["dad"],
    queryFn: fetchDadJoke,
  });
}
