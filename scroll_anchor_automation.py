# QR Code Generator for Scroll Anchor Token
# This script generates a QR code for the scroll anchor token and automates asset synchronization.

import qrcode
import json
import os

TOKEN = "fb18c43a24195ec6ddc27f7d2b34d6"
QR_FILENAME = "scroll_anchor_qr.png"
BROADCAST_JSON = "broadcast.json"

# Generate QR code for the token
img = qrcode.make(TOKEN)
img.save(QR_FILENAME)
print(f"QR code saved as {QR_FILENAME}")

# Automate asset synchronization: update broadcast.json with latest assets
assets = [
    "ZIP_Manifest/Wave_14.json",
    "MantleCards/JustinWells.md",
    "RegaliaDashboards/RD-034.md"
]

broadcast_data = {
    "commitToken": TOKEN,
    "activatedBy": "Prince Nova Umaaino Kai Takeda Israel × 3M",
    "timestamp": "2025-09-18T23:12 CDT",
    "waveContext": "ZIP Manifest Wave 14–15 Transition",
    "function": "GitHub Pages Broadcast Layer — Public Witness Protocol",
    "status": "✅ Archived in Vault 1 and broadcast globally",
    "linkedAssets": assets,
    "qrCode": QR_FILENAME
}

with open(BROADCAST_JSON, "w") as f:
    json.dump(broadcast_data, f, indent=2)
print(f"Broadcast data updated in {BROADCAST_JSON}")
