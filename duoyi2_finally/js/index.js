window.addEventListener('load', function() {
    var top_inner = document.querySelector('.topbar_inner')
    var small_pic = document.querySelector('.topbar_small_pic');
    var big_pic = document.querySelector('.topbar_big_pic');
    var top_nav = document.querySelector('.topbar_nav');
    var top_hide = document.querySelector('.top_hide');
    var top_div = document.querySelectorAll('.top_hideleft div');
    var top_li = document.querySelectorAll('.top_hideleft li');
    var top_divr = document.querySelectorAll('.top_hideright div');
    var top_lir = document.querySelectorAll('.top_hideright li');
    var side = document.querySelector('.side');
    var side_w = document.querySelector('.side_w');
    var side_b = document.querySelector('.side_b');
    var posa_input = document.querySelectorAll('.posa input');
    var posa_lab = document.querySelectorAll('.posa label');
    var posa_div = document.querySelector('.action-btn');
    var video_1 = document.querySelector('.pop-v');
    var play_v = document.querySelector('.hz-center');
    var close_1 = document.querySelector('.close-btn')
    var adio = document.querySelector('.bgm');
    var top_vi = document.querySelector('.top_video');
    var wrapper = document.querySelectorAll('.wrapper div');
    var wrapper_h = document.querySelector('.wrapper');
    var nextBt = document.querySelector('.nextBtn');
    var prevBtn = document.querySelector('.prevBtn');
    var pagenation_a = document.querySelectorAll('.pagenation a');
    var show_v = document.querySelectorAll('.tese-link-box div');
    var video_src = document.querySelector('.video-con video');
    var botto = document.querySelector('.message button');
    var mess = document.querySelector('.message p');
    var tishi = document.querySelector('.message');
    var yuyue = document.querySelector('.yuyue-submit');
    var select = document.querySelectorAll('.s2-select-box div');
    var select_pic = document.querySelectorAll('.center-wrap .s2-rs');
    var select_bg = document.querySelector('.section2');
    var cv_ad = document.querySelectorAll('.cv-ad');
    var cv_aud = document.querySelectorAll('.cv-audio');
    var long_pic = document.querySelector('.s3-long-pic');
    var lef_bo = document.querySelector('.s3-prev');
    var rig_bo = document.querySelector('.s3-next');
    var scre = document.querySelector('.section3 .center-wrap');
    var top_h = top_nav.children[1].offsetLeft + top_inner.offsetLeft + top_nav.offsetLeft;
    var small_left = small_pic.offsetLeft + top_inner.offsetLeft;
    var small_left_b = small_pic.offsetLeft + top_inner.offsetLeft + small_pic.offsetWidth;
    var top_hide_flag = false;
    var pi = 1;
    var bot_flag = true;
    var mouse_down = 0;
    var mouse_up = 0;
    var mouse_flag = false;
    window.onscroll = function() {
        if (document.documentElement.scrollTop > 1263) {
            side.style.opacity = 0;
            side.children[0].style.display = 'none';
            side.children[1].style.display = 'none';


        } else {
            side.style.opacity = 1;
            side.children[0].style.display = 'block';
            side.children[1].style.display = 'block';



        }
    }
    for (var i = 0; i < wrapper.length; i++) {
        wrapper[i].setAttribute('index', i + 1);
    }
    // 提示
    botto.addEventListener('click', function() {
            tishi.style.display = 'none';
        })
        // 头部可隐藏图片start
    small_pic.addEventListener('mouseenter', function() {
        this.style.display = 'none';
        big_pic.style.display = 'block';
    })
    big_pic.addEventListener('mouseleave', function() {
            this.style.display = 'none';
            small_pic.style.display = 'block';
        })
        // 头部可隐藏图片end
        // 头部导航栏start
    for (var i = 0; i < top_nav.children.length; i++) {
        top_nav.children[i].setAttribute('index', i)
        top_nav.children[i].addEventListener('mouseenter', function() {
            for (var i = 0; i < top_nav.children.length; i++) {
                top_nav.children[i].className = '';
                top_hide.style.display = 'none';
            }
            this.className = 'current';

            if (this.getAttribute("index") == 1) {
                top_hide.style.display = 'block';
            }

        })
    }
    top_nav.addEventListener('mouseleave', function() {
        for (var i = 0; i < top_nav.children.length; i++) {
            top_nav.children[i].className = '';
        }
        top_hide.style.display = 'none';

    })
    top_hide.addEventListener('mouseenter', function() {
        this.style.display = 'block';
    })
    top_hide.addEventListener('mouseleave', function() {
        this.style.display = 'none';
    })
    top_hide.style.left = top_h - 250 + 'px';
    top_show(top_li, top_div, 1);
    top_show(top_lir, top_divr, 2);
    // 头部导航栏end
    // 上固定start
    side_b.addEventListener('mouseenter', function() {
        this.style.opacity = 1;
    })
    side_b.addEventListener('mouseleave', function() {
        this.style.opacity = .88;
    })
    side_w.addEventListener('mouseenter', function() {
        this.style.opacity = 1;
    })
    side_w.addEventListener('mouseleave', function() {
            this.style.opacity = .88;
        })
        // 背景音乐
    side_b.addEventListener('click', function() {
            if (pi == 1) {
                this.style.background = 'url("./img/ad0.png") center center no-repeat';
                adio.pause();
                pi = 0
            } else {
                this.style.background = 'url("./img/ad1.png") center center no-repeat';
                adio.play();
                pi = 1
            }
        })
        // 声优
    for (var i = 0; i < cv_ad.length; i++) {
        let a = i;
        cv_ad[i].addEventListener('click', function() {
            if (pi == 1) {
                cv_aud[a].pause();
                pi = 0
            } else {
                cv_aud[a].play();
                pi = 1
            }
        })
    }
    // 上固定end
    // 表单start
    // 文本框
    for (var i = 0; i < posa_lab.length; i++) {
        posa_lab[i].addEventListener('click', function() {
            for (var i = 0; i < posa_lab.length; i++) {
                posa_lab[i].className = '';
            }
            this.className = 'checked';
        })
    }
    for (var i = 2; i < posa_input.length; i++) {
        posa_input[i].addEventListener('focus', function() {
            this.placeholder = '';
        })
        posa_input[i].addEventListener('blur', function() {
            if (i == 2) {
                this.placeholder = '请输入手机号码';
            } else {
                this.placeholder = '请输入验证码';
            }
        })
    }
    // 验证按钮
    posa_div.children[0].addEventListener('click', function() {
        if (posa_input[2].value == '') {
            mess.innerHTML = '请输入电话号码呀！';
            tishi.style.display = 'block';
            return;
        }
        if (posa_input[2].value.length < 11) {
            mess.innerHTML = '要输入11位电话号哟！';
            tishi.style.display = 'block';
            return;
        }
        this.style.display = 'none';
        var that = this;
        posa_div.children[1].style.display = 'block';

        let tim = 4;
        posa_div.children[1].innerHTML = tim + '秒后重新获取'
        let timer = setInterval(function() {

            if (tim != 0) {
                tim--;

                posa_div.children[1].innerHTML = tim + '秒后重新获取'

            } else {
                that.style.display = 'block';
                posa_div.children[1].style.display = 'none';
                clearInterval(timer);
            }

        }, 1000)
    })
    yuyue.addEventListener('click', function() {
            if (posa_input[2].value == '') {
                mess.innerHTML = '请输入电话号码呀！';
                tishi.style.display = 'block';
                return;
            }
            if (posa_input[2].value.length < 11) {
                mess.innerHTML = '要输入11位电话号哟！';
                tishi.style.display = 'block';
                return;
            }
        })
        // 表单end
        // 视频播放
    play_v.addEventListener('click', function() {
        video_1.style.display = 'block';
        video_src.setAttribute('src', './mv/cg.mp4');
    })
    top_vi.addEventListener('click', function() {
        video_1.style.display = 'block';
        video_src.setAttribute('src', './mv/cg.mp4');
    })
    for (var i = 0; i < show_v.length - 1; i++) {
        let a = i;
        show_v[i].addEventListener('click', function() {
            video_1.style.display = 'block';
            video_src.setAttribute('src', './mv/' + a + '.mp4');
        })
    }
    show_v[3].addEventListener('click', function() {
        mess.innerHTML = '敬请期待！！！';
        tishi.style.display = 'block';
    })
    close_1.addEventListener('click', function() {
            video_1.style.display = 'none';

        })
        // 按钮
    nextBt.addEventListener('click', movenext);
    prevBtn.addEventListener('click', movepre);
    nextBt.addEventListener('mouseenter', cl);
    prevBtn.addEventListener('mouseenter', cl);
    wrapper_h.addEventListener('mouseenter', cl);
    nextBt.addEventListener('mouseleave', function() { timer_r = setInterval(movenext, 2000); });
    prevBtn.addEventListener('mouseleave', function() { timer_r = setInterval(movenext, 2000); });
    wrapper_h.addEventListener('mouseleave', function() { timer_r = setInterval(movenext, 2000); });
    var timer_r = setInterval(movenext, 2000);
    // 选择器
    for (var i = 0; i < select.length; i++) {
        let a = i;
        select[i].addEventListener('click', function() {

            for (var i = 0; i < select.length; i++) {
                select[i].className = 's2-select s2-select-' + (i + 1);
                select_pic[i].style.display = 'none';
            }
            this.className = 's2-select s2-select-' + (a + 1) + ' on';
            select_pic[a].style.display = 'block';
            select_bg.style.background = 'url("./img/bg_' + (a + 1) + '.jpg") top center no-repeat'
        })
    }
    // 第二轮播图按钮
    bot_che();
    lef_bo.addEventListener('click', function() {
        bot_che(long_pic.offsetLeft);
        if (long_pic.offsetLeft >= -1940) {
            long_pic.style.left = '0px';
        }
        if (long_pic.offsetLeft < -1940 && long_pic.offsetLeft >= -3150) {
            long_pic.style.left = '-1940px';
        }
        bot_che(long_pic.offsetLeft);
    })
    rig_bo.addEventListener('click', function() {
        bot_che(long_pic.offsetLeft);
        if (long_pic.offsetLeft > -1940) {
            long_pic.style.left = '-1940px';

        } else if (long_pic.offsetLeft <= -1940 && long_pic.offsetLeft > -3150) {
            long_pic.style.left = '-3149px';
        }
        bot_che(long_pic.offsetLeft);
    })
    scre.addEventListener('mousedown', function(e) {
        pauseEvent(e);
        mouse_flag = true;
        mouse_down = e.pageX;

    })
    scre.addEventListener('mousemove', function(e) {
        pauseEvent(e);
        if (mouse_flag) {
            mouse_up = e.pageX;
            let sub = mouse_up - mouse_down;
            let new_big = long_pic.offsetLeft + sub;

            if (new_big <= -3149) {
                new_big = -3149
            }
            if (new_big > 0) {
                new_big = 0
            }
            bot_che(new_big);
            long_pic.style.left = new_big + 'px';
        }
    })
    scre.addEventListener('mouseup', function(e) {
        mouse_flag = false;

    })
    scre.addEventListener('mouseleave', function() {
            mouse_flag = false;

        })
        // 阻止浏览器默认bug
    function pauseEvent(e) {
        if (e.stopPropagation) e.stopPropagation();
        if (e.preventDefault) e.preventDefault();
        e.cancelBubble = true;
        e.returnValue = false;
        return false;
    }

    function bot_che(a) {
        if (a <= -3149) {
            rig_bo.style.backgroundPosition = '-60px 0';
            rig_bo.style.cursor = 'not-allowed';
        } else {
            rig_bo.style.backgroundPosition = '0 0';
            rig_bo.style.cursor = 'pointer';
        }
        if (a >= 0) {
            lef_bo.style.backgroundPosition = '-60px 0';
            lef_bo.style.cursor = 'not-allowed';
        } else {
            lef_bo.style.backgroundPosition = '0 0';
            lef_bo.style.cursor = 'pointer';
        }
    }

    function top_show(top_l, top_d, mark) {
        for (var i = 0; i < top_l.length; i++) {
            top_l[i].setAttribute('index', i);
            top_l[i].addEventListener('mouseenter', function() {
                for (var i = 0; i < top_l.length; i++) {
                    top_d[i].className = '';
                    top_l[i].style.display = 'block'
                }
                this.style.display = 'none';

                let nu = parseInt(this.getAttribute("index")) + 1;
                if (mark == 1) {
                    top_d[this.getAttribute("index")].className = 'nowpl';
                    top_d[this.getAttribute("index")].children[0].innerHTML = parseInt(this.getAttribute("index")) + 1;
                    top_d[this.getAttribute("index")].style.backgroundImage = "url('./img/p" + nu + ".jpg')";
                } else {
                    top_d[this.getAttribute("index")].className = 'nowpr';
                    top_d[this.getAttribute("index")].children[0].innerHTML = parseInt(this.getAttribute("index")) + 1;
                    top_d[this.getAttribute("index")].style.backgroundImage = "url('./img/p" + (nu + 8) + ".jpg')";
                }

            })
        }
    }

    function movepre() {
        if (bot_flag) {
            bot_flag = false;
            for (var i = 0; i < wrapper.length; i++) {
                if ((parseInt(wrapper[i].getAttribute('index')) + 1) > wrapper.length) {
                    wrapper[i].setAttribute('index', 1);
                    wrapper[i].className = "slider slider" + wrapper[i].getAttribute('index');
                } else {
                    wrapper[i].setAttribute('index', parseInt(wrapper[i].getAttribute('index')) + 1);
                    wrapper[i].className = "slider slider" + wrapper[i].getAttribute('index');
                }


            }
            bott();
            setTimeout(function() {
                bot_flag = true;
            }, 1200)
        }


    }

    function movenext() {
        if (bot_flag) {
            bot_flag = false;
            for (var i = 0; i < wrapper.length; i++) {
                if ((parseInt(wrapper[i].getAttribute('index')) - 1) == 0) {
                    wrapper[i].setAttribute('index', wrapper.length);
                    wrapper[i].className = "slider slider" + wrapper[i].getAttribute('index');
                } else {
                    wrapper[i].setAttribute('index', parseInt(wrapper[i].getAttribute('index')) - 1);
                    wrapper[i].className = "slider slider" + wrapper[i].getAttribute('index');
                }


            }
            bott();
            setTimeout(function() {
                bot_flag = true;
            }, 1200)
        }
    }

    function bott() {

        for (var i = 0; i < pagenation_a.length; i++) {
            pagenation_a[i].className = '';
        }
        for (var i = 0; i < wrapper.length; i++) {
            if (wrapper[i].getAttribute('index') == 1) {
                pagenation_a[i].className = 'cur';
            }
        }
    }

    function cl() {
        clearInterval(timer_r);
    }



    var video_src2 = document.querySelector('.video2-con video');
    var video_2 = document.querySelector('#pop');
    var close_2 = document.querySelector('.video-clo');
    var posa_lab2 = document.querySelectorAll('.sp-l1 label');
    var posa_input2 = document.querySelectorAll('.sp-yuyue-box input');
    var posa_div2 = document.querySelector('.sp-l2 .action-btn');
    var yuyue2 = document.querySelector('.yuyue-submit1');
    var wrapper2 = document.querySelectorAll('.wrapper2 div');
    var wrapper2_h = document.querySelector('.wrapper2');
    var role_ico = document.querySelectorAll('.game-info .role-sel .role-ico');
    var role_ctx = document.querySelectorAll('.game-info .role-ctx');
    var role_cv = document.querySelectorAll('.game-info .role-cv');
    var cv_audio = document.querySelectorAll('.game-info .cv-audio');
    var pic_move = document.querySelector('.swiper-wrapper');
    var pic_pre = document.querySelector('.sjg-prev');
    var pic_next = document.querySelector('.sjg-next');
    var timer_r2 = setInterval(movenext2, 2000);
    var pic_flag = true;
    var dom_width = document.documentElement.clientWidth;
    var pic_timer = setInterval(function() {
        pic_next.click();
    }, 1000);
    pic_move.addEventListener('mouseenter', function() {
        clearInterval(pic_timer);
    })
    pic_move.addEventListener('mouseleave', function() {
        pic_timer = setInterval(function() {
            pic_next.click();
        }, 1000);
    })

    for (var i = 0; i < wrapper2.length; i++) {
        wrapper2[i].setAttribute('index', i + 1);
    }
    // 视频2
    top_vi.addEventListener('click', function() {
        video_2.style.display = 'block';
        video_src2.setAttribute('src', './mv2/cg.mp4');
    })
    close_2.addEventListener('click', function() {
        video_2.style.display = 'none';

    })
    wrapper2_h.addEventListener('mouseenter', clooo);
    wrapper2_h.addEventListener('mouseleave', function() { timer_r2 = setInterval(movenext2, 2000); });

    // 表单2
    for (var i = 0; i < posa_lab2.length; i++) {
        posa_lab2[i].addEventListener('click', function() {
            for (var i = 0; i < posa_lab2.length; i++) {
                posa_lab2[i].className = '';
            }
            this.className = 'checked';
        })
    }
    for (var i = 0; i < posa_input2.length; i++) {
        posa_input2[i].addEventListener('focus', function() {
            this.placeholder = '';
        })
        posa_input2[i].addEventListener('blur', function() {
            if (i == 2) {
                this.placeholder = '请输入手机号码';
            } else {
                this.placeholder = '请输入验证码';
            }
        })
    }
    posa_div2.children[0].addEventListener('click', function() {
        if (posa_input2[0].value == '') {
            mess.innerHTML = '请输入电话号码呀！';
            tishi.style.display = 'block';
            return;
        }
        if (posa_input2[0].value.length < 11) {
            mess.innerHTML = '要输入11位电话号哟！';
            tishi.style.display = 'block';
            return;
        }
        this.style.display = 'none';
        var that = this;
        posa_div2.children[1].style.display = 'block';

        let tim = 4;
        posa_div2.children[1].innerHTML = tim + '秒后重新获取'
        let timer = setInterval(function() {

            if (tim != 0) {
                tim--;

                posa_div2.children[1].innerHTML = tim + '秒后重新获取'

            } else {
                that.style.display = 'block';
                posa_div2.children[1].style.display = 'none';
                clearInterval(timer);
            }

        }, 1000)
    })
    yuyue2.addEventListener('click', function() {
            if (posa_input2[0].value == '') {
                mess.innerHTML = '请输入电话号码呀！';
                tishi.style.display = 'block';
                return;
            }
            if (posa_input2[0].value.length < 11) {
                mess.innerHTML = '要输入11位电话号哟！';
                tishi.style.display = 'block';
                return;
            }
        })
        // 视频
    function movenext2() {
        for (var i = 0; i < wrapper2.length; i++) {
            if ((parseInt(wrapper2[i].getAttribute('index')) - 1) == 0) {
                wrapper2[i].setAttribute('index', wrapper2.length);
                wrapper2[i].className = "slider slider_" + wrapper2[i].getAttribute('index');
            } else {
                wrapper2[i].setAttribute('index', parseInt(wrapper2[i].getAttribute('index')) - 1);
                wrapper2[i].className = "slider slider_" + wrapper2[i].getAttribute('index');
            }
        }
    }

    function clooo() {
        clearInterval(timer_r2);
    }
    for (var i = 0; i < wrapper2.length; i++) {
        let a = i;
        wrapper2[i].addEventListener('click', function() {
            video_2.style.display = 'block';
            video_src2.setAttribute('src', './mv2/' + a + '.mp4');
        })
    }
    // 选择框
    for (var i = 0; i < role_ico.length; i++) {
        let b = i;
        role_ico[i].addEventListener('click', function() {
            for (var j = 0; j < role_ico.length; j++) {
                let a = j;
                role_ico[j].className = 'role-ico role-ico' + (a + 1);
                role_ctx[j].style.display = 'none';
                role_cv[j].style.display = 'none';
            }
            this.className = 'role-ico role-ico' + (b + 1) + ' on';
            role_ctx[b].style.display = 'block';
            role_cv[b].style.display = 'block';
        })
    }
    for (var i = 0; i < cv_audio.length; i++) {
        let a = i;
        cv_audio[i].style.display = 'none';
        cv_audio[i].addEventListener('click', function() {
            if (pi == 1) {
                cv_audio[a].pause();
                pi = 0
            } else {
                cv_audio[a].play();
                pi = 1
            }
        })
    }
    // 按钮
    pic_next.addEventListener('click', function() {
        if (pic_flag) {
            pic_flag = false;
            if (pic_move.offsetLeft <= -2308 * dom_width / 750) {
                pic_move.style.left = 0;
            }
            last_movenext(pic_move, 768 * dom_width / 750);
            setTimeout(function() {
                pic_flag = true;
            }, 1000)
        }

    })
    pic_pre.addEventListener('click', function() {
            if (pic_flag) {
                pic_flag = false;
                if (pic_move.offsetLeft >= 2 * dom_width / 750) {
                    pic_move.style.left = -2308 * dom_width / 750 + 'px';
                }
                last_movepre(pic_move, 768 * dom_width / 750);
                setTimeout(function() {
                    pic_flag = true;
                }, 1000)
            }

        })
        // 图片移动函数
    function last_movenext(pic_move, move_a) {
        var speed = 10;
        var now_left = pic_move.offsetLeft;
        var res = pic_move.offsetLeft - move_a;
        var last_move = setInterval(function() {
            if (now_left > res) {
                now_left -= speed;
                pic_move.style.left = now_left + 'px';
            } else {
                return;
            }
        }, 1)
    }

    function last_movepre(pic_move, move_a) {
        var speed = 10;
        var res = pic_move.offsetLeft + move_a;
        var now_left = pic_move.offsetLeft;
        var last_move = setInterval(function() {
            if (now_left < res) {
                now_left += speed
                pic_move.style.left = now_left + 'px';
            } else {
                return false;
            }
        }, 1)
    }
})