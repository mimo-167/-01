import fs from "node:fs";
import path from "node:path";
import PDFDocument from "pdfkit";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";
import { createCanvas } from "@napi-rs/canvas";

const root = process.cwd();
const outDir = path.join(root, "output", "pdf");
const previewDir = path.join(root, "tmp", "pdfs", "resume-preview");
const outFile = path.join(outDir, "resume-zhu-mo.pdf");
fs.mkdirSync(outDir, { recursive: true });
fs.rmSync(previewDir, { recursive: true, force: true });
fs.mkdirSync(previewDir, { recursive: true });

const doc = new PDFDocument({ size: "A4", margins: { top: 48, left: 52, right: 52, bottom: 48 }, info: { Title: "朱墨 - 女性向游戏文案与运营策划简历", Author: "朱墨" } });
const outputStream = fs.createWriteStream(outFile);
doc.pipe(outputStream);
doc.registerFont("CJK", "C:/Windows/Fonts/simhei.ttf");
doc.font("CJK");

const ink = "#171717", body = "#343430", gray = "#74746E", sage = "#DDE7C8", red = "#A4443D", paper = "#FFFDF8";
const pageW = 595.28;
function rule(y, color = ink, width = 1) { doc.moveTo(52, y).lineTo(pageW - 52, y).lineWidth(width).strokeColor(color).stroke(); }
function section(label, title, y) { doc.fillColor(red).fontSize(7.8).text(label, 52, y, { characterSpacing: 1.4 }); doc.fillColor(ink).fontSize(15).text(title, 145, y - 5); rule(y + 23, "#C7C4BC", .7); return y + 36; }
function item(title, meta, text, y) { doc.fillColor(ink).fontSize(11).text(title, 145, y, { width: 398 }); doc.fillColor(gray).fontSize(8.2).text(meta, 145, y + 18, { width: 398 }); doc.fillColor(body).fontSize(8.9).text(text, 145, y + 36, { width: 398, lineGap: 4 }); return doc.y + 14; }
function bullet(text, y) { doc.fillColor(red).circle(151, y + 5, 1.8).fill(); doc.fillColor(body).fontSize(8.7).text(text, 162, y, { width: 375, lineGap: 3 }); return doc.y + 5; }
function footer(number) { rule(770, "#C7C4BC", .6); doc.fillColor(gray).fontSize(7).text("ZHU MO / CREATIVE PORTFOLIO 2026", 52, 784, { lineBreak: false }); doc.text(String(number).padStart(2, "0"), 520, 784, { align: "right", width: 22, lineBreak: false }); }

doc.rect(0, 0, pageW, 842).fill(paper);
doc.fillColor(ink).fontSize(31).text("朱墨", 52, 52);
doc.fillColor(gray).fontSize(8).text("ZHU MO", 53, 91, { characterSpacing: 2.2 });
doc.fillColor(ink).fontSize(13).text("女性向游戏文案 / 运营策划方向", 145, 58);
doc.fillColor(body).fontSize(8.7).text("中山大学政治经济哲学专业在读", 145, 82);
doc.roundedRect(430, 52, 113, 44, 2).fill(sage);
doc.fillColor(ink).fontSize(8).text("求职方向", 444, 63); doc.fontSize(8.7).text("文案 / 运营策划", 444, 78);
rule(122, ink, 2.2);
let y = section("PROFILE", "个人简介", 146);
doc.fillColor(body).fontSize(9.2).text("关注女性向游戏中的角色、情绪、关系与玩家体验。拥有腾讯微信读书内容运营经历，并持续进行原创剧情创作、游戏分析与活动策划练习。希望把内容洞察与叙事能力应用到真正的玩家沟通中。", 145, y, { width: 398, lineGap: 4 });
y = doc.y + 22;
y = section("EDUCATION", "教育经历", y);
y = item("中山大学", "政治经济哲学专业 / 本科在读", "跨学科训练帮助我同时从叙事、用户选择与内容机制理解问题。", y);
y = section("EXPERIENCE", "实习经历", y);
y = item("腾讯微信读书 - 内容运营", "用户分析 / 账号定位 / 内容选题 / 文案创作 / 数据复盘", "负责 6 个不同内容赛道账号的运营，参与投放测试与流量分配，并形成稳定的内容生产和复盘流程。", y);
y = bullet("独立从 0 到 1 搭建重点账号，约半年达到 1.3 万粉。", y);
y = bullet("重点账号累计获赞 46 万。", y);
y = bullet("代表内容单篇最高曝光 48 万，单篇最高获赞 10 万。", y);
footer(1);

doc.addPage(); doc.rect(0, 0, pageW, 842).fill(paper);
doc.fillColor(ink).fontSize(20).text("项目、创作与能力", 52, 52);
doc.fillColor(gray).fontSize(7.5).text("PROJECTS / CREATION / SKILLS", 53, 82, { characterSpacing: 1.5 });
rule(108, ink, 2.2);
y = section("PROJECT 01", "女性向游戏活动策划", 134);
y = item("「来自明天的信」七日版本活动策划案", "个人独立练习 / 非商业项目", "围绕连续陪伴感，完成用户洞察、七日玩法、奖励数值、剧情文案、美术需求、站外传播与风险预案。", y);
y = section("PROJECT 02", "游戏分析与内容观察", y);
y = item("女性向游戏剧情与活动观察", "持续创作", "围绕角色塑造、潜台词、情绪曲线、轻玩法、陪伴感与玩家回访动机进行结构化分析，并提出兼顾体验与成本的优化方案。", y);
y = section("CREATION", "原创剧情内容", y);
y = item("原创剧情内容账号", "个人独立创作与运营 / 约 5000 粉丝", "持续进行人物设定、关系冲突、对白、悬念与短剧情创作，并依据评论反馈复盘角色辨识度和情绪抵达。", y);
y = section("SKILLS", "能力关键词", y);
const skills = ["剧情文案", "角色塑造", "活动策划", "账号定位", "内容选题", "数据复盘", "用户洞察", "人物访谈", "项目协作"];
let sx = 145, sy = y;
for (const skill of skills) { const w = 58; if (sx + w > 543) { sx = 145; sy += 28; } doc.roundedRect(sx, sy, w, 20, 10).lineWidth(.7).strokeColor(ink).stroke(); doc.fillColor(ink).fontSize(7.5).text(skill, sx, sy + 6, { width: w, align: "center" }); sx += w + 8; }
y = sy + 46;
y = section("CONTACT", "联系方式与到岗信息", y);
doc.fillColor(body).fontSize(8.8).text("GitHub: github.com/mimo-167", 145, y, { width: 398 });
doc.text("工作邮箱 / 所在城市 / 到岗时间 / 每周实习天数: 请在正式投递前补充", 145, y + 20, { width: 398 });
footer(2);
doc.end();

await new Promise((resolve, reject) => { outputStream.on("finish", resolve); outputStream.on("error", reject); });
const pdf = await getDocument({ data: new Uint8Array(fs.readFileSync(outFile)) }).promise;
for (let index = 1; index <= pdf.numPages; index++) {
  const page = await pdf.getPage(index);
  const viewport = page.getViewport({ scale: 1.6 });
  const canvas = createCanvas(Math.ceil(viewport.width), Math.ceil(viewport.height));
  const context = canvas.getContext("2d");
  context.fillStyle = "#FFFFFF";
  context.fillRect(0, 0, canvas.width, canvas.height);
  await page.render({ canvasContext: context, viewport }).promise;
  fs.writeFileSync(path.join(previewDir, `page-${index}.png`), canvas.toBuffer("image/png"));
}
console.log(outFile);
