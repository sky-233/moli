/**
 * 一些组件的定义，比如css做不了的设置，全局js效果
 * 现有：
 */
$(function () {
    navbarScroll();
    quickEntry();
})

function navbarScroll() {


    var nScrollTop = $(window).scrollTop();
    var pic_h = $('#headerPic').height() - 200;
    //var pic_h = 400;
    if (nScrollTop > pic_h) {
        $('#mainNavbar').addClass('main-navbar-fixed');
    } else {
        $('#mainNavbar').removeClass('main-navbar-fixed');
    }

    $(document).scroll(function () {
        nScrollTop = $(window).scrollTop();
        var topbar = $('.ml-navbar').height();
        if (nScrollTop > pic_h) {
            $('#mainNavbar').addClass('main-navbar-fixed');
            $('#subContainer').removeClass('npl').addClass('container');
            $('#main').css({
                'padding-top': '60px'
            })

        } else {
            $('#mainNavbar').removeClass('main-navbar-fixed');
            $('#subContainer').addClass('npl').removeClass('container');
            $('#main').css({
                'padding-top': '15px'
            })
        }
    })
}

function quickEntry() {
    var btnToggle = $('[data-toggletype="toggle-side"]');
    btnToggle.click(function () {
        var quickEntry = $($(this).attr('data-togglebox'));

        quickEntry.toggleClass('active');
    })
}


$(function () {
    if ($(window).innerHeight() - $('.footer').outerHeight() > $('body').height()) {
        var offset = $(window).innerHeight() - $('body').height();
        $('div.control').css({
            'min-height': $('div.control').outerHeight() + offset + 'px'
        });
        $('.footer').css({
            'position': 'fixed',
            'bottom': '0',
            'left': '0',
            'right': '0',
        });
    }
    var reset = false;
    $(document).scroll(function () {
        if (reset)
            return;
        $('div.control').css({
            'min-height': 'auto'
        });
        $('.footer').css({
            'position': 'static',
            'bottom': 'auto',
            'left': 'auto',
            'right': 'auto',
        });
        reset = true;
    })
});