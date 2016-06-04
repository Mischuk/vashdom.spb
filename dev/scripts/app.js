$(document).ready(function() {
    $('a[href="#"]').click(function(e){
        e.preventDefault();
    });

    $(".generated-password").passField({
        locale: 'ru',
        showTip: false,
        tipPopoverStyle: false,
        showWarn: false
    });

    $('#form-signin').validate();

    function index() {
        var main   = $(window).height(),
            header = $('.m_header').height(),
            footer = $('.m_footer').height(),
            lead   = $('.m_leads .intro').height();
            // console.log('main:' + main);
            // console.log('lead intro:' + lead);
            // console.log('header:' + header);
            // console.log('lead:' + lead);
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
    console.log('123');

    function indexForms() {
        $('[data-vd="signin"]').on('click', function(){
            $('[data-vd="hello"]').fadeOut('250', function(){
                // $('[data-vd="index"]').addClass('signin-form-wrapper');
                $('[data-vd="signin-form"]').fadeIn('250');
            });
        });
    };
    indexForms();



});