import angelAndDemonRaw from "../作品集/女性向文本创作/原创/【GB】为了拉拢你，天堂和地狱分别派出了天使和魅魔.txt?raw";
import gentleUncleRaw from "../作品集/女性向文本创作/原创/GB温柔到几乎无底线的小叔叔1.txt?raw";
import firstOneRaw from "../作品集/女性向文本创作/同人文/NG：我是第一个被你这样对待的吗.txt?raw";
import afraidOfTheOtherWomanRaw from "../作品集/女性向文本创作/同人文/这种小三上位的才会最害怕小三啊.txt?raw";

export type WomenWritingWork = {
  slug: string;
  title: string;
  type: "同人" | "原创";
  date?: string;
  content: string;
};

function prepareContent(raw: string, title: string, date?: string) {
  const lines = raw.replace(/\r\n/g, "\n").trim().split("\n");

  if (lines[0]?.trim() === title) lines.shift();
  if (date && lines[0]?.trim() === date) lines.shift();

  return lines.join("\n").trim();
}

export const womenWritingWorks: WomenWritingWork[] = [
  {
    slug: "ng-am-i-the-first",
    title: "NG：我是第一个被你这样对待的吗",
    type: "同人",
    content: prepareContent(firstOneRaw, "NG：我是第一个被你这样对待的吗"),
  },
  {
    slug: "afraid-of-the-other-woman",
    title: "这种小三上位的才会最害怕小三啊",
    type: "同人",
    content: prepareContent(afraidOfTheOtherWomanRaw, "这种小三上位的才会最害怕小三啊"),
  },
  {
    slug: "angel-and-demon",
    title: "【GB】为了拉拢你，天堂和地狱分别派出了天使和魅魔",
    type: "原创",
    date: "2024.6 写",
    content: prepareContent(angelAndDemonRaw, "【GB】为了拉拢你，天堂和地狱分别派出了天使和魅魔", "2024.6写"),
  },
  {
    slug: "gentle-uncle-1",
    title: "GB温柔到几乎无底线的小叔叔 1",
    type: "原创",
    date: "2024.4 写",
    content: prepareContent(gentleUncleRaw, "GB温柔到几乎无底线的小叔叔1", "2024.4写"),
  },
];

export function findWomenWritingWork(slug: string) {
  return womenWritingWorks.find((work) => work.slug === slug);
}
