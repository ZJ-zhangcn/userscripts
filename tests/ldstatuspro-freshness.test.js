const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const script = fs.readFileSync(path.join(__dirname, '..', 'LDStatusPro.user.js'), 'utf8');

function between(start, end) {
  const i = script.indexOf(start);
  assert.notEqual(i, -1, `missing start marker: ${start}`);
  const j = script.indexOf(end, i);
  assert.notEqual(j, -1, `missing end marker: ${end}`);
  return script.slice(i, j);
}

assert.match(script, /@name\s+LDStatus Pro/);
assert.match(script, /@downloadURL\s+https:\/\/raw\.githubusercontent\.com\/ZJ-zhangcn\/userscripts\/main\/LDStatusPro\.user\.js/);
assert.match(script, /@updateURL\s+https:\/\/raw\.githubusercontent\.com\/ZJ-zhangcn\/userscripts\/main\/LDStatusPro\.user\.js/);

assert.match(script, /async refreshSession\(\)/, 'OAuthManager should have refreshSession()');
assert.match(script, /this\.oauth\.refreshSession\(\)/, 'logged-in startup should refresh OAuth session');
assert.match(script, /this\.leaderboard\?\.clearCache\(\)/, 'fresh login/session refresh should clear leaderboard cache');
assert.match(script, /_clearCloudRequirementsCache\(\)/, 'panel should expose cloud requirements cache clear helper');
assert.match(script, /this\._fetchCloudRequirements\(true\)/, 'manual fetch path should force cloud requirements refresh');

const forceRefresh = between('async forceRefresh(type = \'daily\')', '// 获取手动刷新剩余冷却时间');
assert.doesNotMatch(forceRefresh, /fromCache:\s*true/, 'manual leaderboard refresh must not silently return stale cache on failure');

console.log('ldstatuspro freshness assertions passed');
