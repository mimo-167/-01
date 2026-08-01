# 朱墨｜女性向游戏文案与账号运营作品集

一个面向女性向游戏工作室招聘方的个人作品集网站。视觉以用户提供的模板为基准，统一采用粗笔刷标题、手写正文、不规则线稿、水彩绿衬底与撕边纸片。

## 页面

- 首页、关于我、联系方式
- 文字作品列表与详情
- 游戏分析列表与详情
- 女性向游戏版本活动策划案
- 内容运营案例与多账号矩阵
- 在线简历与 PDF 简历下载

## 修改内容

作品的 Markdown 源文件位于 `content/`，页面展示数据位于 `app/data.ts`。正式投递前，请补充工作邮箱、所在城市、到岗时间、每周实习天数和个人照片。

## 本地运行

```bash
npm install
npm run dev
npm test
```

重新生成 PDF 简历：

```bash
node scripts/build-resume.mjs
```

部署到 Cloudflare Worker `01`：

```bash
npm run deploy:cloudflare
```
