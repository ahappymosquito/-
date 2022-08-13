// ==UserScript==
// @name         AAU校园网自动登录
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       kldxwz
// @match        http://210.45.176.11/*
// @grant        none
// ==/UserScript==

(function () {
   'use strict';
    var user="21115288"
    var password="034343"
    var newpage="https://www.baidu.com"
   window.onload = function () {
      document.querySelector('#edit_body > div.edit_row.ui-resizable-autohide > div.edit_loginBox.normal_box.random.loginuse.loginuse_pc.ui-resizable-autohide > form > input:nth-child(3)').value = user;
      document.querySelector('#edit_body > div.edit_row.ui-resizable-autohide > div.edit_loginBox.normal_box.random.loginuse.loginuse_pc.ui-resizable-autohide > form > input:nth-child(4)').value = password;
      document.querySelector('#edit_body > div.edit_row.ui-resizable-autohide > div.edit_loginBox.normal_box.random.loginuse.loginuse_pc.ui-resizable-autohide > form > input:nth-child(1)').click();
      //window.open(newpage, "_self").close();
   }
})();
