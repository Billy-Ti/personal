$(function () {
    // 當視窗滾動時，執行函式
    $(window).scroll(function () {

        // 當滾動超過100px時，返回頂部icon才會出現，否則不出現
        if ($(this).scrollTop() > 100) {
            $('.material-symbols-outlined').fadeIn();
        } else {
            $('.material-symbols-outlined').fadeOut();
        }
    });

    // 當icon被點擊時，以1000ms(1秒)時間回到頂部
    $('.material-symbols-outlined').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1000);
    });

    // 當作品標題被點擊時，執行函式
    $('.worksTitle').click(function () {

        // 以0.5秒時間自動判定展開內容開關
        $('.worksContent').slideToggle(500);
    });

    $('.github').click(function () {
        alert('您即將前往外部網站');
    });

    // $('.personalName').mouseover(function () {
    //     $('.personalName').addClass('animate__jackInTheBox');
    // });
    // animate__animated animate__jackInTheBox
    $('.borderBottomOfOrange').click(function () {
        $('.borderBottomOfOrange').addClass('animate__animated animate__jackInTheBox');
    })
    $('.borderBottomOfGreen').click(function () {
        $('.borderBottomOfGreen').addClass('animate__animated animate__jackInTheBox');
    })
    $('.borderBottomOfPurple').click(function () {
        $('.borderBottomOfPurple').addClass('animate__animated animate__jackInTheBox');
    })

});