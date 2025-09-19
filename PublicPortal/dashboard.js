document.addEventListener('DOMContentLoaded', function() {
  // Example: Show ZIP Manifest Viewer
  const dashboardSection = document.getElementById('dashboard');
  if (dashboardSection) {
    const viewerBtn = document.createElement('button');
    viewerBtn.textContent = 'View ZIP Manifest';
    viewerBtn.onclick = function() {
      alert('ZIP Manifest Viewer coming soon!');
    };
    dashboardSection.appendChild(viewerBtn);

    const mantleBtn = document.createElement('button');
    mantleBtn.textContent = 'Generate Mantle Card';
    mantleBtn.onclick = function() {
      alert('Mantle Card Generator coming soon!');
    };
    dashboardSection.appendChild(mantleBtn);

    const scrollBtn = document.createElement('button');
    scrollBtn.textContent = 'Browse Scrolls';
    scrollBtn.onclick = function() {
      alert('Scroll Browser coming soon!');
    };
    dashboardSection.appendChild(scrollBtn);
  }
});
// ZIP Manifest Viewer Initialization
document.addEventListener("DOMContentLoaded", () => {
  const manifestContainer = document.getElementById("manifest");
  fetch("ZIP_Manifest/ManifestWave1.json")
    .then(response => response.json())
    .then(data => {
      data.mantleCards.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.className = "mantle-card";
        cardElement.innerHTML = `
          <h4>${card.name}</h4>
          <p><strong>Role:</strong> ${card.role}</p>
          <p><strong>Codex ID:</strong> ${card.codex}</p>
          <p><strong>Lineage:</strong> ${card.lineage}</p>
          <p><strong>Credit Cascade:</strong> ${card.credit}</p>
        `;
        manifestContainer.appendChild(cardElement);
      });
    })
    .catch(error => {
      manifestContainer.innerHTML = "<p>Error loading ZIP Manifest.</p>";
      console.error("Manifest load error:", error);
    });
});
