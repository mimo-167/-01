import type { Metadata } from "next";
import { womenWritingWorks } from "../../women-writing-data";
import { WritingReader } from "../WritingReader";

const work = womenWritingWorks.find((item) => item.slug === "ng-am-i-the-first")!;

export const metadata: Metadata = { title: work.title, description: "同人女性向文字作品，作者朱墨 / Momo。" };

export default function Page() {
  return <WritingReader work={work} />;
}
