---
name: "爬虫/自动化 防封指纹伪装（UA+分辨率池）"
description: "给爬虫和浏览器自动化随机真实指纹（88+ UA、87 分辨率），降低被风控识别概率。适合爬虫工程师、RPA 开发者、海外社媒多账号。"
market_desc: 做网页自动化 / 爬虫 / 压测时，需要一个「像真用户」的随机浏览器身份。内置 88+ 真实 UA 与 87 个按市占权重分布的分辨率，一行调用随机取一个，避免所有请求都用同一个 UA 被一眼识破。
version: 1.0.0
---

# browser-fingerprint-pool —— 随机 UA / 分辨率池

> 真实浏览器市场份额分布的 User-Agent 与屏幕分辨率数据池。纯数据 + 纯函数（Node ESM，零依赖）。
> 抽取自 caijiqi-kaifa/electron/data/user-agents.ts 与 resolutions.ts。

## 适用场景

- 网页自动化 / 数据采集时随机化请求身份，降低被风控识别的概率
- 需要按浏览器类型（Chrome / Firefox / Edge / Safari / Opera）取 UA
- 需要按市占权重随机取屏幕分辨率（主流分辨率出现概率更高）

## 用法

```js
import { getRandomUserAgent, getUserAgentByType, allUserAgents,
         getRandomResolution, getRandomResolutionString, parseResolution, uniqueResolutions }
  from './scripts/fingerprint-pool.mjs';

getRandomUserAgent();                 // 随机 UA
getUserAgentByType('firefox');        // 指定类型 UA
allUserAgents.length;                 // 88+

getRandomResolution();                // { width, height }
getRandomResolutionString();          // '1920x1080'
parseResolution('1366x768');          // { width:1366, height:768 }
uniqueResolutions;                    // 去重后的分辨率列表（用于 UI 展示）
```

## 核心 API

- `allUserAgents`：合并后的全部 UA 数组（88+）
- `getRandomUserAgent()`：随机取一个 UA
- `getUserAgentByType(type)`：`'chrome' | 'firefox' | 'edge' | 'safari' | 'opera' | 'random'`
- `allResolutions`：带权重重复的分辨率字符串数组（87）
- `getRandomResolution()` / `getRandomResolutionString()`
- `parseResolution(str)`：`'1920x1080' → { width, height }`
- `uniqueResolutions`：去重分辨率列表

## 注意

- 本 skill 只提供「身份数据」，不含注入逻辑；要结合 `playwright-stealth` 才会真正写进浏览器上下文。
- 数据纯本地，不联网。
