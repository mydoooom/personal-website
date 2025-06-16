import { useQuery } from "@tanstack/react-query";

async function fetchChuckNorrisJoke() {
  return await (await fetch("https://api.chucknorris.io/jokes/random")).json();
}

export function useChuckNorrisJokeQuery() {
  return useQuery({
    queryKey: ["chuck_norris"],
    queryFn: fetchChuckNorrisJoke,
  });
}
