/*
 * @Description:全局配置文件
 * @Author: wish.WuJunLong
 * @Date: 2021-09-14 16:55:14
 * @LastEditTime: 2021-10-12 11:32:02
 * @LastEditors: wish.WuJunLong
 */
var baseUrl;
getObjectType();
function getObjectType() {
  if (localStorage.getItem("objectType") === "正式版") {
    baseUrl = "http://192.168.0.15";
  } else {
    baseUrl = "http://192.168.0.35";
  }
}

var config = (function ($) {
  $.airConfig = {
    BA: baseUrl + ":6212/ba", // BA接口地址
    SQ: baseUrl + ":6210/sq", // SQ接口地址
    queueplace: baseUrl + ":6303/YATP_19/queueplace", // 出票地址
    configTypeList: ["BA", "SQ"], // 渠道选择列表
    header: [
      // 导航栏地址
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
    '<div class="header_logo_box">' +
    '<a class="header_logo" href="/">' +
    '<img src="/img/logo.png" alt="logo" />' +
    // "<span>测试版</span>"+
    "</a>" +
    '<select class="ax-select" id="selectObjectType">' +
    '<option value="测试版">测试版</option>' +
    '<option value="正式版">正式版</option>' +
    "</select>" +
    "</div>" +
    '<div class="header_tab_box">' +
    headerUrl +
    "</div>" +
    "</div>" +
    "</header>"
);

if (localStorage.getItem("objectType")) {
  $("#selectObjectType").val(localStorage.getItem("objectType"));
}

$("#selectObjectType").on("change", function () {
  localStorage.setItem("objectType", $("#selectObjectType").val());

  getObjectType();
  location.reload();
});
