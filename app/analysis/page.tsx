import type { Metadata } from "next";
import { FilteredWorks } from "../components/PortfolioUI";
import { PageIntro } from "../components/Sections";
import { analyses } from "../data";
export const metadata: Metadata = { title: "游戏分析", description: "女性向游戏剧情、角色、活动与玩家体验分析。" };
export default function AnalysisPage() { return <main id="main" className="page-shell"><PageIntro eyebrow="GAME OBSERVATION · 游戏观察" title="How I Read a Game"><p>我从“玩家为什么在这一刻心动”开始，再追问它由什么角色信息、叙事节奏、互动机制和演出细节共同完成。</p></PageIntro><section className="page-content"><FilteredWorks works={analyses} base="/analysis" /></section></main>; }
