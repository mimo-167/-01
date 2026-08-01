import Link from "next/link";
import type { ReactNode } from "react";
import type { Work } from "../data";
import { WorkCard } from "./PortfolioUI";

export function SectionTitle({ english, chinese, note }: { english: string; chinese: string; note?: string }) {
  return <div className="section-title"><span className="title-doodle" aria-hidden="true">✦</span><p>{english}</p><h2>{chinese}</h2>{note && <span>{note}</span>}</div>;
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return <section className="page-intro"><span className="intro-star" aria-hidden="true">☆</span><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><div>{children}</div><span className="scribble-arrow" aria-hidden="true">↝</span></section>;
}

export function WorkCollection({ works, base }: { works: Work[]; base: string }) {
  return <div className="work-grid">{works.map((work, index) => <WorkCard key={work.slug} work={work} href={`${base}/${work.slug}`} index={index} />)}</div>;
}

export function DetailShell({ work, children }: { work: Work; children: ReactNode }) {
  return (
    <main id="main" className="detail-page">
      <header className={`detail-hero tone-${work.tone}`}>
        <p className="eyebrow">{work.eyebrow}</p><h1>{work.title}</h1><p className="detail-summary">{work.summary}</p>
        <div className="tag-row">{work.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <div className="detail-meta"><span>{work.date}</span><span>{work.readingTime}</span><span>{work.note}</span></div>
      </header>
      <div className="article-layout">
        <aside className="toc"><strong>ON THIS PAGE</strong><a href="#background">背景 / 说明</a><a href="#main-content">核心内容</a><a href="#review">复盘 / 收获</a><Link href="/">返回首页</Link></aside>
        <article className="article-paper">{children}<div className="capability-note"><span>FOR RECRUITERS</span><strong>本篇主要展示</strong><p>{work.capability}</p></div></article>
      </div>
    </main>
  );
}

export function FooterCTA() {
  return <section className="footer-cta"><span className="footer-flower" aria-hidden="true">❀</span><p className="eyebrow">LET’S CREATE SOMETHING</p><h2>期待和你一起做一些有意思的事</h2><p>如果你正在寻找一位愿意认真理解角色、玩家与内容的人，欢迎联系我。</p><div className="button-row"><Link className="button button-dark" href="/contact">联系我 →</Link><a className="button button-paper" href="/resume-zhu-mo.pdf" download>下载简历 ↓</a></div><small>© 2026 ZHU MO&apos;S PORTFOLIO　|　MADE WITH LOVE. ♡</small></section>;
}
