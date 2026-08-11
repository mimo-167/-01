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
  assert.match(html, /比格大王在假装进步/);
  assert.match(html, /SHE进化论/);
  assert.match(html, /一颗栗子酥/);
  assert.match(html, /她也不爱说话/);
  assert.match(html, /正在书入中/);
  assert.match(html, /电子榨菜品鉴大王/);
  assert.match(html, /宝宝 其实你不喜欢边焦虑边玩手机的 对吗/);
  assert.match(html, /图片稍后补充/);
  assert.equal((html.match(/href="\/xiaohongshu\//g) ?? []).length, 12);
  assert.doesNotMatch(html, /href="https:\/\/www\.xiaohongshu\.com\/explore\//);
  assert.match(html, /src="\/portfolio\/xiaohongshu\/big-profile\.png"/);
  assert.match(html, /src="\/portfolio\/xiaohongshu\/big-performance\.jpg"/);
  assert.match(html, /aspect-ratio:1080 \/ 2414/);
  assert.match(html, /aspect-ratio:1638 \/ 476/);
  assert.match(html, /object-fit:contain/);
  assert.doesNotMatch(html, /\/_vinext\/image\?/);
  assert.match(html, /女性向文字作品/);
  assert.match(html, /NG：我是第一个被你这样对待的吗/);
  assert.match(html, /这种小三上位的才会最害怕小三啊/);
  assert.match(html, /GB为了拉拢你，天堂和地狱分别派出了天使和魅魔/);
  assert.match(html, /温柔到几乎无底线的小叔叔/);
  assert.doesNotMatch(html, /作品封面 \/ 代表截图|聊天记录 \/ 代表截图/);
  assert.match(html, /AI 塔罗在线占卜网站/);
  assert.match(html, /简历与联系方式/);
  assert.doesNotMatch(html, /Case Study|Coming Soon|游戏观察/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Your site is taking shape/);
});

test("opens every selected Xiaohongshu note inside the portfolio", async () => {
  const notes = [
    ["big-phone-anxiety", "边焦虑边玩手机", "10万+", "这不是你的错"],
    ["big-after-gaokao", "高考完就要做这些", "2.9万", "成为小时候想象中"],
    ["big-anti-anxiety", "反焦虑心法", "1.9万", "允许事情悬而未决"],
    ["big-interview-mindset", "面试心态", "8735", "自我探索的工作坊"],
    ["she-growth", "看着自己成长", "4863", "视频文件暂不上传"],
    ["chestnut-independent-girlfriend", "女朋友突然开始独立", "9770", "chestnut-independent-12.jpeg"],
    ["chestnut-game-return", "退游后", "2678", "chestnut-game-return-07.jpeg"],
    ["quiet-confession-letters", "告白信合集", "1.1万", "quiet-confession-06.webp"],
    ["reading-bankrupt-heir", "高富帅破产后", "2741", "我的帝王生涯"],
    ["reading-white-paper", "一张白纸价值10万", "5834", "看不见的收藏"],
    ["snack-xiha", "嘻哈硬刚酒桌骚扰", "1.2万", "snack-xiha-13.png"],
    ["snack-shuqi", "那些创伤一直在", "1.5万", "snack-shuqi-10.png"],
  ];

  for (const [noteId, title, likes, completeContentMarker] of notes) {
    const response = await render(`/xiaohongshu/${noteId}`);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, new RegExp(title));
    assert.match(html, new RegExp(likes.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.match(html, new RegExp(completeContentMarker.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.match(html, /FULL CAPTION/);
    assert.match(html, /点赞/);
    assert.match(html, /收藏/);
    assert.match(html, /评论/);
    assert.match(html, /返回小红书作品/);
  }

  const linkedNote = await render("/xiaohongshu/big-phone-anxiety");
  const linkedNoteHtml = await linkedNote.text();
  assert.match(linkedNoteHtml, /前往小红书查看原笔记/);
  const galleryNote = await render("/xiaohongshu/snack-xiha");
  assert.match(await galleryNote.text(), /object-fit:contain/);
});

test("renders the supplied women-oriented writing as readable text", async () => {
  const works = [
    ["/women-writing/ng-am-i-the-first", "NG：我是第一个被你这样对待的吗", "哪怕再疼痛再难耐"],
    ["/women-writing/afraid-of-the-other-woman", "这种小三上位的才会最害怕小三啊", "这可是他勾引你的资本"],
    ["/women-writing/angel-and-demon", "GB为了拉拢你，天堂和地狱分别派出了天使和魅魔", "你快噶了"],
    ["/women-writing/gentle-uncle-1", "温柔到几乎无底线的小叔叔", "门外下起了雨"],
  ];

  for (const [pathname, title, excerpt] of works) {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, new RegExp(title));
    assert.match(html, new RegExp(excerpt));
    assert.match(html, /返回文字作品/);
  }
});

test("ships editable content and downloadable artifacts", async () => {
  const packageJson = await readFile(new URL("../package.json", import.meta.url), "utf8");
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await Promise.all([
    access(new URL("../content/writing/rainy-night-platform.md", import.meta.url)),
    access(new URL("../content/analysis/how-romantic-scene-works.md", import.meta.url)),
    access(new URL("../content/projects/letters-from-tomorrow.md", import.meta.url)),
    access(new URL("../content/accounts/big-dog-reading-account.md", import.meta.url)),
    access(new URL("../作品集/女性向文本创作/同人文/NG：我是第一个被你这样对待的吗.txt", import.meta.url)),
    access(new URL("../作品集/女性向文本创作/同人文/这种小三上位的才会最害怕小三啊.txt", import.meta.url)),
    access(new URL("../作品集/女性向文本创作/原创/【GB】为了拉拢你，天堂和地狱分别派出了天使和魅魔.txt", import.meta.url)),
    access(new URL("../作品集/女性向文本创作/原创/GB温柔到几乎无底线的小叔叔1.txt", import.meta.url)),
    access(new URL("../public/resume-zhu-mo.pdf", import.meta.url)),
    access(new URL("../public/og.png", import.meta.url)),
  ]);
  await assert.rejects(access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)));
});
