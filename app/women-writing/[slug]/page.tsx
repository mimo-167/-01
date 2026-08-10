import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { findWomenWritingWork, womenWritingWorks } from "../../women-writing-data";

export function generateStaticParams() {
  return womenWritingWorks.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const work = findWomenWritingWork(slug);
  return work ? { title: work.title, description: `${work.type}女性向文字作品，作者朱墨 / Momo。` } : {};
}

export default async function WomenWritingDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const work = findWomenWritingWork(slug);
  if (!work) notFound();

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
