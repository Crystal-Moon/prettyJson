var scroll_pos = 0;
$(document).scroll(function() { 
    scroll_pos = $(this).scrollTop();
    if(scroll_pos == 0) {
        one.style.background   = '#FFD33E';
        two.style.background   = 'white';
        three.style.background = 'white';
        four.style.background  = 'white';
	} 
    if(scroll_pos >= $('#sec1').offset().top) {
        one.style.background   = '#FFD33E';
        two.style.background   = 'white';
        three.style.background = 'white';
        four.style.background  = 'white';
	}     	
    if(scroll_pos >= $('#sec2').offset().top) {
        one.style.background   = 'white';
        two.style.background   = '#FFD33E';
        three.style.background = 'white';
        four.style.background  = 'white';

    } 
    if(scroll_pos >= $('#sec3').offset().top) {
        one.style.background   = 'white';
        two.style.background   = 'white';
        three.style.background = '#FFD33E';
        four.style.background  = 'white';

    }         
    if(scroll_pos >= $('#sec4').offset().top) {
        one.style.background   = 'white';
        two.style.background   = 'white';
        three.style.background = 'white';
        four.style.background  = '#FFD33E';

    }                 
});