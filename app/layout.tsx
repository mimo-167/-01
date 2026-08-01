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
    title: { default: "朱墨｜女性向游戏文案与运营策划作品集", template: "%s｜朱墨作品集" },
    description: "中山大学在读，专注女性向游戏角色、剧情、活动与内容运营。收录文字创作、游戏分析、活动策划及内容运营案例。",
    keywords: ["女性向游戏", "游戏文案", "运营策划", "内容运营", "作品集", "朱墨"],
    openGraph: { title: "朱墨｜女性向游戏文案与运营策划作品集", description: "观察角色、情绪与关系，也思考怎样让玩家愿意再次回来。", type: "website", locale: "zh_CN", url: origin, images: [{ url: `${origin}/og.png`, width: 1536, height: 1024, alt: "朱墨女性向游戏文案与运营策划作品集" }] },
    twitter: { card: "summary_large_image", title: "朱墨｜女性向游戏文案与运营策划作品集", description: "观察角色、情绪与关系，也思考怎样让玩家愿意再次回来。", images: [`${origin}/og.png`] },
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
