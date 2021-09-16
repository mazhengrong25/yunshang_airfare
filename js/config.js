/*
 * @Description:全局配置文件
 * @Author: wish.WuJunLong
 * @Date: 2021-09-14 16:55:14
 * @LastEditTime: 2021-09-16 10:03:11
 * @LastEditors: wish.WuJunLong
 */
var config = (function ($) {
  $.airConfig = {
    BA: "http://192.168.0.35:6212/ba", // BA接口地址
    SQ: "http://192.168.0.35:6210/sq", // SQ接口地址
    queueplace: "http://192.168.0.35:6303/YATP_19/queueplace", // 出票地址
    configTypeList: ["BA", "SQ"], // 渠道选择列表
    header: [
      { name: "机票查询", url: "/" },
      { name: "编码查询", url: "/ticketCode.html" },
      { name: "操作日志", url: "#" },
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
    '<a class="header_logo" href="/">' +
    '<img src="/img/logo.png" alt="logo" />' +
    "</a>" +
    '<div class="header_tab_box">' +
    headerUrl +
    "</div>" +
    "</div>" +
    "</header>"
);
