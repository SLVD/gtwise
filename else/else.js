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
})(jQuery);


IndexedDB.confirm({
    "int": "int",
    "string": "string",
    "flag": true,
    "true": true,
    "false": false,
}).self(function (e) {
    console.log(e);
});