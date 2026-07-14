// 来源：caijiqi-kaifa/electron/data/resolutions.ts（按真实市场份额权重分布，87 个）

export const allResolutions = [
  // 1920x1080 Full HD (22% 权重)
  '1920x1080', '1920x1080', '1920x1080', '1920x1080', '1920x1080',
  '1920x1080', '1920x1080', '1920x1080', '1920x1080', '1920x1080',
  '1920x1080', '1920x1080', '1920x1080', '1920x1080', '1920x1080',
  '1920x1080', '1920x1080', '1920x1080', '1920x1080', '1920x1080',
  '1920x1080', '1920x1080',
  // 1366x768 笔记本 (14% 权重)
  '1366x768', '1366x768', '1366x768', '1366x768', '1366x768',
  '1366x768', '1366x768', '1366x768', '1366x768', '1366x768',
  '1366x768', '1366x768', '1366x768', '1366x768',
  // 1536x864 Windows缩放 (10% 权重)
  '1536x864', '1536x864', '1536x864', '1536x864', '1536x864',
  '1536x864', '1536x864', '1536x864', '1536x864', '1536x864',
  // 2560x1440 2K (8% 权重)
  '2560x1440', '2560x1440', '2560x1440', '2560x1440',
  '2560x1440', '2560x1440', '2560x1440', '2560x1440',
  // 1440x900 MacBook (6% 权重)
  '1440x900', '1440x900', '1440x900', '1440x900', '1440x900', '1440x900',
  // 其他常见分辨率
  '1600x900', '1600x900', '1600x900', '1600x900',
  '1280x720', '1280x720', '1280x720', '1280x720',
  '1680x1050', '1680x1050', '1680x1050',
  '1920x1200', '1920x1200', '1920x1200',
  '1280x800', '1280x800',
  '1360x768', '1360x768',
  '1280x1024', '1280x1024',
  '3840x2160', '3840x2160', // 4K
  '2560x1600', // MacBook Pro
  '1440x960',  // MacBook
  '1024x768',
  '1400x1050',
  '1152x864',
];

export function parseResolution(resStr) {
  const [width, height] = resStr.split('x').map(Number);
  return { width, height };
}

export function getRandomResolution() {
  const resStr = allResolutions[Math.floor(Math.random() * allResolutions.length)];
  return parseResolution(resStr);
}

export function getRandomResolutionString() {
  return allResolutions[Math.floor(Math.random() * allResolutions.length)];
}

export const uniqueResolutions = [...new Set(allResolutions)];

export default { allResolutions, uniqueResolutions, getRandomResolution, getRandomResolutionString, parseResolution };
