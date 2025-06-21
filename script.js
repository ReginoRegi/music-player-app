document.getElementById("searchInput").addEventListener("input", function () {
  const query = this.value.trim();
  if (!query) return;

  fetch(`search.php?term=${encodeURIComponent(query)}`)
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("results");
      container.innerHTML = "";
      data.forEach(track => {
        container.innerHTML += `
          <div class="track">
            <img src="${track.cover_url}" width="60" />
            <strong>${track.title}</strong> - ${track.artist}<br>
            <audio controls src="${track.preview_url}"></audio>
          </div>
        `;
      });
    });
});
