$(function () {

    setInterval(fnSlide, 5000);

    function fnSlide() {
        /* 전환형 슬라이드 쇼 시작 */
        $("#slide a:first-child").fadeOut(
            1000,
            function () {
                $("#slide a:first-child")
                    .insertAfter("#slide a:last-child");
            }
        );

        $("#slide a:nth-child(2)").fadeIn(3000);
        /* 전환형 슬라이드 쇼 끝 */
    }
    
});
