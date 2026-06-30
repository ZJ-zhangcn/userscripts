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
assert.match(script, /@version\s+3\.9\.0\.3-zj\.3/, 'local patch version should be bumped after settings readability UI changes');
assert.match(script, /@description\s+.*设置文字完整展示/, 'metadata description should mention readable settings UI');
assert.match(script, /@downloadURL\s+https:\/\/raw\.githubusercontent\.com\/ZJ-zhangcn\/userscripts\/main\/LDStatusPro\.user\.js/);
assert.match(script, /@updateURL\s+https:\/\/raw\.githubusercontent\.com\/ZJ-zhangcn\/userscripts\/main\/LDStatusPro\.user\.js/);

assert.match(script, /async refreshSession\(\)/, 'OAuthManager should have refreshSession()');
assert.match(script, /this\.oauth\.refreshSession\(\)/, 'logged-in startup should refresh OAuth session');
assert.match(script, /this\.leaderboard\?\.clearCache\(\)/, 'fresh login/session refresh should clear leaderboard cache');
assert.match(script, /_clearCloudRequirementsCache\(\)/, 'panel should expose cloud requirements cache clear helper');
assert.match(script, /this\._fetchCloudRequirements\(true\)/, 'manual fetch path should force cloud requirements refresh');
assert.match(script, /_prepareForceRefresh\(\)/, 'panel should centralize force-refresh cache clearing');
assert.match(script, /this\.fetch\(\{\s*forceRefresh:\s*true\s*\}\)/, 'header refresh button should run a true force refresh');
assert.match(script, /_renderDataMeta\(/, 'requirements renderer should show data source and update time');
assert.match(script, /ldsp-data-meta/, 'data freshness UI should have stable CSS class');
assert.match(script, /_withMeta\(data, \{\s*source:\s*'network'/, 'leaderboard network data should be marked as network source');
assert.match(script, /source:\s*'fallback-cache'/, 'leaderboard fallback cache should be visibly marked');

const settingsCss = between('.ldsp-settings-menu{', '#ldsp-panel.collapsed .ldsp-settings-menu');
assert.match(settingsCss, /width:min\(380px,calc\(100vw - 24px\)\)/, 'settings menu should use a wider readable width');
assert.match(settingsCss, /\.ldsp-settings-nav\{[^}]*flex-direction:column/, 'settings root items should use vertical card layout');
assert.match(settingsCss, /\.ldsp-settings-nav-main\{[^}]*white-space:normal/, 'settings root item labels should wrap instead of ellipsizing');
assert.match(settingsCss, /\.ldsp-settings-nav-value\{[^}]*align-self:flex-start/, 'settings values should render as their own badge line');
assert.doesNotMatch(settingsCss, /\.ldsp-settings-nav-main\{[^}]*text-overflow:ellipsis/, 'settings root labels should not be truncated');
assert.doesNotMatch(settingsCss, /\.ldsp-settings-nav-value\{[^}]*text-overflow:ellipsis/, 'settings values should not be truncated');
assert.match(settingsCss, /\.ldsp-settings-option-desc\{[^}]*-webkit-line-clamp:2/, 'settings option descriptions should allow readable two-line wrapping');

const forceRefresh = between('async forceRefresh(type = \'daily\')', '// 获取手动刷新剩余冷却时间');
assert.doesNotMatch(forceRefresh, /fromCache:\s*true/, 'manual leaderboard refresh must not silently return stale cache on failure');
assert.match(forceRefresh, /this\.cache\.delete\(key\)/, 'manual leaderboard refresh should clear old cache before network request');

console.log('ldstatuspro freshness assertions passed');
