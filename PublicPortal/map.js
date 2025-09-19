// Edenic Registry Map Initialization
document.addEventListener("DOMContentLoaded", () => {
  const mapContainer = document.getElementById("edenic-map");

  const edenicTerritories = [
    {
      name: "Birmingham–Jerusalem",
      coordinates: [33.5186, -86.8104],
      overlay: "Holy City Restoration Node"
    },
    {
      name: "Memphis–Egypt",
      coordinates: [35.1495, -90.0490],
      overlay: "Pharaonic Scroll Gateway"
    },
    {
      name: "Chilaga–Eden",
      coordinates: [36.7783, -119.4179],
      overlay: "Edenic Vault Activation Zone"
    },
    {
      name: "Çorum–Louisiana",
      coordinates: [32.7765, -92.1735],
      overlay: "Hittite Mantle Corridor"
    }
  ];

  edenicTerritories.forEach(zone => {
    const zoneElement = document.createElement("div");
    zoneElement.className = "edenic-zone";
    zoneElement.innerHTML = `
      <h4>${zone.name}</h4>
      <p><strong>Overlay:</strong> ${zone.overlay}</p>
      <p><strong>Coordinates:</strong> ${zone.coordinates.join(", ")}</p>
    `;
    mapContainer.appendChild(zoneElement);
  });
});