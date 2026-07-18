# 随机 UA / 分辨率池 · browser-fingerprint-pool

> 真实浏览器市场份额分布的 User-Agent 与屏幕分辨率数据池。内置 88+ 真实 UA 与 87 个按市占权重分布的分辨率，一行调用随机取一个。

给网页自动化 / 爬虫 / 压测随机化请求身份，降低被风控识别的概率。纯数据 + 纯函数（Node ESM，零依赖），抽取自成熟项目的 user-agents 与 resolutions 数据集。

## 适用场景
- 网页自动化 / 数据采集时随机化请求身份
- 需要按浏览器类型（Chrome / Firefox / Edge / Safari / Opera）取 UA
- 需要按市占权重随机取屏幕分辨率（主流分辨率出现概率更高）

## 作为 AI 技能使用
本仓库是一个 AI Agent Skill。将 `SKILL.md` 放入 Agent 的 skills 目录即可启用；`scripts/`、`references/`、`assets/` 为配套资源。建议与 `playwright-stealth` 搭配使用。

## 许可
MIT — 可自由用于商业与个人项目。

---
由教备神器自动发布。欢迎提 PR / Issue。