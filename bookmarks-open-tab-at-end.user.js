// ==UserScript==
// @name         Bookmarks 新标签页追加到最后
// @namespace    https://github.com/ZJ-zhangcn/userscripts
// @version      1.0.1
// @description  让 bookmarks 中打开的书签默认出现在浏览器标签栏最后，并避免编辑等卡片操作按钮误触发
// @author       ZJ-zhangcn
// @icon         https://bookmarks.942645.xyz/assets/icon-Cox8aGIg.svg
// @match        https://bookmarks.zhangjiner.com/*
// @match        https://bookmarks.942645.xyz/*
// @grant        GM_openInTab
// @run-at       document-start
// @license      MIT
// @homepageURL  https://github.com/ZJ-zhangcn/userscripts
// @supportURL   https://github.com/ZJ-zhangcn/userscripts/issues
// @downloadURL  https://raw.githubusercontent.com/ZJ-zhangcn/userscripts/main/bookmarks-open-tab-at-end.user.js
// @updateURL    https://raw.githubusercontent.com/ZJ-zhangcn/userscripts/main/bookmarks-open-tab-at-end.user.js
// ==/UserScript==

(function () {
  'use strict';

  function isHttpUrl(url) {
    return /^https?:\/\//i.test(String(url || ''));
  }

  function isCardActionControl(target, anchor) {
    const actionSelector = [
      'button',
      '[role="button"]',
      'input',
      'select',
      'textarea',
      'summary',
      '[contenteditable="true"]',
      '[data-action]',
      '[data-testid*="edit" i]',
      '[aria-label*="编辑" i]',
      '[aria-label*="edit" i]',
      '[title*="编辑" i]',
      '[title*="edit" i]',
      '.edit',
      '.edit-button',
      '.edit-btn',
      '.action',
      '.actions',
      '.card-action',
      '.card-actions',
      '.bookmark-action',
      '.bookmark-actions'
    ].join(',');

    const actionControl = target.closest?.(actionSelector);
    return Boolean(actionControl && anchor.contains(actionControl));
  }

  function isBookmarkLink(anchor, eventTarget) {
    if (!anchor) return false;
    if (anchor.target !== '_blank') return false;
    if (!isHttpUrl(anchor.href)) return false;
    if (eventTarget && isCardActionControl(eventTarget, anchor)) return false;

    // 只接管 bookmarks 页面里的书签/搜索结果链接；避免误伤设置页里的普通外链。
    return Boolean(
      anchor.classList.contains('bookmark-card') ||
      anchor.classList.contains('search-result-item') ||
      anchor.classList.contains('insight-card')
    );
  }

  function openAtEnd(url, active) {
    GM_openInTab(url, {
      active,
      insert: false,
      setParent: false
    });
  }

  document.addEventListener('click', event => {
    const anchor = event.target.closest?.('a[href]');
    if (!isBookmarkLink(anchor, event.target)) return;
    if (event.button !== 0) return;

    event.preventDefault();
    event.stopPropagation();

    const openInBackground = event.metaKey || event.ctrlKey || event.shiftKey;
    openAtEnd(anchor.href, !openInBackground);
  }, true);

  document.addEventListener('auxclick', event => {
    const anchor = event.target.closest?.('a[href]');
    if (!isBookmarkLink(anchor, event.target)) return;
    if (event.button !== 1) return;

    event.preventDefault();
    event.stopPropagation();
    openAtEnd(anchor.href, false);
  }, true);
})();
