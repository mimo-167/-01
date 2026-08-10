"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems } from "../data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="朱墨作品集首页">
        <span aria-hidden="true">❀</span>
        <small>ZHU MO&apos;S PORTFOLIO</small>
      </Link>
      <button className="menu-button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>
        {open ? "Close ×" : "Menu ≡"}
      </button>
      <nav id="site-nav" className={open ? "site-nav is-open" : "site-nav"} aria-label="主导航">
        {navItems.map(([href, label]) => (
          <Link key={href} onClick={() => setOpen(false)} href={href}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
