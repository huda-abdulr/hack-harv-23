import { getJson } from "serpapi";

export class SerpApiCaller {
  public async searchGoogle(query: string) {
    const json = getJson({
      engine: "google",
      api_key: '66e1104803ab9a5207e0543ecfb70ddccab2f5ef0c8b52d30a2f0c64ab9ae204',
      q: query,
    });
    return json;
  }
}

const caller = new SerpApiCaller();

// Instructions: run 'node serpapi/api.ts' to execute, 'tsc serpapi/api.ts' after changing code to create new .js executable
async function testSearch() {
  try {
    const result = await caller.searchGoogle("coffee");
    console.log(result['search_metadata']['status']);
  } catch (error) {
    console.error(error);
  }
}

testSearch();