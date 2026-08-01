import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailShell } from "../../components/Sections";
import { writings } from "../../data";

export function generateStaticParams() { return writings.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const work = writings.find((item) => item.slug === slug); return work ? { title: work.title, description: work.summary } : {}; }

export default async function WritingDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const work = writings.find((item) => item.slug === slug); if (!work) notFound();
  if (slug === "rainy-night-platform") return <DetailShell work={work}><h2 id="background">创作说明</h2><p>这篇短篇从一个很小的命题开始：两个人都已经学会体面地告别，却在真正分别前，发现自己仍然期待对方挽留。它重点练习不直接陈述情绪，让人物的动作、停顿与答非所问承担表达。</p><blockquote>“车还有三分钟。”她看着电子屏说。<br />“嗯。”他把伞往她那边偏了一点，“够你再想一次。”</blockquote><h2 id="main-content">正文节选</h2><p>雨从站台檐口落下来，像一排没有拉严的帘子。林澄在黄线后站定，鞋尖碰到一片被风吹进来的水。她没有退。</p><p>周叙把那只旧帆布袋递给她。袋口露出半本书，是她三年前借给他的那一本。书页边缘已经发软，夹着一张便利店小票。</p><p>“终于想起来还我了？”她问。</p><p>“一直记得。”他说完，又像觉得这句话太重，补了一句，“只是没找到合适的快递盒。”</p><p>她笑了一下。广播提醒末班车即将进站。铁轨尽头有光靠近，风先一步掀起她的衣角。</p><p>“林澄。”他叫她，声音被进站声压得很低，“那张票别扔。”</p><p>她低头抽出小票。背面只有一行字：<em>如果你仍然愿意，明晚七点，我在旧书店等你。</em></p><p>车门打开。她没有上车。</p><h2 id="review">创作复盘</h2><h3>人物核心矛盾</h3><p>两个人都害怕先承认“还在意”会再次失去主动权，因此用归还旧物完成试探。外部倒计时把无法开口的关系推向必须选择的瞬间。</p><h3>情绪推进</h3><p>从疏离的寒暄，到“伞偏向她”的动作，再到旧书、小票和等待邀请，信息逐层变得私人。最后用“没有上车”代替正面回答，让动作完成情绪回收。</p><h3>仍可修改</h3><p>目前场景集中、收束较快。完整版本可以补足两人三年前分开的具体原因，让“再次选择”承担更明确的代价。</p></DetailShell>;
  return <DetailShell work={work}><h2 id="background">练习目标</h2><p>同一个角色在不同情境里应当保持稳定的语言习惯，同时让情绪浓度发生变化。这里设定的角色习惯用事实和安排替代直接关心；越在意，句子反而越短。</p><h2 id="main-content">三组对白</h2><h3>01 · 平常</h3><blockquote>“到家了吗？”<br />“刚到。”<br />“好。冰箱第二层有药，别空腹吃。”</blockquote><h3>02 · 争执以后</h3><blockquote>“你不用管我。”<br />“我知道。”<br />“那你还站在这里做什么？”<br />“等雨停。顺便等你。”</blockquote><h3>03 · 分别以前</h3><blockquote>“明天不用送我。”<br />“嗯。”<br />“你就没有别的话？”<br />“登机以后把手机关掉。落地告诉我。”他停了一会儿，“晚安先欠着。”</blockquote><h2 id="review">创作复盘</h2><p>对白的辨识度来自稳定策略：他不解释感情，只处理具体问题。变化则来自信息遗漏——“晚安先欠着”第一次暴露他相信关系还有以后。后续可让对方的语言风格更鲜明，避免整段张力只由单一角色承担。</p></DetailShell>;
}
