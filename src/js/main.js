require.config({
    paths: {
        jquery: "./js/jquery-2.1.1"
    }
})

require(['jquery', 'define'], function($, define) {
    define.add();
})