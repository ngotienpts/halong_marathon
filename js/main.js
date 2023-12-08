document.addEventListener("DOMContentLoaded", function () {
    var windowWidth = window.innerWidth;

    const app = {
        // su ly cac su kien
        handleEvent: function () {
            const _this = this;

            // hide cac element khi click ra ngoai
            // document.addEventListener("click", function (e) {

            // });
        },

        // scroll top
        scrollFunc: function () {
            const scrollY = window.scrollY;
        },

        // window scroll
        windowScroll: function () {
            var _this = this;
            window.onscroll = function () {
                // scroll top
                _this.scrollFunc();
            };
        },

        // khoi tao function start
        start: function () {
            // su ly cac su kien
            this.handleEvent();
            // window scroll
            this.windowScroll();
        },
    };

    app.start();
});
