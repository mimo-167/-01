import Link from "next/link";
import { accounts, analyses, projects, writings } from "./data";
import { FooterCTA, SectionTitle } from "./components/Sections";
import { WorkCard } from "./components/PortfolioUI";

export default function Home() {
  const selected = [analyses[0], projects[0], writings[0], analyses[1], writings[1]];
  return (
    <main id="main" className="home-page">
      <section className="hero">
        <span className="watercolor shape-left" aria-hidden="true" />
        <span className="watercolor shape-right" aria-hidden="true" />
        <span className="hero-doodle doodle-sparkles" aria-hidden="true">✧<br />✦</span>
        <span className="hero-doodle doodle-note" aria-hidden="true">Stories<br />Create<br />Worlds.</span>
        <span className="hero-doodle doodle-star" aria-hidden="true">☆<i>↙</i></span>
        <span className="hero-doodle doodle-flower" aria-hidden="true">❀</span>
        <div className="hero-copy">
          <h1><span>WELCOME TO</span><span>MY UNIVERSE</span></h1>
          <p className="hero-signature">ZHU MO&apos;S PORTFOLIO</p>
          <div className="hero-paper"><span aria-hidden="true" />写故事，造世界，留下心动的痕迹。♡<small>女性向游戏文案 / 账号运营 / 活动策划</small></div>
          <nav className="hero-links" aria-label="首页快速入口">
            <Link href="/about"><b aria-hidden="true">♙</b>Understand Me</Link>
            <Link href="/projects"><b aria-hidden="true">▱</b>Project Stories</Link>
            <Link href="/accounts"><b aria-hidden="true">▦</b>Media Accounts</Link>
            <Link href="/writing"><b aria-hidden="true">▧</b>Writing Gallery</Link>
          </nav>
        </div>
        <a className="scroll-cue" href="#about" aria-label="向下阅读"><span>Scroll Down</span>⌄</a>
      </section>

      <section className="home-about" id="about">
        <span className="about-side-flower" aria-hidden="true">❀</span>
        <div className="open-book">
          <div className="book-page book-portrait">
            <div className="portrait-placeholder"><span>墨</span><i aria-hidden="true" /></div>
            <small>记录灵感，也记录成长。</small>
          </div>
          <div className="binder-rings" aria-hidden="true"><i /><i /><i /></div>
          <div className="book-page book-copy">
            <p className="eyebrow">HELLO, I&apos;M ZHU MO</p>
            <h2>Hello, I&apos;m Zhu Mo.</h2>
            <p>热爱文字，热爱游戏，也热爱创造故事。这是我的小世界，在这里我整理我的思考，也展示我的作品与实践。</p>
            <p>中山大学政治经济哲学专业在读，曾在腾讯微信读书负责内容运营。</p>
            <div className="profile-mini"><span>角色与情绪</span><span>内容与用户</span><span>活动与体验</span></div>
            <Link className="button button-dark" href="/about">了解我更多 →</Link>
          </div>
          <span className="book-doodle book-flower" aria-hidden="true">❀</span>
          <span className="book-doodle book-sparkle" aria-hidden="true">✧</span>
        </div>
        <div className="portal-row" aria-label="作品集主要栏目">
          <Link href="/about"><b aria-hidden="true">♙</b><strong>Understand Me</strong><span>关于我<br />我的成长与兴趣<br />我的能力</span><small>点击进入 →</small></Link>
          <Link href="/projects"><b aria-hidden="true">▱</b><strong>Project Stories</strong><span>游戏分析报告<br />活动策划案<br />短篇小说与文案练习</span><small>点击进入 →</small></Link>
          <Link href="/writing"><b aria-hidden="true">▧</b><strong>Writing Gallery</strong><span>原创作品合集<br />灵感笔记<br />随手涂鸦</span><small>点击进入 →</small></Link>
        </div>
      </section>

      <section className="section-shell selected-section" id="selected">
        <SectionTitle english="SELECTED WORKS" chinese="一些最能代表我的作品" note="写作、分析、策划与运营——每一页都留下判断和复盘。" />
        <div className="work-grid selected-grid">{selected.map((work, index) => <WorkCard key={work.slug} work={work} href={`${work.category === "活动策划" ? "/projects" : work.category === "原创短篇" || work.category === "人物片段" ? "/writing" : "/analysis"}/${work.slug}`} index={index} />)}</div>
      </section>

      <section className="split-feature">
        <div className="split-heading"><p>01 / WRITING</p><h2>STORIES<br />I WROTE</h2><span>我写下的故事</span></div>
        <div className="mini-list">{writings.map((work, i) => <Link href={`/writing/${work.slug}`} key={work.slug}><span>0{i + 1}</span><div><strong>{work.title}</strong><small>{work.summary}</small></div><b>↗</b></Link>)}</div>
      </section>

      <section className="analysis-feature">
        <SectionTitle english="02 / GAME OBSERVATION" chinese="我如何阅读一款游戏" note="从玩家感受出发，回到角色、节奏、机制和成本。" />
        <div className="analysis-board">{analyses.map((work, i) => <article key={work.slug}><span className="board-number">0{i + 1}</span><p className="eyebrow">{work.category}</p><h3>{work.title}</h3><p>{work.summary}</p><Link className="text-link" href={`/analysis/${work.slug}`}>Read the full story ↗</Link></article>)}</div>
      </section>

      <section className="project-feature">
        <p className="ghost-title" aria-hidden="true">PROJECT STORY</p>
        <div className="project-frame">
          <span className="project-index">03 / FROM IDEA TO EXPERIENCE</span>
          <h2>{projects[0].title}</h2><p>{projects[0].summary}</p>
          <div className="flow-line"><span>进入活动</span><b>→</b><span>完成互动</span><b>→</b><span>解锁来信</span><b>→</b><span>次日回访</span></div>
          <Link className="button button-dark" href={`/projects/${projects[0].slug}`}>查看完整方案 ↗</Link>
        </div>
      </section>

      <section className="section-shell accounts-home">
        <SectionTitle english="04 / ACCOUNTS I’VE BUILT" chinese="我运营过的账号" note="不同账号，不只是换一种选题，而是重新理解一次用户。" />
        <div className="account-strip">{accounts.map((account, i) => <Link href={`/accounts/${account.slug}`} className={`account-card tone-${account.tone}`} key={account.slug}><span>ACCOUNT / 0{i + 1}</span><h3>{account.title}</h3><p>{account.source}<br />{account.role}</p><div>{account.metrics.slice(0, 2).map((metric) => <strong key={metric}>{metric}</strong>)}</div><small>View case ↗</small></Link>)}</div>
        <Link className="text-link" href="/accounts">查看全部账号矩阵 ↗</Link>
      </section>

      <section className="operation-note"><div><p className="eyebrow">CONTENT & GROWTH</p><h2>内容如何被看见</h2><p>用户洞察 → 选题判断 → 内容生产 → 发布测试 → 数据复盘 → 策略调整</p><Link className="text-link" href="/operations">完整运营案例 ↗</Link></div><div className="metric-notes"><span><b>6</b> 个不同内容赛道</span><span><b>1.3万</b> 重点账号粉丝</span><span><b>46万</b> 累计获赞</span></div></section>
      <FooterCTA />
    </main>
  );
}
