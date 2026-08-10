import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the finished portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /PERSONAL PORTFOLIO/);
  assert.match(html, /朱墨/);
  assert.match(html, /Momo/);
  assert.match(html, /1\.3W\+/);
  assert.match(html, /小红书作品/);
  assert.match(html, /女性向文字作品/);
  assert.match(html, /AI 塔罗在线占卜网站/);
  assert.match(html, /简历与联系方式/);
  assert.doesNotMatch(html, /Case Study|Coming Soon|游戏观察/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Your site is taking shape/);
});

test("ships editable content and downloadable artifacts", async () => {
  const packageJson = await readFile(new URL("../package.json", import.meta.url), "utf8");
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await Promise.all([
    access(new URL("../content/writing/rainy-night-platform.md", import.meta.url)),
    access(new URL("../content/analysis/how-romantic-scene-works.md", import.meta.url)),
    access(new URL("../content/projects/letters-from-tomorrow.md", import.meta.url)),
    access(new URL("../content/accounts/big-dog-reading-account.md", import.meta.url)),
    access(new URL("../public/resume-zhu-mo.pdf", import.meta.url)),
    access(new URL("../public/og.png", import.meta.url)),
  ]);
  await assert.rejects(access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)));
});
