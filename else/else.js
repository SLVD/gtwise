(function ($) {

    window.IndexedDB = function () {
        var init = function () {
            return "xixi";
        }
        return {
            confirm: function (options) {
                console.log(options.int);
                console.log($);
                var s = init();
                return {
                    on: function (callback) {
                        if (callback && callback instanceof Function) {
                            callback(init());
                            return {
                                hide: function (callback) {
                                    callback("hide");
                                }
                            }
                        }
                    },
                    self: function (callback) {
                        if (callback && callback instanceof Function) {
                            callback("self");
                        }
                    }

                }
            }
        }
    }();

    // Echarts...
    window.Echarts = function () {
        var init = function (options) {
            options = $.extend({}, {
                "id": "echarts_dom_id", // 需要echarts图表的dom容器
                "color": "red",
            }, options);
            // console.log(options);
            var oMyChart_vob = echarts.init(document.getElementById(options.id));
            oMyChart_vob.off("click"); // 先移走点击事件（important!!!）
            return oMyChart_vob; // 返回echarts图表对象
        }
        var gererate = function (oEcharts_vob, oOption_vob) {
            console.log("gererate start...");
            oEcharts_vob.setOption(oOption_vob);
            window.addEventListener("resize", function () {
                oEcharts_vob.resize();
            });
        }
        return {
            config: function (options) {
                // console.log(options);
                // console.log(init(options));
                return {
                    set: function (callback) {
                        var oEcharts_vob = init(options);

                        var option = {
                            // 全局调色盘。
                            color: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae'],
                            title: {
                                text: 'ECharts 入门示例'
                            },
                            tooltip: {},
                            legend: {
                                data: ['销量']
                            },
                            xAxis: {
                                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
                                // itemStyle: {
                                //     color: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae'],

                                // }
                            },
                            yAxis: {},
                            series: [{
                                name: '销量',
                                type: 'bar',
                                data: [],

                            }]
                        }
                        gererate(oEcharts_vob, option);
                        console.log(oEcharts_vob, option);
                        callback(oEcharts_vob, option);
                    }
                }
            }
        }

    }();


})(jQuery);



Echarts.config({
    "id": "echarts_dom_id",
    "message": "message self",
}).set(function (e, f) {
    $.getJSON("./else.json", function (data) {
        // console.log(data.data);
        // console.log(e.series[0].data = data.data);
        console.log(e);
        console.log(f);
    })
});


/**
 *  24小时制扩展。例子：var time2 = new Date().Format("yyyy-MM-dd HH:mm:ss"); 
 */
Date.prototype.Format = function (format) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "H+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(format)) format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return format;
}

// "use strict"


var date = new Date().Format("yyyy-MM-dd");
console.log(date);

console.log(2 + 8 * 1);