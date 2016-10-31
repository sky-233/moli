/**
 * 创建：廖伟军
 * 时间：2016年8月24日01:26:37
 * 说明：默认加载的效果
 * 功能模块：
 *          toggleMenu  全局左侧菜单
 *          goTop       回顶
 *          leftMenu    左上角
 */
$(function () {
    nav();
    gotop();
    leftTop();
    setTimeout(function () {
        NavBarBottom();
    }, 1)
    heightAndTop();
    $(window).resize(heightAndTop);
})
/*
 * 导航
 */
function nav() {
    var $btnMenu = $('[data-menu="#navMenu"]'),
        $menuBox = $($btnMenu.attr('data-menu'));
    $btnMenu.off('click').on('click', function () {
        $menuBox.toggleClass('active').prepend('<a href="javascript:void(0);" class="bg"></a>');
        $menuBox.children('.bg').off('click').on('click', function () {
            $menuBox.removeClass('active');
            $(this).remove();
        })
    });

}
/*
 * 返回顶部
 */
function gotop() {
    $(window).scroll(function () {
        var scrollValue = $(window).scrollTop();
        scrollValue > 200 ? $('#gotop').fadeIn() : $('#gotop').fadeOut();
    });
    $("#gotop").click(function () {
        var speed = 200;
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
    });
}
/*
 * 左上角的通用弹窗
 */
function leftTop() {
    var _btn = $('[data-toggletype="page"]');

    _btn.click(function () {
        var _content = $('#' + $(this).attr('data-togglebox'));


        _content.toggleClass('toggle-hide');
        if (_content.attr('data-bodyscroll') && _content.attr('data-pageScroll', 'no')) {
            $('body').toggleClass('oyh');
        }
    })
    $('.btnClose').click(function () {
        $(this).parents('.toggle-page').toggleClass('toggle-hide');
        if (_content.attr('data-bodyscroll') && _content.attr('data-pageScroll', 'no')) {
            $('body').toggleClass('oyh');
        }
    })
}
/*
 * 底部导航，通用，作用是平分ul里的li
 */
function NavBarBottom() {
    var li = $('.navBar-bottom >ul>li');
    li.outerWidth(li.parent('ul').width() / li.length);
}

function heightAndTop() {
    setTimeout(function () {
        /*主体高度设定，减去上导航*/
        $('.main').css({
            'margin-top': $('.navBar-top').height(),
        })

        /*弹出层的高度设定*/

        $('.toggle-page').css({
            'top': $('.navBar-top').height(),
            'height': $(window).height() - $('.navBar-top').height()
        });

    }, 1)

}