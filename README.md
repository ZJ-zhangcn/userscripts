# Userscripts

个人浏览器用户脚本集合。

## Bookmarks 新标签页追加到最后

让 bookmarks 页面中打开的书签默认出现在浏览器标签栏最后，避免新标签夹在 bookmarks 标签页和其他标签页中间。

### 安装

安装 Tampermonkey 后，打开下面的 Raw 地址：

<https://raw.githubusercontent.com/ZJ-zhangcn/userscripts/main/bookmarks-open-tab-at-end.user.js>

Tampermonkey 会自动识别并弹出安装页面。

### 作用范围

当前脚本匹配：

- `https://bookmarks.zhangjiner.com/*`
- `https://bookmarks.942645.xyz/*`

### 行为

- 左键点击 bookmarks 书签卡片：打开新标签并切换过去，新标签位于标签栏最后。
- Cmd/Ctrl/Shift + 左键：后台打开，新标签位于标签栏最后。
- 鼠标中键：后台打开，新标签位于标签栏最后。

## LDStatus Pro 修正版

基于上游 LDStatusPro 的个人修正版，重点修复：已显示登录但数据可能来自旧缓存，重新登录后才刷新的问题；同时显示数据来源/更新时间，让手动刷新更彻底清缓存，并优化设置菜单文字完整展示。

Raw 安装地址：

<https://raw.githubusercontent.com/ZJ-zhangcn/userscripts/main/LDStatusPro.user.js>

## Nodeseek Pro Safe

基于 Nodeseek Pro `1.0.8` 的个人安全精简版，保留 NodeSeek/DeepFlood 论坛体验增强功能，并移除更敏感或外部依赖较强的功能：

- 移除 AI 美化模块和跨域 AI API 请求。
- 移除 NodeImage 图床上传助手。
- 移除外部邮箱入口。
- 移除侧边卡片通知轮询。
- 移除 GreasyFork 反馈快捷入口。

Raw 安装地址：

<https://raw.githubusercontent.com/ZJ-zhangcn/userscripts/main/NodeseekProSafe.user.js>

## YouTube Improvements Safe

基于 YouTube Improvements `1.1.5` 的个人安全精简版，保留 YouTube 布局、倍速、截图、画中画、循环播放、主题和广告标记等增强功能，并移除引流/下载相关能力：

- 移除第三方下载站引流入口和 `@antifeature referral-link`。
- 移除视频下载按钮、Shorts 下载按钮和相关设置项。
- 移除未使用的高风险权限：`GM_xmlhttpRequest`、`GM_download`、`GM_setClipboard`、`GM_deleteValue`。
- 移除打开第三方标签页权限：`GM_openInTab` / `GM.openInTab`。

Raw 安装地址：

<https://raw.githubusercontent.com/ZJ-zhangcn/userscripts/main/YouTubeImprovementsSafe.user.js>

## AC-baidu Redirect Safe

基于 AC-baidu `27.20` 的个人安全精简版，保留搜索结果去重定向、favicon、样式/双列、拦截规则和自动翻页等核心功能，并收紧外部依赖和运行范围：

- 移除 `@connect *`，仅保留搜索引擎、favicon 与本仓库 Raw 资源所需连接。
- 移除 `localhost`、`90dao.com`、`tujidu.com` 页面作用域。
- 移除 90dao/tujidu 远程设置页、GM 页面桥接和相关探测请求。
- 移除不可用的 GitCode Lite CSS 资源和对应开关。
- 将 Less/Vue 与样式资源固定到本仓库 Raw 副本，降低第三方供应链漂移风险。

Raw 安装地址：

<https://raw.githubusercontent.com/ZJ-zhangcn/userscripts/main/ACBaiduRedirectSafe.user.js>

## License

MIT
