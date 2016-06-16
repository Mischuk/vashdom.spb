$(document).ready(function() {
    $('a[href="#"]').click(function(e){
        e.preventDefault();
    });

    // Global Forms
    function expandForms() {
        $('[data-vd="generated-password"]').passField({
            locale: 'ru',
            showTip: false,
            tipPopoverStyle: false,
            showWarn: false,
            pattern: "a3bcFz31",
            showGenerate: false
        });

        $('[data-vd="generated-password-admin"]').passField({
            locale: 'ru',
            showTip: false,
            tipPopoverStyle: false,
            showWarn: false,
            pattern: "a3bcFz31",
            showGenerate: true,
            isMasked: false
        });

        $("[type='tel']").inputmask({"mask": "+7 (999) 999-99-99"});
        $('[data-vd="numeric"]').inputmask({
            alias: 'numeric',
            groupSeparator: ' ',
            autoGroup: true,
            placeholder: ''
        });
    };
    expandForms();
    // end Global Forms


    // Index page
    function index() {
        var main   = $(window).height(),
            header = $('.m_header').height(),
            footer = $('.m_footer').height(),
            lead   = $('.m_leads .intro').height();

        if ( main < (lead + 50 + header + footer) ) {
            console.log('Окно меньше контента');
            $('.m_footer, .m_leads').addClass('normal');
        } else {
            console.log('Окно больше контента');
            $('.m_footer, .m_leads').removeClass('normal');
        }
    };
    $(window).load(index);
    $(window).resize(index);

    function indexForms() {
        var signin = $('[data-vd="signin"]'),
            forgot = $('[data-vd="forgot"]'),
            signup = $('[data-vd="signup"]'),
            signinBack = $('[data-vd="signin-back"]'),
            signinForm = $('[data-vd="signin-form"]'),
            signupForm = $('[data-vd="signup-form"]'),
            forgotForm = $('[data-vd="forgot-form"]'),
            successForm = $('[data-vd="success-form"]'),
            successFormTitle = $('[data-vd="success-form-title"]');



        signin.on('click', function(){
            $('[data-vd="hello"]').fadeOut('250', function(){
                signinForm.fadeIn('250');
            });
        });
        signinBack.on('click', function(){
            signupForm.fadeOut('250', function(){
                signinForm.fadeIn('250');
            });
        });

        forgot.on('click', function(){
            signinForm.fadeOut('250', function(){
                forgotForm.fadeIn('250', function(){
                    successFormTitle.text($(this).find('.form-title span').text());
                });

            });
        });

        signup.on('click', function(){
            signinForm.fadeOut('250', function(){
                signupForm.fadeIn('250', function(){
                    successFormTitle.text($(this).find('.form-title span').text());
                });
            });

        });

        $('[data-vd="form-validate"]').validate({
            submit: {
                callback: {
                    onSubmit: function (form) {
                        if ( $(form).attr('name') == "form-forgot" ) {
                            forgotForm.fadeOut('250', function(){
                                successForm.fadeIn('250');
                            });
                        } else if ( $(form).attr('name') == "form-signup" ){
                            signupForm.fadeOut('250', function(){
                                successForm.fadeIn('250');
                            });
                        } else if ( $(form).attr('name') == "form-techcallback" ) {
                            $('[data-vd="techcallback-form"]').find('form').fadeOut('250', function(){
                                $(this).next().fadeIn('250');
                            });
                        } else if ( $(form).attr('name') == "form-signin" ) {
                            alert('Триггер для входа!')
                        }
                        return false;
                    }
                }
            }
        });
    };
    indexForms();
    // end Index page

    // Modal windows
    function modal() {
        var magnific = $('.popup-with-zoom-anim').magnificPopup({
          type: 'inline',

          fixedContentPos: false,
          fixedBgPos: true,

          overflowY: 'auto',

          closeBtnInside: true,
          preloader: false,

          midClick: true,
          removalDelay: 300,
          mainClass: 'my-mfp-zoom-in',
          callbacks: {
              open: function() {
                $('.modal form input').on('focus', function(){
                  $(this).parent().addClass('focused');
                });
                $('.modal form input').on('blur', function(){
                  $(this).parent().removeClass('focused');
                });
              }
            }
        });
        $(".cancel a").on('click', function(){
            $.magnificPopup.close();
        });
    };
    modal();
    // end Modal windows

    // Dropdown select
    function dropdownSelect() {
        $('[data-vd="dropdown-select"]').on('click', function(){
            $(this).find('.dropdown-select').fadeToggle('250').toggleClass('open');
            $('.container').toggleClass('dropdown-select-open');
            return false;
        });
        $(document).on('click', '.dropdown-select-open', function() {
            $('[data-vd="dropdown-select"] .dropdown-select').fadeOut('250').removeClass('open');
        });
    };
    dropdownSelect();
    // end Dropdown select

    // Select
    window.Search = $('.search-box').SumoSelect({
        csvDispCount: 1,
        search: true,
        searchText:'Поиск...',
        captionFormat:'{0} выбрано',
        captionFormatAllSelected:'{0} выбрано',
        noMatch: 'Нет результатов для "{0}"',
        locale: ['OK', 'Отмена', 'Выбрать всё']
    });
    // end Select

    // File upload
    $('#form-reserve-upload').on('change', function(){
        var value = $(this).val().replace(/C:\\fakepath\\/i, '');
        if ( !value == "" ) {
            $(this).prev().prev().addClass('show').find('#form-reserve-upload-item').text(value);
        } else {
            $(this).prev().prev().removeClass('show').find('#form-reserve-upload-item').text('');
        }
    });

    $('#form-reserve-upload-clear').on('click', function(){
        $(this).prev().val('');
        $(this).parent().removeClass('show').parent().find('#form-reserve-upload').val('');
    });
    // end File upload

    // Datepicker
    function datepicker() {
        var year = new Date().getFullYear();
        $('.current-year').text(year);

        $('.datepicker-init').on('click', function(){
            $(this).parent().next().show();
            $('.m_datepicker').addClass('is-active');
        });

        $('.m_datepicker .prev').on('click', function(){
            if ( +($(this).next('.current-year').text()) > year ) {
                var currentYearDown = +($(this).next('.current-year').text())-1;
                $(this).next('.current-year').text(currentYearDown);
            }
        });
        $('.m_datepicker .next').on('click', function(){
            var currentYear = +($(this).prev('.current-year').text())+1;
            $(this).prev('.current-year').text(currentYear);
        });

        $('.m_datepicker .quarter').on('click', function(){
            var q = $(this).find('span').text();
            var y = $(this).parent().prev().find('.current-year').text();
            var value = q+' '+y;
            $(this).parent().parent().prev().find('a').text(value);
            $('.m_datepicker').hide();
        });
    };
    datepicker();
    // end Datepicker

    // Modals: Item
    $('.filters-results-checkerboard .item a').on('click', function(){
        $('#item-modal-trigger').trigger('click');
    });

    function modalTabs() {
        var nav = $('.tabs-item-nav a');
        nav.on('click', function(){
            var index = $(this).index();
            nav.removeClass('current');
            $(this).addClass('current');
            $(this).parent().parent().next().find('.tabs-item-block').removeClass('current');
            $(this).parent().parent().next().find('.tabs-item-block').eq(index).addClass('current');
        });

        var navScheme = $('.layout-item-nav a');
        navScheme.on('click', function(){
            var index = $(this).index();
            navScheme.removeClass('current');
            $(this).addClass('current');
            $(this).parent().next().find('.layout-item-block').removeClass('current');
            $(this).parent().next().find('.layout-item-block').eq(index).addClass('current');
        });

        var navEstate = $('.estate-tabs-item-nav a');
        navEstate.on('click', function(){
            var index = $(this).index();
            navEstate.removeClass('current');
            $(this).addClass('current');
            $(this).parent().next().find('.estate-tabs-item-block').removeClass('current');
            $(this).parent().next().find('.estate-tabs-item-block').eq(index).addClass('current');
        });
    };
    modalTabs();

    function tree(){
        $('#jstree').jstree({
            "core" : {
                "animation" : 0
            },
            "plugins" : [ "wholerow", "checkbox" ]
        });
        $('#jstree').on("changed.jstree", function (e, data) {
            console.log(data.selected);
        });
        $('button').on('click', function () {
            $('#jstree').jstree(true).select_node('child_node_1');
            $('#jstree').jstree('select_node', 'child_node_1');
            $.jstree.reference('#jstree').select_node('child_node_1');
        });
    };
    tree();
    // end Modals: Item



});