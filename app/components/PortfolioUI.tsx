"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Work } from "../data";

export function FilteredWorks({ works, base }: { works: Work[]; base: string }) {
  const categories = useMemo(() => ["全部", ...Array.from(new Set(works.map((work) => work.category)))], [works]);
  const [active, setActive] = useState("全部");
  const shown = active === "全部" ? works : works.filter((work) => work.category === active);
  return (
    <>
      <div className="filters" role="group" aria-label="按类型筛选">
        {categories.map((category) => <button key={category} className={active === category ? "active" : ""} onClick={() => setActive(category)}>{category}</button>)}
      </div>
      <div className="work-grid">
        {shown.map((work, index) => <WorkCard key={work.slug} work={work} href={`${base}/${work.slug}`} index={index} />)}
      </div>
    </>
  );
}

export function WorkCard({ work, href, index = 0 }: { work: Work; href: string; index?: number }) {
  return (
    <article className={`work-card tone-${work.tone} rotate-${index % 3}`}>
      <div className="cover-mark" aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span></div>
      <p className="eyebrow">{work.eyebrow}</p>
      <h3>{work.title}</h3>
      <p>{work.summary}</p>
      <div className="tag-row">{work.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      <div className="card-meta"><span>{work.date}</span><span>{work.readingTime}</span></div>
      <Link className="text-link" href={href}>打开看看 <span aria-hidden="true">↗</span></Link>
    </article>
  );
}
