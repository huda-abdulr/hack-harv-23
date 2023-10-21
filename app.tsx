function search() {
  const apiKey =
    "66e1104803ab9a5207e0543ecfb70ddccab2f5ef0c8b52d30a2f0c64ab9ae204"; // Replace with your Google API key
  const location = document.getElementById("location").value;
  const query = document.getElementById("query").value;
  // Make a request to the Google Custom Search API
  fetch(
    `https://www.googleapis.com/customsearch/v1?key=${apiKey}&q=${query}&location=${location}`
  )
    .then((response) => response.json())
    .then((data) => {
      // Process and display the search results
      const resultsDiv = document.getElementById("results");
      resultsDiv.innerHTML = "";

      if (data.items && data.items.length > 0) {
        data.items.forEach((item) => {
          const link = document.createElement("a");
          link.href = item.link;
          link.textContent = item.title;
          link.target = "_blank";
          resultsDiv.appendChild(link);

          const snippet = document.createElement("p");
          snippet.textContent = item.snippet;
          resultsDiv.appendChild(snippet);

          resultsDiv.appendChild(document.createElement("hr"));
        });
      } else {
        resultsDiv.textContent = "No results found.";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
