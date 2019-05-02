// 音乐暂停+图片src切换
$(".mStop").click(function(){
    $(".music img").removeAttr("src").attr("src","img/musicOff.png").css("animation","stop 1s linear infinite");
    $(".mStop").css("z-index","10");
    $(".mStar").css("z-index","12");
})
// 音乐开始+图片src切换
$(".mStar").click(function(){
    $(".music img").removeAttr("src").attr("src","img/musicStar.png").css("animation","mRotate 2s linear infinite");
    $(".mStar").css("z-index","11");
    $(".mStop").css("z-index","12");
});
// 页面加载完毕 首屏动画
window.onload=function (ev) {
    // title字体大小动态闪烁
    setTimeout(function(){
        setInterval(function(){
            $(".section .content li:nth-child(1) .conOneSecondTitle").css({"font-size":"0.36rem"});
            setTimeout(function(){
                $(".section .content li:nth-child(1) .conOneSecondTitle").css({"font-size":"0.38rem"});
            },500)
        },1000)
    },2300)
    setTimeout(function(){
        setInterval(function(){
            $(".section .content li:nth-child(2) .conOneSecondImgTitle").css({"font-size":"0.4rem"});
            setTimeout(function(){
                $(".section .content li:nth-child(2) .conOneSecondImgTitle").css({"font-size":"0.5rem"});
            },500)
        },1000)
    },1500)
    // 雪花纷飞
    new snow({
        el:document.getElementsByClassName("snow")[0].children[0],
        bd:document.getElementsByTagName("body")[0]
    });
    new snow({
        el:document.getElementsByClassName("snow")[0].children[1],
        bd:document.getElementsByTagName("body")[0]
    })
    new snow({
        el:document.getElementsByClassName("snow")[0].children[2],
        bd:document.getElementsByTagName("body")[0]
    })
    new snow({
        el:document.getElementsByClassName("snow")[0].children[3],
        bd:document.getElementsByTagName("body")[0]
    })
    new snow({
        el:document.getElementsByClassName("snow")[0].children[4],
        bd:document.getElementsByTagName("body")[0]
    })
    new snow({
        el:document.getElementsByClassName("snow")[0].children[5],
        bd:document.getElementsByTagName("body")[0]
    })
    new snow({
        el:document.getElementsByClassName("snow")[0].children[6],
        bd:document.getElementsByTagName("body")[0]
    })
    new snow({
        el:document.getElementsByClassName("snow")[0].children[7],
        bd:document.getElementsByTagName("body")[0]
    })
    new snow({
        el:document.getElementsByClassName("snow")[0].children[8],
        bd:document.getElementsByTagName("body")[0]
    })
    new snow({
        el:document.getElementsByClassName("snow")[0].children[9],
        bd:document.getElementsByTagName("body")[0]
    })
    // 第四页面top1图动画
        setInterval(function(){
            $(".content li:nth-child(4) .centerContent .conFourFirstBox .conFourFirstBoxUp img").animate({"width":"1.3rem","opacity":".6"},2000,function(){
                $(".content li:nth-child(4) .centerContent .conFourFirstBox .conFourFirstBoxUp img").animate({
                    "width":"1.5rem",
                    "opacity":"1"
                },2000)
            })
        },2000)
    //第七页抽奖动画
        $(".content li:nth-child(7) .centerContent .centerContentImg .three img:nth-child(2)").click(function(){
            $(".content li:nth-child(7) .centerContent .centerContentImg .three img:nth-child(1)").removeAttr("class","luckDraw")
                setTimeout(function(){
                    $(".content li:nth-child(7) .centerContent .centerContentImg .three img:nth-child(1)").attr("class","luckDraw")
                },100)
        })
}
