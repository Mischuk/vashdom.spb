$(document).ready(function() {
    $('a[href="#"]').click(function(e){
        e.preventDefault();
    });

    // Global Forms
    function expandForms() {
        $(".generated-password").passField({
            locale: 'ru',
            showTip: false,
            tipPopoverStyle: false,
            showWarn: false
        });

        $('#form-signin').validate();
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
        $('[data-vd="signin"]').on('click', function(){
            $('[data-vd="hello"]').fadeOut('250', function(){
                $('[data-vd="signin-form"]').fadeIn('250');
            });
        });
    };
    indexForms();
    // end Index page
});