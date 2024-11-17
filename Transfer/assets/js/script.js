$(document).ready(function () {
    $('select').styler();
})

$('.language-click').on('click', function (e) {
    $(this).parent().toggleClass('language-opened');
    e.stopPropagation()
});

$('.language-drop ul li').on('click', function () {
    let text_in = $('.language-click').html();
    let selected_text = $(this).html();
    $('.language-click').html(selected_text);
    $(this).html(text_in)
    $('.language-cnt').removeClass('language-opened')
});

$(window).on('click', function (e) {
    let menuSort = $('.language-cnt');
    if (e.target !== menuSort) {
        menuSort.removeClass('language-opened')
    }
});

let blogSwiper = new Swiper(".blog-slider", {
    slidesPerView: 4,
    spaceBetween: 40,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        '1300': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '1200': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,

        },
        '767': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 14,
        },
        '425': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
    }
});





$(function () {
    let Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        let links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };
    Accordion.prototype.dropdown = function (e) {
        let $el = e.data.el;
        $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        if (!e.data.multiple) {

            $el.find('.submenu-accordion').not($next).slideUp();
        }
        if (!$this.hasClass('open')) {
            $('.link').each(function () {
                $(this).removeClass('open')
            })
            $this.addClass('open')
        } else {
            $this.removeClass('open')
        }
    }

    let accordion = new Accordion($('#accordion'), false);
});


$("#datepicker").datepicker({
    firstDay: 1,
    showOtherMonths: true,
    changeMonth: true,
    changeYear: true,
    dateFormat: "dd.mm.yy"
});

$(".date").mousedown(function() {
    $(".ui-datepicker").addClass("active");
});


$('.open-menu').on('click', function (){
   $('.menu-cnt').toggleClass('menu-cnt-active')
})









$('.open_modal').on('click', function () {
    let attr = $(this).attr('data-val');
    let modal = $('#' + attr);

    modal.removeClass('out');
    modal.fadeIn();
});

$('.close').on('click', function () {
    var prt = $(this).parents('.modal');
    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100);
});
$(window).on('click', function (event) {
    $('.modal').each(function () {
        var gtattr = $(this).attr('id');
        var new_mod = $('#' + gtattr);
        var md_cnt = $(new_mod).find('.modal-content');

        if (event.target === $(md_cnt)[0]) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()

            }, 100)
        }
        if (event.target === this) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()

            }, 100)

        }
    })
});



$('.sel-name-type span').on('click', function () {
    $('.sel-name-type span').removeClass('sel-name-type-active');
    $(this).addClass('sel-name-type-active');
})

$('.need-return-transfer').on('click', function () {
    $('.return-transfer-box').addClass('return-transfer-active');
    $(this).addClass('need-return-transfer-none');
})


$('.by-hour').on('click', function () {
    $('.banner-by-hour').addClass('banner-by-hour-active');
    $('.banner-transfer').removeClass('banner-by-hour-active');
    $('.transfer').removeClass('active-transfer');
    $(this).addClass('active-transfer');
})

$('.transfer').on('click', function () {
    $('.banner-by-hour').removeClass('banner-by-hour-active');
    $('.banner-transfer').addClass('banner-by-hour-active');
    $('.by-hour').removeClass('active-transfer');
    $(this).addClass('active-transfer');
})
