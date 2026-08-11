import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { socialAccounts } from "../../portfolio-data";
import { socialNoteDetails } from "../../xiaohongshu-note-content";
import { XhsImageCarousel } from "./XhsImageCarousel";

const allNotes = socialAccounts.flatMap((account) =>
  account.notes.map((note) => ({ account, note })),
);

function findNote(noteId: string) {
  return allNotes.find(({ note }) => note.id === noteId);
}

export function generateStaticParams() {
  return allNotes.map(({ note }) => ({ noteId: note.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ noteId: string }>;
}): Promise<Metadata> {
  const { noteId } = await params;
  const item = findNote(noteId);
  return item
    ? {
        title: item.note.title,
        description: `${item.account.name}的小红书代表内容，含完整正文与互动数据。`,
      }
    : {};
}

export default async function XiaohongshuNotePage({
  params,
}: {
  params: Promise<{ noteId: string }>;
}) {
  const { noteId } = await params;
  const item = findNote(noteId);
  const detail = socialNoteDetails[noteId];

  if (!item || !detail) notFound();

  const { account, note } = item;
  const carouselImages = detail.images.length ? detail.images : [note.cover];

  return (
    <main id="main" className="xhs-detail-page">
      <header className="xhs-detail-hero">
        <Link className="reader-back" href="/#xiaohongshu">← 返回小红书作品</Link>
        <p className="eyebrow">XIAOHONGSHU NOTE · {account.name}</p>
        <h1>{note.title}</h1>
        <div className="xhs-detail-meta" aria-label="笔记互动数据">
          <span><b>♡</b><small>点赞</small><strong>{note.likes}</strong></span>
          <span><b>☆</b><small>收藏</small><strong>{note.favorites}</strong></span>
          <span><b>◌</b><small>评论</small><strong>{note.comments}</strong></span>
        </div>
        {detail.publishedAt ? <time dateTime={detail.publishedAt}>发布于 {detail.publishedAt}</time> : null}
      </header>

      <article className="xhs-detail-paper">
        <span className="paper-tape" aria-hidden="true" />
        {note.video ? (
          <section className="xhs-video-section" aria-labelledby="xhs-video-heading">
            <p className="eyebrow" id="xhs-video-heading">VIDEO / 01</p>
            <video className="xhs-detail-video" controls playsInline preload="metadata" aria-label={`${note.title}视频`}>
              <source src={note.video.src} type={note.video.mimeType} />
              你的浏览器暂不支持视频播放，请更新浏览器后重试。
            </video>
          </section>
        ) : (
          <XhsImageCarousel images={carouselImages} title={note.title} />
        )}

        {detail.notice ? <aside className="xhs-note-notice">{detail.notice}</aside> : null}

        <section className="xhs-body-section" aria-labelledby="xhs-body-heading">
          <p className="eyebrow" id="xhs-body-heading">FULL CAPTION / 正文</p>
          <div className="xhs-note-body">
            {detail.body.split(/\n{2,}/).map((paragraph, index) => (
              <p key={`${note.id}-paragraph-${index}`}>{paragraph}</p>
            ))}
          </div>
        </section>

        <footer className="xhs-detail-footer">
          <Link className="button button-paper" href="/#xiaohongshu">返回作品集</Link>
          {note.url ? (
            <a className="button button-dark" href={note.url} target="_blank" rel="noreferrer">
              前往小红书查看原笔记 ↗
            </a>
          ) : null}
        </footer>
      </article>
    </main>
  );
}
