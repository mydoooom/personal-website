import { useQuery } from "@tanstack/react-query";

async function fetchCatGifUrl() {
  const url = `https://cataas.com/cat/gif?t=${Date.now()}`;

  // Make a HEAD request to verify the URL is valid
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch cat gif");
  }

  return url;
}

export function useCatGifQuery() {
  return useQuery({
    queryKey: ["cat"],
    queryFn: fetchCatGifUrl,
    staleTime: 0,
  });
}
