$(function () {

    // 实现显示隐藏的菜单
    $(".menu-a").mouseenter(function () {
        $(".inner-title").addClass("display-div");
    });
    $(".inner-title").mouseleave(function () {
        $(".inner-title").removeClass("display-div");
    });

    // 主界面轮播图片
    var $content_img=$(".content-img>img");

    $(".content-img>ul li").mouseenter(function () {
        $(this).css("backgroundColor","#358ff0");
        var $czuo_img=$(this);
        $content_img.fadeOut(300,function () {
            $content_img.attr("src",$czuo_img.find("img")[0].src);
        });
        $content_img.fadeIn(300);

    });
    $(".content-img>ul li").mouseleave(function () {
        $(this).css("backgroundColor","#fff");
    });


    $(".win7-a").mouseenter(function () {
        $(".win7").show();
        $(".winxp").hide();
        i_arrow($(this));
    });
    $(".winxp-a").mouseenter(function () {
        $(".winxp").show();
        $(".win7").hide();
        i_arrow($(this));
    });

    // hover标题切换下面显示

    $(".os-catagary-title a").mouseenter(function () {
        i_arrow($(this));
        var dd=$(this).index();
        $(".os-catagary-left ul").eq(dd).show().siblings().hide();
    });

    i_arrow($(".win7-a"));
    i_arrow($(".os-catagary-title a").eq(0));
    weixin_back();
})

// -------------------------------以下是抽离出的方法
function weixin_back() {
    // 监听滚动事件
    var $wei_back=$(".weixin-back");

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 500) {
            $wei_back.fadeIn();
        }
        else {
            $wei_back.fadeOut();
        }
    });
    // 点击返回头部
    $wei_back.click(function () {
        $('html, body').animate({
            scrollTop: $(".title").offset().top,
        }, 300);
    });
}
// 菜单下的小三角的恒定显示加hover颜色变化
function i_arrow(element) {
    element.css("color","#358ff0").siblings().css("color","#000");
    element.find("i").show().parent().siblings().find("i").hide();
    console.log(element);
}