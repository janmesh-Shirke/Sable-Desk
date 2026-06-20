// Production entry point. Boots Next.js on the port provided by the hosting
// platform via the PORT environment variable (falls back to 3000 locally).
const { createServer } = require("http");
const next = require("next");

// Production by default; only run in dev mode when explicitly requested.
const dev = process.env.NODE_ENV === "development";
const hostname = process.env.HOST || "0.0.0.0";
const port = parseInt(process.env.PORT || "3000", 10);

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  // Let Next parse the request URL internally (avoids the deprecated url.parse).
  createServer((req, res) => handle(req, res)).listen(port, hostname, () => {
    // eslint-disable-next-line no-console
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
