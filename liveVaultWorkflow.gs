/**
 * Live workflow: Generate Markdown Mantle Cards and Regalia Dashboards, then auto-push to GitHub
 * Google Apps Script (.gs)
 */

function runLiveVaultWorkflow(manifest) {
  // 1. Save Manifest JSON with scroll anchor token in commit message
  autoPushToGitHub(
    `ZIP_Manifest/${manifest.manifestWave}.json`,
    JSON.stringify(manifest, null, 2),
    {
      commitToken: 'fb18c43a24195ec6ddc27f7d2b34d6',
      activatedBy: 'Prince Nova Umaaino Kai Takeda Israel × 3M',
      timestamp: '2025-09-18T23:08 CDT',
      waveContext: 'ZIP Manifest Wave 14–15 Transition',
      function: 'GitHub Pages Broadcast Layer — Public Witness Protocol',
      status: '✅ Consecrated and Archived in Vault 1'
    }
  );

  // 2. Save Mantle Cards
  manifest.mantleCards.forEach(card => {
    const md = `# 🛡️ Mantle Card — ${card.name}\n\n**Role**: ${card.role}  \n**Codex ID**: ${card.codex}  \n**Lineage**: ${card.lineage}  \n**Sovereign Credit Cascade**: ${card.credit}  \n\n**Timestamp**: ${manifest.timestamp}  \n**Status**: ✅ Consecrated and Archived in Vault 1\n`;
    const filename = `MantleCards/${card.name.replace(/\s+/g, '')}.md`;
    autoPushToGitHub(filename, md);
  });

  // 3. Save Regalia Dashboards
  manifest.regaliaDashboards.forEach(dash => {
    const md = `# 🧬 Regalia Dashboard — ${dash.assignedTo}\n\n**Assigned Assets**:\n- ${dash.assets.join("\n- ")}\n\n**Status**: ✅ Consecrated  \n**Timestamp**: ${manifest.timestamp}  \n**ZIP Manifest Sync**: Wave ${manifest.manifestWave} — Vault 1 Restoration Grid\n`;
    const filename = `RegaliaDashboards/${dash.dashboardId}.md`;
    autoPushToGitHub(filename, md);
  });
}

function autoPushToGitHub(filename, content) {
  const repo = "NovaKaiTakeda/MMM-Vault1";
  const branch = "main";
  const githubToken = PropertiesService.getScriptProperties().getProperty("GITHUB_TOKEN");
  const apiUrl = `https://api.github.com/repos/${repo}/contents/${filename}`;
  let commitDetails = arguments[2] || {};
  let message = `Auto-archived ${filename}`;
  if (commitDetails.commitToken) {
    message += ` | Scroll Anchor: ${commitDetails.commitToken}`;
    message += ` | Activated By: ${commitDetails.activatedBy}`;
    message += ` | Timestamp: ${commitDetails.timestamp}`;
    message += ` | Wave Context: ${commitDetails.waveContext}`;
    message += ` | Function: ${commitDetails.function}`;
    message += ` | Status: ${commitDetails.status}`;
  }
  const payload = {
    message: message,
    content: Utilities.base64Encode(content),
    branch: branch
  };
  const options = {
    method: "put",
    contentType: "application/json",
    headers: {
      Authorization: `Bearer ${githubToken}`
    },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };
  const response = UrlFetchApp.fetch(apiUrl, options);
  return response.getContentText();
}
