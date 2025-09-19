/**
 * Live workflow: Integrate with Google Sheets to read manifest data and auto-push to GitHub
 * Google Apps Script (.gs)
 */

function runLiveVaultWorkflowFromSheet(sheetId, sheetName) {
  const sheet = SpreadsheetApp.openById(sheetId).getSheetByName(sheetName);
  const data = sheet.getDataRange().getValues();
  // Assume first row is headers
  const headers = data[0];
  const rows = data.slice(1);

  // Parse manifest from sheet rows
  const manifest = parseManifestFromRows(headers, rows);
  runLiveVaultWorkflow(manifest);
}

function parseManifestFromRows(headers, rows) {
  // Example: customize this to match your sheet structure
  const manifest = {
    manifestWave: '',
    timestamp: new Date().toISOString(),
    mantleCards: [],
    regaliaDashboards: []
  };
  rows.forEach(row => {
    const rowObj = {};
    headers.forEach((h, i) => rowObj[h] = row[i]);
    // Example logic: group by type
    if (rowObj.Type === 'MantleCard') {
      manifest.mantleCards.push({
        name: rowObj.Name,
        role: rowObj.Role,
        codex: rowObj.Codex,
        lineage: rowObj.Lineage,
        credit: rowObj.Credit
      });
      if (!manifest.manifestWave) manifest.manifestWave = rowObj.Wave;
    } else if (rowObj.Type === 'RegaliaDashboard') {
      manifest.regaliaDashboards.push({
        assignedTo: rowObj.AssignedTo,
        dashboardId: rowObj.DashboardId,
        assets: rowObj.Assets ? rowObj.Assets.split(',') : []
      });
    }
  });
  return manifest;
}

// Existing function from previous step
function runLiveVaultWorkflow(manifest) {
  // ...existing code...
}

function autoPushToGitHub(filename, content) {
  // ...existing code...
}
