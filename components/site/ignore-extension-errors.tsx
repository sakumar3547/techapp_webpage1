import Script from "next/script"

/**
 * Browser extensions run their own scripts inside the page, and when one of
 * them throws, the Next.js dev overlay reports it as if the site had failed
 * (for example "Minified React error #299" from an extension's embed_script.js).
 *
 * This stops errors that come from a browser extension, and none of this
 * site's own code, from reaching the overlay. Development only.
 */
const SOURCE = `
(function () {
  var EXT = /(chrome|moz|safari-web)-extension:\\/\\//;
  var fromExtension = function (file, err) {
    var stack = err && err.stack ? String(err.stack) : "";
    if (/_next\\//.test(stack) || /_next\\//.test(file || "")) return false;
    return EXT.test(file || "") || EXT.test(stack);
  };
  var swallow = function (e) { e.stopImmediatePropagation(); e.preventDefault(); };
  window.addEventListener("error", function (e) {
    if (fromExtension(e.filename, e.error)) swallow(e);
  }, true);
  window.addEventListener("unhandledrejection", function (e) {
    if (fromExtension("", e.reason)) swallow(e);
  }, true);
})();
`

export function IgnoreExtensionErrors() {
  if (process.env.NODE_ENV === "production") return null
  // beforeInteractive is allowed in the App Router's root layout, which is where this renders
  // eslint-disable-next-line @next/next/no-before-interactive-script-outside-document
  return <Script id="ignore-extension-errors" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: SOURCE }} />
}
