/**
 * 基于 UA 判断设备情况
 * @return {[type]} [description]
 */
export function browserRedirect() {
    var browser = {
        info: function () {
            var ua = navigator.userAgent, app = navigator.appVersion;
            return { //移动终端浏览器版本信息
                //trident: ua.indexOf('Trident') > -1, //IE内核
                //presto: ua.indexOf('Presto') > -1, //opera内核
                webKit: ua.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                //gecko: ua.indexOf('Gecko') > -1 && ua.indexOf('KHTML') == -1, //火狐内核
                mobile: !!ua.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                ios: !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1, //android终端或uc浏览器
                iPhone: ua.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
                iPad: ua.indexOf('iPad') > -1, //是否iPad
                //webApp: ua.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
                platform: navigator.platform
            };
        }(),
        lang: (navigator.browserLanguage || navigator.language).toLowerCase()
    };
    if (browser.info.platform.toLowerCase().indexOf("win") >= 0 || browser.info.platform.toLowerCase().indexOf("mac") >= 0) {
        return "pc";
    } else if (browser.info.android) {
        return "android";
    } else if (browser.info.ios || browser.info.iPhone || browser.info.iPad) {
        return "ios";
    } else {
        return "";
    }
}

/**
 * 判断数据是否为json对象
 * @param  {[type]}  obj [description]
 * @return {Boolean}     [description]
 */
export function isJson(obj) {
    var isjson = typeof(obj) == "object" &&
        Object.prototype.toString.call(obj).toLowerCase() == "[object object]" &&
        !obj.length;

    return isjson;
}
