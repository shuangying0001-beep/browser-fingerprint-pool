// 统一导出 UA 池与分辨率池
export * from './user-agents.mjs';
export * from './resolutions.mjs';

// Node 直接运行：自测
if (process.argv.includes('--selftest')) {
  import('./user-agents.mjs').then((ua) => {
    import('./resolutions.mjs').then((res) => {
      let pass = 0, fail = 0;
      const uaCount = ua.allUserAgents.length;
      const uaOk = uaCount >= 88;
      console.log(`[${uaOk ? 'PASS' : 'FAIL'}] userAgents count=${uaCount} (>=88)`);
      uaOk ? pass++ : fail++;

      const sample = ua.getRandomUserAgent();
      const sampleOk = typeof sample === 'string' && sample.startsWith('Mozilla/5.0');
      console.log(`[${sampleOk ? 'PASS' : 'FAIL'}] getRandomUserAgent: ${sample.slice(0, 40)}...`);
      sampleOk ? pass++ : fail++;

      const byType = ua.getUserAgentByType('firefox');
      const typeOk = byType.includes('Firefox');
      console.log(`[${typeOk ? 'PASS' : 'FAIL'}] getUserAgentByType(firefox): ${typeOk}`);
      typeOk ? pass++ : fail++;

      const resCount = res.allResolutions.length;
      const resOk = resCount >= 80;
      console.log(`[${resOk ? 'PASS' : 'FAIL'}] resolutions count=${resCount} (>=80)`);
      resOk ? pass++ : fail++;

      const r = res.getRandomResolution();
      const rOk = r.width > 0 && r.height > 0;
      console.log(`[${rOk ? 'PASS' : 'FAIL'}] getRandomResolution: ${JSON.stringify(r)}`);
      rOk ? pass++ : fail++;

      const p = res.parseResolution('1366x768');
      const pOk = p.width === 1366 && p.height === 768;
      console.log(`[${pOk ? 'PASS' : 'FAIL'}] parseResolution(1366x768): ${JSON.stringify(p)}`);
      pOk ? pass++ : fail++;

      console.log(`\n结果: ${pass} passed, ${fail} failed`);
      process.exit(fail ? 1 : 0);
    });
  });
}
