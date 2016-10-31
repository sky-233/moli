/**
 * 创建：廖伟军
 * 时间：2016年8月24日01:26:37
 * 说明：/Home/Index所用到的js
 * 功能模块：loading(加载过渡) , lightbox(图片放大)
 */
$(function () {
    //首页轮播初始化
    var indexSlide = new Swiper('.sliderbar .swiper-container', {
        loop: true,
        autoplay: 5000,
        pagination: '.swiper-pagination',
    })

    var _ul = $('.nav-tabs-justified');
    var _li = _ul.children();
    if (_ul) {
        _li.width(_ul.width() / _li.length);
    }
})