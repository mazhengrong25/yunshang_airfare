/*
 * @Description:全局配置文件
 * @Author: wish.WuJunLong
 * @Date: 2021-09-14 16:55:14
 * @LastEditTime: 2021-09-14 17:19:35
 * @LastEditors: wish.WuJunLong
 */
var config = (function ($) {
  $.airConfig = {
    BA: "http://192.168.0.35:6212/ba", // BA接口地址
    SQ: "http://192.168.0.35:6210/sq", // SQ接口地址
    queueplace: "http://192.168.0.35:6303/YATP_19/queueplace", // 出票地址
    configTypeList: ["BA", "SQ"],  // 渠道选择列表
  };
  return $;
})(window.config || {});
