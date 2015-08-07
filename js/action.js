 $(function() {
        var i = 0;
        var $btn = $('.section-btn li'),
            $wrap = $('.section-wrap'),
            $arrow = $('.arrow');
        init();

        function init() {
            $(".wall-word").addClass('fadeInUpEnd');//wall-word
            $(".bottom-img").addClass('fadeInUpEnd');//bottom-img
            $(".c0-1").addClass('cloud-move-lr');
            $(".c0-2").addClass('cloud-move-lr-1');
            $(".c0-3").addClass('cloud-move-lr-2');
        }
        /*当前页面赋值*/
        function up() {
            i++;
            if (i == $btn.length) {
                i = 0
            };
        }

        function down() {
            i--;
            if (i < 0) {
                i = $btn.length - 1
            };
        }

        function reomveAction() {
            for (j = 0; j < $wrap.find('.section').length; j++) {
                $wrap.find('.section').eq(j).find('.title').removeClass('active');
            }

        }
        /*页面滑动*/
        function run() {
            // alert(i)
            //
            if(i==0){
                $(".wall-word").addClass('fadeInUpEnd');//wall-word
                 $(".bottom-img").addClass('fadeInUpEnd');//bottom-img
                setTimeout(function(){
                    $(".bottom-img").removeClass('fadeInUpEnd').removeClass('fadeInUpStart-linear');
                    $(".c3").addClass('cloud-move-lr');//bottom-img
                }, 1000);
                $(".section-btn li").css('background','rgba(187, 198, 215, 0.6)');
                $(".section-btn li").eq(0).css('background','rgba(254, 95, 70, 1)');
            }else{
                $(".wall-word").removeClass('fadeInUpEnd');//wall-word
                $(".bottom-img").removeClass('fadeInUpEnd');//bottom-img
                $(".bottom-img").addClass('fadeInUpStart-linear');
                $(".c3").removeClass('cloud-move-lr');//bottom-img
            }
            if(i==1){
                $(".wall2-word1").addClass('fadeInLeftEnd');
                $(".wall2-word2").addClass('fadeInLeftEnd');
                $(".wall2-word4").addClass('fadeInRightEnd'); 
                $(".wall2-orange").addClass('fadeInUpEnd');
                $(".wall2-bottom-div").addClass('fadeInUpEnd');
                $(".wall2-center").addClass('fadeInUpEnd');
                $(".section-btn li").css('background','rgba(54, 74, 107, 1)');
                $(".section-btn li").eq(1).css('background','rgba(254, 95, 70, 1)');
            }else{
                $(".wall2-word1").removeClass('fadeInLeftEnd');
                $(".wall2-word2").removeClass('fadeInLeftEnd');
                $(".wall2-word4").removeClass('fadeInRightEnd'); 
                $(".wall2-orange").removeClass('fadeInUpEnd');
                $(".wall2-bottom-div").removeClass('fadeInUpEnd');
                $(".wall2-center").removeClass('fadeInUpEnd');
            }
            if(i==2){
                $(".bg1").addClass('fadeInLeftEnd');
                $(".bg2").addClass('fadeInLeftEnd');
                $(".bg3").addClass('fadeInRightEnd');
                $(".bg4").addClass('fadeInEnd').addClass('rotation');
                $(".bg5").addClass('fadeInEnd');
                $(".wall3-orange").addClass('fadeInUpEnd');
                $(".section-btn li").css('background','rgba(24, 39, 65, 1)');
                $(".section-btn li").eq(2).css('background','rgba(254, 95, 70, 1)');
                $(".wall3-word").addClass('fadeInEnd');
            }else{
                $(".bg1").removeClass('fadeInLeftEnd');
                $(".bg2").removeClass('fadeInLeftEnd');
                $(".bg3").removeClass('fadeInRightEnd');
                $(".bg4").removeClass('fadeInEnd').removeClass('rotation');
                $(".wall3-orange").removeClass('fadeInUpEnd');
                $(".wall3-word").removeClass('fadeInEnd');
            }
            if(i==3){
                $(".wall4-orange").addClass('fadeInUpEnd');
                $(".wall4-moom").addClass('fadeInRightEnd');
                $(".wall4-star").addClass('fadeInLeftEnd');
                $(".cloud1").addClass('fadeInRightEnd');
                $(".cloud2").addClass('fadeInLeftEnd');
                $(".line").addClass('fadeInEnd');
                $(".section-btn li").css('background','rgba(166, 171, 180, 1)');
                $(".section-btn li").eq(3).css('background','rgba(254, 95, 70, 1)');
            }else{
                $(".wall4-orange").removeClass('fadeInUpEnd');
                $(".wall4-moom").removeClass('fadeInRightEnd');
                $(".wall4-star").removeClass('fadeInLeftEnd');
                $(".cloud1").removeClass('fadeInRightEnd');
                $(".cloud2").removeClass('fadeInLeftEnd');
                $(".line").removeClass('fadeInEnd');
            }
            reomveAction();
            $btn.eq(i).addClass('on').siblings().removeClass('on');
           
            $wrap.attr("class", "section-wrap").addClass(function() {
                return "put-section-" + i;
            }).find('.section').eq(i).find('.title').addClass('active');
        };

        /*右侧按钮点击*/
        $btn.each(function(index) {
            $(this).click(function() {
                i = index;
                run();
            })
        });

        /*翻页按钮点击*/
        $arrow.one('click', go);

        function go() {
            up();
            run();
            setTimeout(function() {
                $arrow.one('click', go)
            }, 1000)
        };

        /*响应鼠标*/
        $wrap.one('mousewheel', mouse_);

        function mouse_(event) {
            if (event.deltaY < 0) {
                up()
            } else {
                down()
            }
            run();
            setTimeout(function() {
                $wrap.one('mousewheel', mouse_)
            }, 1000)
        };

        /*响应键盘上下键*/
        $(document).one('keydown', k);

        function k(event) {
            var e = event || window.event;
            var key = e.keyCode || e.which || e.charCode;
            switch (key) {
                case 38:
                    down();
                    run();
                    break;
                case 40:
                    up();
                    run();
                    break;
            };
            setTimeout(function() {
                $(document).one('keydown', k)
            }, 1000);
        }
    });