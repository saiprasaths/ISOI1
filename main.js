

    // Toggle .header-scrolled class to #header when page is scrolled
   

    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.gotopbtn').fadeIn('slow');
        } else {
            $('.gotopbtn').fadeOut('slow');
        }
    });

    $('.gotopbtn').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500, 'easeInOutExpo');
        return false;
    });

    

