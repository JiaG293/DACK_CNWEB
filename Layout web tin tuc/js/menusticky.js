$(window).scroll(function () {
    if($(window).scrollTop() > 20) {
      $("#menusticky").addClass('sticky');
    } else {
      $("#menusticky").removeClass('sticky');
    }
});