$(document).ready(function () {
    if (screen.width <= 640) {
        document.documentElement.style.fontSize = document.documentElement.clientWidth / 900 * 100 + 'px';
    } else {
        document.documentElement.style.fontSize = document.documentElement.clientWidth / 1920 * 100 + 'px';
    }
    window.onresize = () => {
        // 通过js去控制
        if (screen.width <= 640) {
            document.documentElement.style.fontSize = document.documentElement.clientWidth / 900 * 100 + 'px';
        } else {
            document.documentElement.style.fontSize = document.documentElement.clientWidth / 1920 * 100 + 'px';
        }
    }
    var mySwiper = new Swiper('.brandswiper', {
        on: {
            slideChange: function () {
                //alert('改变了，activeIndex为' + this.activeIndex);
                // if (this.activeIndex == 1) {
                //     $("#brands .arrows .prev").show();
                //     $("#brands .arrows .next").hide();
                // }
                // if (this.activeIndex == 0) {
                //     $("#brands .arrows .prev").hide();
                //     $("#brands .arrows .next").show();
                // }
            },
        }
    })
    var ceoswiper = new Swiper('.ceoswiper', {
        on: {
            slideChange: function () {
            },
        }
    })
    $("#brands .arrows .next").click(function () {
        mySwiper.slideNext();
        // $(this).hide();
        // $("#brands .arrows .prev").show();
    })
    $("#brands .arrows .prev").click(function () {
        mySwiper.slidePrev();
        // $(this).hide();
        // $("#brands .arrows .next").show();
    })

    $("#mobile_founding .next").click(function () {
        ceoswiper.slideNext();
    })
    $("#mobile_founding .prev").click(function () {
        ceoswiper.slidePrev();
    })
    $("#head").hover(() => {
        $("#head .desc").hide();
        $("#head .zhdesc").show();
    }, () => {
        $("#head .zhdesc").hide();
        $("#head .desc").show();
    })

    $("#head .brandlistBox .brandlist ul li").hover(
        function () {
            $(this).children(".arrow").show();
            $("#head .brandlistBox .brandimg").attr("src", "images/brandlist/" + $(this).text() + ".jpg")
        }, function () {
            $(this).children(".arrow").hide();
            $("#head .brandlistBox .brandimg").attr("src", "");
        })


    $("#head .menu span.brand").hover(function () {
        let box = $("#head .brandlistBox");
        let span = $("#head .menu span");

        box.show();
        span.css("color", "#999999");
        $(this).css("color", "black");
        $("#head .logo").css("color", "black");

    })

    $("#head .brandlistBox").hover(null, function () {
        let span = $("#head .menu span");
        span.css("color", "white");
        $(this).hide();
        $("#head .logo").css("color", "white");
    })

    $("#brands .swiper .swiper-wrapper .brand-slide .brand").hover(
        function () {
            $(this).children(".more").css("color", "white");
            $(this).children(".more").css("background-color", "black");
            $(this).children(".more").text("查看更多");
            //$(this).css("transform", "scale(1.02,1.02)");
            $(this).children("img").stop();
            $(this).children("img").animate({

                width: "110%",
                height: "110%",
                top: "-5%",
                left: "-5%",

            }, 2500);
        }, function () {
            $(this).children(".more").css("color", "black");
            $(this).children(".more").css("background-color", "white");
            $(this).children(".more").text("Find more");
            $(this).children("img").stop();

            $(this).children("img").animate({

                width: "100%",
                height: "100%",
                top: 0,
                left: 0,

            }, 2500);

        })

    $("#introduce").hover(
        function () {
            $("#introduce .box .item .introDesc").css("display", "none");
            $("#introduce .box .item .zhintroDesc").css("display", "block");
        }, function () {
            $("#introduce .box .item .introDesc").css("display", "block");
            $("#introduce .box .item .zhintroDesc").css("display", "none");
        })

    $("#head .logo").click(() => {
        location.href = "index.html"
    })

    $("#head .menu .news").click(() => {
        location.href = "news.html"
    })

    $("#head .menu .contactus").click(() => {
        location.href = "contactus.html"
    })

    if (document.getElementById("mobile_head_banner")) {
        document.getElementById("mobile_head_banner").addEventListener("touchstart", function () {
            $("#mobile_head_banner .desc").hide();
            $("#mobile_head_banner .zhdesc").show();
        });
        document.getElementById("mobile_head_banner").addEventListener("touchend", function () {
            $("#mobile_head_banner .zhdesc").hide();
            $("#mobile_head_banner .desc").show();
        });
    }

    // $("#mobile_brands .brand").each(function(i){
    //     this.addEventListener("touchstart", function(){
    //         $(this).children(".more").css("color", "white");
    //         $(this).children(".more").css("background-color", "black");
    //         $(this).children(".more").text("查看更多  >");
    //         //$(this).css("transform", "scale(1.02,1.02)");
    //         $(this).children("img").stop();
    //         $(this).children("img").animate({

    //             width: "110%",
    //             height: "110%",
    //             top: "-5%",
    //             left: "-5%",

    //         }, 2500);
    //     });
    //     this.addEventListener("touchend", function(){
    //         $(this).children(".more").css("color", "black");
    //         $(this).children(".more").css("background-color", "white");
    //         $(this).children(".more").text("See more");
    //         $(this).children("img").stop();

    //         $(this).children("img").animate({

    //             width: "100%",
    //             height: "100%",
    //             top: 0,
    //             left: 0,

    //         }, 2500);
    //     });
    // });
    let lastindex = -1
    $(window).scroll(function () {
        $("#mobile_brands .brand").each(function (i) {
            if ($(window).scrollTop() > this.offsetTop-$(this).height() && $(window).scrollTop() < this.offsetTop+$(this).height()) {
                //console.log(i);
                if(lastindex == i) return;
                lastindex = i;
                $(this).children("img").stop();
                $(this).children("img").animate({

                    width: "120%",
                    height: "120%",
                    top: "-10%",
                    left: "-10%",

                }, 2500);
            }else{
                $(this).children("img").stop();
                $(this).children("img").css({

                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,

                });
            }
        })
    })
    $("#mobile_brands .brand .more").click(function () {
        let link = $(this).attr("link");
        location.href = link;
    })
    $("#mobile_head .menu").click(function () {
        $("#mobile_menulist_cover").show();
        $("#mobile_menulist").show();
    })
    $("#mobile_menulist_cover").click(function () {
        $("#mobile_menulist_cover").hide();
        $("#mobile_menulist").hide();
    })

    $("#mobile_menulist .close").click(function () {
        $("#mobile_menulist_cover").hide();
        $("#mobile_menulist").hide();
    })
}); 