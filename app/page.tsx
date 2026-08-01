import Link from "next/link";
import { accounts, analyses, projects, writings } from "./data";
import { FooterCTA, SectionTitle } from "./components/Sections";
import { WorkCard } from "./components/PortfolioUI";

export default function Home() {
  const selected = [analyses[0], projects[0], writings[0], analyses[1], writings[1]];
  return (
    <main id="main">
      <section className="hero">
        <div className="hero-copy"><p className="eyebrow">GAME NARRATIVE · CONTENT · OPERATIONS</p><h1><span>WELCOME TO</span><em>MY UNIVERSE</em></h1><h2>欢迎来到我的创作宇宙</h2><p className="hero-lead">我观察角色如何被塑造，关系如何发生变化，<br />也思考一次活动如何让玩家愿意再次回来。</p><p className="role-line">女性向游戏文案 / 运营策划方向</p><div className="button-row"><a className="button button-dark" href="#selected">查看我的作品</a><Link className="button button-paper" href="/about">关于我</Link><a className="text-link" href="/resume-zhu-mo.pdf" download>下载简历 ↓</a></div></div>
        <div className="hero-collage" aria-label="创作方向速览"><div className="paper-note note-one">角色<br />情绪<br />关系</div><div className="paper-note note-two">player<br />insight</div><div className="round-stamp">朱墨<br /><small>PORTFOLIO 2026</small></div><span className="doodle-line" aria-hidden="true">↝</span></div>
      </section>

      <section className="home-about" id="about"><div className="portrait-card"><div className="portrait-placeholder"><span>墨</span></div><p>PHOTO / 待补充个人照片</p></div><div className="about-note"><p className="hand-note">你好，很高兴你打开了这一页。</p><h2>我是朱墨，一个会把“为什么心动”继续往下拆的人。</h2><p>中山大学政治经济哲学专业在读，曾在腾讯微信读书负责内容运营。我写故事，也关心故事怎样成为一次完整的玩家体验。</p><div className="tag-row"><span>角色塑造</span><span>剧情文案</span><span>用户洞察</span><span>活动策划</span><span>内容运营</span></div><Link className="text-link" href="/about">翻到下一页，认识我 ↗</Link></div></section>

      <section className="section-shell" id="selected"><SectionTitle english="A FEW THINGS I MADE" chinese="最近完成的一些作品" note="分析、创作与策划，不只放结果，也留下判断过程。" /><div className="work-grid selected-grid">{selected.map((work, index) => <WorkCard key={work.slug} work={work} href={`${work.category === "活动策划" ? "/projects" : work.category === "原创短篇" || work.category === "人物片段" ? "/writing" : "/analysis"}/${work.slug}`} index={index} />)}</div></section>

      <section className="split-feature"><div><SectionTitle english="STORIES I WROTE" chinese="我写下的故事" /><p>写克制的对白、没有说出口的关心，以及一个角色如何在细节里变得可信。</p><Link className="button button-paper" href="/writing">进入 Writing Room</Link></div><div className="mini-list">{writings.map((work, i) => <Link href={`/writing/${work.slug}`} key={work.slug}><span>0{i + 1}</span><strong>{work.title}</strong><small>{work.category} · {work.readingTime}</small></Link>)}</div></section>

      <section className="analysis-feature"><SectionTitle english="HOW I READ A GAME" chinese="我如何阅读一款游戏" note="从玩家感受出发，回到角色、节奏、机制和成本。" /><div className="analysis-board">{analyses.map((work, i) => <article key={work.slug}><span className="board-number">0{i + 1}</span><p className="eyebrow">{work.category}</p><h3>{work.title}</h3><p>{work.summary}</p><Link className="text-link" href={`/analysis/${work.slug}`}>阅读完整拆解 ↗</Link></article>)}<div className="emotion-curve" aria-label="示意情绪曲线"><span>期待</span><i /><i /><i /><i /><b>心动</b></div></div></section>

      <section className="project-feature"><div className="project-folder"><span className="folder-tab">PROJECT 01</span><p className="eyebrow">INDEPENDENT PRACTICE</p><h2>{projects[0].title}</h2><p>{projects[0].summary}</p><div className="flow-line"><span>进入活动</span><b>→</b><span>完成互动</span><b>→</b><span>解锁来信</span><b>→</b><span>次日回访</span></div><Link className="button button-dark" href={`/projects/${projects[0].slug}`}>打开完整方案</Link></div><div className="margin-note"><strong>FROM IDEA<br />TO EXPERIENCE</strong><p>用户洞察 / 玩法 / 奖励 / 文案 / 美术 / 传播 / 风险</p></div></section>

      <section className="section-shell accounts-home"><SectionTitle english="ACCOUNTS I’VE BUILT" chinese="我运营过的账号" note="不同账号，不只是换一种选题，而是重新理解一次用户。" /><div className="account-strip">{accounts.map((account, i) => <Link href={`/accounts/${account.slug}`} className={`account-card tone-${account.tone}`} key={account.slug}><span>FILE / 0{i + 1}</span><h3>{account.title}</h3><p>{account.source} · {account.role}</p><div>{account.metrics.slice(0, 2).map((metric) => <strong key={metric}>{metric}</strong>)}</div><small>查看账号档案 ↗</small></Link>)}</div><Link className="button button-paper" href="/accounts">查看全部账号矩阵</Link></section>

      <section className="operation-note"><div><p className="eyebrow">CONTENT & GROWTH</p><h2>内容如何被看见</h2><p>用户洞察 → 选题判断 → 内容生产 → 发布测试 → 数据复盘 → 策略调整</p></div><div className="metric-notes"><span><b>6</b> 个不同内容赛道</span><span><b>1.3万</b> 重点账号粉丝</span><span><b>46万</b> 累计获赞</span><Link href="/operations">阅读运营案例 ↗</Link></div></section>
      <FooterCTA />
    </main>
  );
}
