/**
 * 页面辅助 - 提示卡片、关键词徽章与访问说明
 * 不依赖第三方库，直接操作 DOM
 */
(function () {
  'use strict';

  // 配置
  const CONFIG = {
    siteUrl: 'https://webm-leyusports.com.cn',
    keyword: '乐鱼体育',
    prefix: 'bfb7dd6a014c1956'
  };

  // 创建提示卡片
  function createTipCard() {
    const card = document.createElement('div');
    card.style.cssText = 'position:fixed;top:20px;right:20px;z-index:9999;max-width:320px;background:#fff;border:1px solid #e0e0e0;border-radius:12px;padding:16px 20px;box-shadow:0 8px 24px rgba(0,0,0,0.12);font-family:sans-serif;font-size:14px;line-height:1.6;color:#333;transition:opacity 0.3s ease;';
    card.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
        <span style="font-weight:600;font-size:16px;">📌 访问提示</span>
        <button id="closeTipBtn" style="background:none;border:none;cursor:pointer;font-size:18px;color:#999;padding:0 4px;">✕</button>
      </div>
      <p style="margin:0 0 6px;">您正在访问 <strong>${CONFIG.siteUrl}</strong></p>
      <p style="margin:0 0 6px;">核心关键词：<span id="keywordBadge" style="display:inline-block;background:#1e88e5;color:#fff;border-radius:4px;padding:2px 10px;font-weight:500;">${CONFIG.keyword}</span></p>
      <p style="margin:0;color:#666;font-size:13px;">本页仅作展示用途，请放心浏览。</p>
    `;
    document.body.appendChild(card);
    // 关闭按钮
    const closeBtn = document.getElementById('closeTipBtn');
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        card.style.opacity = '0';
        setTimeout(() => { if (card.parentNode) card.parentNode.removeChild(card); }, 300);
      });
    }
  }

  // 创建关键词徽章（浮动小标签）
  function createKeywordBadges() {
    const badgeContainer = document.createElement('div');
    badgeContainer.style.cssText = 'position:fixed;bottom:24px;left:24px;z-index:9999;display:flex;flex-wrap:wrap;gap:10px;max-width:300px;';
    const badgeTexts = [CONFIG.keyword, '体育资讯', '赛事动态', '安全提示'];
    badgeTexts.forEach(function (text) {
      const span = document.createElement('span');
      span.textContent = text;
      span.style.cssText = 'display:inline-block;background:#f5f5f5;border:1px solid #ddd;border-radius:20px;padding:4px 14px;font-size:13px;font-family:sans-serif;color:#444;box-shadow:0 2px 6px rgba(0,0,0,0.05);';
      badgeContainer.appendChild(span);
    });
    document.body.appendChild(badgeContainer);
  }

  // 页面访问说明（控制台提示）
  function showAccessInfo() {
    console.log(`%c📍 欢迎访问 ${CONFIG.siteUrl}`, 'font-size:16px;font-weight:bold;color:#1e88e5;');
    console.log(`%c🔑 关键词: ${CONFIG.keyword}`, 'color:#666;');
    console.log(`%c⚡ 本页辅助脚本已加载 (种子: ${CONFIG.prefix})`, 'color:#999;');
  }

  // 统一初始化
  function init() {
    // 等待 DOM 就绪
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () {
        createTipCard();
        createKeywordBadges();
        showAccessInfo();
      });
    } else {
      createTipCard();
      createKeywordBadges();
      showAccessInfo();
    }
  }

  init();
})();