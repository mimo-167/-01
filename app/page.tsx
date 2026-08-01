import Link from "next/link";
import { accounts, analyses, projects, writings } from "./data";
import { FooterCTA, SectionTitle } from "./components/Sections";
import { WorkCard } from "./components/PortfolioUI";

export default function Home() {
  const selected = [analyses[0], projects[0], writings[0], analyses[1], writings[1]];
  return (
    <main id="main" className="home-page">
      <section className="hero">
        <span className="soft-shape shape-left" aria-hidden="true" />
        <span className="soft-shape shape-right" aria-hidden="true" />
        <div className="hero-copy">
          <h1><span>WELCOME TO</span><span>MY UNIVERSE</span></h1>
          <p className="hero-signature">ZHU MO&apos;S PORTFOLIO</p>
          <p className="role-line">女性向游戏文案 / 账号运营 / 活动策划</p>
          <p className="hero-lead">观察角色如何被塑造，关系如何发生变化，<br />也思考一次内容如何让玩家愿意再次回来。</p>
          <nav className="hero-links" aria-label="首页快速入口">
            <Link href="/about">Understand Me</Link>
            <a href="#selected">Selected Works</a>
            <Link href="/accounts">Media Accounts</Link>
          </nav>
        </div>
        <a className="scroll-cue" href="#about" aria-label="向下阅读"><span>SCROLL TO EXPLORE</span>↓</a>
      </section>

      <section className="home-about" id="about">
        <p className="ghost-title" aria-hidden="true">UNDERSTAND ME</p>
        <div className="open-book">
          <div className="book-page book-portrait">
            <div className="portrait-placeholder"><span>墨</span></div>
            <small>PHOTO / 待补充个人照片</small>
          </div>
          <div className="binder-rings" aria-hidden="true"><i /><i /><i /></div>
          <div className="book-page book-copy">
            <p className="eyebrow">HELLO, I&apos;M ZHU MO</p>
            <h2>这是我的世界。</h2>
            <p>中山大学政治经济哲学专业在读，曾在腾讯微信读书负责内容运营。我写故事，也会继续追问故事怎样成为一次完整的玩家体验。</p>
            <div className="profile-mini"><span>角色与情绪</span><span>内容与用户</span><span>活动与体验</span></div>
            <Link className="text-link" href="/about">More about me ↗</Link>
          </div>
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
