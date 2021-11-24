/*
 * @Description:全局配置文件
 * @Author: wish.WuJunLong
 * @Date: 2021-09-14 16:55:14
 * @LastEditTime: 2021-11-24 09:30:53
 * @LastEditors: wish.WuJunLong
 */

var isTest = true; // true测试 false正式

var baseUrl;

if (isTest) {
  // 测试地址
  baseUrl = "http://192.168.0.35:6601";
} else {
  // 正式地址
  baseUrl = "http://192.168.0.15:6601";
}

var config = (function ($) {
  $.airConfig = {
    BA: baseUrl + "/ba", // BA接口地址
    SQ: baseUrl + "/sq", // SQ接口地址
    queueplace: baseUrl + "/YATP_19/queueplace", // 出票地址
    configTypeList: ["BA", "SQ"], // 渠道选择列表
    header: [
      // 导航栏地址
      { name: "机票查询", url: "/" },
      { name: "编码查询", url: "/ticketCode.html" },
      { name: "操作日志", url: "/ticketLog.html" },
    ],
  };
  return $;
})(window.config || {});

// 全局添加导航栏
var headerUrl = "";
for (var i = 0; i < config.airConfig.header.length; i++) {
  headerUrl +=
    '<a href="' +
    config.airConfig.header[i].url +
    '" class="' +
    (config.airConfig.header[i].url === window.location.pathname ? "selected" : "") +
    '">' +
    config.airConfig.header[i].name +
    "</a>";
}
$(".body").prepend(
  "<header>" +
    '<div class="tab_header">' +
    '<div class="header_logo_box">' +
    '<a class="header_logo" href="/">' +
    '<img src="/img/logo.png" alt="logo" />' +
    "</a>" +
    (isTest ? "测试版" : "正式版") +
    "</div>" +
    '<div class="header_tab_box">' +
    headerUrl +
    "</div>" +
    "</div>" +
    "</header>"
);
