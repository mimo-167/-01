import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { SiteHeader } from "./components/SiteHeader";
import { PageTools } from "./components/PageTools";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  return {
    metadataBase: new URL(origin),
    title: { default: "朱墨 / Momo｜个人作品集", template: "%s｜朱墨作品集" },
    description: "朱墨 / Momo 的个人作品集，集中展示小红书作品、女性向文字作品、网站与产品作品。",
    keywords: ["小红书作品", "女性向文字作品", "网站作品", "产品作品", "个人作品集", "朱墨", "Momo"],
    openGraph: { title: "朱墨 / Momo｜个人作品集", description: "小红书作品、女性向文字作品、网站与产品作品。", type: "website", locale: "zh_CN", url: origin, images: [{ url: `${origin}/og.png`, width: 1536, height: 1024, alt: "朱墨 / Momo 个人作品集" }] },
    twitter: { card: "summary_large_image", title: "朱墨 / Momo｜个人作品集", description: "小红书作品、女性向文字作品、网站与产品作品。", images: [`${origin}/og.png`] },
    icons: { icon: "/favicon.png", shortcut: "/favicon.png" },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <a className="skip-link" href="#main">跳到正文</a>
        <SiteHeader />
        {children}
        <PageTools />
      </body>
    </html>
  );
}
