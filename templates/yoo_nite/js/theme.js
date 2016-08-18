/* Copyright (C) YOOtheme GmbH, YOOtheme Proprietary Use License (http://www.yootheme.com/license) */

jQuery(function($) {

    var config = $('html').data('config') || {};

    // Social buttons
    $('article[data-permalink]').socialButtons(config);

    // Fullscreen image & transparent fixed menu
    var fn              = function(){},
        win            = $(window),
        body            = $('body'),
        navbar          = $('.tm-navbar');

    if(body.hasClass('tm-navbar-fixed')) {

        win.on('scroll', function() {

            if (win.scrollTop() > 0){
                navbar.addClass('tm-navbar-small');
            } else {
                navbar.removeClass('tm-navbar-small');
            }

        });

    }

    // Menu split
    $(document).one('uk-domready', (function(){

        var fn = function() {

            // Split navbar if logo
            var logowidth   = $('.tm-nav-logo').width(),
                nav         = $('.tm-nav-wrapper'),
                navitems    = nav.children().children(),
                equal       = Math.ceil(navitems.length / 2),
                rtl         = ($.UIkit.langdirection == 'right'),
                movenav     = 0;

            nav.css({ 'margin-right':'', 'margin-left':'' });
            navitems.eq(equal - 1).css({ 'margin-right':'', 'margin-left':'' });

            for( var i = 0; i < equal; i++ ) {
                movenav += navitems.eq(i).width();
            }

            movenav = (nav.width() - movenav) - movenav;

            nav.css(rtl ? 'margin-right' : 'margin-left', movenav);
            navitems.eq(equal - 1).css(rtl ? 'margin-left' : 'margin-right', logowidth + 60);
        };

        fn();

        return fn;

    })());

});