import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  contact,
  productWorks,
  profile,
  socialAccounts,
  type PortfolioImage,
  type SocialNote,
} from "./portfolio-data";
import { womenWritingWorks } from "./women-writing-data";

function MediaFrame({
  image,
  className = "",
  sizes = "(max-width: 640px) 100vw, 50vw",
}: {
  image: PortfolioImage;
  className?: string;
  sizes?: string;
}) {
  return (
    <div className={`portfolio-media ${className}`}>
      {image.src ? (
        <Image src={image.src} alt={image.alt} fill sizes={sizes} unoptimized />
      ) : (
        <div className="media-placeholder" role="img" aria-label={`${image.alt}，素材待补充`}>
          <span aria-hidden="true">▧</span>
          <small>{image.placeholder}</small>
        </div>
      )}
    </div>
  );
}

function OptionalLink({
  href,
  className,
  children,
  external = true,
}: {
  href: string;
  className: string;
  children: ReactNode;
  external?: boolean;
}) {
  if (!href) {
    return (
      <span className={`${className} is-disabled`} aria-disabled="true" title="链接待补充">
        {children}
      </span>
    );
  }

  return (
    <a href={href} className={className} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      {children}
    </a>
  );
}

function SectionHeading({ index, english, title }: { index: string; english: string; title: string }) {
  return (
    <header className="portfolio-heading">
      <p className="eyebrow">{index} / {english}</p>
      <h2>{title}</h2>
      <span aria-hidden="true" />
    </header>
  );
}

function SocialNoteCard({ note, index }: { note: SocialNote; index: number }) {
  return (
    <Link
      className={`social-note-card rotate-${index % 3}`}
      href={`/xiaohongshu/${note.id}`}
      aria-label={`查看《${note.title}》完整内容`}
    >
      <MediaFrame image={note.cover} className="note-cover" sizes="(max-width: 640px) 50vw, 260px" />
      <div className="note-copy">
        <h4>{note.title}</h4>
        <div className="note-metrics" aria-label="笔记互动数据">
          <span title="点赞"><b aria-hidden="true">♡</b>{note.likes}</span>
          <span title="收藏"><b aria-hidden="true">☆</b>{note.favorites}</span>
          <span title="评论"><b aria-hidden="true">◌</b>{note.comments}</span>
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <main id="main" className="home-page portfolio-home">
      <section className="hero portfolio-hero" id="top">
        <span className="watercolor shape-left" aria-hidden="true" />
        <span className="watercolor shape-right" aria-hidden="true" />
        <span className="hero-doodle doodle-sparkles" aria-hidden="true">✧<br />✦</span>
        <span className="hero-doodle doodle-note" aria-hidden="true">Works<br />Worth<br />Seeing.</span>
        <span className="hero-doodle doodle-star" aria-hidden="true">☆<i>↙</i></span>
        <span className="hero-doodle doodle-flower" aria-hidden="true">❀</span>
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">PERSONAL PORTFOLIO</p>
          <h1><span>{profile.name}</span><span>/ {profile.englishName}</span></h1>
          <p className="hero-signature">ZHU MO&apos;S WORK ARCHIVE</p>
          <div className="hero-metrics" aria-label="核心数据">
            {profile.stats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
          <nav className="hero-links" aria-label="首页快速入口">
            <OptionalLink className="hero-action" href={profile.personalSiteUrl}><b aria-hidden="true">▱</b>查看个人网站</OptionalLink>
            <a className="hero-action" href="/resume-zhu-mo.pdf" target="_blank" rel="noreferrer"><b aria-hidden="true">▧</b>查看简历</a>
            <a className="hero-action" href="#contact"><b aria-hidden="true">♡</b>联系我</a>
          </nav>
        </div>
        <a className="scroll-cue" href="#xiaohongshu" aria-label="向下查看作品"><span>View Works</span>⌄</a>
      </section>

      <section className="section-shell portfolio-section social-section" id="xiaohongshu">
        <SectionHeading index="01" english="XIAOHONGSHU WORKS" title="小红书作品" />
        <div className="social-account-list">
          {socialAccounts.map((account, accountIndex) => (
            <article className="social-account-paper" key={account.id}>
              <span className="paper-tape" aria-hidden="true" />
              <div className="social-account-head">
                <MediaFrame image={account.profile} className="account-profile-shot" sizes="(max-width: 760px) 100vw, 420px" />
                <div className="social-account-copy">
                  <p className="eyebrow">ACCOUNT FILE / {String(accountIndex + 1).padStart(2, "0")}</p>
                  <h3>{account.name}</h3>
                  <dl className="account-facts">
                    <div><dt>运营时间</dt><dd>{account.operationPeriod}</dd></div>
                    <div><dt>粉丝数</dt><dd>{account.followers}</dd></div>
                    <div><dt>获赞 / 收藏</dt><dd>{account.likesAndFavorites}</dd></div>
                    <div><dt>最高单篇</dt><dd>{account.topPost}</dd></div>
                  </dl>
                  <OptionalLink className="button button-dark account-link" href={account.url}>打开小红书主页 ↗</OptionalLink>
                </div>
              </div>

              {account.performance ? (
                <section className="performance-paper" aria-labelledby={`${account.id}-performance`}>
                  <p className="hand-note" id={`${account.id}-performance`}>账号阶段数据</p>
                  <MediaFrame image={account.performance} className="performance-shot" sizes="(max-width: 760px) 100vw, 900px" />
                </section>
              ) : null}

              <div className="notes-heading">
                <p className="eyebrow">SELECTED NOTES</p>
                <h3>代表笔记</h3>
              </div>
              <div className="note-waterfall">
                {account.notes.map((note, noteIndex) => <SocialNoteCard key={note.id} note={note} index={noteIndex} />)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section writing-wall-section" id="writing-works">
        <div className="section-shell">
          <SectionHeading index="02" english="WRITING WORKS" title="女性向文字作品" />
          <div className="writing-wall">
            {womenWritingWorks.map((work, index) => (
              <article className={`writing-poster writing-poster-text tone-${index % 3 === 0 ? "rose" : index % 3 === 1 ? "sage" : "sand"}`} key={work.slug}>
                <span className="poster-pin" aria-hidden="true" />
                <span className="writing-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div className="writing-poster-copy">
                  <div className="writing-labels"><span className="work-type">{work.type}</span>{work.date ? <small>{work.date}</small> : null}</div>
                  <h3>{work.title}</h3>
                  <Link className="text-link" href={`/women-writing/${work.slug}`}>查看全文 ↗</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell portfolio-section product-section" id="product-works">
        <SectionHeading index="03" english="WEB / PRODUCT" title="网站 / 产品作品" />
        {productWorks.map((product) => (
          <article className="product-paper" key={product.id}>
            <div className="product-title-row">
              <div>
                <p className="eyebrow">FEATURED PRODUCT</p>
                <h3>{product.title}</h3>
                <div className="tag-row">{product.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
              <OptionalLink className="button button-dark" href={product.url}>打开网站 ↗</OptionalLink>
            </div>
            <MediaFrame image={product.hero} className="product-hero-shot" sizes="(max-width: 760px) 100vw, 1100px" />
            <div className="product-shot-grid">
              {product.screenshots.map((screenshot, index) => (
                <MediaFrame key={screenshot.placeholder} image={screenshot} className={`product-core-shot rotate-${index % 3}`} sizes="(max-width: 640px) 100vw, 360px" />
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="resume-contact-section" id="resume">
        <span className="footer-flower" aria-hidden="true">❀</span>
        <p className="eyebrow">04 / RESUME & CONTACT</p>
        <h2>简历与联系方式</h2>
        <div className="resume-actions">
          <a className="button button-dark" href="/resume-zhu-mo.pdf" target="_blank" rel="noreferrer">查看简历 ↗</a>
          <a className="button button-paper" href="/resume-zhu-mo.pdf" download>下载 PDF ↓</a>
        </div>
        <div className="contact-paper" id="contact">
          <span>EMAIL</span>
          {contact.emailUrl ? <a href={contact.emailUrl}>{contact.email}</a> : <strong>{contact.email}</strong>}
          {contact.phone ? <><span>PHONE</span><strong>{contact.phone}</strong></> : null}
        </div>
        <small>© 2026 ZHU MO / MOMO · MADE WITH LOVE. ♡</small>
      </section>
    </main>
  );
}
