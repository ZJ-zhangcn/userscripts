# Userscripts

个人浏览器用户脚本集合。

| 脚本名称 | 描述 |
| --- | --- |
| [Bookmarks 新标签页追加到最后](https://raw.githubusercontent.com/ZJ-zhangcn/userscripts/main/bookmarks-open-tab-at-end.user.js) | 让 bookmarks 页面中打开的书签默认出现在浏览器标签栏最后，避免新标签夹在 bookmarks 标签页和其他标签页中间。支持左键、Cmd/Ctrl/Shift + 左键、鼠标中键打开；编辑等卡片操作按钮不会被误当成打开书签。 |
| [LDStatus Pro 修正版](https://raw.githubusercontent.com/ZJ-zhangcn/userscripts/main/LDStatusPro.user.js) | 基于上游 LDStatusPro 的个人修正版，重点修复：已显示登录但数据可能来自旧缓存，重新登录后才刷新的问题；同时显示数据来源/更新时间，让手动刷新更彻底清缓存，并优化设置菜单文字完整展示。 |
| [Nodeseek Pro Safe](https://raw.githubusercontent.com/ZJ-zhangcn/userscripts/main/NodeseekProSafe.user.js) | 基于 Nodeseek Pro `1.0.8` 的个人安全精简版，保留 NodeSeek/DeepFlood 论坛体验增强功能；移除 AI 美化/跨域 AI API、NodeImage 图床上传、外部邮箱入口、侧边卡片通知轮询和 GreasyFork 反馈快捷入口。 |
| [YouTube Improvements Safe](https://raw.githubusercontent.com/ZJ-zhangcn/userscripts/main/YouTubeImprovementsSafe.user.js) | 基于 YouTube Improvements `1.1.5` 的个人安全精简版，保留 YouTube 布局、倍速、截图、画中画、循环播放、主题和广告标记等增强功能；移除第三方下载站引流、视频/Shorts 下载入口和相关高风险权限。 |
| [AC-baidu Redirect Safe](https://raw.githubusercontent.com/ZJ-zhangcn/userscripts/main/ACBaiduRedirectSafe.user.js) | 基于 AC-baidu `27.20` 的个人安全精简版，保留搜索结果去重定向、favicon、样式/双列、拦截规则和自动翻页；移除 `@connect *`、localhost/90dao/tujidu 作用域、远程设置页、GM 页面桥接和不可用 Lite CSS，并将 Less/Vue/样式资源固定到本仓库 Raw 副本；优化夜间模式配色，提升搜索结果正文/链接可读性。 |

安装 Tampermonkey 后，点击表格中的脚本名称即可打开 Raw 安装地址。

## License

MIT
