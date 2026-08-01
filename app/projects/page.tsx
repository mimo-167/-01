import type { Metadata } from "next";
import { FilteredWorks } from "../components/PortfolioUI";
import { PageIntro } from "../components/Sections";
import { projects } from "../data";
export const metadata: Metadata = { title: "项目策划", description: "女性向游戏活动策划练习与完整方案。" };
export default function ProjectsPage() { return <main id="main" className="page-shell"><PageIntro eyebrow="PROJECT STORIES · 项目故事" title="From Idea to Experience"><p>把一个情绪命题继续往下做：它如何成为每日玩法、奖励节奏、角色文案、美术需求与一次完整传播。</p></PageIntro><section className="page-content"><FilteredWorks works={projects} base="/projects" /></section></main>; }
