"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "../data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="朱墨作品集首页">
        <span>ZM.</span>
        <small>creative archive</small>
      </Link>
      <button className="menu-button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>
        {open ? "关闭" : "菜单"}
      </button>
      <nav id="site-nav" className={open ? "site-nav is-open" : "site-nav"} aria-label="主导航">
        {navItems.map(([href, label]) => (
          <Link key={href} onClick={() => setOpen(false)} className={pathname === href || (href !== "/" && pathname.startsWith(`${href}/`)) ? "active" : ""} href={href}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
