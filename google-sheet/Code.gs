/**
 * Tech app Universe — customer form to Google Sheet.
 *
 * Paste this into the sheet's script editor (Extensions > Apps Script), then
 * Deploy > New deployment > Web app, "Execute as: Me", "Who has access: Anyone".
 * Copy the web app URL into GOOGLE_SHEET_WEBHOOK_URL in .env.local.
 *
 * SECRET is optional. If you set it, put the same value in GOOGLE_SHEET_SECRET
 * so that only your website can add rows.
 */
const SECRET = "";

const HEADERS = ["Received", "Name", "Company", "Email", "Mobile", "Service", "Message"];

// keep text as text: stops "=..." being run as a formula and "+91..." being read as a number
const text = (v) => {
  const s = String(v == null ? "" : v);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
};

function doPost(e) {
  const out = (obj) => ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
  try {
    const d = JSON.parse(e.postData.contents);
    if (SECRET && d.secret !== SECRET) return out({ ok: false, error: "unauthorised" });

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.setFrozenRows(1);
    }
    sheet.appendRow([new Date(), text(d.name), text(d.company), text(d.email), text(d.phone), text(d.service), text(d.message)]);
    return out({ ok: true });
  } catch (err) {
    return out({ ok: false, error: String(err) });
  }
}
