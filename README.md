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

## License

MIT
