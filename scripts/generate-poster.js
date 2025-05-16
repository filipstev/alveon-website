import puppeteer from "puppeteer";
import path from "path";

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: "new",
    });
    const page = await browser.newPage();

    await page.setViewport({
      width: 1920,
      height: 1920,
      deviceScaleFactor: 2,
    });

    page.on("console", (msg) => console.log("Page log:", msg.text()));
    page.on("pageerror", (error) => console.error("Page error:", error));

    console.log("Navigating to page...");
    await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });

    // Configure model-viewer for transparency
    await page.evaluate(() => {
      // Get the model-viewer container
      const container = document.querySelector(".relative.w-full.h-full");
      if (container) {
        container.style.backgroundColor = "transparent";
      }

      // Configure model-viewer
      const modelViewer = document.querySelector("model-viewer");
      if (modelViewer) {
        // Remove all background and environment settings
        modelViewer.style.backgroundColor = "transparent";
        modelViewer.setAttribute("background-color", "transparent");
        modelViewer.setAttribute("environment-image", "");
        modelViewer.setAttribute("shadow-intensity", "0");
        modelViewer.setAttribute("exposure", "1");
        modelViewer.setAttribute("tone-mapping", "neutral");
        modelViewer.setAttribute("environment-image", "");
        modelViewer.setAttribute("skybox-image", "");
        modelViewer.setAttribute("environment-intensity", "0");
        modelViewer.setAttribute("shadow-softness", "0");
        modelViewer.setAttribute("shadow-intensity", "0");
        modelViewer.setAttribute("shadow-color", "transparent");

        // Force model-viewer to update
        modelViewer.style.display = "none";
        modelViewer.offsetHeight; // Force reflow
        modelViewer.style.display = "";
      }
    });

    console.log("Waiting for model-viewer to load...");
    await page.waitForSelector("model-viewer", { timeout: 60000 });

    console.log("Waiting for model to load...");
    await page.evaluate(() => {
      return new Promise((resolve, reject) => {
        const modelViewer = document.querySelector("model-viewer");
        if (!modelViewer) {
          reject("Model viewer not found");
          return;
        }

        if (modelViewer.loaded) {
          console.log("Model already loaded");
          resolve();
          return;
        }

        const timeout = setTimeout(() => {
          reject("Model loading timeout");
        }, 30000);

        modelViewer.addEventListener(
          "load",
          () => {
            console.log("Model load event received");
            clearTimeout(timeout);
            resolve();
          },
          { once: true }
        );

        modelViewer.addEventListener(
          "error",
          (event) => {
            console.error("Model error event received:", event.detail);
            clearTimeout(timeout);
            reject(`Model loading error: ${event.detail}`);
          },
          { once: true }
        );
      });
    });

    console.log("Model loaded, waiting for render...");
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const modelViewer = await page.$("model-viewer");
    if (!modelViewer) {
      throw new Error("Model viewer element not found");
    }

    console.log("Taking screenshot...");
    await modelViewer.screenshot({
      path: path.join(process.cwd(), "public", "models", "poster.png"),
      omitBackground: true,
      type: "png",
    });
    console.log("Screenshot saved as poster.png");

    await browser.close();
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
})();
