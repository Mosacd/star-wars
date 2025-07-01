import type { CharacterResponse } from "@/types";

export const fetchCharacterByName = async (name: string) => {
  const response = await fetch(`https://swapi.py4e.com/api/people/?search=${name}`);
  if (!response.ok) throw new Error("Failed to fetch character data");
  const json: CharacterResponse = await response.json();
  console.log(json.results[0])
  return json.results[0] ?? null;
};

export const fetchCharacters = async (
  page: number,
  searchTerm: string,
  signal?: AbortSignal
) => {
  const baseUrl = `https://swapi.py4e.com/api/people/`;
  const params = new URLSearchParams();

  if (searchTerm) params.set("search", searchTerm);
  params.set("page", page.toString());

  const url = `${baseUrl}?${params.toString()}`;

  const res = await fetch(url, { signal });
  if (!res.ok) throw new Error("Failed to fetch characters");

  const data: CharacterResponse = await res.json();
  return data;
};

export async function fetchMultipleResources<T>(urls: string[]): Promise<T[]> {
  const responses = await Promise.all(urls.map((url) => fetch(url)));
  const data = await Promise.all(responses.map((res) => res.json()));
  return data;
}

