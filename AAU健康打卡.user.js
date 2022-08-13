// ==UserScript==
// @name         AAU健康打卡
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       kldxwz
// @match        http://fresh.ahau.edu.cn/yxxt-v5/web/jkxxtb/tbJkxx.zf
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ahau.edu.cn
// @grant        none
// ==/UserScript==

(function () {
   'use strict';
     var head = document.head || document.getElementsByTagName('head')[0];
     var script = document.createElement('script');
     script.innerHTML = '$(".get_address").on("click", function () {$("#dqszdmc").val("安徽省合肥市蜀山区");$("#dqszddm").val("340100");})';
     head.appendChild(script);
})();