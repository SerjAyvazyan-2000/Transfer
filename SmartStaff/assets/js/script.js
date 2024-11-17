$(document).ready(function () {
    $(".phone").mask('+7 (999)-999-99-99');
});

$(document).ready(function () {
    let time = 0;
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if (window.innerHeight < 300) {
        }
        if ($(this).hasClass('close-menu')) {
            $('.menu-cnt').addClass('transition-menu');
            $('.menu-header-mobile').css({'width': '100%', transition: '0.3s'});
            $('body').addClass('body_fix');
        } else {
            $('.menu-cnt').addClass('menu-width');
            $('body').removeClass('body_fix');
            $('.menu-cnt').removeClass('transition-menu');
            time = 0;
        }

    });
    $('.for-mobile-bg').on('click', function () {
        if ($('.open-menu').hasClass('close-menu')) {
            $('.open-menu').removeClass('close-menu')
        }
        $('.menu-cnt').removeClass('transition-menu');
        $('.menu-cnt').css({width: '0%!important'});
        $('body').removeClass('body_fix');
        time = 0;
    })
});

$('.header__location strong').on('click', function (e) {
    $(this).parent().toggleClass('open-location');
    e.stopPropagation()
});

$('.header-loc__drop ul li a').on('click', function () {
    let text_in = $('.header__location strong').html();
    let selected_text = $(this).html();
    $('.header__location strong').html(selected_text);
    $(this).html(text_in)
    $('.header__location').removeClass('open-location')
});

$(window).on('click', function (e) {
    let menuSort = $('.header__location');
    if (e.target !== menuSort) {
        menuSort.removeClass('open-location')
    }
});


if ($('.sidenav>ul>li').has('submenu__men')) {
    $('.submenu__men').parent().addClass('submenu__act');
}

$('.close-discount').on('click',function () {
   $(this).parent().addClass('discount-remove');
});


$('.open_modal').on('click', function (e) {
    $('body').css({"overflow": "hidden"});
    let attr = $(this).attr('data-val');
    let modal = $('#' + attr);
    let isCopyText = $(this).attr('data-is-copy-text');
    if (isCopyText) {
        $('.add-text-btn')[0].innerText = $(this)[0].innerText;
    }
    modal.removeClass('out');
    modal.fadeIn();
    e.stopPropagation();
});

$('.modal-cust__cnt').on('click',function (e) {
    e.stopPropagation()
});

$('.modal-registration').on('click',function (e) {
    e.stopPropagation()
});

$('.modal-pers').on('click',function (e) {
    e.stopPropagation()
});

$('.sertefikat__cnt').on('click',function (e) {
    e.stopPropagation()
});
$('.modal-polic').on('click',function (e) {
    e.stopPropagation()
});

$('.close').on('click', function () {
    $('body').css({"overflow": "unset"});
    let prt = $(this).parents('.modal');
    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100);

});
$('.close-mod__mob').on('click', function () {
    $('body').css({"overflow": "unset"});
    let prt = $(this).parents('.modal');
    prt.addClass('out');
    setTimeout(function () {
        prt.fadeOut();
    }, 100)

});


$(window).on('click', function (event) {
    $('body').css({"overflow": "unset"});
    $('.modal').each(function () {
        let gtattr = $(this).attr('id');
        let new_mod = $('#' + gtattr);
        let md_cnt = $(new_mod).find('.modal-content');

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



let gallSwiper = new Swiper(".modal-gall__slid", {
    slidesPerView: 1,
    navigation: {
        nextEl: ".gall-button-next",
        prevEl: ".gall-button-prev",
    },
});


let presentSwiper = new Swiper(".present__slider", {
    slidesPerView: 1,
    navigation: {
        nextEl: ".present-button-next",
        prevEl: ".present-button-prev",
    },
});

let custSwiper = new Swiper(".customer__slider", {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
        nextEl: ".customer-button-next",
        prevEl: ".customer-button-prev",
    },
    breakpoints: {
        '1299': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        '1099': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        '768': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        '760': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            loop: true,
        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            loop: true,
        },
    },
});


let tomersSwiper = new Swiper(".tomers__slider", {
    slidesPerView: 3,
    spaceBetween: 10,

    breakpoints: {
        '1299': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        '1099': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        '768': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        '760': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            loop: true,
        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            loop: true,
        },
    },
    navigation: {
        nextEl: ".tomers-button-next",
        prevEl: ".tomers-button-prev",
    },
});

let perfSwiper = new Swiper(".performers__slider", {
    slidesPerView: 3,
    spaceBetween: 10,

    breakpoints: {
        '1299': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        '1099': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        '768': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        '760': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            loop: true,
        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            loop: true,
        },
    },
    navigation: {
        nextEl: ".perf-button-next",
        prevEl: ".perf-button-prev",
    },
});


$(document).ready(function () {
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 300,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const width = window.innerWidth
    if (width < 760){
        var treatswiper = new Swiper(".treat-slider", {
            slidesPerView: 1,
            loop: false,

            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            }
        });
    }
})


var standSwiper = new Swiper(".stand-meet-swiper", {
    effect: "cards",
    grabCursor: true,
    navigation: {
        nextEl: ".stand-button-next",
        prevEl: ".stand-button-prev",
    },
});


var sertSwiper = new Swiper(".sertefikat-slid", {
    effect: "cards",
    grabCursor: true,
    navigation: {
        nextEl: ".sert-button-next",
        prevEl: ".sert-button-prev",
    },
});


$(function () {
    var Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        var links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };
    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp();
        }
        if (!$this.hasClass('open')) {
            $('.link').each(function () {
                $(this).removeClass('open')
            })
            $('.question__block').each(function () {
                $(this).removeClass('question__act')
            })
            $this.addClass('open')
            $this.parent().toggleClass('question__act')
        } else {
            $this.removeClass('open')
            $this.parent().removeClass('question__act')
        }
    }
    var accordion = new Accordion($('#accordion'), false);

});



$(document).ready(function () {
    addActiveClass('reviews-min-text-hrefs', 'active-href');
    changeCaseBlock(this, 'reviews-min-text-hrefs', 'reviews-min-info', 'active-href', 'click-reviews');
    $('.click-reviews').on('click', function () {
        changeActiveClassWithClick(this, 'reviews-min-text-hrefs', 'active-href')
        changeCaseBlock(this, 'reviews-min-text-hrefs', 'reviews-min-info', 'active-href', 'click-reviews');
    })
    function addActiveClass(parent_menu, active_class) {
        var prt = $('.' + parent_menu);
        var prt_childrens = $(prt).children();
        var prt_child_li = $(prt_childrens).children();
        var first_child = $(prt_child_li)[0]
        if (!$(first_child).hasClass(active_class)) {
            !$(first_child).addClass(active_class)
        }
    }
    function changeActiveClassWithClick($this, parent_block, active_class) {
        var prt = $($this).parents('.' + parent_block);
        var prt_child = $(prt).find('li');
        $(prt_child).each(function () {
            $(this).removeClass(active_class);
        })
        $($this).addClass(active_class);
    }
    function changeCaseBlock($this, case_menu, case_block, active_class, menu_link) {
        var case_menu_block = $('.' + case_menu);
        var case_block_sub = $('.' + case_block);
        var case_block_child = $(case_block_sub).children();
        $(case_block_child).each(function () {
            $(this).css({display: 'none', height: 0});
        })

        if ($($this).hasClass(menu_link)) {
            var this_attr = $($this).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') == this_attr) {
                    $(this).css({display: 'block', height: '100%'});
                }
            })

        } else {
            var active_find = $(case_menu_block).find('.' + active_class);
            var active_find_attr = $(active_find).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') == active_find_attr) {
                    $(this).css({display: 'block', height: '100%'});

                }
            })
        }
    }

});


$('.vacancies__cl strong').on('click', function (e) {
    $(this).parent().toggleClass('vacancies__ation');
    e.stopPropagation()
});

$('.reviews-min-text-hrefs ul li').on('click', function () {
    let text_in = $('.vacancies__cl strong').html();
    let selected_text = $(this).html();
    $('.vacancies__cl strong').html(selected_text);
    // $(this).html(text_in)
    $('.vacancies__cl').removeClass('vacancies__ation');
});

$(window).on('click', function (e) {
    let cntSort = $('.vacancies__cl');
    if (e.target !== cntSort) {
        cntSort.removeClass('vacancies__ation');
    }
});



$('.serv-der__link ul li').on('click', function (){
    $('.serv-der__link ul li').removeClass('serv-der__act');
    $(this).addClass('serv-der__act');

});


$('.serv-der__block strong').on('click', function (e) {
    $(this).parent().toggleClass('serv-der__ation');
    e.stopPropagation()
});

$('.serv-der__link ul li a').on('click', function () {
    let text_in = $('.serv-der__block strong').html();
    let selected_text = $(this).html();
    $('.serv-der__block strong').html(selected_text);
    $('.serv-der__block').removeClass('serv-der__ation');
});

$(window).on('click', function (e) {
    let atSort = $('.serv-der__block');
    if (e.target !== atSort) {
        atSort.removeClass('serv-der__ation');
    }
});


$('.tomers__photo').on('click', function () {
    $(this).parent().toggleClass('tomers-photo__ac');
});
$('.tomers__text').on('click', function () {
    $(this).parent().toggleClass('tomers-photo__ac');
});


