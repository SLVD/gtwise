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
        var init = function (options) { // 创建一个ECharts实例
            options = $.extend({}, {
                "id": "echarts_dom_id", // 需要echarts图表的dom容器
                "renderer": "svg",
            }, options);
            console.log(options);
            var myChart = echarts.init(document.getElementById(options.id), null, {
                renderer: options.renderer
            });
            myChart.off("click"); // 先移走点击事件（important!!!）
            return myChart; // 返回echarts图表对象
        }
        var gererate = function (myChart, option) {
            console.log("gererate start...");
            myChart.setOption(option);
            window.addEventListener("resize", function () {
                myChart.resize();
            });
        }
        return {
            config: function (options) {
                var myChart = init(options);
                return {
                    set: function (callback) {
                        gererate(myChart, options.option);
                        // console.log(myChart, option);
                        callback(myChart);
                    }
                }
            }
        }

    }();


})(jQuery);

var fnDynamicData_fob = function (oMyChart_vob) {
    oMyChart_vob.showLoading();
    console.log(111);
    setTimeout(() => {
        $.getJSON("./else.json", function (result) {
            oMyChart_vob.hideLoading();
            oMyChart_vob.setOption({
                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
                },
                series: [{
                    name: '销量',
                    data: result[0].data
                }]
            });
        });
    }, 3000);
}

var fnDynamicData2_fob = function (oMyChart_vob) {
    oMyChart_vob.showLoading();
    console.log(222);
    setTimeout(() => {
        $.getJSON("./else.json", function (result) {
            console.log(result[1]);
            oMyChart_vob.hideLoading();
            oMyChart_vob.setOption({
                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
                },
                series: [{
                    name: '销量',
                    data: result[1].data2
                }]
            });
        });
    }, 3000);
}

var oXS_vob; // 销售ECharts

Echarts.config({
    "id": "echarts_dom_id",
    "message": "message self",
    "option": {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data: ['销量']
        },
        xAxis: {
            data: [],
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [],
        }]
    }
}).set(function (myChart) {
    oXS_vob = myChart;
    fnDynamicData_fob(myChart);
});


setTimeout(() => {
    console.log(oXS_vob);
    fnDynamicData2_fob(oXS_vob);
}, 6000);

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
// console.log(date);

// console.log(2 + 8 * 1);