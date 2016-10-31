/**
 * 创建：廖伟军
 * 时间：2016年8月24日01:26:37
 * 说明：模块配置文件，请每添加一个插件就写一些下面的说明，以便后用
 * 功能模块：
 *          jquery  
 *          bootstrap
 *          swiper      轮播图
 *          swipebox    图片放大预览
 */
requirejs.config({
    baseUrl: '/Scripts',
    paths: {
        'jquery': 'jquery-1.9.1.min',
        'bootstrap': 'bootstrap.min',
    },
    //依赖
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery.fn.popover'
        },
    }
});