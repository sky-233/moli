$(function () {
    var AnalyzerTab = new Swiper('.analyzer-tab', {
        loop: true,
        pagination: '.analyzer-pagination',
        paginationClickable: true,
        paginationBulletRender: function (index, className) {
            switch (index) {
                case 0: name = '加点'; break;
                case 1: name = '基础'; break;
                default: name = '';
            }
            return '<span class="' + className + '">' + name + '</span>';
        },
        autoHeight: true,
        observer: true,
        observeParents: true,
    })
    //算档器，结果
    var AnalyzerResult = new Swiper('.analyzer-result', {
        loop: true,
        pagination: '.analyzer-result-pagination',
        paginationClickable: true,
        paginationBulletRender: function (index, className) {
            switch (index) {
                case 0: name = '调档概率'; break;
                case 1: name = '可能结果'; break;
                default: name = '';
            }
            return '<span class="' + className + '">' + name + '</span>';
        },
        observer: true,
        observeParents: true,
    })

    //分类点击加上active
    var selectCateBtn = $('.select-pet-cate-list >li >button:not(".btnClose")')
    selectCateBtn.off('click').on('click', function () {
        selectCateBtn.removeClass('active');
        $(this).addClass('active');
    })
})