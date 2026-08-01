import type { Metadata } from "next";
import { FilteredWorks } from "../components/PortfolioUI";
import { PageIntro } from "../components/Sections";
import { writings } from "../data";

export const metadata: Metadata = { title: "文字作品", description: "原创短篇、人物片段与对白练习。" };

export default function WritingPage() {
  return <main id="main" className="page-shell"><PageIntro eyebrow="WRITING ROOM · 我的文字房间" title="Stories I Wrote"><p>我写那些没有立刻说出口的话：回避里的关心，沉默里的选择，以及人物在关系中悄悄改变的时刻。</p></PageIntro><section className="page-content"><FilteredWorks works={writings} base="/writing" /></section></main>;
}
