import Link from "next/link";
import type { WomenWritingWork } from "../women-writing-data";

export function WritingReader({ work }: { work: WomenWritingWork }) {
  return (
    <main id="main" className="writing-reader-page">
      <header className="writing-reader-hero">
        <Link className="reader-back" href="/#writing-works">← 返回文字作品</Link>
        <p className="eyebrow">WOMEN-ORIENTED WRITING · {work.type}</p>
        <h1>{work.title}</h1>
        <div className="reader-meta"><span>{work.type}</span>{work.date ? <span>{work.date}</span> : null}</div>
        <span className="reader-flower" aria-hidden="true">❀</span>
      </header>
      <article className="writing-manuscript">
        <div className="manuscript-tape" aria-hidden="true" />
        <div className="writing-body">{work.content}</div>
      </article>
      <nav className="reader-footer" aria-label="文字作品阅读导航">
        <Link className="button button-paper" href="/#writing-works">返回作品墙</Link>
        <Link className="button button-dark" href="/#contact">联系我</Link>
      </nav>
    </main>
  );
}
